import { useState } from "react";
import { Mail, MapPin, Phone, ArrowRight, Github, Linkedin, ExternalLink } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { contactContent } from "@/content/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { stylesContent } from "@/content/styles";
import { SectionHeader } from "@/components/SectionHeader";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getIconComponent = (iconName: string) => {
    const icons = { Github, Linkedin, ExternalLink, Mail };
    return icons[iconName as keyof typeof icons] || Github;
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
      <div className="">
        <div className={stylesContent.grid.main}>
          {/* Left side - Header & Info */}
          <SectionHeader
            sectionNumber={contactContent.sectionNumber}
            title={{
              main: contactContent.title.main,
              accent: contactContent.title.accent
            }}
            description={contactContent.description}
          />
          
          {/* Right side - Contact Form */}
          <div className={stylesContent.grid.content}>
            <div className={`group relative overflow-hidden ${stylesContent.colors.background.card} ${stylesContent.colors.border.light} border backdrop-blur-sm p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500`}>
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-24 md:w-32 h-1 bg-gradient-to-r from-blue-500/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="mb-4 md:mb-6 relative z-10">
                <h3 className={`text-lg md:text-xl ${stylesContent.fonts.primary} font-light ${stylesContent.colors.primary.main} mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300`}>
                  {contactContent.form.title}
                </h3>
                <div className={`w-10 md:w-12 h-px ${stylesContent.colors.border.medium} group-hover:bg-blue-500/50 transition-colors duration-500`}></div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5 relative z-10">
                <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                  <div className="space-y-1.5 md:space-y-2">
                    <Label htmlFor="name" className={`text-xs md:text-sm font-medium ${stylesContent.colors.primary.light} group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300`}>
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
                      className={`h-9 md:h-10 text-sm ${stylesContent.colors.border.light} border focus:border-blue-500 focus:ring-blue-500 ${stylesContent.colors.background.lighter} group-hover:border-blue-500/30 transition-colors duration-300`}
                    />
                  </div>
                  
                  <div className="space-y-1.5 md:space-y-2">
                    <Label htmlFor="email" className={`text-xs md:text-sm font-medium ${stylesContent.colors.primary.light} group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300`}>
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
                      className={`h-9 md:h-10 text-sm ${stylesContent.colors.border.light} border focus:border-blue-500 focus:ring-blue-500 ${stylesContent.colors.background.lighter} group-hover:border-blue-500/30 transition-colors duration-300`}
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5 md:space-y-2">
                  <Label htmlFor="message" className={`text-xs md:text-sm font-medium ${stylesContent.colors.primary.light} group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300`}>
                    {contactContent.form.fields.message.label}
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={contactContent.form.fields.message.placeholder}
                    required={contactContent.form.fields.message.required}
                    rows={3}
                    className={`w-full px-3 py-2 text-sm border ${stylesContent.colors.border.light} rounded-lg md:rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 resize-none ${stylesContent.animations.transition.colors} ${stylesContent.colors.background.lighter} ${stylesContent.colors.primary.main} group-hover:border-blue-500/30 transition-colors duration-300`}
                  />
                </div>
                
                <div className="pt-1 md:pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full h-9 md:h-10 text-sm ${stylesContent.buttons.primary} group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:border-blue-500/50 transition-all duration-500 group-hover:shadow-md group-hover:shadow-blue-500/20 disabled:opacity-70 disabled:cursor-not-allowed`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 md:w-4 md:h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        {contactContent.form.submitButton.loadingText}
                      </>
                    ) : (
                      <>
                        {contactContent.form.submitButton.text}
                        <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 ml-1.5 md:ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
              </form>

              {/* Contact Information - Minimal */}
              <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-gray-200 dark:border-gray-800 group-hover:border-blue-500/20 transition-colors duration-300 relative z-10">
                <div className="flex flex-wrap gap-3 md:gap-4">
                  <a 
                    href={contactContent.contactInfo.email.href} 
                    className={`flex items-center space-x-1.5 md:space-x-2 ${stylesContent.colors.primary.light} ${stylesContent.animations.hover.color} ${stylesContent.animations.transition.colors} ${stylesContent.fonts.secondary} text-xs md:text-sm hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-300`}
                  >
                    <Mail size={12} className={`${stylesContent.colors.primary.accent} group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300`} />
                    <span>{contactContent.contactInfo.email.value}</span>
                  </a>
                  
                  <a 
                    href={contactContent.contactInfo.phone.href}
                    className={`flex items-center space-x-1.5 md:space-x-2 ${stylesContent.colors.primary.light} ${stylesContent.animations.hover.color} ${stylesContent.animations.transition.colors} ${stylesContent.fonts.secondary} text-xs md:text-sm hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-300`}
                  >
                    <Phone size={12} className={`${stylesContent.colors.primary.accent} group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300`} />
                    <span>{contactContent.contactInfo.phone.value}</span>
                  </a>
                  
                  <div className={`flex items-center space-x-1.5 md:space-x-2 ${stylesContent.colors.primary.light} ${stylesContent.fonts.secondary} text-xs md:text-sm group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300`}>
                    <MapPin size={12} className={`${stylesContent.colors.primary.accent} group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300`} />
                    <span>{contactContent.contactInfo.location.value}</span>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="mt-3 md:mt-4 flex space-x-2 md:space-x-3">
                  {contactContent.social.links.map((social) => {
                    const IconComponent = getIconComponent(social.icon);
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-8 h-8 md:w-10 md:h-10 border ${stylesContent.colors.border.light} rounded-lg md:rounded-xl flex items-center justify-center hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300`}
                        aria-label={social.name}
                      >
                        <IconComponent size={14} className={`${stylesContent.colors.primary.accent} hover:text-blue-500 dark:hover:text-blue-400 ${stylesContent.animations.transition.colors}`} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
