import { useState } from 'react';
import type { SubCategoryShare, CategoryCode } from '../types';
import { formatPercent } from '../utils/dataHelpers';

interface SubCategoryBreakdownProps {
    parentCode: CategoryCode;  // Keep for API consistency
    subCategories: SubCategoryShare[];
    parentColor: string;
    depth?: number;
}

// Helper to generate lighter shades
function lightenColor(hex: string, percent: number): string {
    // Handle rgb format
    if (hex.startsWith('rgb')) {
        return hex;
    }
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.min(255, ((num >> 16) & 0xff) + amt);
    const G = Math.min(255, ((num >> 8) & 0xff) + amt);
    const B = Math.min(255, (num & 0xff) + amt);
    return `rgb(${R}, ${G}, ${B})`;
}

export function SubCategoryBreakdown({
    subCategories,
    parentColor,
    depth = 0
}: SubCategoryBreakdownProps) {
    const maxPercent = Math.max(...subCategories.map(s => s.reservationPercent), 30);

    return (
        <>
            {subCategories.map((subCategory, index) => (
                <SubCategoryRow
                    key={subCategory.code}
                    subCategory={subCategory}
                    parentColor={parentColor}
                    depth={depth}
                    index={index}
                    maxPercent={maxPercent}
                />
            ))}
        </>
    );
}

interface SubCategoryRowProps {
    subCategory: SubCategoryShare;
    parentColor: string;
    depth: number;
    index: number;
    maxPercent: number;
}

function SubCategoryRow({
    subCategory,
    parentColor,
    depth,
    index,
    maxPercent
}: SubCategoryRowProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const hasNestedSubCategories = subCategory.subCategories && subCategory.subCategories.length > 0;

    // Generate lighter shade based on depth and index
    const rowColor = lightenColor(parentColor, 15 + (depth * 10) + (index * 5));
    const paddingLeft = 24 + (depth * 16); // Indent based on depth

    return (
        <>
            <tr
                className="bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                onClick={() => hasNestedSubCategories && setIsExpanded(!isExpanded)}
            >
                <td style={{ paddingLeft: `${paddingLeft}px` }}>
                    <div className="flex items-center gap-2">
                        {hasNestedSubCategories && (
                            <svg
                                className={`w-3 h-3 text-gray-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        )}
                        {!hasNestedSubCategories && <div className="w-3" />}
                        <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: rowColor }}
                        />
                        <span className="text-gray-300 text-sm">{subCategory.displayName}</span>
                    </div>
                </td>
                <td className="text-right font-medium text-gray-200">
                    {formatPercent(subCategory.reservationPercent)}
                </td>
                <td className="text-right text-gray-500 text-sm">
                    {subCategory.populationPercent !== undefined && subCategory.populationPercent !== null
                        ? formatPercent(subCategory.populationPercent)
                        : '—'}
                </td>
                <td className="text-right text-gray-500 text-sm">—</td>
                <td>
                    <div className="flex items-center gap-2">
                        <div
                            className="h-3 rounded transition-all duration-300"
                            style={{
                                width: `${(subCategory.reservationPercent / maxPercent) * 100}%`,
                                backgroundColor: rowColor,
                                opacity: 0.8
                            }}
                        />
                    </div>
                </td>
            </tr>
            {subCategory.description && isExpanded && (
                <tr className="bg-white/3">
                    <td colSpan={5} style={{ paddingLeft: `${paddingLeft + 20}px` }}>
                        <p className="text-xs text-gray-500 py-1 italic">
                            {subCategory.description}
                        </p>
                    </td>
                </tr>
            )}
            {isExpanded && hasNestedSubCategories && (
                <SubCategoryBreakdown
                    parentCode={"OBC" as CategoryCode}
                    subCategories={subCategory.subCategories!}
                    parentColor={parentColor}
                    depth={depth + 1}
                />
            )}
        </>
    );
}

export default SubCategoryBreakdown;
