const Contact = () => {
  return (
    <section id="contact" className="space-section px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="fade-in">
            <div className="geometric-square mb-6"></div>
            <h2 className="text-display mb-8">
              Let's Create
              <br />
              Something Together
            </h2>
            <div className="geometric-line mb-8"></div>
            <p className="text-large text-text-subtle leading-relaxed">
              I'm always interested in new opportunities and creative challenges. 
              Whether you have a project in mind or just want to connect, 
              I'd love to hear from you.
            </p>
          </div>

          <div className="space-y-8 fade-in-delay-1">
            <div className="space-y-6">
              <div className="flex items-center gap-4 hover-lift cursor-pointer">
                <div className="geometric-square"></div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-text-subtle mb-1">
                    Email
                  </p>
                  <a 
                    href="mailto:abhimanyusingh2703@gmail.com" 
                    className="text-large hover:text-secondary transition-fast"
                  >
                    abhimanyusingh2703@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 hover-lift cursor-pointer">
                <div className="geometric-square opacity-60"></div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-text-subtle mb-1">
                    LinkedIn
                  </p>
                  <a 
                    href="https://linkedin.com/in/abhimanyupannu" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-large hover:text-secondary transition-fast"
                  >
                    /abhimanyupannu
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 hover-lift cursor-pointer">
                <div className="geometric-square opacity-30"></div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-text-subtle mb-1">
                    Instagram
                  </p>
                  <a 
                    href="https://instagram.com/afterthought.flac.raw" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-large hover:text-secondary transition-fast"
                  >
                    @afterthought.flac.raw
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 fade-in-delay-2">
              <div className="geometric-line mb-6"></div>
              <p className="text-sm uppercase tracking-wider text-text-subtle">
                Currently accepting freelance projects
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 pt-16 border-t border-section-divider fade-in-delay-3">
          <div className="geometric-square mx-auto mb-4"></div>
          <p className="text-sm uppercase tracking-wider text-text-subtle">
            © 2024 Abhimanyu Pannu. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;