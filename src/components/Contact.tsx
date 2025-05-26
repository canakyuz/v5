
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";

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
      title: "Mesaj Gönderildi!",
      description: "En kısa sürede size dönüş yapacağım.",
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
    <section id="contact" className="py-32 px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Left side - Contact info */}
          <div className="col-span-12 lg:col-span-5">
            <div className="space-y-16">
              <div>
                <div className="text-sm font-mono text-gray-400 mb-4">04 — İLETİŞİM</div>
                <h2 className="text-4xl md:text-5xl font-light leading-tight">
                  Hadi bir şeyler
                  <br />
                  <span className="italic">yapalım</span>
                </h2>
              </div>
              
              <div className="space-y-8">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Yeni projeler, yaratıcı işbirlikleri veya sadece merhaba demek için 
                  benimle iletişime geçin.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 mt-1">
                      <Mail className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <div className="text-sm font-mono text-gray-400 mb-1">EMAIL</div>
                      <a href="mailto:john.doe@example.com" className="text-white hover:text-gray-300 transition-colors">
                        john.doe@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 mt-1">
                      <Phone className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <div className="text-sm font-mono text-gray-400 mb-1">TELEFON</div>
                      <span className="text-white">+90 555 123 45 67</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 mt-1">
                      <MapPin className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <div className="text-sm font-mono text-gray-400 mb-1">KONUM</div>
                      <span className="text-white">İstanbul, Türkiye</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Contact form */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono text-gray-400 mb-3 tracking-wider">
                    AD SOYAD
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b border-gray-600 px-0 py-3 text-white placeholder-gray-500 focus:border-white focus:ring-0 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-gray-400 mb-3 tracking-wider">
                    E-POSTA
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b border-gray-600 px-0 py-3 text-white placeholder-gray-500 focus:border-white focus:ring-0 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-mono text-gray-400 mb-3 tracking-wider">
                  MESAJ
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-transparent border-0 border-b border-gray-600 px-0 py-3 text-white placeholder-gray-500 focus:border-white focus:ring-0 transition-colors resize-none"
                  placeholder="Projeniz hakkında bize biraz bilgi verin..."
                />
              </div>
              
              <div className="pt-8">
                <button
                  type="submit"
                  className="group flex items-center space-x-4 text-white hover:text-gray-300 transition-colors"
                >
                  <div className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center group-hover:border-white transition-colors">
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                  <span className="font-medium">Mesaj Gönder</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
