// import Navbar from "../components/Navbar";
// import Navbar from '../components/NavBarNew'
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('../components/NavBarNew'), {
  ssr: false,
})
// import Hero from '../components/hero'
import Hero from '../components/heronew'
import CardsHero from '../components/cardsHero'
import Sponsers  from '../components/sponsers'
import Imageconponent from '../components/Imagecomponent'

import Arun from '../components/arun'
import Onefacecard from "../components/Onefacecard";
import Colums from '../components/Colums'
import FooterHero from '../components/FooterHero'
import Footer from '../components/footer'
export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <CardsHero/>
      {/* <Sponsers/> */}
      
      <Imageconponent/>
      <Arun/>
      <Onefacecard/>
      <Colums/>
      <FooterHero/>
      <Footer/>
    </>
  )
}
