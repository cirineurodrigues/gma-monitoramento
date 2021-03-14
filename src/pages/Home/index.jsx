import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Empresa from "../../components/Empresa";
import ClientsCarousel from "../../components/ClientsCarousel";
import YoutubeVideo from "../../components/YoutubeVideo";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Empresa />
      <ClientsCarousel />
      <YoutubeVideo videoId="RiLGMWJCh2c" />
      <Footer />
    </>
  );
};

export default Home;
