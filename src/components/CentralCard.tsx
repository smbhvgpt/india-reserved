import type { CategoryCode } from '../types';
import { CATEGORY_COLORS } from '../types';
import { getCentralCategories, calculateTotalReservation, calculateBaseReservation } from '../utils/dataHelpers';
import { StackedBar } from './ReservationTable';

interface CentralCardProps {
    compact?: boolean;
    onClick?: () => void;
}

export function CentralCard({ compact = false, onClick }: CentralCardProps) {
    const centralCategories = getCentralCategories();
    const totalReservation = calculateTotalReservation(centralCategories);
    const baseReservation = calculateBaseReservation(centralCategories);

    if (compact) {
        return (
            <div
                className="glass-card p-4 cursor-pointer hover:border-white/30 transition-all"
                onClick={onClick}
            >
                <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-white">Central Government</h3>
                    <span className="region-badge">Reference</span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                    {totalReservation.toFixed(1)}%
                </div>
                <div className="text-xs text-gray-400 mb-3">
                    Total Vertical Reservation · Excl. EWS: {baseReservation.toFixed(1)}%
                </div>
                <StackedBar categories={centralCategories} />
            </div>
        );
    }

    return (
        <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-xl font-bold text-white">Central Government</h2>
                    <p className="text-sm text-gray-400">Vertical Reservation in Central Services</p>
                </div>
                <span className="region-badge bg-blue-500/20 border-blue-500/30 text-blue-300">
                    Reference Standard
                </span>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-5 gap-3 mb-6">
                {centralCategories.filter(c => c.code !== 'OTHERS').map((category) => (
                    <div
                        key={category.code}
                        className="text-center p-3 rounded-lg"
                        style={{
                            backgroundColor: `${CATEGORY_COLORS[category.code as CategoryCode]}20`,
                            borderColor: `${CATEGORY_COLORS[category.code as CategoryCode]}40`,
                            borderWidth: 1
                        }}
                    >
                        <div
                            className="text-2xl font-bold"
                            style={{ color: CATEGORY_COLORS[category.code as CategoryCode] }}
                        >
                            {category.reservationPercent}%
                        </div>
                        <div className="text-xs text-gray-400 mt-1">{category.code}</div>
                    </div>
                ))}
                <div
                    className="text-center p-3 rounded-lg"
                    style={{
                        backgroundColor: `${CATEGORY_COLORS.OTHERS}20`,
                        borderColor: `${CATEGORY_COLORS.OTHERS}40`,
                        borderWidth: 1
                    }}
                >
                    <div
                        className="text-2xl font-bold"
                        style={{ color: CATEGORY_COLORS.OTHERS }}
                    >
                        {centralCategories.find(c => c.code === 'OTHERS')?.reservationPercent.toFixed(1)}%
                    </div>
                    <div className="text-xs text-gray-400 mt-1">Others</div>
                </div>
            </div>

            {/* Stacked bar */}
            <div className="mb-6">
                <StackedBar categories={centralCategories} label="Distribution of Seats" />
            </div>

            {/* Explanation */}
            <div className="note-callout">
                <div className="font-medium text-yellow-200 mb-1">About Central Reservation</div>
                <p className="text-sm text-gray-300">
                    This structure applies to Central Government jobs, Central PSUs, and centrally-funded educational institutions.
                    The 50% ceiling was established by the Supreme Court in <strong>Indra Sawhney v. Union of India (1992)</strong>,
                    with EWS quota (10%) added via the <strong>103rd Constitutional Amendment (2019)</strong>.
                    The Supreme Court upheld EWS in <strong>Janhit Abhiyan v. Union of India (2022)</strong> and held that
                    it falls outside the 50% ceiling, which applies to SC, ST and OBC reservation.
                </p>
            </div>

            {/* Note about horizontal reservations */}
            <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-start gap-3">
                    <div className="text-blue-400 text-lg">ℹ️</div>
                    <div>
                        <div className="font-medium text-white mb-1">Vertical Reservation Only</div>
                        <p className="text-sm text-gray-400">
                            This display shows only vertical reservation (SC, ST, OBC, EWS, Others).
                            Horizontal reservations (women, persons with disabilities, ex-servicemen, etc.)
                            operate alongside these categories and are not shown in this version.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
