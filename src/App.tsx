import { useState } from 'react';
import { IndiaMap, StateDetail, CentralCard, SearchDropdown, Footer } from './components';
import reservationData from './data/reservationData.json';
import type { ReservationData } from './types';
import { getJurisdictionsExceeding50 } from './utils/dataHelpers';

// Cast the imported JSON to our type
const data = reservationData as ReservationData;

const stateCount = data.jurisdictions.filter(j => j.type === 'STATE').length;
const utCount = data.jurisdictions.filter(j => j.type === 'UT').length;
const aboveCeilingCount = getJurisdictionsExceeding50(data).length;

function App() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [showCentralDetail, setShowCentralDetail] = useState(false);

  const handleSelectState = (stateId: string | null) => {
    setSelectedState(stateId);
    setShowCentralDetail(false);
  };

  const handleShowCentral = () => {
    setSelectedState(null);
    setShowCentralDetail(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-6 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-white">
                India Reservation Data
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                Vertical reservation (SC, ST, OBC, EWS) across States and Union Territories
              </p>
            </div>
            <div className="w-full lg:w-80">
              <SearchDropdown
                jurisdictions={data.jurisdictions}
                onSelect={handleSelectState}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col lg:flex-row">
        {/* Map section */}
        <div className="flex-1 relative min-h-[500px] lg:min-h-0">
          <IndiaMap
            data={data}
            selectedState={selectedState}
            onSelectState={handleSelectState}
          />
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-[480px] p-4 border-t lg:border-t-0 lg:border-l border-white/10 overflow-y-auto max-h-[calc(100vh-200px)]">
          {selectedState ? (
            <StateDetail
              data={data}
              stateId={selectedState}
              onClose={() => setSelectedState(null)}
            />
          ) : showCentralDetail ? (
            <div className="space-y-4">
              <button
                onClick={() => setShowCentralDetail(false)}
                className="btn-secondary text-sm"
              >
                ← Back to Overview
              </button>
              <CentralCard compact={false} />
            </div>
          ) : (
            <div className="space-y-6">
              {/* Instructions */}
              <div className="glass-card p-6">
                <h2 className="text-lg font-semibold text-white mb-3">
                  Explore Reservation Data
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  Click on any State or Union Territory on the map to view its vertical
                  reservation structure and compare with Central Government norms.
                </p>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>{stateCount} States + {utCount} Union Territories</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>SC, ST, OBC, EWS breakdown</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Population comparison data</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Central government comparison</span>
                  </div>
                </div>
              </div>

              {/* Central Government quick card */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                  Central Reference
                </h3>
                <CentralCard compact={true} onClick={handleShowCentral} />
              </div>

              {/* Quick stats */}
              <div className="glass-card p-4">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                  Quick Facts
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Above 50% general rule (excl. EWS)</span>
                    <span className="text-white font-medium">{aboveCeilingCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Highest ST reservation</span>
                    <span className="text-white font-medium">
                      {Math.max(...data.verticalReservationBlocks.map(b =>
                        b.categories.find(c => c.code === 'ST')?.reservationPercent || 0
                      ))}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total jurisdictions</span>
                    <span className="text-white font-medium">{stateCount + utCount}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
