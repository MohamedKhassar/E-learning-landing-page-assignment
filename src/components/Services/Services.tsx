import Courses from "./Courses/Courses"
import ServicesHeader from "./ServicesHeader"

const Services = () => {
  return (
    <div id="about" className="container lg:mt-24 mt-10">
      {/* services header */}
      <ServicesHeader />
      {/* courses */}
      <Courses />
    </div>
  )
}

export default Services