const About = () => {
  return <section id="about" className="space-section px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="fade-in">
            <div className="geometric-square mb-6"></div>
            <h2 className="text-display mb-8">
              Design Philosophy
            </h2>
            <div className="geometric-line mb-8"></div>
          </div>
          
          <div className="space-y-8 fade-in-delay-1">
            <p className="text-large leading-relaxed">
              I believe in the power of simplicity. Every element serves a purpose, 
              every decision is intentional, and every design tells a story.
            </p>
            
            <p className="text-body text-text-subtle leading-relaxed">I specialize in creating visual identities that resonate. My approach combines strategic thinking with aesthetic sensibility to deliver solutions that are both beautiful and effective.</p>
            
            <div className="space-y-4 fade-in-delay-2">
              <div className="flex items-center gap-4">
                <div className="geometric-square opacity-60"></div>
                <span className="text-sm uppercase tracking-wider text-text-subtle">
                  Based in New Delhi, India
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="geometric-square opacity-60"></div>
                <span className="text-sm uppercase tracking-wider text-text-subtle">
                  Available for freelance projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;