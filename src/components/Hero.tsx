
export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-start px-6 pt-20 relative overflow-hidden">
      {/* Refined background geometric elements */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-full transform translate-x-1/3 -translate-y-1/4 opacity-20 blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gray-900 rounded-full opacity-5"></div>
      
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* Left content - enhanced asymmetric layout */}
          <div className="col-span-12 lg:col-span-8 animate-fade-in">
            <div className="mb-16">
              <div className="text-xs font-departure text-gray-400 mb-6 tracking-[0.2em] uppercase">
                01 — Creative Developer
              </div>
              <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-extralight text-gray-900 leading-[0.85] tracking-tight font-cooper">
                John
                <br />
                <span className="font-normal italic text-gray-600">Doe</span>
              </h1>
            </div>
            
            <div className="max-w-md ml-8 lg:ml-20">
              <p className="text-xl md:text-2xl text-gray-500 leading-[1.6] mb-20 font-departure font-light">
                Sınırları zorlayan dijital deneyimler tasarlıyor, 
                <br />
                <em className="italic text-gray-700">kod ile sanatı buluşturuyorum.</em>
              </p>
              
              <div className="flex flex-col space-y-8">
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group flex items-center text-left"
                >
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mr-6 group-hover:bg-gray-700 transition-all duration-500 group-hover:scale-105">
                    <span className="text-white text-lg transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                  <div>
                    <span className="text-gray-900 font-medium font-departure text-lg">Çalışmalarımı keşfet</span>
                    <div className="text-xs font-departure text-gray-400 mt-1 tracking-wider">PORTFOLIO</div>
                  </div>
                </button>
                
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group flex items-center text-left ml-24"
                >
                  <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center mr-4 group-hover:border-gray-900 group-hover:bg-gray-900 transition-all duration-300">
                    <span className="text-gray-600 group-hover:text-white text-sm transform group-hover:translate-x-0.5 transition-all duration-300">→</span>
                  </div>
                  <div>
                    <span className="text-gray-600 font-departure">İletişime geç</span>
                    <div className="text-xs font-departure text-gray-400 mt-0.5 tracking-wider">CONTACT</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          
          {/* Right content - refined vertical text */}
          <div className="col-span-12 lg:col-span-4 flex justify-end">
            <div className="hidden lg:block relative">
              <div className="writing-mode-vertical text-gray-300 font-departure text-xs tracking-[0.3em] absolute right-8 top-0">
                PORTFOLIO — 2024
              </div>
              <div className="w-px h-32 bg-gradient-to-b from-transparent via-gray-200 to-transparent ml-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
