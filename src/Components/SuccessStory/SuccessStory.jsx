import React from 'react';
import { assets } from '../../assets/assets';

function SuccessStory() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-5xl text-red-500">Success Story</h1>
      </div>
      <div className="flex flex-wrap justify-center -mx-4">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <iframe
              className="w-full h-48 object-cover"
              src="https://www.youtube.com/embed/l_4HGF9U990"
              frameborder="0"
              allowfullscreen
            ></iframe>
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-2">Garbh Sanskar Music</h2>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <iframe
              className="w-full h-48 object-cover"
              src="https://www.youtube.com/embed/l_4HGF9U990"
              frameborder="0"
              allowfullscreen
            ></iframe>
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-2">Garbh Sanskar Music for Pregnancy</h2>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <iframe
              className="w-full h-48 object-cover"
              src="https://www.youtube.com/embed/F6hDYejEphw"
              frameborder="0"
              allowfullscreen
            ></iframe>
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-2">Garbh Sanskar Music for Pregnancy</h2>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default SuccessStory;
