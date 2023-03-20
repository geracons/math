import Navbar from '../components/Navbar'
import HeadPage from '../components/HeadPage'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Cards from '../components/Cards'
import Collage from '../components/Collage'


export default function Home() {
  return (
    <>
      <HeadPage />
      <Navbar />
      <Header />
      {/*<Collage />*/}
      <Cards />
      <Footer />
  
    </>
  )
}
