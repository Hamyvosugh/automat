'use client';
import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800">
      <div className="container mx-auto px-4 py-8 md:py-28 w-full md:w-3/4 lg:w-2/4">
        <main className="text-center">
          <h1 className="text-7xl md:text-8xl sm:text-8xl lg:text-8xl xl:text-9xl font-bold text-white mb-2 md:mb-0 ">
            Aut-O-Mat®
          </h1>
          <h2 className="text-2xl text-white mb-8 md:mb-16 text-start">
            Autokaufberatung 2025
          </h2>
          <div className="flex justify-center md:justify-end">
          <button className="relative w-4/5 md:w-auto bg-white text-black font-bold py-3 px-8 md:px-12 mb-8 md:mb-16 rounded-sm text-xl overflow-hidden group transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = 'black'}>
          <span className="relative z-10">Start</span>
          <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"/></button>
          </div>
          <div className="mx-auto">
            <p className="text-white mb-6 md:mb-8 text-lg text-start">
              Alle wichtigen Automarken und Modelle wurden analysiert. Jetzt sind Sie an der Reihe: Vergleichen Sie Ihre Anforderungen mit den Eigenschaften der verfügbaren Fahrzeuge.
            </p>

            <p className="text-white mb-8 md:mb-12 text-lg text-start">
              Der Auto-Berater ist keine Kaufempfehlung, sondern ein Informationsangebot über Fahrzeuge und Mobilität.
            </p>
          </div>
        </main>

        <footer className="mt-12 md:mt-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            <div className="flex items-center">
              <img src="/api/placeholder/48/48" alt="Logo" className="mr-2" />
              <span className="text-white text-xs md:text-sm">
                Bundeszentrale für Automobilberatung
              </span>
            </div>
            
            <div className="flex gap-4">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 18.364a9 9 0 010-12.728" />
              </svg>
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;