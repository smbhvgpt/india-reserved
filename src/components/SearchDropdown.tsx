import { useState, useMemo, useRef, useEffect } from 'react';
import type { Jurisdiction } from '../types';
import { groupJurisdictionsByRegion, REGION_DISPLAY_NAMES } from '../utils/dataHelpers';

interface SearchDropdownProps {
    jurisdictions: Jurisdiction[];
    onSelect: (jurisdictionId: string) => void;
    placeholder?: string;
}

export function SearchDropdown({
    jurisdictions,
    onSelect,
    placeholder = "Search states and UTs..."
}: SearchDropdownProps) {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Filter out Central Government and group by region
    const filteredJurisdictions = useMemo(() => {
        const filtered = jurisdictions
            .filter(j => j.id !== 'CENTRAL')
            .filter(j =>
                j.name.toLowerCase().includes(query.toLowerCase()) ||
                j.id.toLowerCase().includes(query.toLowerCase())
            );
        return groupJurisdictionsByRegion(filtered);
    }, [jurisdictions, query]);

    const regionOrder = ['NORTH', 'SOUTH', 'EAST', 'WEST', 'CENTRAL_INDIA', 'NORTHEAST', 'UT'];

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                inputRef.current &&
                !inputRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (jurisdictionId: string) => {
        onSelect(jurisdictionId);
        setQuery('');
        setIsOpen(false);
    };

    const totalResults = Object.values(filteredJurisdictions).flat().length;

    return (
        <div className="relative">
            <div className="relative">
                <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                    ref={inputRef}
                    type="text"
                    className="search-input pl-12 pr-4"
                    placeholder={placeholder}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setIsOpen(true)}
                />
            </div>

            {isOpen && (
                <div
                    ref={dropdownRef}
                    className="absolute top-full left-0 right-0 mt-2 glass-card max-h-80 overflow-y-auto z-50"
                >
                    {totalResults === 0 ? (
                        <div className="p-4 text-center text-gray-400">
                            No states or UTs found for "{query}"
                        </div>
                    ) : (
                        <div className="py-2">
                            {regionOrder.map((region) => {
                                const items = filteredJurisdictions[region];
                                if (!items || items.length === 0) return null;

                                return (
                                    <div key={region}>
                                        <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide bg-white/5">
                                            {REGION_DISPLAY_NAMES[region] || region}
                                        </div>
                                        {items.map((jurisdiction) => (
                                            <button
                                                key={jurisdiction.id}
                                                className="w-full px-4 py-3 text-left hover:bg-white/10 transition-colors flex items-center justify-between"
                                                onClick={() => handleSelect(jurisdiction.id)}
                                            >
                                                <span className="text-white">{jurisdiction.name}</span>
                                                <span className="text-xs text-gray-500">
                                                    {jurisdiction.type === 'UT' ? 'UT' : 'State'}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
