
import React from 'react';

const Testimonial = ({ quote, author }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="italic">"{quote}"</p>
    <p className="font-semibold mt-4">- {author}</p>
  </div>
);

export default Testimonial;
