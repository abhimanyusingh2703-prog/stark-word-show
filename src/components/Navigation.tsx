const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-8 left-8 z-50 fade-in">
      <div className="flex flex-col gap-6">
        <div className="geometric-square"></div>
        <div className="flex flex-row gap-4 text-sm uppercase tracking-wider">
          <button 
            onClick={() => scrollToSection('hero')}
            className="hover-lift text-text-subtle hover:text-foreground transition-fast"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="hover-lift text-text-subtle hover:text-foreground transition-fast"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="hover-lift text-text-subtle hover:text-foreground transition-fast"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="hover-lift text-text-subtle hover:text-foreground transition-fast"
          >
            Work
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="hover-lift text-text-subtle hover:text-foreground transition-fast"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;