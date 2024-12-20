import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Wifi, Radio } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Aerothon 2024',
      description: 'Developed an autonomous UAV, H configuration drone system with navigation capabilities and object detection using Raspberry Pi 5',
      icon: <Radio className="h-6 w-6 text-emerald-400" />,
      tags: ['Drone Technology', 'Arduino', 'Sensors', 'Matlab', 'Yolov8', 'Mission-Planner', 'Foxxer Camera', "Lidar"],
    },
    {
      title: 'ESC Formation',
      description: 'Formed a ESC using scratch, designed PCB in KiCad.',
      icon: <Wifi className="h-6 w-6 text-emerald-400" />,
      tags: ['IoT', 'ESP32','KiCad', 'PCB Design'],
    },
    {
      title: 'VLSI Design Project',
      description: 'Implemented a custom digital circuit design using modern VLSI techniques.',
      icon: <Cpu className="h-6 w-6 text-emerald-400" />,
      tags: ['VLSI', 'Verilog', 'Digital Design'],
    },
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="backdrop-blur-xl bg-black/30 border-emerald-900/50">
            <CardHeader>
              <div className="flex items-center gap-4">
                {project.icon}
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </div>
              <CardDescription className="text-gray-400">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    variant="secondary"
                    className="bg-emerald-900/30 text-emerald-400"
                  >
                    {tag}
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

export default Projects;