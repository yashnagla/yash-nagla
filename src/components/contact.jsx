import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import React from "react";
import mail from "../image/icons/mail.svg";
import phone from "../image/icons/call.svg";
import location from "../image/icons/location.svg";

function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Contact info stagger
      gsap.from(".contact-item", {
        x: -40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Form animation
      gsap.from(".contact-form", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 75%",
        },
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  const contactDetails = {
    email: "naglayash@gmail.com",
    phone: "+91 76590812357",
    location: "Kamla Nehru Nagar, Ajmer Road, Jaipur",
  };

  const socialLinks = [
    {
      href: "https://github.com/yashnagla",
      icon: "fa-github",
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/yash-sikhwal-nagla/",
      icon: "fa-linkedin-in",
      label: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/yash.nagla",
      icon: "fa-instagram",
      label: "Instagram",
    },
  ];

  const contactItems = [
    {
      icon: mail,
      alt: "Email Icon",
      title: "Email",
      value: contactDetails.email,
      href: `mailto:${contactDetails.email}`,
    },
    {
      icon: phone,
      alt: "Phone Icon",
      title: "Phone",
      value: contactDetails.phone,
      href: `tel:${contactDetails.phone}`,
    },
    {
      icon: location,
      alt: "Location Icon",
      title: "Location",
      value: contactDetails.location,
    },
  ];

  return (
    <section
      ref={contactRef}
      className="contact-section py-3"
      id="contact"
    >
      <div className="container">
        <h2 className="text-center text-2c3e50 fw-semibold mb-3">
          Get In Touch
        </h2>

        <div className="row g-3 px-3">
          {/* Contact Info Section */}
          <div className="col-12 col-lg-4 p-4 rounded-4 bg-light">
            <h3 className="text-2c3e50 fw-semibold mb-2">
              Contact Information
            </h3>

            {contactItems.map((item, index) => (
              <a
                key={index}
                href={item.href || "#"}
                className="text-decoration-none"
                aria-label={item.title}
              >
                <div className="d-flex align-items-center gap-3 mb-3 contact-item">
                  <img
                    loading="lazy"
                    src={item.icon}
                    alt={item.alt}
                    width="28"
                    height="28"
                  />
                  <div>
                    <p className="m-0 fw-semibold text-2c3e50">{item.title}</p>
                    <p className="m-0 text-2c3e50">{item.value}</p>
                  </div>
                </div>
              </a>
            ))}

            <h4 className="text-2c3e50 mt-3 mb-3">Follow Me</h4>
            <div className="social-icons d-flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <motion.i
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`fa-brands ${social.icon} text-white bg-1e3e50 fs-2 p-2 rounded-circle`}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="col-12 col-lg-8 ps-lg-5 pe-lg-0">
            <div className="bg-white rounded-4 p-4">
              <form
                className="contact-form"
                aria-label="Contact form"
                onSubmit={(e) => e.preventDefault()}
              >
                <h3 className="text-2c3e50 mb-2">Send Me a Message</h3>

                {[
                  { label: "Name", type: "text", id: "name" },
                  { label: "Email", type: "email", id: "email" },
                  { label: "Subject", type: "text", id: "subject" },
                ].map((input, i) => (
                  <div className="input-group mb-3" key={i}>
                    <span className="input-group-text w-25" id={`${input.id}-label`}>
                      {input.label}
                    </span>
                    <input
                      type={input.type}
                      className="form-control"
                      id={input.id}
                      aria-label={input.label}
                      aria-describedby={`${input.id}-label`}
                      required
                    />
                  </div>
                ))}

                <div className="input-group mb-4">
                  <span className="input-group-text w-25" id="message-label">
                    Message
                  </span>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="2"
                    aria-label="Message"
                    aria-describedby="message-label"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="btn bg-2c3e50 text-white fw-semibold"
                >
                  Submit
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
