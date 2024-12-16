import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: 'Drone Technology Intern',
      company: 'Tech Innovations Lab',
      period: 'Summer 2023',
      description: 'Worked on developing autonomous drone systems and implementing advanced navigation algorithms.',
      skills: ['Drone Programming', 'Sensor Integration', 'Flight Control'],
    },
    {
      title: 'IoT Research Assistant',
      company: 'ABES Engineering College',
      period: '2023 - Present',
      description: 'Conducting research on IoT applications in smart agriculture and environmental monitoring.',
      skills: ['IoT Protocols', 'Sensor Networks', 'Data Analysis'],
    },
  ];

  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
        Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="backdrop-blur-xl bg-black/30 border-emerald-900/50">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-emerald-400">{exp.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {exp.company} • {exp.period}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="bg-emerald-900/30 text-emerald-400"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;