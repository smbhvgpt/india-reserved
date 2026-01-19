import { useMemo, useState } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup
} from 'react-simple-maps';
import type { ReservationData } from '../types';
import { CATEGORY_COLORS } from '../types';
import { calculateTotalReservation } from '../utils/dataHelpers';

// SimpleMaps GeoJSON - verified to have 36 regions including Telangana & Ladakh
// Ensure this file exists at this path
import indiaGeoJson from '../data/simplemaps_in.json';

// State name mapping from GeoJSON names to our IDs
const STATE_NAME_TO_ID: Record<string, string> = {
    "Andhra Pradesh": "ANDHRA_PRADESH",
    "Arunachal Pradesh": "ARUNACHAL_PRADESH",
    "Assam": "ASSAM",
    "Bihar": "BIHAR",
    "Chhattisgarh": "CHHATTISGARH",
    "Goa": "GOA",
    "Gujarat": "GUJARAT",
    "Haryana": "HARYANA",
    "Himachal Pradesh": "HIMACHAL_PRADESH",
    "Jharkhand": "JHARKHAND",
    "Karnataka": "KARNATAKA",
    "Kerala": "KERALA",
    "Madhya Pradesh": "MADHYA_PRADESH",
    "Maharashtra": "MAHARASHTRA",
    "Manipur": "MANIPUR",
    "Meghalaya": "MEGHALAYA",
    "Mizoram": "MIZORAM",
    "Nagaland": "NAGALAND",
    "Odisha": "ODISHA",
    "Orissa": "ODISHA",
    "Punjab": "PUNJAB",
    "Rajasthan": "RAJASTHAN",
    "Sikkim": "SIKKIM",
    "Tamil Nadu": "TAMIL_NADU",
    "Telangana": "TELANGANA",
    "Tripura": "TRIPURA",
    "Uttar Pradesh": "UTTAR_PRADESH",
    "Uttarakhand": "UTTARAKHAND",
    "Uttaranchal": "UTTARAKHAND",
    "West Bengal": "WEST_BENGAL",
    "Andaman and Nicobar Islands": "ANDAMAN_NICOBAR",
    "Andaman and Nicobar": "ANDAMAN_NICOBAR",
    "Chandigarh": "CHANDIGARH",
    "Dadra and Nagar Haveli and Daman and Diu": "DADRA_NAGAR_HAVELI_DAMAN_DIU",
    "Dādra and Nagar Haveli and Damān and Diu": "DADRA_NAGAR_HAVELI_DAMAN_DIU",
    "Dadra and Nagar Haveli": "DADRA_NAGAR_HAVELI_DAMAN_DIU",
    "Daman and Diu": "DADRA_NAGAR_HAVELI_DAMAN_DIU",
    "Delhi": "DELHI",
    "NCT of Delhi": "DELHI",
    "Jammu and Kashmir": "JAMMU_KASHMIR",
    "Ladakh": "LADAKH",
    "Lakshadweep": "LAKSHADWEEP",
    "Puducherry": "PUDUCHERRY",
    "Pondicherry": "PUDUCHERRY",
};

interface IndiaMapProps {
    data: ReservationData;
    selectedState: string | null;
    onSelectState: (stateId: string | null) => void;
}

interface TooltipInfo {
    name: string;
    totalReservation: number;
    x: number;
    y: number;
}

interface GeoProperties {
    name?: string;
    NAME?: string;
    NAME_1?: string;
    st_nm?: string;
    id?: string;
}

interface GeoObject {
    rsmKey: string;
    properties: GeoProperties;
}

// Get color based on total reservation percentage
function getReservationColor(percent: number): string {
    if (percent >= 70) return '#ef4444'; // Red - very high
    if (percent >= 60) return '#f97316'; // Orange - high
    if (percent >= 50) return '#eab308'; // Yellow - at 50%
    if (percent >= 40) return '#22c55e'; // Green - moderate
    return '#3b82f6'; // Blue - lower
}

// Helper to get normalized name from any GeoJSON format
function getGeoName(geo: GeoObject): string | undefined {
    return geo.properties.name || geo.properties.NAME_1 || geo.properties.NAME || geo.properties.st_nm;
}

export function IndiaMap({ data, selectedState, onSelectState }: IndiaMapProps) {
    const [tooltip, setTooltip] = useState<TooltipInfo | null>(null);

    // Create a map for quick lookup
    const reservationByState = useMemo(() => {
        const map: Record<string, number> = {};
        for (const block of data.verticalReservationBlocks) {
            map[block.jurisdictionId] = calculateTotalReservation(block.categories);
        }
        return map;
    }, [data]);

    const handleMouseEnter = (
        geo: GeoObject,
        evt: React.MouseEvent
    ) => {
        const geoName = getGeoName(geo);
        if (!geoName) return;

        const stateId = STATE_NAME_TO_ID[geoName];
        if (!stateId) return;

        const jurisdiction = data.jurisdictions.find(j => j.id === stateId);
        const totalReservation = reservationByState[stateId] || 0;

        setTooltip({
            name: jurisdiction?.name || geoName,
            totalReservation,
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

    const handleClick = (geo: GeoObject) => {
        const geoName = getGeoName(geo);
        if (!geoName) return;

        const stateId = STATE_NAME_TO_ID[geoName];
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
                    <Geographies geography={indiaGeoJson}>
                        {({ geographies }: { geographies: GeoObject[] }) =>
                            geographies.map((geo: GeoObject) => {
                                const geoName = getGeoName(geo);
                                const stateId = geoName ? STATE_NAME_TO_ID[geoName] : null;
                                const totalReservation = stateId ? reservationByState[stateId] : 0;
                                const isSelected = stateId === selectedState;

                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        className={`map-state ${isSelected ? 'selected' : ''}`}
                                        style={{
                                            default: {
                                                fill: stateId ? getReservationColor(totalReservation) : '#374151',
                                                stroke: '#1f2937',
                                                strokeWidth: 0.5,
                                                opacity: 0.9
                                            },
                                            hover: {
                                                fill: stateId ? getReservationColor(totalReservation) : '#4b5563',
                                                stroke: '#fff',
                                                strokeWidth: 1,
                                                opacity: 1
                                            },
                                            pressed: {
                                                fill: stateId ? getReservationColor(totalReservation) : '#4b5563',
                                                stroke: '#fff',
                                                strokeWidth: 1.2,
                                                opacity: 1
                                            }
                                        }}
                                        onMouseEnter={(evt: React.MouseEvent<SVGPathElement>) => handleMouseEnter(geo, evt)}
                                        onMouseLeave={handleMouseLeave}
                                        onMouseMove={(evt: React.MouseEvent<SVGPathElement>) => handleMouseMove(evt)}
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
                        Total Reservation: <span className="font-medium text-white">{tooltip.totalReservation.toFixed(1)}%</span>
                    </div>
                </div>
            )}

            {/* Legend */}
            <div className="absolute bottom-4 left-4 glass-card p-4">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                    Total Vertical Reservation
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
                        <span>50-60% (At 50% cap)</span>
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
