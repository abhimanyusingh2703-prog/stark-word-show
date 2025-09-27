const Skills = () => {
  const skills = [
    {
      category: "Design",
      items: ["Brand Identity", "Typography", "Layout Design", "Color Theory"]
    },
    {
      category: "Digital",
      items: ["Web Design", "UI/UX", "Prototyping", "Responsive Design"]
    },
    {
      category: "Tools",
      items: ["Adobe Creative Suite", "Figma", "Sketch", "Principle"]
    },
    {
      category: "Strategy",
      items: ["Brand Strategy", "Visual Research", "Design Systems", "Art Direction"]
    }
  ];

  return (
    <section id="skills" className="space-section px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="fade-in mb-16">
          <div className="geometric-square mb-6"></div>
          <h2 className="text-display mb-8">
            Expertise
          </h2>
          <div className="geometric-line mb-8"></div>
          <p className="text-large max-w-2xl text-text-subtle">
            A comprehensive skill set built through years of creative exploration 
            and professional practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skills.map((skill, index) => (
            <div 
              key={skill.category} 
              className={`fade-in fade-in-delay-${index + 1} space-y-6`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="geometric-square"></div>
                <h3 className="text-large font-bold uppercase tracking-wider">
                  {skill.category}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li 
                    key={item}
                    className="text-body text-text-subtle hover:text-foreground transition-fast cursor-default"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;