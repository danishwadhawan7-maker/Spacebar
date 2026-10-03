import React, { useState } from 'react';
import { Star, MessageSquare, ExternalLink, ThumbsUp, ShieldCheck } from 'lucide-react';
import { REVIEWS } from '../data/mockData';

export const Reviews: React.FC<ReviewsProps> = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const tags = ['All', 'Birthday Parties', 'Racing Sim', 'PC Gaming', 'Food & Ambience'];

  const filteredReviews = selectedTag === 'All'
    ? REVIEWS
    : REVIEWS.filter((r) => r.tag === selectedTag);

  return (
    <section id="reviews" className="py-20 bg-[#0a0b12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Overall Google Rating Proof */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span>04. GOOGLE MAPS COMMUNITY</span>
              <span aria-hidden="true">·</span>
              <span>VERIFIED PLAYER EXPERIENCES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Loved by Gamers & Foodies in Ludhiana
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              From memorable birthday milestones to competitive esports rank-ups, see why players rate SPACEBAR 4.8 stars.
            </p>
          </div>

          {/* Google Scorecard Anchor */}
          <div className="lg:col-span-4 bg-[#121422] border border-slate-800 p-5 rounded-2xl flex items-center justify-between shadow-lg">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="text-3xl font-display font-extrabold text-white">4.8</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <div className="text-xs text-slate-400">Based on 191+ Google Maps Reviews</div>
            </div>

            <a
              href="https://maps.google.com/?q=SPACEBAR+51+I+Block+Sarabha+Nagar+Ludhiana"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
              title="View on Google Maps"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Filter Segmented Control */}
        <div className="flex flex-wrap items-center gap-2 pb-6">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                selectedTag === tag
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#121422] border border-slate-800/80 hover:border-slate-700 p-6 rounded-2xl flex flex-col justify-between space-y-4 transition-all"
            >
              <div className="space-y-3">
                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-700 to-indigo-500 flex items-center justify-center text-xs font-bold text-white uppercase font-mono shadow-sm">
                      {rev.avatarText}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{rev.author}</h4>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                        <span>{rev.date}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-cyan-400">{rev.badge || 'Verified'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Review Prose */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Tag Footer */}
              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-purple-400">Tag: {rev.tag}</span>
                <span className="flex items-center gap-1 text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Google Verified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

interface ReviewsProps {}
