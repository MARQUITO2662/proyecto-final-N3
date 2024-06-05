import React from 'react';
import { FaWind } from 'react-icons/fa';

const DetalleAbajo = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <h2 className="text-xl mb-4 opacity-100" style={{ width: '220px', height: '28px', fontFamily: 'Raleway', fontSize: '24px', fontWeight: '700', lineHeight: '28.18px', textAlign: 'left' }}>
        Today's Highlights
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-32">
        <div className="bg-customSecondaryDark p-4 rounded text-center" style={{ width: '328px', height: '204px', background: '#1E213A' }}>
          <p>Wind status</p>
          <p className="text-3xl font-bold" style={{ fontFamily: 'Raleway', fontSize: '64px', fontWeight: '700', lineHeight: '75.14px', textAlign: 'center' }}>7 mph</p>
          <div className="flex justify-center items-center mt-4">
            <FaWind size={30} className="transform rotate-[150deg]" style={{ width: '29.49px', height: '29.49px' }} />
            <span style={{ width: '38px', height: '16px', fontFamily: 'Raleway', fontSize: '18px', fontWeight: '500', lineHeight: '16.44px', textAlign: 'left' }}>WSW</span>
          </div>
        </div>
        <div className="bg-customSecondaryDark p-4 rounded text-center" style={{ width: '328px', height: '204px', background: '#1E213A' }}>
          <p>Humidity</p>
          <div className="flex justify-center items-center">
            <p className="text-3xl mb-0" style={{ fontFamily: 'Raleway', fontSize: '64px', fontWeight: '700', lineHeight: '75.14px', textAlign: 'center' }}>84</p>
            <p className="text-xs mb-0" style={{ fontFamily: 'Raleway', fontSize: '36px', fontWeight: '400', lineHeight: '42.26px', textAlign: 'center' }}>%</p>
          </div>
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
          <div className="flex justify-center items-center">
            <p className="text-3xl mb-0" style={{ fontFamily: 'Raleway', fontSize: '64px', fontWeight: '700', lineHeight: '75.14px', textAlign: 'center', width: '197px', height: '75px' }}>6.4</p>
            <span style={{ fontFamily: 'Raleway', fontSize: '36px', fontWeight: '500', lineHeight: '42.26px', textAlign: 'center' }}>miles</span>
          </div>
        </div>
        <div className="bg-customSecondaryDark p-4 rounded text-center" style={{ width: '328px', height: '160px', background: '#1E213A' }}>
          <p>Air Pressure</p>
          <div className="flex justify-center items-center">
            <p className="text-3xl mb-0" style={{ fontFamily: 'Raleway', fontSize: '64px', fontWeight: '700', lineHeight: '75.14px', textAlign: 'center', width: '186px', height: '75px' }}>998</p>
            <span style={{ fontFamily: 'Raleway', fontSize: '36px', fontWeight: '500', lineHeight: '42.26px', textAlign: 'center' }}>mb</span>
          </div>
        </div>
      </div>
      <p className="text-center mt-8">
        created by <span className="text-blue-500">username</span> - devChallenges.io
      </p>
    </div>
  );
};

export default DetalleAbajo;
