
import FacultyProfile from '../components/FacultyProfile';

function Faculty() {
  const facultyMembers = [
    { name: 'John Doe', position: 'Principal', qualifications: 'M.Ed', experience: 20 },
    { name: 'Jane Smith', position: 'Vice Principal', qualifications: 'M.Sc. in Physics', experience: 15 },
    { name: 'Emily Johnson', position: 'English Teacher', qualifications: 'M.A. in English', experience: 10 },
    { name: 'Michael Brown', position: 'Mathematics Teacher', qualifications: 'M.Sc. in Mathematics', experience: 8 },
    { name: 'Sophia Davis', position: 'Science Teacher', qualifications: 'M.Sc. in Chemistry', experience: 12 },
    { name: 'David Wilson', position: 'Computer Science Teacher', qualifications: 'B.Tech in Computer Science', experience: 5 }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Faculty</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {facultyMembers.map((member) => (
          <FacultyProfile
            key={member.name}
            name={member.name}
            position={member.position}
            qualifications={member.qualifications}
            experience={member.experience}
          />
        ))}
      </div>
    </div>
  );
}

export default Faculty;
