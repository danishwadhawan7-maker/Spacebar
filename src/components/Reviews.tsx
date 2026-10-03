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
    <section id="reviews" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Overall Google Rating Proof */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-rose-600 font-semibold">
              <span>04. GOOGLE MAPS COMMUNITY</span>
              <span aria-hidden="true">·</span>
              <span>VERIFIED PLAYER EXPERIENCES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-950 tracking-tight">
              Loved by Gamers & Foodies in Ludhiana
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl">
              From memorable birthday milestones to competitive esports rank-ups, see why players rate SPACEBAR 4.8 stars.
            </p>
          </div>

          {/* Google Scorecard Anchor */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-200 p-5 rounded-2xl flex items-center justify-between shadow-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="text-3xl font-display font-black text-slate-950">4.8</span>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                  ))}
                </div>
              </div>
              <div className="text-xs text-slate-500">Based on 191+ Google Maps Reviews</div>
            </div>

            <a
              href="https://maps.google.com/?q=SPACEBAR+51+I+Block+Sarabha+Nagar+Ludhiana"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 hover:text-slate-950 transition-colors shadow-2xs"
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
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedTag === tag
                  ? 'bg-slate-950 text-white shadow-xs'
                  : 'bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-200'
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
              className="bg-white border border-slate-200 hover:border-slate-300 p-6 rounded-2xl flex flex-col justify-between space-y-4 transition-all shadow-xs hover:shadow-md"
            >
              <div className="space-y-3">
                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-xs font-bold text-white uppercase font-mono shadow-xs">
                      {rev.avatarText}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{rev.author}</h4>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                        <span>{rev.date}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-emerald-700 font-semibold">{rev.badge || 'Verified'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    ))}
                  </div>
                </div>

                {/* Review Prose */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Tag Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="text-purple-700 font-medium">Tag: {rev.tag}</span>
                <span className="flex items-center gap-1 text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Google Verified
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
