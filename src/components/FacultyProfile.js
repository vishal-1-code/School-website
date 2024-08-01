
import React from 'react';

function FacultyProfile({ name, position, qualifications, experience }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">{position}</p>
      <p className="text-gray-600">Qualifications: {qualifications}</p>
      <p className="text-gray-600">Experience: {experience} years</p>
    </div>
  );
}

export default FacultyProfile;
