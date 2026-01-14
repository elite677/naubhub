// Dark Mode Toggle + Persistence (syncs with Tailwind 'dark' class)
const toggle = document.getElementById('dark-toggle');
const html = document.documentElement;

// Load saved preference or system default
if (localStorage.theme === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  html.classList.add('dark');
}

toggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
});

// Weekly Programs - Populate grid from array
const programs = [
  { day: "Monday/Tuesday", activity: "Prayer Meeting – 6:30 PM" },
  { day: "Wednesday", activity: "Academic Summit – 6:30 PM" },
  { day: "Thursday", activity: "Bible Study – 6:30 PM" },
  { day: "Friday", activity: "FCS – 1:00 PM" },
  { day: "Sunday", activity: "Sunday Service – 8:00 AM" }
  // Feel free to add more objects here!
];

const programGrid = document.getElementById('program-grid');

programs.forEach(program => {
  const card = document.createElement('div');
  card.className = 'bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center border border-gray-100 dark:border-gray-700 hover:shadow-xl transition';
  card.innerHTML = `
    <h3 class="text-2xl font-bold text-navy dark:text-gold mb-3">${program.day}</h3>
    <p class="text-lg text-gray-600 dark:text-gray-300">${program.activity}</p>
  `;
  programGrid.appendChild(card);
});

// Sliding Bible Verses Carousel (fade transition)
const verses = [
  { 
    text: "But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.", 
    ref: "Isaiah 40:31" 
  },
  { 
    text: "I can do all things through Christ who strengthens me.", 
    ref: "Philippians 4:13" 
  },
  { 
    text: "Be watchful, stand firm in the faith, act like men, be strong.", 
    ref: "1 Corinthians 16:13" 
  },
  { 
    text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.", 
    ref: "Jeremiah 29:11" 
  },
  { 
    text: "Where there is no vision, the people perish: but he that keepeth the law, happy is he.", 
    ref: "Proverbs 29:18 (KJV)" 
  }
];

const slidesContainer = document.getElementById('verse-slides');
let currentSlide = 0;

// Create slide elements
verses.forEach((verse, index) => {
  const slide = document.createElement('div');
  slide.className = 'verse-slide flex flex-col items-center justify-center text-center px-4';
  if (index === 0) slide.classList.add('active');

  slide.innerHTML = `
    <blockquote class="text-2xl md:text-3xl italic text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
      "${verse.text}"
    </blockquote>
    <p class="mt-6 text-xl text-gold font-semibold">— ${verse.ref}</p>
  `;

  slidesContainer.appendChild(slide);
});

const allSlides = document.querySelectorAll('.verse-slide');

function showNextSlide() {
  allSlides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % verses.length;
  allSlides[currentSlide].classList.add('active');
}

// Auto-slide every 8 seconds (feel free to adjust timing)
setInterval(showNextSlide, 8000);