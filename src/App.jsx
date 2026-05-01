import './App.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Footer from './components/Footer';
import { getProjectsByTrack, PROJECT_TRACK } from './data/projects';

const normalizePathname = (pathname) => {
  const normalized = pathname.replace(/\/+$/, '');
  return normalized || '/';
};

function App() {
  const pathname = normalizePathname(window.location.pathname);
  const threeDProjects = getProjectsByTrack(PROJECT_TRACK.THREE_D);
  const webProjects = getProjectsByTrack(PROJECT_TRACK.WEB);

  if (pathname === '/projects/3d') {
    return (
      <>
        <Navbar />
        <main className="main main--standalone">
          <Projects
            id="projects"
            label="3D"
            title="3D and Game Development Projects"
            subtitle="Kumpulan project 3D modeling, game development, dan animasi yang sudah saya kerjakan."
            items={threeDProjects}
          />
        </main>
        <Footer />
      </>
    );
  }

  if (pathname === '/projects/web') {
    return (
      <>
        <Navbar />
        <main className="main main--standalone">
          <Projects
            id="projects"
            label="Web Dev"
            title="Web Development Projects"
            subtitle="Kumpulan project web development, termasuk kontribusi full stack, backend, dan materi bootcamp."
            items={webProjects}
          />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <Projects
          id="projects"
          label="Portfolio"
          title="3D and Game Development"
          subtitle="Project 3D modeling, game development, dan animation pipeline yang menampilkan render serta topology."
          items={threeDProjects}
          cta={{ href: '/projects/3d', label: 'Open Full 3D Page' }}
          offsetFromHero
        />

        <Projects
          id="projects-web"
          label="Portfolio"
          title="Web Development"
          subtitle="Project web dev yang berfokus pada implementasi real-world, backend architecture, dan integrasi layanan eksternal."
          items={webProjects}
          cta={{ href: '/projects/web', label: 'Open Full Web Dev Page' }}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
