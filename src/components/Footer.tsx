import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 mt-16 backdrop-blur-md bg-black/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2024 Ayush Mishra. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/ayushmisshra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ayushmmishra/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:am77340480@gmail.com"
              className="text-gray-400 hover:text-emerald-400"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;