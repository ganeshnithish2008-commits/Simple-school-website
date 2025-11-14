import { GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center space-x-2 mb-4">
            <GraduationCap className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold">Brightwood Academy</span>
          </div>
          <p className="text-gray-400 mb-6 max-w-md">
            Empowering students to achieve their dreams through quality education and dedicated support.
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 Brightwood Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
