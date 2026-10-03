import React, { useState } from 'react';
import { Gamepad2, Check, Sparkles, Monitor, Disc, Users, Trophy, ExternalLink } from 'lucide-react';
import { GAME_STATIONS, GameStation } from '../data/mockData';
import realRacersImg from '../assets/images/spacebar_real_racers_1791026764179.jpg';
import realArcadeImg from '../assets/images/spacebar_real_arcade_1791026738292.jpg';
import realHeroesImg from '../assets/images/spacebar_story_heroes_1791026778555.jpg';
import realStorefrontImg from '../assets/images/spacebar_real_storefront_1791026751442.jpg';

interface GamingZoneProps {
  onSelectStation: (stationId: string) => void;
}

export const GamingZone: React.FC<GamingZoneProps> = ({ onSelectStation }) => {
  const [selectedStationModal, setSelectedStationModal] = useState<GameStation | null>(null);

  const stations = GAME_STATIONS(realRacersImg, realArcadeImg, realHeroesImg, realStorefrontImg);

  return (
    <section id="gaming-zone" className="py-20 bg-slate-50/70 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-rose-600 font-semibold">
              <span>01. GAMING ARENA</span>
              <span aria-hidden="true">·</span>
              <span>STATE-OF-THE-ART HARDWARE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-950 tracking-tight">
              High-Octane Gaming Attractions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl">
              From adrenaline-pumping Formula 1 simulator laps to ranked esports lobbies and couch multiplayer tournaments in Ludhiana.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs text-slate-500 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>High-Refresh Screens · DualSense Haptics · Mechanical Rigs</span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stations.map((station) => (
            <div
              key={station.id}
              className="bg-white border border-slate-200 hover:border-slate-300 rounded-2xl overflow-hidden transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col group"
            >
              {/* Card Media Slot */}
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <img
                  src={station.image}
                  alt={station.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                {/* Highlight badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs border border-slate-200 px-3 py-1 rounded-lg text-[11px] font-semibold text-slate-800 shadow-xs">
                  {station.highlight}
                </div>

                {/* Rate indicator */}
                <div className="absolute bottom-3 right-3 bg-slate-950/90 backdrop-blur-xs border border-white/20 px-3 py-1.5 rounded-lg text-right shadow-md">
                  <div className="text-[10px] text-slate-300 leading-none">Starting from</div>
                  <div className="text-sm font-bold text-white font-mono tabular-nums leading-tight">
                    ₹{station.hourlyRate} <span className="text-xs font-normal text-slate-400">/hr</span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <div className="text-xs font-mono text-purple-600 font-semibold mb-1">{station.subtitle}</div>
                  <h3 className="text-xl font-display font-bold text-slate-950 mb-2">{station.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{station.description}</p>
                </div>

                {/* Specs List */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-mono text-slate-500 font-semibold mb-1">HARDWARE HIGHLIGHTS:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {station.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Popular Games List */}
                <div className="pt-2">
                  <div className="text-[11px] font-mono text-slate-500 font-semibold mb-2">HOT TITLES ON DECK:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {station.popularGames.map((game, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs bg-slate-100 border border-slate-200 text-slate-700 font-medium rounded-md"
                      >
                        {game}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex items-center gap-3">
                  <button
                    onClick={() => onSelectStation(station.id)}
                    className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-slate-950 hover:bg-black rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Gamepad2 className="w-4 h-4 text-rose-400" />
                    <span>Book This Station</span>
                  </button>

                  <button
                    onClick={() => setSelectedStationModal(station)}
                    className="py-2.5 px-3 text-xs font-medium text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-colors cursor-pointer"
                    title="View Full Specs & Games"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Station Detail */}
        {selectedStationModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-fade-in">
            <div className="bg-white border border-slate-200 rounded-2xl max-w-xl w-full p-6 space-y-5 shadow-2xl relative text-slate-900">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-mono text-rose-600 font-bold uppercase tracking-wider">{selectedStationModal.subtitle}</span>
                  <h3 className="text-2xl font-display font-black text-slate-950 mt-0.5">
                    {selectedStationModal.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedStationModal(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="rounded-xl overflow-hidden h-48 bg-slate-100">
                <img
                  src={selectedStationModal.image}
                  alt={selectedStationModal.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono text-slate-500 font-semibold">HARDWARE ARCHITECTURE</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  {selectedStationModal.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono text-slate-500 font-semibold">AVAILABLE GAMES LIBRARY</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedStationModal.popularGames.map((g, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-100 border border-slate-200 text-xs text-slate-800 rounded-lg font-medium">
                      🎮 {g}
                    </span>
                  ))}
                  <span className="px-3 py-1 bg-slate-50 border border-slate-200 text-xs text-slate-500 rounded-lg">
                    + 40 More Installed Titles
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500">Standard Rate</div>
                  <div className="text-xl font-bold font-mono text-slate-950">
                    ₹{selectedStationModal.hourlyRate} <span className="text-xs text-slate-500 font-normal">/hour</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const id = selectedStationModal.id;
                    setSelectedStationModal(null);
                    onSelectStation(id);
                  }}
                  className="py-2.5 px-6 text-xs font-semibold text-white bg-slate-950 hover:bg-black rounded-xl shadow-md cursor-pointer"
                >
                  Proceed to Slot Booking
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
