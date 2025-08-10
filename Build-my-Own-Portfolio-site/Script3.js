
     const skills = ["HTML","CSS","JavaScript","Bootstrap","React (basics)","Python","C/C++","Figma","UI/UX","Responsive Design","Git & GitHub"];
    const projects = [
      {title:"Personal Portfolio Website", cat:["frontend"], desc:"Responsive portfolio built with HTML, CSS & JS. Dark/light theme and animations.", thumb:"/mnt/data/WhatsApp Image 2025-08-10 at 8.54.58 AM.jpeg", github:"#", live:"#"},
      {title:"Women's Health Awareness (UI)", cat:["uiux"], desc:"UI/UX prototype focusing on accessibility and personas.", thumb:"/mnt/data/WhatsApp Image 2025-08-10 at 8.54.58 AM (1).jpeg", github:"#", live:"#"},
      {title:"College Feedback Form (UX)", cat:["uiux"], desc:"Redesigned feedback flow & mobile-friendly form.", thumb:"/mnt/data/WhatsApp Image 2025-08-10 at 8.54.58 AM.jpeg", github:"#", live:"#"},
      {title:"Task Manager Web App", cat:["fullstack"], desc:"CRUD app (Node.js + MongoDB), frontend implemented in JS.", thumb:"/mnt/data/WhatsApp Image 2025-08-10 at 8.54.58 AM (1).jpeg", github:"#", live:"#"},
      {title:"Weather Forecast App", cat:["frontend"], desc:"API-based weather app (Python + API).", thumb:"/mnt/data/WhatsApp Image 2025-08-10 at 6.11.07 AM.jpeg", github:"#", live:"#"}
    ];

    // populate skills chips
    const skillsList = document.getElementById('skillsList');
    skills.forEach(s => { const el = document.createElement('div'); el.className='chip'; el.textContent=s; skillsList.appendChild(el); });

    // populate projects grid
    const grid = document.getElementById('projectsGrid');
    projects.forEach(p => {
      const card = document.createElement('article');
      card.className = 'project';
      card.innerHTML = `
        <div class="thumb"><img src="${p.thumb}" alt="${p.title}"></div>
        <h4>${p.title}</h4>
        <p>${p.desc}</p>
        <div class="links"><a class="link" href="${p.github}" target="_blank">GitHub</a><a class="link" href="${p.live}" target="_blank">Live</a></div>
      `;
      grid.appendChild(card);
    });

    // reveal on scroll: IntersectionObserver
    const io = new IntersectionObserver((entries)=>{ entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('show'); io.unobserve(en.target); } }); }, {threshold: 0.12});
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

    // animate skill bars after load
    window.addEventListener('load', ()=>{ document.querySelectorAll('.bar > i').forEach(i=>{ const w=i.getAttribute('data-width'); setTimeout(()=>i.style.width=w,150); }); });

    // nav highlight (simple)
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = ['about','skills','projects','certs','contact'];
    window.addEventListener('scroll', ()=>{
      let idx = 0;
      sections.forEach((id,i)=>{ const el = document.getElementById(id); if(el && window.scrollY >= el.offsetTop - 180) idx = i; });
      navLinks.forEach(n=>n.classList.remove('active')); if(navLinks[idx]) navLinks[idx].classList.add('active');
    });

    // resume modal open/close
    const modal = document.getElementById('modalResume');
    document.getElementById('btnResume').addEventListener('click', ()=>{ modal.style.display='flex'; modal.setAttribute('aria-hidden','false'); });
    document.getElementById('closeResume').addEventListener('click', ()=>{ modal.style.display='none'; modal.setAttribute('aria-hidden','true'); });
    modal.addEventListener('click', e=>{ if(e.target===modal){ modal.style.display='none'; modal.setAttribute('aria-hidden','true'); } });

    // view projects
    document.getElementById('btnProjects').addEventListener('click', ()=>{ document.getElementById('projects').scrollIntoView({behavior:'smooth'}); });

    // contact form (demo; to enable real mail integrate EmailJS)
    document.getElementById('contactForm').addEventListener('submit', e=>{ e.preventDefault(); const f=e.target; if(!f.name.value.trim()||!f.email.value.trim()||!f.message.value.trim()){ alert('Please fill all fields'); return } alert('Message prepared (demo). I can add EmailJS if you want.'); f.reset(); });

    // double-click brand to toggle theme (quick)
    document.querySelector('.brand').addEventListener('dblclick', ()=>{ if(document.body.getAttribute('data-theme')==='light') document.body.removeAttribute('data-theme'); else document.body.setAttribute('data-theme','light'); });
  