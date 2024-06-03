import React from 'react';

const DetalleAbajo = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <h2 className="text-xl mb-4" style={{ width: '220px', height: '28px', top: '397px', left: '563px', gap: '0px', opacity: '0px', fontFamily: 'Raleway', fontSize: '24px', fontWeight: '700', lineHeight: '28.18px', textAlign: 'left', background: 'none' }}>
        Today's Highlights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
        <div className="bg-customSecondaryDark p-4 rounded text-center" style={{ width: '328px', height: '204px', background: '#1E213A' }}>
          <p>Wind status</p>
          <p className="text-3xl">7 mph</p>
          <p>WSW</p>
        </div>
        <div className="bg-customSecondaryDark p-4 rounded text-center" style={{ width: '328px', height: '204px', background: '#1E213A' }}>
          <p>Humidity</p>
          <p className="text-3xl mb-4">84 %</p>
          <div className="relative w-full bg-zinc-700 rounded-full h-2.5 dark:bg-zinc-700 mt-8 mb-8">
            <div className="bg-yellow-300 h-2.5 rounded-full" style={{ width: "84%" }}></div>
            <div className="absolute left-0 top-0 transform -translate-y-6 text-xs">0</div>
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-6 text-xs">50</div>
            <div className="absolute right-0 top-0 transform -translate-y-6 text-xs">100</div>
          </div>
          <p className="text-xs w-full text-right mt-1">% </p>
        </div>
        <div className="bg-customSecondaryDark p-4 rounded text-center" style={{ width: '328px', height: '159px', background: '#1E213A' }}>
          <p>Visibility</p>
          <p className="text-3xl">6.4 miles</p>
        </div>
        <div className="bg-customSecondaryDark p-4 rounded text-center" style={{ width: '328px', height: '160px', background: '#1E213A' }}>
          <p>Air Pressure</p>
          <p className="text-3xl">998 mb</p>
        </div>
      </div>
      <p className="text-center mt-8">
        created by <span className="text-blue-500">username</span> - devChallenges.io
      </p>
    </div>
  );
};

export default DetalleAbajo;
