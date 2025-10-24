const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-6xl w-full">
        <div className="fade-in">
          <div className="geometric-square mb-8"></div>
          <h1 className="text-hero mb-6">
            ABHIMANYU
            <br />
            PANNU
          </h1>
          <div className="flex items-center gap-4 mb-8">
            <div className="geometric-line w-16"></div>
            <p className="text-large text-text-subtle uppercase tracking-wider">JUNIOR CREATIVE DESIGNER</p>
          </div>
          <p className="text-large max-w-2xl leading-relaxed fade-in-delay-1">
            Crafting minimal, impactful design solutions that bridge 
            the gap between aesthetic beauty and functional purpose.
          </p>
        </div>
      </div>
      
      {/* Geometric accent */}
      <div className="absolute bottom-12 right-12 fade-in-delay-2">
        <div className="flex flex-col gap-2">
          <div className="geometric-square"></div>
          <div className="geometric-square opacity-60"></div>
          <div className="geometric-square opacity-30"></div>
        </div>
      </div>
    </section>;
};
export default Hero;