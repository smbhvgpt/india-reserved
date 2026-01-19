import type {
    ReservationData,
    Jurisdiction,
    VerticalReservationBlock,
    VerticalCategoryShare,
    CategoryCode
} from '../types';
import { CATEGORY_ORDER, CENTRAL_RESERVATION } from '../types';

// Get jurisdiction by ID
export function getJurisdictionById(
    data: ReservationData,
    id: string
): Jurisdiction | undefined {
    return data.jurisdictions.find(j => j.id === id);
}

// Get reservation block for a jurisdiction
export function getReservationBlock(
    data: ReservationData,
    jurisdictionId: string,
    context: string = "STATE_SERVICES"
): VerticalReservationBlock | undefined {
    return data.verticalReservationBlocks.find(
        b => b.jurisdictionId === jurisdictionId && b.context === context
    );
}

// Get category data by code
export function getCategoryByCode(
    categories: VerticalCategoryShare[],
    code: CategoryCode
): VerticalCategoryShare | undefined {
    return categories.find(c => c.code === code);
}

// Calculate total vertical reservation (SC + ST + OBC + EWS)
export function calculateTotalReservation(categories: VerticalCategoryShare[]): number {
    return categories
        .filter(c => c.code !== "OTHERS")
        .reduce((sum, c) => sum + c.reservationPercent, 0);
}

// Get categories sorted by standard order
export function getSortedCategories(categories: VerticalCategoryShare[]): VerticalCategoryShare[] {
    return [...categories].sort(
        (a, b) => CATEGORY_ORDER.indexOf(a.code) - CATEGORY_ORDER.indexOf(b.code)
    );
}

// Get central reservation value for a category
export function getCentralReservation(code: CategoryCode): number {
    if (code === "OTHERS") {
        return 100 - Object.values(CENTRAL_RESERVATION).reduce((a, b) => a + b, 0);
    }
    return CENTRAL_RESERVATION[code];
}

// Create central government reservation categories
export function getCentralCategories(): VerticalCategoryShare[] {
    const scStObcEws: VerticalCategoryShare[] = [
        { code: "SC", displayName: "Scheduled Castes (SC)", reservationPercent: 15, populationPercent: 16.6 },
        { code: "ST", displayName: "Scheduled Tribes (ST)", reservationPercent: 7.5, populationPercent: 8.6 },
        { code: "OBC", displayName: "Other Backward Classes (OBC)", reservationPercent: 27, populationPercent: 41.0 },
        { code: "EWS", displayName: "Economically Weaker Sections (EWS)", reservationPercent: 10, populationPercent: null },
    ];

    const totalReserved = scStObcEws.reduce((sum, c) => sum + c.reservationPercent, 0);

    return [
        ...scStObcEws,
        { code: "OTHERS", displayName: "Others / Unreserved", reservationPercent: 100 - totalReserved, populationPercent: null }
    ];
}

// Group jurisdictions by region
export function groupJurisdictionsByRegion(
    jurisdictions: Jurisdiction[]
): Record<string, Jurisdiction[]> {
    const grouped: Record<string, Jurisdiction[]> = {};

    for (const jurisdiction of jurisdictions) {
        if (!grouped[jurisdiction.region]) {
            grouped[jurisdiction.region] = [];
        }
        grouped[jurisdiction.region].push(jurisdiction);
    }

    // Sort each group alphabetically
    for (const region of Object.keys(grouped)) {
        grouped[region].sort((a, b) => a.name.localeCompare(b.name));
    }

    return grouped;
}

// Human-readable region names
export const REGION_DISPLAY_NAMES: Record<string, string> = {
    NORTH: "North India",
    SOUTH: "South India",
    EAST: "East India",
    WEST: "West India",
    NORTHEAST: "Northeast India",
    CENTRAL_INDIA: "Central India",
    UT: "Union Territories",
    CENTRAL: "Central Government"
};

// Format percentage for display
export function formatPercent(value: number | null | undefined): string {
    if (value === null || value === undefined) {
        return "–";
    }
    return `${value.toFixed(1)}%`;
}

// Get jurisdictions exceeding 50% reservation
export function getJurisdictionsExceeding50(data: ReservationData): Jurisdiction[] {
    return data.jurisdictions.filter(j => {
        const block = getReservationBlock(data, j.id);
        if (!block) return false;
        return calculateTotalReservation(block.categories) > 50;
    });
}
