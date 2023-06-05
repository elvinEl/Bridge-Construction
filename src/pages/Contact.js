import React from 'react'
import ContactInformation from '../components/contactComponents/contact/ContactInformation'
import Form from '../components/contactComponents/contactForm/Form'
import Fixed from '../components/AboutComponents/fixedContent/Fixed'
function Contact() {
  return (
    <div>
       <div className="bg-image-contact  min-h-[100vh] bg-cover"></div>
      <div className="quadrangle">
        <div className="position-div ">
          <p className="text-[#ec0e0e]">Contact Us</p>
          <p className="text-[3.5rem] font-bold">Stay</p>
          <p className="bg-[#ec0e0e] text-white px-4 py-1 font-bold inline-block text-[3.5rem]">
          In Touch
          </p>
        </div>
      </div>
      <ContactInformation/>
      <Form/>
      <Fixed/>
    </div>
  )
}

export default Contact