import React from 'react'
import ContactFormSection from '../forms/ContactFormSection'

const ContactSection = () => {
  return (
    <div className="container">
        <div className="fz-inner-contact-details">
            <div className="fz-inner-contact-details__left">
                <div className="fz-blog-details__comment-form">
                    <h4 className="fz-comment-form__title fz-inner-contact-details__title">Leave a Message</h4>
                    <ContactFormSection/>
                </div>
            </div>

            <div className="fz-inner-contact-details__info-card">
                <h3 className="fz-inner-contact-details__title">Get In Touch</h3>
                <ul>
                    <li className="fz-single-contact-info">
                        <i className="fa-light fa-location-dot"></i>
                        <span className="contact-address">111 Test Street Demo Town, NY 10001</span>
                    </li>

                    <li className="fz-single-contact-info">
                        <i className="fa-light fa-phone"></i>
                        <div className="contact-numbers">
                            <span><a href="tel:555-555-5555">(+1) 555-555-5555</a></span>
                            <span><a href="tel:555-555-5555">(+1) 555-555-5555</a></span>
                        </div>
                    </li>

                    <li className="fz-single-contact-info">
                        <i className="fa-light fa-clock"></i>
                        <div className="contact-numbers">
                            <span className="store-time__title">Store Hours:</span>
                            <span className="store-time__hours">Mon - Sat : 8:00am - 5:00pm</span>
                        </div>
                    </li>

                    <li className="contact-socials">
                        <h6 className="contact-socials__title">Follow Us:</h6>
                        <ul>
                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-tiktok"></i></a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ContactSection