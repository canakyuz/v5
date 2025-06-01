
import { useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";
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
    <section id="contact" className="py-24 lg:py-32 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-gray-100/50 bg-[size:20px_20px] opacity-30"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="text-xs font-departure text-gray-500 mb-6 tracking-[0.3em] uppercase">
            {contactContent.sectionNumber}
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-cooper font-light leading-[0.9] mb-6 text-gray-900">
            {contactContent.title.main}
            <br />
            <span className="italic text-blue-600">{contactContent.title.accent}</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            {contactContent.subtitle}
          </p>
          <div className="w-24 h-px bg-gray-300 mx-auto mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Contact Info & Social */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-12 font-light">
                {contactContent.description}
              </p>
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="group">
                  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-departure text-gray-500 mb-2 tracking-[0.2em] uppercase">
                        {contactContent.contactInfo.email.label}
                      </div>
                      <a 
                        href={contactContent.contactInfo.email.href} 
                        className="text-gray-900 hover:text-blue-600 transition-colors font-medium text-lg"
                      >
                        {contactContent.contactInfo.email.value}
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-100 transition-colors">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-departure text-gray-500 mb-2 tracking-[0.2em] uppercase">
                        {contactContent.contactInfo.phone.label}
                      </div>
                      <a 
                        href={contactContent.contactInfo.phone.href}
                        className="text-gray-900 hover:text-green-600 transition-colors font-medium text-lg"
                      >
                        {contactContent.contactInfo.phone.value}
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300">
                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-departure text-gray-500 mb-2 tracking-[0.2em] uppercase">
                        {contactContent.contactInfo.location.label}
                      </div>
                      <span className="text-gray-900 font-medium text-lg">
                        {contactContent.contactInfo.location.value}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-xs font-departure text-gray-500 mb-6 tracking-[0.2em] uppercase">
                {contactContent.social.title}
              </h3>
              <div className="flex space-x-4">
                {contactContent.social.links.map((social) => {
                  const IconComponent = getIconComponent(social.icon);
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 transition-all duration-300 group shadow-sm"
                      aria-label={social.name}
                    >
                      <IconComponent size={20} className="text-gray-600 group-hover:text-white transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-cooper font-light text-gray-900 mb-4">
                  {contactContent.form.title}
                </h3>
                <div className="w-16 h-px bg-gray-300"></div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
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
                      className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                    />
                  </div>
                  
                  <div className="space-y-3">
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
                      className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
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
                    className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                  />
                </div>
                
                <div className="space-y-3">
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
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 resize-none transition-colors"
                  />
                </div>
                
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-medium text-lg transition-all duration-300 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                        {contactContent.form.submitButton.loadingText}
                      </>
                    ) : (
                      <>
                        {contactContent.form.submitButton.text}
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
