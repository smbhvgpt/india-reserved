export function Footer() {
    return (
        <footer className="mt-auto py-6 px-4 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <div className="disclaimer text-center mb-4">
                    <p className="mb-2">
                        <strong className="text-gray-300">Disclaimer:</strong> This is an informational tool only.
                        Reservation policies can change via government orders or court decisions.
                        Always consult the latest official notifications for any decisions.
                    </p>
                    <p>
                        This site focuses on <strong className="text-gray-300">vertical reservation</strong> only
                        (SC, ST, OBC, EWS, Others). Horizontal reservations (women, persons with disabilities,
                        ex-servicemen, sportspersons, etc.) are not shown in this version.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
                    <span>Data sources: Various state government notifications</span>
                    <span>•</span>
                    <span>Population data: Census 2011 & SECC</span>
                    <span>•</span>
                    <span>© {new Date().getFullYear()} India Reservation Data</span>
                </div>
            </div>
        </footer>
    );
}
