
import { useState } from "react";
import { Mail, MapPin, Phone, ArrowRight, Github, Linkedin, ExternalLink } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { contactContent } from "@/content/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { stylesContent } from "@/content/styles";

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
    const icons = { Github, Linkedin, ExternalLink, Mail };
    return icons[iconName as keyof typeof icons] || Github;
  };

  return (
    <section id="contact" className={`${stylesContent.spacing.section.padding} ${stylesContent.spacing.content.padding} bg-gradient-to-br from-slate-950 via-gray-900 to-gray-950`}>
      <div className={stylesContent.spacing.content.maxWidth}>
        <div className={stylesContent.grid.main}>
          {/* Left side - Header & Info */}
          <div className={`${stylesContent.grid.sidebar} space-y-12`}>
            {/* Header */}
            <div>
              <div className={`flex items-center space-x-4 text-xs ${stylesContent.fonts.mono} ${stylesContent.colors.primary.accent} tracking-[0.2em] uppercase mb-8`}>
                <div className={`w-8 h-px ${stylesContent.colors.border.medium}`}></div>
                <span>{contactContent.sectionNumber}</span>
              </div>
              <h2 className={`${stylesContent.typography.section.title} ${stylesContent.fonts.primary} font-light leading-[0.8] mb-8 ${stylesContent.colors.primary.main}`}>
                {contactContent.title.main}
                <br />
                <span className={`italic ${stylesContent.colors.primary.light}`}>{contactContent.title.accent}</span>
              </h2>
            </div>

            <p className={`${stylesContent.typography.hero.description} ${stylesContent.colors.primary.light} leading-relaxed ${stylesContent.fonts.secondary} font-light max-w-lg`}>
              {contactContent.description}
            </p>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 ${stylesContent.colors.background.card} ${stylesContent.colors.border.light} border rounded-xl flex items-center justify-center`}>
                  <Mail size={16} className={stylesContent.colors.primary.accent} />
                </div>
                <a 
                  href={contactContent.contactInfo.email.href} 
                  className={`${stylesContent.colors.primary.light} ${stylesContent.animations.hover.color} ${stylesContent.animations.transition.colors} ${stylesContent.fonts.secondary}`}
                >
                  {contactContent.contactInfo.email.value}
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 ${stylesContent.colors.background.card} ${stylesContent.colors.border.light} border rounded-xl flex items-center justify-center`}>
                  <Phone size={16} className={stylesContent.colors.primary.accent} />
                </div>
                <a 
                  href={contactContent.contactInfo.phone.href}
                  className={`${stylesContent.colors.primary.light} ${stylesContent.animations.hover.color} ${stylesContent.animations.transition.colors} ${stylesContent.fonts.secondary}`}
                >
                  {contactContent.contactInfo.phone.value}
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 ${stylesContent.colors.background.card} ${stylesContent.colors.border.light} border rounded-xl flex items-center justify-center`}>
                  <MapPin size={16} className={stylesContent.colors.primary.accent} />
                </div>
                <span className={`${stylesContent.colors.primary.light} ${stylesContent.fonts.secondary}`}>
                  {contactContent.contactInfo.location.value}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className={`pt-8 ${stylesContent.colors.border.light} border-t`}>
              <h3 className={`text-xs ${stylesContent.fonts.mono} ${stylesContent.colors.primary.accent} mb-6 tracking-[0.2em] uppercase`}>
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
                      className={`${stylesContent.buttons.icon} ${stylesContent.animations.transition.default} group`}
                      aria-label={social.name}
                    >
                      <IconComponent size={16} className={`${stylesContent.colors.primary.accent} group-hover:text-blue-400 ${stylesContent.animations.transition.colors}`} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Right side - Contact Form */}
          <div className={stylesContent.grid.content}>
            <div className={`${stylesContent.colors.background.card} ${stylesContent.colors.border.light} border backdrop-blur-sm p-8 lg:p-12 rounded-2xl`}>
              <div className="mb-8">
                <h3 className={`text-2xl ${stylesContent.fonts.primary} font-light ${stylesContent.colors.primary.main} mb-2`}>
                  {contactContent.form.title}
                </h3>
                <div className={`w-16 h-px ${stylesContent.colors.border.medium}`}></div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className={`text-sm font-medium ${stylesContent.colors.primary.light}`}>
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
                      className={`h-12 ${stylesContent.colors.border.light} border focus:border-blue-500 focus:ring-blue-500 ${stylesContent.colors.background.lighter}`}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className={`text-sm font-medium ${stylesContent.colors.primary.light}`}>
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
                      className={`h-12 ${stylesContent.colors.border.light} border focus:border-blue-500 focus:ring-blue-500 ${stylesContent.colors.background.lighter}`}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className={`text-sm font-medium ${stylesContent.colors.primary.light}`}>
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
                    className={`h-12 ${stylesContent.colors.border.light} border focus:border-blue-500 focus:ring-blue-500 ${stylesContent.colors.background.lighter}`}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className={`text-sm font-medium ${stylesContent.colors.primary.light}`}>
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
                    className={`w-full px-4 py-3 border ${stylesContent.colors.border.light} rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 resize-none ${stylesContent.animations.transition.colors} ${stylesContent.colors.background.lighter} ${stylesContent.colors.primary.main}`}
                  />
                </div>
                
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full h-12 ${stylesContent.buttons.primary} group disabled:opacity-70 disabled:cursor-not-allowed`}
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
