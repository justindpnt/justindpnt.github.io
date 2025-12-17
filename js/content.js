(function(){
  window.siteContent = {
    header: {
      name: "Justin DuPont",
      subtitle: "Portfolio"
    },
    hero: {
      name: "Hi, I'm Justin!",
      subtitleLines: ["Program Manager","Unity Developer","Creative Technologist"]
    },
    brandsHeading: "Previously employed by...",
    experiencesHeading: "Experiences I have built",
    projects: [
      { title: "Project Title 1", description: "Brief neutral description of the work or outcome.", chips: ["Category","Tools / Stack"] },
      { title: "Project Title 2", description: "Brief neutral description of the work or outcome.", chips: ["Category","Tools / Stack"] },
      { title: "Project Title 3", description: "Brief neutral description of the work or outcome.", chips: ["Category","Tools / Stack"] },
      { title: "Project Title 4", description: "Brief neutral description of the work or outcome.", chips: ["Category","Tools / Stack"] },
      { title: "Project Title 5", description: "Brief neutral description of the work or outcome.", chips: ["Category","Tools / Stack"] },
      { title: "Project Title 6", description: "Brief neutral description of the work or outcome.", chips: ["Category","Tools / Stack"] }
    ],
    skills: ["Skill","Skill","Skill","Tool","Technology"],
    aboutHeading: "About",
    aboutText: "Short neutral bio. Who this portfolio is for and what kind of work it showcases.",
    footerText: ""
  };

  function populate() {
    const c = window.siteContent;
    document.getElementById('brand-name')?.textContent = c.header.name;
    document.getElementById('brand-subtitle')?.textContent = c.header.subtitle;
    document.getElementById('hero-name')?.textContent = c.hero.name;

    const heroSub = document.getElementById('hero-sub');
    if (heroSub) heroSub.innerHTML = c.hero.subtitleLines.join('<br>');

    document.getElementById('brands-heading')?.textContent = c.brandsHeading;
    document.getElementById('experiences-heading')?.textContent = c.experiencesHeading;

    const projectEls = document.querySelectorAll('.projects-grid .project');
    projectEls.forEach((el, i) => {
      const data = c.projects[i];
      if (!data) return;
      const h3 = el.querySelector('h3');
      const p = el.querySelector('p');
      if (h3) h3.textContent = data.title;
      if (p) p.textContent = data.description;
      const chips = el.querySelector('.chips');
      if (chips) chips.innerHTML = data.chips.map(x => `<span class="chip">${x}</span>`).join('');
    });

    const skillsList = document.getElementById('skills-list');
    if (skillsList) skillsList.innerHTML = c.skills.map(s => `<li>${s}</li>`).join('');

    document.getElementById('about-heading')?.textContent = c.aboutHeading;
    document.getElementById('about-text')?.textContent = c.aboutText;
  }

  document.addEventListener('DOMContentLoaded', populate);
})();
