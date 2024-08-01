
function Admissions() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Admissions</h2>
      <h3 className="text-2xl font-semibold mb-2">Admission Process</h3>
      <p>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
      <h3 className="text-2xl font-semibold mb-2 mt-4">Admission Criteria</h3>
      <p>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
      <h3 className="text-2xl font-semibold mb-2 mt-4">Important Dates</h3>
      <ul className="list-disc ml-6">
        <li>Admission Form Availability: March 1st</li>
        <li>Last Date for Submission: March 31st</li>
        <li>Entrance Test: April 15th</li>
        <li>Announcement of Results: April 30th</li>
      </ul>
    </div>
  );
}

export default Admissions;
