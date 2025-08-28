import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Skill from './components/Skill';
import Work from './components/Work';

function App() {
  return (
    <>
      <div className="w-full xl:w-3/4 flex flex-col mx-auto gap-6 text-white">
        <Header />
        <Hero />
        <div className="flex flex-col gap-12">
          <About />
          <Skill />
          <Work />
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
