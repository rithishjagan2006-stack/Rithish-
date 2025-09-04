// footer year

document.getElementById('y').textContent = new Date().getFullYear();

// Typing effect

const roles = ['Python & Java Developer','Full-Stack Developer','AI Enthusiast','Digital Marketing Learner','Data Analytics Explorer','AI Tools – Certified'];

const el = document.querySelector('.typing');

let i = 0, j = 0, deleting = false;

function type(){

  const word = roles[i % roles.length];

  if(!deleting){

    el.textContent = word.slice(0, ++j);

    if(j === word.length){ deleting = true; setTimeout(type, 1100); return; }

  }else{

    el.textContent = word.slice(0, --j);

    if(j === 0){ deleting = false; i++; }

  }

  setTimeout(type, deleting ? 45 : 75);

}

type();

// Reveal on scroll

const io = new IntersectionObserver((entries)=>{

  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target);} });

},{threshold:.15});

document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Copy link

function copyPortfolio(){

  navigator.clipboard.writeText(location.href).then(()=>{ alert('Portfolio link copied!'); });

}