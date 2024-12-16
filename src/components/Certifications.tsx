import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'IoT Fundamentals',
      issuer: 'Cisco Networking Academy',
      date: '2023',
      description: 'Comprehensive certification in IoT architecture and implementation.',
    },
    {
      title: 'VLSI Design Essentials',
      issuer: 'NPTEL',
      date: '2023',
      description: 'Advanced course in VLSI design principles and methodologies.',
    },
    {
      title: 'Drone Technology Specialist',
      issuer: 'Tech Innovations Lab',
      date: '2023',
      description: 'Professional certification in drone systems and autonomous flight.',
    },
  ];

  return (
    <section id="certifications" className="py-16">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
        Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <Card key={index} className="backdrop-blur-xl bg-black/30 border-emerald-900/50">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Award className="h-6 w-6 text-emerald-400" />
                <div>
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {cert.issuer} • {cert.date}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{cert.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Certifications;