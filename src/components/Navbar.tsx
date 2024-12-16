import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'Projects', 'Experience', 'Certifications', 'Contact'];

  return (
    <nav className="py-4 backdrop-blur-md bg-black/30 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
            Ayush Mishra
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-emerald-400 transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/ayushmisshra"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6 text-gray-300 hover:text-emerald-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/ayushmmishra/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6 text-gray-300 hover:text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-black/50 backdrop-blur-lg rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://github.com/ayushmisshra"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6 text-gray-300 hover:text-emerald-400" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ayushmmishra/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6 text-gray-300 hover:text-emerald-400" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;