import { useMemo, useState } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup
} from 'react-simple-maps';
import type { GeographyProps } from 'react-simple-maps';
import type { ReservationData } from '../types';
import { CATEGORY_COLORS } from '../types';
import { calculateTotalReservation, calculateBaseReservation } from '../utils/dataHelpers';

// Simplified TopoJSON built by `npm run build:map`; each shape carries the
// jurisdiction id used in reservationData.json as `properties.id`.
import indiaMapUrl from '../data/india-states.topo.json?url';

// The package's `Geography` type is shadowed by the component of the same name
type MapGeography = GeographyProps['geography'];

interface IndiaMapProps {
    data: ReservationData;
    selectedState: string | null;
    onSelectState: (stateId: string | null) => void;
}

interface ReservationSummary {
    total: number;
    base: number;
    ews: number;
}

interface TooltipInfo extends ReservationSummary {
    name: string;
    x: number;
    y: number;
}

// Get color based on total reservation percentage
function getReservationColor(percent: number): string {
    if (percent >= 70) return '#ef4444'; // Red - very high
    if (percent >= 60) return '#f97316'; // Orange - high
    if (percent >= 50) return '#eab308'; // Yellow
    if (percent >= 40) return '#22c55e'; // Green - moderate
    return '#3b82f6'; // Blue - lower
}

function getJurisdictionId(geo: MapGeography): string | undefined {
    return geo.properties?.id;
}

export function IndiaMap({ data, selectedState, onSelectState }: IndiaMapProps) {
    const [tooltip, setTooltip] = useState<TooltipInfo | null>(null);

    // Create a map for quick lookup
    const reservationByState = useMemo(() => {
        const map: Record<string, ReservationSummary> = {};
        for (const block of data.verticalReservationBlocks) {
            const total = calculateTotalReservation(block.categories);
            const base = calculateBaseReservation(block.categories);
            map[block.jurisdictionId] = { total, base, ews: total - base };
        }
        return map;
    }, [data]);

    const handleMouseEnter = (
        geo: MapGeography,
        evt: React.MouseEvent
    ) => {
        const stateId = getJurisdictionId(geo);
        if (!stateId) return;

        const jurisdiction = data.jurisdictions.find(j => j.id === stateId);
        const summary = reservationByState[stateId] ?? { total: 0, base: 0, ews: 0 };

        setTooltip({
            name: jurisdiction?.name || geo.properties?.name || stateId,
            ...summary,
            x: evt.clientX,
            y: evt.clientY
        });
    };

    const handleMouseLeave = () => {
        setTooltip(null);
    };

    const handleMouseMove = (evt: React.MouseEvent) => {
        if (tooltip) {
            setTooltip(prev => prev ? { ...prev, x: evt.clientX, y: evt.clientY } : null);
        }
    };

    const handleClick = (geo: MapGeography) => {
        const stateId = getJurisdictionId(geo);
        if (stateId) {
            onSelectState(stateId === selectedState ? null : stateId);
        }
    };

    return (
        <div className="relative w-full h-full">
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: 1000,
                    center: [82, 22]
                }}
                className="w-full h-full"
            >
                <ZoomableGroup center={[82, 22]} zoom={1}>
                    <Geographies geography={indiaMapUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                const stateId = getJurisdictionId(geo);
                                const summary = stateId ? reservationByState[stateId] : undefined;
                                const isSelected = stateId === selectedState;

                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        className={`map-state ${isSelected ? 'selected' : ''}`}
                                        fill={summary ? getReservationColor(summary.total) : '#374151'}
                                        onMouseEnter={(evt) => handleMouseEnter(geo, evt)}
                                        onMouseLeave={handleMouseLeave}
                                        onMouseMove={handleMouseMove}
                                        onClick={() => handleClick(geo)}
                                    />
                                );
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>

            {/* Tooltip */}
            {tooltip && (
                <div
                    className="tooltip"
                    style={{
                        left: tooltip.x + 15,
                        top: tooltip.y - 10
                    }}
                >
                    <div className="font-semibold text-white">{tooltip.name}</div>
                    <div className="text-sm text-gray-300">
                        Total Reservation: <span className="font-medium text-white">{tooltip.total.toFixed(1)}%</span>
                    </div>
                    {tooltip.ews > 0 && (
                        <div className="text-xs text-gray-400">
                            SC+ST+OBC {tooltip.base.toFixed(1)}% + EWS {tooltip.ews.toFixed(1)}%
                        </div>
                    )}
                </div>
            )}

            {/* Legend */}
            <div className="absolute bottom-4 left-4 glass-card p-4">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                    Total Reservation (incl. EWS)
                </div>
                <div className="flex flex-col gap-2">
                    <div className="legend-item">
                        <div className="legend-dot" style={{ background: '#ef4444' }}></div>
                        <span>70%+ (Very High)</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-dot" style={{ background: '#f97316' }}></div>
                        <span>60-70% (High)</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-dot" style={{ background: '#eab308' }}></div>
                        <span>50-60%</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-dot" style={{ background: '#22c55e' }}></div>
                        <span>40-50% (Moderate)</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-dot" style={{ background: '#3b82f6' }}></div>
                        <span>&lt;40% (Lower)</span>
                    </div>
                </div>
            </div>

            {/* Category Legend */}
            <div className="absolute top-4 right-4 glass-card p-4">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                    Category Colors
                </div>
                <div className="flex flex-col gap-2">
                    <div className="legend-item">
                        <div className="legend-dot" style={{ background: CATEGORY_COLORS.SC }}></div>
                        <span>SC</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-dot" style={{ background: CATEGORY_COLORS.ST }}></div>
                        <span>ST</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-dot" style={{ background: CATEGORY_COLORS.OBC }}></div>
                        <span>OBC</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-dot" style={{ background: CATEGORY_COLORS.EWS }}></div>
                        <span>EWS</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-dot" style={{ background: CATEGORY_COLORS.OTHERS }}></div>
                        <span>Others</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
