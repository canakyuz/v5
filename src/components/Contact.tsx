
import { useState } from "react";
import { Mail, MapPin, Phone, ArrowRight, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { contactContent } from "@/content/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    toast({
      title: contactContent.toast.success.title,
      description: contactContent.toast.success.description,
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getIconComponent = (iconName: string) => {
    const icons = { Github, Linkedin, Twitter, Instagram };
    return icons[iconName as keyof typeof icons] || Github;
  };

  return (
    <section id="contact" className="py-40 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-16">
          {/* Left side - Header & Info */}
          <div className="col-span-12 lg:col-span-5 space-y-12">
            {/* Header */}
            <div>
              <div className="flex items-center space-x-4 text-xs font-departure text-gray-400 tracking-[0.2em] uppercase mb-8">
                <div className="w-8 h-px bg-gray-300"></div>
                <span>{contactContent.sectionNumber}</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-cooper font-light leading-[0.8] mb-8 text-gray-900">
                {contactContent.title.main}
                <br />
                <span className="italic text-gray-500">{contactContent.title.accent}</span>
              </h2>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed font-inter font-light max-w-lg">
              {contactContent.description}
            </p>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-gray-400" />
                <a 
                  href={contactContent.contactInfo.email.href} 
                  className="text-gray-700 hover:text-gray-900 transition-colors font-inter"
                >
                  {contactContent.contactInfo.email.value}
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-gray-400" />
                <a 
                  href={contactContent.contactInfo.phone.href}
                  className="text-gray-700 hover:text-gray-900 transition-colors font-inter"
                >
                  {contactContent.contactInfo.phone.value}
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700 font-inter">
                  {contactContent.contactInfo.location.value}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-xs font-departure text-gray-400 mb-6 tracking-[0.2em] uppercase">
                {contactContent.social.title}
              </h3>
              <div className="flex space-x-3">
                {contactContent.social.links.map((social) => {
                  const IconComponent = getIconComponent(social.icon);
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-600 hover:bg-gray-900 transition-all duration-300 group"
                      aria-label={social.name}
                    >
                      <IconComponent size={16} className="text-gray-600 group-hover:text-white transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Right side - Contact Form */}
          <div className="col-span-12 lg:col-span-7">
            <div className="bg-gray-50 p-8 lg:p-12 rounded-lg">
              <div className="mb-8">
                <h3 className="text-2xl font-cooper font-light text-gray-900 mb-2">
                  {contactContent.form.title}
                </h3>
                <div className="w-16 h-px bg-gray-300"></div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                      {contactContent.form.fields.name.label}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={contactContent.form.fields.name.placeholder}
                      required={contactContent.form.fields.name.required}
                      className="h-12 border-gray-200 focus:border-gray-600 focus:ring-gray-600 bg-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      {contactContent.form.fields.email.label}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={contactContent.form.fields.email.placeholder}
                      required={contactContent.form.fields.email.required}
                      className="h-12 border-gray-200 focus:border-gray-600 focus:ring-gray-600 bg-white"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    {contactContent.form.fields.subject.label}
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={contactContent.form.fields.subject.placeholder}
                    required={contactContent.form.fields.subject.required}
                    className="h-12 border-gray-200 focus:border-gray-600 focus:ring-gray-600 bg-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                    {contactContent.form.fields.message.label}
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={contactContent.form.fields.message.placeholder}
                    required={contactContent.form.fields.message.required}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:border-gray-600 focus:ring-2 focus:ring-gray-600 focus:ring-opacity-20 resize-none transition-colors bg-white"
                  />
                </div>
                
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white font-medium transition-all duration-300 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        {contactContent.form.submitButton.loadingText}
                      </>
                    ) : (
                      <>
                        {contactContent.form.submitButton.text}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
