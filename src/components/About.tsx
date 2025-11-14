import { Users, Award, BookOpen, Sparkles } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from experienced educators passionate about student success'
    },
    {
      icon: Award,
      title: 'Accredited Programs',
      description: 'Nationally recognized curriculum and certification programs'
    },
    {
      icon: BookOpen,
      title: 'Modern Resources',
      description: 'State-of-the-art facilities and learning materials'
    },
    {
      icon: Sparkles,
      title: 'Student-Centered',
      description: 'Personalized learning paths tailored to individual needs'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Brightwood Academy</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            For over 50 years, we've been committed to providing exceptional education
            that prepares students for success in an ever-changing world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
