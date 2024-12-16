import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="backdrop-blur-xl bg-black/30 rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-emerald-400">
              Let's Connect
            </h3>
            <p className="text-gray-400 mb-6">
              Whether you want to discuss a project, ask about my experience, or
              just say hello, I'd love to hear from you.
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <Mail className="h-5 w-5 text-emerald-400" />
              <a href="mailto:contact@ayushmishra.com" className="hover:text-emerald-400">
              am77340480@gmail.com
              </a>
            </div>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="Name"
                className="bg-black/20 border-emerald-900/50"
              />
              <Input
                type="email"
                placeholder="Email"
                className="bg-black/20 border-emerald-900/50"
              />
            </div>
            <Input
              placeholder="Subject"
              className="bg-black/20 border-emerald-900/50"
            />
            <Textarea
              placeholder="Message"
              className="bg-black/20 border-emerald-900/50"
              rows={4}
            />
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
              Send Message <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;