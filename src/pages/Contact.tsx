import contactImg from "../assets/contact_img.jpg"
import ContactForm from "../components/contact/ContactForm"
import ContactInfo from "../components/contact/ContactInfo"
import ContactStores from "../components/contact/ContactStores"

const Contact = () => {

    return (
        <div className='container-lg my-28'>
            <div className="grid grid-cols-2 gap-5 mb-28">
                <ContactInfo />
                <ContactForm />
            </div>
            <div className="flex items-center gap-5">
                <img className="w-[500px] h-[400px]" src={contactImg} alt="" />
                <ContactStores />
            </div>
        </div>
    )
}

export default Contact