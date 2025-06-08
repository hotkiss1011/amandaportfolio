import ProjectCard from '../../components/ProjectCard';

const projects = [
  {
    title: 'Click-A-Sketch Browser Game',
    imageSrc: '/images/etch-a-sketch.png',
    imageAlt: 'etch a sketch browser game',
    appLink: 'https://hotkiss1011.github.io/etch-a-sketch/',
    githubLink: 'https://github.com/hotkiss1011/etch-a-sketch',
  },
  {
    title: 'Rock, Paper, Scissors Browser Game',
    imageSrc: '/images/rock-paper-scissors.png',
    imageAlt: 'rock, paper, scissors browser game',
    appLink: 'https://hotkiss1011.github.io/rock-paper-scissors/',
    githubLink: 'https://github.com/hotkiss1011/rock-paper-scissors',
  },
  {
    title: 'Basic Landing Page Template',
    imageSrc: '/images/landing-page.png',
    imageAlt: 'basic landing page template',
    appLink: 'https://hotkiss1011.github.io/odin-website/',
    githubLink: 'https://github.com/hotkiss1011/odin-website',
  },
  {
    title: 'React Dictionary',
    imageSrc: '/images/dictionary-app.png',
    imageAlt: 'React Dictionary App',
    appLink: 'https://nostalgic-lovelace-ab297e.netlify.app/',
    githubLink: 'https://github.com/hotkiss1011/react-weather-project',
  },
  {
    title: 'SheCodes Responsive Homework',
    imageSrc: '/images/SheCodes-Responsive-HW.png',
    imageAlt: 'My SheCodes Responsive Homework',
    appLink: 'https://nostalgic-austin-e08a10.netlify.app/index.html',
    githubLink: 'https://github.com/hotkiss1011/shecodes-responsive-week-3-homework',
  },
  {
    title: 'Croissant App',
    imageSrc: '/images/croissant-app-pic.png',
    imageAlt: 'My Croissant App',
    appLink: 'https://heuristic-lewin-fe6f46.netlify.app/',
    githubLink: 'https://github.com/hotkiss1011/Croissant',
  },
  {
    title: 'Vanilla Weather App',
    imageSrc: '/images/my-vanilla-weather-app.png',
    imageAlt: 'My Vanilla Weather App',
    appLink: 'https://jolly-panini-5321ff.netlify.app/',
    githubLink: 'https://github.com/hotkiss1011/final-vanilla-weather-app',
  },
  {
    title: 'Stormy Weather App',
    imageSrc: '/images/my-weather-app.png',
    imageAlt: 'My Weather App',
    appLink: 'https://optimistic-booth-6cfdcd.netlify.app/',
    githubLink: 'https://github.com/hotkiss1011/my-shecodespro-project',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <main className="max-w-5xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-700">My Works</h1>
        </header>

        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            reverse={index % 2 !== 0} // alternate left/right layout
          />
        ))}

        <div className="text-center mb-12">
          <a href="#top" className="text-indigo-600 underline">Return to top of page</a>
        </div>
      </main>
    </>
  );
}
