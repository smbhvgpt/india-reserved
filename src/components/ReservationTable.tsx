import { useState } from 'react';
import type { VerticalCategoryShare, CategoryCode } from '../types';
import { CATEGORY_COLORS } from '../types';
import { formatPercent, getSortedCategories, getCentralReservation } from '../utils/dataHelpers';
import { SubCategoryBreakdown } from './SubCategoryBreakdown';

interface ReservationTableProps {
    categories: VerticalCategoryShare[];
    showPopulation?: boolean;
    showCentralComparison?: boolean;
    title?: string;
}

export function ReservationTable({
    categories,
    showPopulation = true,
    showCentralComparison = true,
    title
}: ReservationTableProps) {
    const sortedCategories = getSortedCategories(categories);

    return (
        <div className="overflow-x-auto">
            {title && (
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">
                    {title}
                </h3>
            )}
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th className="text-right">State %</th>
                        {showPopulation && <th className="text-right">Population %</th>}
                        {showCentralComparison && <th className="text-right">Central %</th>}
                        <th className="w-32">Visual</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedCategories.map((category) => (
                        <ReservationRow
                            key={category.code}
                            category={category}
                            showPopulation={showPopulation}
                            showCentralComparison={showCentralComparison}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

interface ReservationRowProps {
    category: VerticalCategoryShare;
    showPopulation: boolean;
    showCentralComparison: boolean;
}

function ReservationRow({ category, showPopulation, showCentralComparison }: ReservationRowProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const centralValue = getCentralReservation(category.code);
    const maxPercent = Math.max(category.reservationPercent, centralValue, category.populationPercent || 0, 50);
    const categoryColor = CATEGORY_COLORS[category.code as CategoryCode];
    const hasSubCategories = category.subCategories && category.subCategories.length > 0;

    return (
        <>
            <tr
                className={hasSubCategories ? 'cursor-pointer hover:bg-white/5' : ''}
                onClick={() => hasSubCategories && setIsExpanded(!isExpanded)}
            >
                <td>
                    <div className="flex items-center gap-2">
                        {hasSubCategories && (
                            <svg
                                className={`w-4 h-4 text-gray-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        )}
                        <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: categoryColor }}
                        ></div>
                        <span className="font-medium">{category.displayName}</span>
                        {hasSubCategories && (
                            <span className="text-xs text-gray-500">
                                ({category.subCategories!.length} sub-categories)
                            </span>
                        )}
                    </div>
                </td>
                <td className="text-right font-semibold text-lg">
                    {formatPercent(category.reservationPercent)}
                </td>
                {showPopulation && (
                    <td className="text-right text-gray-400">
                        {formatPercent(category.populationPercent)}
                    </td>
                )}
                {showCentralComparison && (
                    <td className="text-right text-gray-400">
                        {formatPercent(centralValue)}
                    </td>
                )}
                <td>
                    <div className="flex flex-col gap-1">
                        {/* State bar */}
                        <div className="flex items-center gap-2">
                            <div
                                className="comparison-bar"
                                style={{
                                    backgroundColor: categoryColor,
                                    width: `${(category.reservationPercent / maxPercent) * 100}%`
                                }}
                            ></div>
                        </div>
                        {/* Central comparison bar (smaller, gray) */}
                        {showCentralComparison && (
                            <div className="flex items-center gap-2">
                                <div
                                    className="comparison-bar opacity-40"
                                    style={{
                                        backgroundColor: '#94a3b8',
                                        width: `${(centralValue / maxPercent) * 100}%`
                                    }}
                                ></div>
                            </div>
                        )}
                    </div>
                </td>
            </tr>
            {isExpanded && hasSubCategories && (
                <SubCategoryBreakdown
                    parentCode={category.code}
                    subCategories={category.subCategories!}
                    parentColor={categoryColor}
                />
            )}
        </>
    );
}

// Stacked bar visualization component
interface StackedBarProps {
    categories: VerticalCategoryShare[];
    label?: string;
}

export function StackedBar({ categories, label }: StackedBarProps) {
    const sortedCategories = getSortedCategories(categories);

    return (
        <div>
            {label && (
                <div className="text-xs text-gray-400 mb-2">{label}</div>
            )}
            <div className="stacked-bar">
                {sortedCategories.map((category) => (
                    <div
                        key={category.code}
                        style={{
                            width: `${category.reservationPercent}%`,
                            backgroundColor: CATEGORY_COLORS[category.code as CategoryCode]
                        }}
                        title={`${category.displayName}: ${category.reservationPercent}%`}
                    ></div>
                ))}
            </div>
            {/* Labels below */}
            <div className="flex justify-between mt-2 text-xs text-gray-400">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
            </div>
        </div>
    );
}
