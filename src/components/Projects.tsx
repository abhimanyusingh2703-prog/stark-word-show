const Projects = () => {
  const projects = [
    {
      title: "Brand Identity",
      year: "2024",
      category: "Visual Design",
      description: "Comprehensive brand identity systems that blend strategic thinking with visual craft. Creating cohesive brand experiences across all touchpoints."
    },
    {
      title: "Minimal Bank",
      year: "2024",
      category: "Brand Identity",
      description: "Complete visual identity design for a digital-first banking platform. Focus on trust, simplicity, and accessibility through clean typography and minimal color palette."
    },
    {
      title: "Studio Archive",
      year: "2023",
      category: "Web Design",
      description: "Portfolio website for architecture studio emphasizing negative space and grid systems. Responsive design that adapts beautifully across all devices."
    },
    {
      title: "Type Foundry",
      year: "2023",
      category: "Typography",
      description: "Custom typeface development and brand guidelines for boutique type foundry. Exploration of geometric forms and contemporary letterforms."
    },
    {
      title: "Art Direction Co.",
      year: "2022",
      category: "Creative Direction",
      description: "Brand strategy and visual direction for creative agency. Development of cohesive visual language across digital and print applications."
    }
  ];

  return (
    <section id="projects" className="space-section px-6">
      <div className="max-w-6xl mx-auto">
        <div className="fade-in mb-16">
          <div className="geometric-square mb-6"></div>
          <h2 className="text-display mb-8">
            Selected Work
          </h2>
          <div className="geometric-line mb-8"></div>
          <p className="text-large max-w-2xl text-text-subtle">
            A curated selection of projects that showcase design thinking 
            and creative problem-solving.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-start hover-lift cursor-pointer fade-in fade-in-delay-${index + 1}`}
            >
              <div className="lg:col-span-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="geometric-square opacity-60"></div>
                  <span className="text-sm uppercase tracking-wider text-text-subtle">
                    {project.year}
                  </span>
                </div>
                <h3 className="text-large font-bold mb-2 border border-border bg-background/50 px-4 py-2 rounded-md inline-block">
                  {project.title}
                </h3>
                <p className="text-sm uppercase tracking-wider text-secondary">
                  {project.category}
                </p>
              </div>
              
              <div className="lg:col-span-2">
                <p className="text-body text-text-subtle leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 fade-in-delay-3">
          <div className="geometric-line w-32 mx-auto mb-8"></div>
          <p className="text-body text-text-subtle">
            More projects available upon request
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;