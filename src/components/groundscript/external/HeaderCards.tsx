'use client';

import { useState } from 'react';
import { InvestorVisaCardCompact } from './InvestorVisaCardCompact';
import { GoldenKeyCompact } from './GoldenKeyCompact';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function HeaderCards() {
  const [activeCard, setActiveCard] = useState(0);
  
  const cards = [
    { id: 0, component: <InvestorVisaCardCompact />, title: "Visa de Inversionista" },
    { id: 1, component: <GoldenKeyCompact />, title: "Panama Golden Key" }
  ];

  const nextCard = () => {
    setActiveCard((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setActiveCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Cards Container */}
      <div className="overflow-hidden rounded-xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeCard * 100}%)` }}
        >
          {cards.map((card) => (
            <div key={card.id} className="w-full flex-shrink-0">
              {card.component}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={prevCard}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md border border-slate-200 hover:bg-slate-50 transition-colors"
          aria-label="Previous card"
        >
          <ChevronLeft size={18} className="text-slate-600" />
        </button>

        {/* Indicators */}
        <div className="flex space-x-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCard(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeCard ? 'bg-jade-green' : 'bg-slate-300'
              }`}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextCard}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md border border-slate-200 hover:bg-slate-50 transition-colors"
          aria-label="Next card"
        >
          <ChevronRight size={18} className="text-slate-600" />
        </button>
      </div>

      {/* Card Title */}
      <div className="text-center mt-3">
        <h3 
          className="text-sm font-medium text-slate-600"
          style={{
            fontFamily: "'Inter', sans-serif"
          }}
        >
          {cards[activeCard].title}
        </h3>
      </div>
    </div>
  );
}