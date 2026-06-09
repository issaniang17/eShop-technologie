import Company from "./components/Company"
import EndSection from "./components/EndSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Promo, { Promo2 } from "./components/Promo"
import SellerProducts from "./components/SellerProducts"
import ShopItems from "./components/ShopItems"
import Warranty from "./components/Warranty"




function App() {
  

  return (
    < >
      <Navbar />
      <HeroSection />
      <ShopItems />
      <Warranty />
      <Promo />
      <SellerProducts />
      <Promo2 />
      <EndSection />
      <Company />
      <Footer />
    </>
  )
}

export default App
