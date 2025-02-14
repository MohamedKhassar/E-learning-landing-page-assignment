import Image from "next/image"
import contact from "/public/images/contact.jpg"
import ContactForm from "./ContactForm"
const Contact = () => {
    return (
        <div className="lg:pt-32 pt-16 bg-[#F8F9FF]">
            <div className="container flex justify-center">
                <div className="flex bg-white rounded-lg overflow-hidden border">
                    <Image className="lg:w-[30rem] w-96 hidden md:block" width={900} src={contact} alt="" />
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact