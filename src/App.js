import './App.css';
import BlogSection from './Components/BlogSection';
import ComingSoon from './Components/coming-soon';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Nav from './Components/nav';
import Style from './Components/style';
import Subscribe from './Components/Subscribe';

function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <BlogSection/>
      <Style/>
      <ComingSoon/>
      <Subscribe/>
      <Footer/>
    </>
  )
}

export default App;
