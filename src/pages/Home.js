import React from 'react';
import Carousel from '../components/Carousel';
import Highlight from '../components/Highlight';
import Testimonial from '../components/Testimonial';
import heroBg from '../assets/images/hero-bg.jpg';  // Ensure this path is correct
import classroomImg from '../assets/images/classroom.jpg';
import libraryImg from '../assets/images/library.jpg';
import sportsDay from '../assets/images/sports_day.jpg';
import scienceExhibition from '../assets/images/science_exhibition.jpg';
import culturalFest from '../assets/images/cultural_fest.jpg';
import schoolTour from '../assets/images/videos/school_tour.mp4';  // Ensure this path is correct
import annualFunction from '../assets/images/videos/annual_function.mp4';  // Ensure this path is correct

const highlights = [
  {
    icon: 'https://via.placeholder.com/50',  // Placeholder for icons
    title: 'Quality Education',
    description: 'Top-notch curriculum and experienced teachers.'
  },
  {
    icon: 'https://via.placeholder.com/50',
    title: 'Modern Facilities',
    description: 'State-of-the-art labs, classrooms, and sports facilities.'
  },
  {
    icon: 'https://via.placeholder.com/50',
    title: 'Extracurricular Activities',
    description: 'Wide range of clubs and activities for all interests.'
  },
];

const testimonials = [
  {
    quote: 'Springdale has provided an incredible learning environment for my child.',
    author: 'Jane Doe, Parent'
  },
  {
    quote: 'The teachers are dedicated and the facilities are amazing.',
    author: 'John Smith, Student'
  },
];

const Home = () => (
  <div>
    {/* Hero Section */}
    <section
      className="relative h-64 bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center p-6">
        <h1 className="text-4xl font-bold mb-4">Welcome to Springdale Public School</h1>
        <p className="text-lg mb-8">Nurturing young minds for a brighter future.</p>
        <a href="/admissions" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Apply Now</a>
      </div>
    </section>

    {/* Carousel */}
    <Carousel />

    {/* Highlights Section */}
    <section className="container mx-auto p-6 my-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((highlight, index) => (
          <Highlight
            key={index}
            icon={highlight.icon}
            title={highlight.title}
            description={highlight.description}
          />
        ))}
      </div>
    </section>

    {/* About Us Section */}
    <section className="bg-gray-100 p-6">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 mb-4">
          Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
          Our vision is to create a learning environment that fosters academic excellence, critical thinking, and ethical values.
        </p>
        <a href="/about-us" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Learn More</a>
      </div>
    </section>

    {/* Academics Section */}
    <section className="container mx-auto p-6 my-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Academics</h2>
      <p className="text-gray-700 mb-4 text-center">
        We offer a comprehensive curriculum designed to foster academic growth and personal development. Our teaching methodologies combine traditional and modern approaches.
      </p>
      <a href="/academics" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Explore Curriculum</a>
    </section>

    {/* Admissions Section */}
    <section className="bg-gray-200 p-6">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Admissions</h2>
        <p className="text-gray-700 mb-4">
          We are now accepting applications for the upcoming academic year. Visit our Admissions page for details on the application process and deadlines.
        </p>
        <a href="/admissions" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Apply Now</a>
      </div>
    </section>

    {/* Faculty Section */}
    <section className="container mx-auto p-6 my-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Meet Our Faculty</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img src={classroomImg} alt="Faculty Member" className="w-full h-32 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold mb-2">Dr. Jane Smith</h3>
          <p className="text-gray-600">Head of Mathematics Department, Ph.D. in Mathematics</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img src={libraryImg} alt="Faculty Member" className="w-full h-32 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold mb-2">Mr. John Doe</h3>
          <p className="text-gray-600">Senior Physics Teacher, M.Sc. in Physics</p>
        </div>
        {/* Add more faculty profiles as needed */}
      </div>
    </section>

    {/* Gallery Section */}
    <section className="container mx-auto p-6 my-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <img src={sportsDay} alt="Sports Day" className="w-full h-48 object-cover rounded-lg shadow-md" />
        <img src={scienceExhibition} alt="Science Exhibition" className="w-full h-48 object-cover rounded-lg shadow-md" />
        <img src={culturalFest} alt="Cultural Fest" className="w-full h-48 object-cover rounded-lg shadow-md" />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">Videos</h3>
        <video controls className="w-full h-auto mb-4">
          <source src={schoolTour} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls className="w-full h-auto">
          <source src={annualFunction} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>

    {/* Testimonials Section */}
     <section className="container mx-auto p-6 my-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Testimonials</h2>
      <div className="space-y-6">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
          />
        ))}
      </div>
    </section> 
  </div>
);

export default Home;
