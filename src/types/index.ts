/* Data Model Types for India Reservation Web App */

// Jurisdiction Types
export type JurisdictionType = "STATE" | "UT" | "CENTRAL";

export type Region =
    | "NORTH"
    | "SOUTH"
    | "EAST"
    | "WEST"
    | "NORTHEAST"
    | "CENTRAL_INDIA"
    | "UT"
    | "CENTRAL";

// Vertical reservation category codes
export type CategoryCode = "SC" | "ST" | "OBC" | "EWS" | "OTHERS";

// Context for reservation - allows future extension to education, etc.
export type ReservationContext =
    | "STATE_SERVICES"
    | "CENTRAL_SERVICES"
    | "STATE_HIGHER_EDU"
    | "CENTRAL_HIGHER_EDU";

// Legal status for tracking ongoing challenges
export type LegalStatus =
    | "EFFECTIVE"           // Currently in force
    | "PENDING_APPROVAL"    // Passed but awaiting Governor/Central approval
    | "STAYED_BY_HC"        // High Court stay
    | "STAYED_BY_SC"        // Supreme Court stay
    | "UNDER_CHALLENGE"     // Legal challenge in progress
    | "9TH_SCHEDULE";       // Protected under 9th Schedule

// Source link for data provenance
export interface SourceLink {
    title: string;
    url: string;
}

// Sub-category for nested breakdowns (e.g., BC-A, BC-B within OBC)
export interface SubCategoryShare {
    code: string;                       // e.g., "BC_A", "MBC", "ST_PLAINS"
    displayName: string;                // e.g., "Backward Class A", "MBC/DNC"
    reservationPercent: number;
    populationPercent?: number | null;
    description?: string;               // e.g., "Includes Vanniyars and 106 other castes"
    subCategories?: SubCategoryShare[]; // Allow nested sub-categories
}

// Main Jurisdiction entity (State/UT/Central)
export interface Jurisdiction {
    id: string;
    name: string;
    type: JurisdictionType;
    region: Region;
    lastUpdated: string; // ISO date string
    notes: string;
    legalStatus?: LegalStatus;          // Legal status of reservation policy
    legalNotes?: string;                // Specific legal context
    specialProvisions?: string[];       // e.g., ["9th Schedule", "Article 371(A)"]
    sourceLinks: SourceLink[];
}

// Individual category share (SC, ST, OBC, EWS, Others)
export interface VerticalCategoryShare {
    code: CategoryCode;
    displayName: string;
    reservationPercent: number;
    populationPercent: number | null;   // null if not available
    subCategories?: SubCategoryShare[]; // Optional nested breakdown
}

// Vertical reservation block for a jurisdiction
export interface VerticalReservationBlock {
    jurisdictionId: string;
    context: ReservationContext;
    categories: VerticalCategoryShare[];
}

// Complete data structure
export interface ReservationData {
    jurisdictions: Jurisdiction[];
    verticalReservationBlocks: VerticalReservationBlock[];
}

// For future: Horizontal reservation types (not used in v1 UI)
export type HorizontalCategoryCode =
    | "WOMEN"
    | "PWD"
    | "EX_SERVICEMEN"
    | "SPORTS"
    | "FREEDOM_FIGHTERS"
    | "OTHER_HORIZONTAL";

export interface HorizontalCategoryShare {
    code: HorizontalCategoryCode;
    displayName: string;
    reservationPercent: number;
    appliesWithin: CategoryCode[]; // Which vertical categories this applies to
}

export interface HorizontalReservationBlock {
    jurisdictionId: string;
    context: ReservationContext;
    categories: HorizontalCategoryShare[];
}

// Category display configuration
export const CATEGORY_COLORS: Record<CategoryCode, string> = {
    SC: "#3B82F6",    // Blue
    ST: "#10B981",    // Green
    OBC: "#F59E0B",   // Orange
    EWS: "#8B5CF6",   // Purple
    OTHERS: "#6B7280" // Gray
};

export const CATEGORY_ORDER: CategoryCode[] = ["SC", "ST", "OBC", "EWS", "OTHERS"];

// Central government reservation values (constant reference)
export const CENTRAL_RESERVATION: Record<Exclude<CategoryCode, "OTHERS">, number> = {
    SC: 15,
    ST: 7.5,
    OBC: 27,
    EWS: 10
};
