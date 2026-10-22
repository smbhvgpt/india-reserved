import type { ReservationData, CategoryCode, VerticalCategoryShare } from '../types';
import { CATEGORY_COLORS } from '../types';
import {
    getJurisdictionById,
    getReservationBlock,
    calculateTotalReservation,
    calculateBaseReservation,
    exceedsReservationCeiling,
    getSortedCategories,
    REGION_DISPLAY_NAMES,
    getCentralReservation
} from '../utils/dataHelpers';
import { ReservationTable, StackedBar } from './ReservationTable';
import { LegalStatusBanner } from './LegalStatusBanner';

interface StateDetailProps {
    data: ReservationData;
    stateId: string;
    onClose: () => void;
}

export function StateDetail({ data, stateId, onClose }: StateDetailProps) {
    const jurisdiction = getJurisdictionById(data, stateId);
    const reservationBlock = getReservationBlock(data, stateId);

    if (!jurisdiction || !reservationBlock) {
        return (
            <div className="glass-card p-6 state-panel">
                <div className="text-center text-gray-400">
                    <p>Data not available for this jurisdiction.</p>
                    <button onClick={onClose} className="btn-secondary mt-4">
                        Close
                    </button>
                </div>
            </div>
        );
    }

    const totalReservation = calculateTotalReservation(reservationBlock.categories);
    const baseReservation = calculateBaseReservation(reservationBlock.categories);
    const ewsReservation = totalReservation - baseReservation;
    const sortedCategories = getSortedCategories(reservationBlock.categories);
    const exceedsCeiling = exceedsReservationCeiling(reservationBlock.categories);

    return (
        <div className="glass-card state-panel overflow-y-auto max-h-[90vh]">
            {/* Header */}
            <div className="sticky top-0 bg-slate-900/95 backdrop-blur-lg p-6 border-b border-white/10 z-10">
                <div className="flex items-start justify-between mb-2">
                    <div>
                        <h2 className="text-2xl font-bold text-white">{jurisdiction.name}</h2>
                        <div className="flex items-center gap-3 mt-2">
                            <span className="region-badge">
                                {jurisdiction.type === 'UT' ? 'Union Territory' : 'State'}
                            </span>
                            <span className="region-badge">
                                {REGION_DISPLAY_NAMES[jurisdiction.region] || jurisdiction.region}
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="text-xs text-gray-500">
                    Last updated: {new Date(jurisdiction.lastUpdated).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </div>
            </div>

            <div className="p-6">
                {/* Legal Status Banner - shows for states with pending challenges */}
                {jurisdiction.legalStatus && (
                    <LegalStatusBanner
                        status={jurisdiction.legalStatus}
                        notes={jurisdiction.legalNotes}
                    />
                )}

                {/* Summary stats */}
                <div className="grid grid-cols-2 gap-4 mb-3">
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10">
                        <div className="text-3xl font-bold text-white">{totalReservation.toFixed(1)}%</div>
                        <div className="text-sm text-gray-400 mt-1">Total Reservation</div>
                        <div className="text-xs text-gray-400 mt-1">
                            <div>Excl. EWS: {baseReservation.toFixed(1)}%</div>
                            <div>EWS: {ewsReservation.toFixed(1)}%</div>
                        </div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-500/20 to-gray-600/20 border border-white/10">
                        <div className="text-3xl font-bold text-white">{(100 - totalReservation).toFixed(1)}%</div>
                        <div className="text-sm text-gray-400 mt-1">Unreserved</div>
                    </div>
                </div>

                {/* 50% rule context */}
                <p className="text-xs text-gray-400 mb-6">
                    <span className={exceedsCeiling ? 'text-amber-300 font-medium' : 'text-gray-300 font-medium'}>
                        {exceedsCeiling ? 'Above' : 'Within'} the 50% general rule (excl. EWS).
                    </span>{' '}
                    The Supreme Court set 50% as a general limit on SC, ST and OBC-type quotas
                    (Indra Sawhney, 1992), allowing exceptions in extraordinary situations;
                    EWS falls outside it (Janhit Abhiyan, 2022).
                </p>

                {/* Stacked bar */}
                <div className="mb-8">
                    <StackedBar
                        categories={sortedCategories}
                        label="Seat Distribution"
                    />
                </div>

                {/* Comparison with Central */}
                <div className="mb-8">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">
                        Comparison with Central Government
                    </h3>
                    <ComparisonChart
                        stateCategories={sortedCategories}
                        stateName={jurisdiction.name}
                    />
                </div>

                {/* Detailed table */}
                <div className="mb-8">
                    <ReservationTable
                        categories={sortedCategories}
                        title="Detailed Breakdown"
                    />
                </div>

                {/* Notes section */}
                {jurisdiction.notes && (
                    <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                            Notes & Caveats
                        </h3>
                        <div className="note-callout">
                            <p className="text-sm text-gray-300">{jurisdiction.notes}</p>
                        </div>
                    </div>
                )}

                {/* Source links */}
                {jurisdiction.sourceLinks.length > 0 && (
                    <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                            Sources
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {jurisdiction.sourceLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="source-link"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                {/* Vertical reservation only note */}
                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <div className="flex items-start gap-3">
                        <div className="text-blue-400 text-lg">ℹ️</div>
                        <div>
                            <div className="font-medium text-blue-200 mb-1">Vertical Reservation Only</div>
                            <p className="text-sm text-gray-400">
                                This page shows only vertical reservation (SC, ST, OBC, EWS, Others).
                                Horizontal reservations (women, persons with disabilities, ex-servicemen, sportspersons, etc.)
                                are not included in this version.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Comparison chart component
interface ComparisonChartProps {
    stateCategories: VerticalCategoryShare[];
    stateName: string;
}

function ComparisonChart({ stateCategories, stateName }: ComparisonChartProps) {
    const categories: CategoryCode[] = ['SC', 'ST', 'OBC', 'EWS'];

    return (
        <div className="space-y-4">
            {categories.map((code) => {
                const stateCategory = stateCategories.find(c => c.code === code);
                const stateValue = stateCategory?.reservationPercent || 0;
                const centralValue = getCentralReservation(code);
                const maxValue = Math.max(stateValue, centralValue, 30);

                return (
                    <div key={code} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: CATEGORY_COLORS[code] }}
                                ></div>
                                <span className="text-gray-300">{code}</span>
                            </div>
                            <div className="flex gap-4 text-xs">
                                <span className="text-gray-400">{stateName}: <span className="text-white font-medium">{stateValue}%</span></span>
                                <span className="text-gray-500">Central: <span className="text-gray-300">{centralValue}%</span></span>
                            </div>
                        </div>
                        <div className="relative h-6 bg-white/5 rounded-md overflow-hidden">
                            {/* State bar */}
                            <div
                                className="absolute top-0 left-0 h-3 rounded-t-md transition-all duration-500"
                                style={{
                                    width: `${(stateValue / maxValue) * 100}%`,
                                    backgroundColor: CATEGORY_COLORS[code]
                                }}
                            ></div>
                            {/* Central bar */}
                            <div
                                className="absolute bottom-0 left-0 h-3 rounded-b-md transition-all duration-500 opacity-50"
                                style={{
                                    width: `${(centralValue / maxValue) * 100}%`,
                                    backgroundColor: '#94a3b8'
                                }}
                            ></div>
                        </div>
                    </div>
                );
            })}
            <div className="flex items-center gap-6 text-xs text-gray-500 mt-4">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-2 rounded bg-blue-500"></div>
                    <span>{stateName}</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-2 rounded bg-gray-500 opacity-50"></div>
                    <span>Central Government</span>
                </div>
            </div>
        </div>
    );
}
