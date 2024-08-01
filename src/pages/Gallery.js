
import React, { useState } from 'react';
import sportsDay from '../assets/images/sports_day.jpg';
import scienceExhibition from '../assets/images/science_exhibition.jpg';
import culturalFest from '../assets/images/cultural_fest.jpg';
import classroom from '../assets/images/classroom.jpg';
import library from '../assets/images/library.jpg';
import schoolTour from '../assets/images/videos/school_tour.mp4';
import annualFunction from '../assets/images/videos/annual_function.mp4';

const Gallery = () => {
  const [view, setView] = useState('photos');

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Gallery</h2>
      <div className="mb-4">
        <button
          onClick={() => setView('photos')}
          className={`px-4 py-2 mr-2 ${view === 'photos' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Photos
        </button>
        <button
          onClick={() => setView('videos')}
          className={`px-4 py-2 ${view === 'videos' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Videos
        </button>
      </div>

      {view === 'photos' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src={sportsDay} alt="Sports Day" className="w-full h-60 object-cover rounded-md shadow-md" />
          <img src={scienceExhibition} alt="Science Exhibition" className="w-full h-60 object-cover rounded-md shadow-md" />
          <img src={culturalFest} alt="Cultural Fest" className="w-full h-60 object-cover rounded-md shadow-md" />
          <img src={classroom} alt="Classroom" className="w-full h-60 object-cover rounded-md shadow-md" />
          <img src={library} alt="Library" className="w-full h-60 object-cover rounded-md shadow-md" />
        </div>
      )}

      {view === 'videos' && (
        <div className="space-y-4">
          <video controls className="w-full h-auto rounded-md shadow-md">
            <source src={schoolTour} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video controls className="w-full h-auto rounded-md shadow-md">
            <source src={annualFunction} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default Gallery;
