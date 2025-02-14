import Header from "@/components/Header/Header"
import Hero from "@/components/Hero"
import Reviews from "@/components/Reviews/Reviews"
import Services from "@/components/Services/Services"

const page = () => {
  return (
    <div className="">
      <Header />
      <Hero />
      <Services />
      <Reviews />
    </div>
  )
}

export default page