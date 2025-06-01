
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { contactContent } from "@/content/contact";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: contactContent.toast.title,
      description: contactContent.toast.description,
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-40 px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-12">
          {/* Left side - Contact info */}
          <div className="col-span-12 lg:col-span-5">
            <div className="space-y-20">
              <div>
                <div className="text-xs font-departure text-gray-500 mb-8 tracking-[0.2em] uppercase">{contactContent.sectionNumber}</div>
                <h2 className="text-5xl md:text-7xl font-cooper font-extralight leading-[0.9] mb-8">
                  {contactContent.title.main}
                  <br />
                  <span className="italic text-gray-400">{contactContent.title.accent}</span>
                </h2>
                <div className="w-24 h-px bg-gray-700 mt-8"></div>
              </div>
              
              <div className="space-y-12">
                <p className="text-xl text-gray-300 leading-[1.6] font-inter font-light max-w-md">
                  {contactContent.description}
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-6 group hover:transform hover:translate-x-2 transition-all duration-300">
                    <div className="w-8 h-8 mt-2 flex items-center justify-center bg-gray-800 rounded-full group-hover:bg-gray-700 transition-colors">
                      <Mail className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs font-departure text-gray-500 mb-2 tracking-[0.2em] uppercase">{contactContent.contactInfo.email.label}</div>
                      <a href={`mailto:${contactContent.contactInfo.email.value}`} className="text-white hover:text-gray-300 transition-colors font-inter text-lg">
                        {contactContent.contactInfo.email.value}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6 group hover:transform hover:translate-x-2 transition-all duration-300">
                    <div className="w-8 h-8 mt-2 flex items-center justify-center bg-gray-800 rounded-full group-hover:bg-gray-700 transition-colors">
                      <Phone className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs font-departure text-gray-500 mb-2 tracking-[0.2em] uppercase">{contactContent.contactInfo.phone.label}</div>
                      <span className="text-white font-inter text-lg">{contactContent.contactInfo.phone.value}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6 group hover:transform hover:translate-x-2 transition-all duration-300">
                    <div className="w-8 h-8 mt-2 flex items-center justify-center bg-gray-800 rounded-full group-hover:bg-gray-700 transition-colors">
                      <MapPin className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs font-departure text-gray-500 mb-2 tracking-[0.2em] uppercase">{contactContent.contactInfo.location.label}</div>
                      <span className="text-white font-inter text-lg">{contactContent.contactInfo.location.value}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Contact form */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-xs font-departure text-gray-500 mb-4 tracking-[0.2em] uppercase">
                    {contactContent.form.fields.name.label}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b border-gray-700 px-0 py-4 text-white placeholder-gray-600 focus:border-white focus:ring-0 transition-colors font-inter text-lg"
                    placeholder={contactContent.form.fields.name.placeholder}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs font-departure text-gray-500 mb-4 tracking-[0.2em] uppercase">
                    {contactContent.form.fields.email.label}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b border-gray-700 px-0 py-4 text-white placeholder-gray-600 focus:border-white focus:ring-0 transition-colors font-inter text-lg"
                    placeholder={contactContent.form.fields.email.placeholder}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-departure text-gray-500 mb-4 tracking-[0.2em] uppercase">
                  {contactContent.form.fields.message.label}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-transparent border-0 border-b border-gray-700 px-0 py-4 text-white placeholder-gray-600 focus:border-white focus:ring-0 transition-colors resize-none font-inter text-lg"
                  placeholder={contactContent.form.fields.message.placeholder}
                />
              </div>
              
              <div className="pt-12">
                <button
                  type="submit"
                  className="group flex items-center space-x-6 text-white hover:text-gray-300 transition-all duration-300"
                >
                  <div className="w-16 h-16 border border-gray-700 rounded-full flex items-center justify-center group-hover:border-white group-hover:bg-white transition-all duration-300">
                    <span className="transform group-hover:translate-x-1 group-hover:text-gray-900 text-lg transition-all duration-300">→</span>
                  </div>
                  <div>
                    <span className="font-medium font-inter text-lg">{contactContent.form.cta.text}</span>
                    <div className="text-xs font-departure text-gray-500 mt-1 tracking-[0.2em] uppercase">{contactContent.form.cta.label}</div>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
