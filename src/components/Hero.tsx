
export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-start px-6 pt-20 relative overflow-hidden">
      {/* Background geometric element */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gray-100 rounded-full transform translate-x-1/2 -translate-y-1/4 opacity-30"></div>
      
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* Left content - asymmetric layout */}
          <div className="col-span-12 lg:col-span-7 animate-fade-in">
            <div className="mb-8">
              <div className="text-sm font-mono text-gray-500 mb-2">01 — CREATIVE DEVELOPER</div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight text-gray-900 leading-none tracking-tight">
                John
                <br />
                <span className="font-normal italic">Doe</span>
              </h1>
            </div>
            
            <div className="max-w-lg ml-4 lg:ml-12">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12">
                Sınırları zorlayan dijital deneyimler tasarlıyor, 
                kod ile sanatı buluşturuyorum.
              </p>
              
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group flex items-center text-left"
                >
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4 group-hover:bg-gray-700 transition-colors">
                    <span className="text-white text-sm">→</span>
                  </div>
                  <span className="text-gray-900 font-medium">Çalışmalarımı keşfet</span>
                </button>
                
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group flex items-center text-left ml-16"
                >
                  <div className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center mr-4 group-hover:border-gray-900 transition-colors">
                    <span className="text-gray-600 text-xs">→</span>
                  </div>
                  <span className="text-gray-600">İletişime geç</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Right content - vertical text */}
          <div className="col-span-12 lg:col-span-5 flex justify-end">
            <div className="hidden lg:block">
              <div className="writing-mode-vertical text-gray-400 font-mono text-sm tracking-wider">
                PORTFOLIO — 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
