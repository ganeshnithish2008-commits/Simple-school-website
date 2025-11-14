import { Code, Calculator, FlaskConical, Languages, Music, Palette } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      icon: Code,
      title: 'Computer Science',
      description: 'Programming, web development, and software engineering fundamentals',
      duration: '4 years',
      level: 'All levels'
    },
    {
      icon: Calculator,
      title: 'Mathematics',
      description: 'From algebra to calculus, building strong analytical skills',
      duration: '4 years',
      level: 'All levels'
    },
    {
      icon: FlaskConical,
      title: 'Sciences',
      description: 'Biology, chemistry, and physics with hands-on laboratory work',
      duration: '4 years',
      level: 'All levels'
    },
    {
      icon: Languages,
      title: 'Languages',
      description: 'Spanish, French, and Mandarin with cultural immersion',
      duration: '2-4 years',
      level: 'Beginner to Advanced'
    },
    {
      icon: Music,
      title: 'Performing Arts',
      description: 'Music, theater, and dance programs for creative expression',
      duration: '1-4 years',
      level: 'All levels'
    },
    {
      icon: Palette,
      title: 'Visual Arts',
      description: 'Drawing, painting, sculpture, and digital art',
      duration: '1-4 years',
      level: 'All levels'
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive curriculum designed to inspire curiosity and foster academic excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-4">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
