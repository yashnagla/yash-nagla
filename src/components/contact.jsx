import React from "react";
import mail from "../image/icons/mail.svg";
import phone from "../image/icons/call.svg";
import location from "../image/icons/location.svg";

function Contact() {
  const contactDetails = {
    email: "naglayash@gmail.com",
    phone: "+91 76590812357",
    location: "Kamla Nehru Nagar, Ajmer Road, Jaipur",
  };

  const socialLinks = [
    { href: "https://github.com/yashnagla", icon: "fa-github", label: "GitHub" },
    { href: "https://www.linkedin.com/in/yash-sikhwal-nagla/", icon: "fa-linkedin-in", label: "LinkedIn" },
    { href: "https://www.instagram.com/yash.nagla", icon: "fa-instagram", label: "Instagram" },
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
    <section className="contact-section py-5 bg-light" id="contact">
      <div className="container">
        <h2 className="text-center text-2c3e50 fw-semibold mb-5">Get In Touch</h2>

        <div className="row g-4">
          {/* Contact Info Section */}
          <div className="col-12 col-lg-4">
            <h3 className="text-2c3e50 fw-semibold mb-4">Contact Information</h3>

            {contactItems.map((item, index) => (
              <a
                key={index}
                href={item.href || "#"}
                className="text-decoration-none"
                aria-label={item.title}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <img loading="lazy" src={item.icon} alt={item.alt} width="28" height="28" />
                  <div>
                    <p className="m-0 fw-semibold text-2c3e50">{item.title}</p>
                    <p className="m-0 text-2c3e50">{item.value}</p>
                  </div>
                </div>
              </a>
            ))}

            <h4 className="text-2c3e50 mt-4 mb-3">Follow Me</h4>
            <div className="social-icons d-flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <i
                    className={`fa-brands ${social.icon} text-white bg-1e3e50 fs-3 p-2 rounded-circle`}
                  ></i>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="col-12 col-lg-8">
            <form
              className="bg-white rounded-3 p-4 shadow-sm"
              aria-label="Contact form"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="text-2c3e50 mb-4">Send Me a Message</h3>

              {[
                { label: "Name", type: "text", id: "name" },
                { label: "Email", type: "email", id: "email" },
                { label: "Subject", type: "text", id: "subject" },
              ].map((input, i) => (
                <div className="input-group mb-3" key={i}>
                  <span className="input-group-text" id={`${input.id}-label`}>
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
                <span className="input-group-text" id="message-label">
                  Message
                </span>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  aria-label="Message"
                  aria-describedby="message-label"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn bg-2c3e50 text-white fw-semibold">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;