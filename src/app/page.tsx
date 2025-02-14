import Contact from "@/components/Contact/Contact"
import Footer from "@/components/Footer"
import Header from "@/components/Header/Header"
import Hero from "@/components/Hero/Hero"
import Reviews from "@/components/Reviews/Reviews"
import Services from "@/components/Services/Services"

const page = () => {
  return (
    <div className="">
      {/* header section */}
      <Header />
      {/* hero section */}
      <Hero />
      {/* services section */}
      <Services />
      {/* reviews section */}
      <Reviews />
      {/* contact section */}
      <Contact />
      {/* footer section */}
      <Footer />
    </div>
  )
}

export default page