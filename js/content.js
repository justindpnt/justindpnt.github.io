(function(){
  window.siteContent = {
    header: {
      name: "Justin DuPont",
      subtitle: "Program Manager / Software Engineer"
    },
    showreel: {
      text: "I like building and sharing things that have not been made before."
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
    try {
      const brandNameEl = document.getElementById('brand-name');
      if (brandNameEl) brandNameEl.textContent = c.header.name;
      const brandSubtitleEl = document.getElementById('brand-subtitle');
      if (brandSubtitleEl) brandSubtitleEl.textContent = c.header.subtitle;

      const showreelTextEl = document.getElementById('showreel-text');
      if (showreelTextEl) showreelTextEl.textContent = String(c.showreel.text || '');

      const brandsHeadingEl = document.getElementById('brands-heading');
      if (brandsHeadingEl) brandsHeadingEl.textContent = c.brandsHeading;
      const experiencesHeadingEl = document.getElementById('experiences-heading');
      if (experiencesHeadingEl) experiencesHeadingEl.textContent = c.experiencesHeading;

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

    const aboutHeadingEl = document.getElementById('about-heading');
    if (aboutHeadingEl) aboutHeadingEl.textContent = c.aboutHeading;
    const aboutTextEl = document.getElementById('about-text');
    if (aboutTextEl) aboutTextEl.textContent = c.aboutText;
    } catch (err) {
      console.error('content.js: populate failed', err);
    }
  }
  // expose for manual use
  window.populateSiteContent = populate;

  // populate once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', populate);
  } else {
    populate();
  }
})();
