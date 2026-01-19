import type { ReservationData, CategoryCode } from '../types';
import { CATEGORY_ORDER } from '../types';

// Validation result type
export interface ValidationResult {
    isValid: boolean;
    errors: string[];
    warnings: string[];
}

// Validate category code
export function isValidCategoryCode(code: string): code is CategoryCode {
    return CATEGORY_ORDER.includes(code as CategoryCode);
}

// Validate percentage sum (should be close to 100)
export function validatePercentageSum(
    percentages: number[],
    tolerance: number = 2
): { isValid: boolean; sum: number; deviation: number } {
    const sum = percentages.reduce((acc, val) => acc + val, 0);
    const deviation = Math.abs(sum - 100);
    return {
        isValid: deviation <= tolerance,
        sum,
        deviation
    };
}

// Validate a single jurisdiction's reservation data
export function validateJurisdictionReservation(
    jurisdictionId: string,
    categories: { code: string; reservationPercent: number; populationPercent: number | null }[]
): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Check all required category codes are present
    const presentCodes = new Set(categories.map(c => c.code));
    for (const requiredCode of CATEGORY_ORDER) {
        if (!presentCodes.has(requiredCode)) {
            errors.push(`${jurisdictionId}: Missing category ${requiredCode}`);
        }
    }

    // Validate category codes
    for (const category of categories) {
        if (!isValidCategoryCode(category.code)) {
            errors.push(`${jurisdictionId}: Invalid category code "${category.code}"`);
        }
        if (category.reservationPercent < 0 || category.reservationPercent > 100) {
            errors.push(`${jurisdictionId}: Invalid reservation percent ${category.reservationPercent} for ${category.code}`);
        }
        if (category.populationPercent !== null && (category.populationPercent < 0 || category.populationPercent > 100)) {
            errors.push(`${jurisdictionId}: Invalid population percent ${category.populationPercent} for ${category.code}`);
        }
    }

    // Validate reservation percentages sum
    const reservationPercentages = categories.map(c => c.reservationPercent);
    const reservationValidation = validatePercentageSum(reservationPercentages);
    if (!reservationValidation.isValid) {
        warnings.push(
            `${jurisdictionId}: Reservation percentages sum to ${reservationValidation.sum.toFixed(1)}% (deviation: ${reservationValidation.deviation.toFixed(1)}%)`
        );
    }

    // Validate population percentages sum (if all are present)
    const populationPercentages = categories
        .map(c => c.populationPercent)
        .filter((p): p is number => p !== null);

    if (populationPercentages.length === categories.length) {
        const populationValidation = validatePercentageSum(populationPercentages);
        if (!populationValidation.isValid) {
            warnings.push(
                `${jurisdictionId}: Population percentages sum to ${populationValidation.sum.toFixed(1)}% (deviation: ${populationValidation.deviation.toFixed(1)}%)`
            );
        }
    }

    return {
        isValid: errors.length === 0,
        errors,
        warnings
    };
}

// Validate complete reservation data
export function validateReservationData(data: ReservationData): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Check that all jurisdiction IDs are unique
    const jurisdictionIds = new Set<string>();
    for (const jurisdiction of data.jurisdictions) {
        if (jurisdictionIds.has(jurisdiction.id)) {
            errors.push(`Duplicate jurisdiction ID: ${jurisdiction.id}`);
        }
        jurisdictionIds.add(jurisdiction.id);

        // Validate required fields
        if (!jurisdiction.name) {
            errors.push(`${jurisdiction.id}: Missing name`);
        }
        if (!jurisdiction.type) {
            errors.push(`${jurisdiction.id}: Missing type`);
        }
        if (!jurisdiction.lastUpdated) {
            warnings.push(`${jurisdiction.id}: Missing lastUpdated date`);
        }
    }

    // Validate each reservation block
    for (const block of data.verticalReservationBlocks) {
        // Check jurisdiction exists
        if (!jurisdictionIds.has(block.jurisdictionId)) {
            errors.push(`Reservation block references unknown jurisdiction: ${block.jurisdictionId}`);
            continue;
        }

        const blockValidation = validateJurisdictionReservation(block.jurisdictionId, block.categories);
        errors.push(...blockValidation.errors);
        warnings.push(...blockValidation.warnings);
    }

    // Check all jurisdictions have at least one reservation block
    const jurisdictionsWithBlocks = new Set(data.verticalReservationBlocks.map(b => b.jurisdictionId));
    for (const jurisdictionId of jurisdictionIds) {
        if (!jurisdictionsWithBlocks.has(jurisdictionId)) {
            warnings.push(`${jurisdictionId}: No reservation block defined`);
        }
    }

    return {
        isValid: errors.length === 0,
        errors,
        warnings
    };
}
