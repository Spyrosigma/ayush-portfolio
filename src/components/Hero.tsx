import { Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16">
      <div className="backdrop-blur-xl bg-black/30 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row">
        <div className="max-w-3xl md:w-2/3">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
              Electronics Engineer
            </span>
            <br />& VLSI Designer
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-8">
            ECE Student at ABES Engineering College (2022-26) passionate about VLSI,
            IoT, and Drone Technology. Turning innovative ideas into reality through
            electronics and programming.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://docs.google.com/document/d/1Wtc5XZnYiKA5_vIf91FDf67ykvlGjpojBN8b8uPW8xc/edit?usp=drivesdk"
              target="_blank"
              className="bg-emerald-600 hover:bg-emerald-700 inline-flex items-center px-4 py-2 rounded-md text-white"
            >
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
            <a
              href="#projects"
              className="border-emerald-600 text-emerald-400 inline-flex items-center px-4 py-2 rounded-md border"
            >
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0 md:ml-8 flex justify-center items-center">
          <img src="/ayush_portfolio.jpg" alt="Ayush Portfolio" className="rounded-3xl w-80 h-80 object-cover p-4" />
        </div>
      </div>
    </section>
  );
};

export default Hero;