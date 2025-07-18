import { contact } from "@/assets/assets";
import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";

const Contact = () => {
  const { contactInformation } = contact;
  const { address, phone, email } = contactInformation;
  const details = {
    description: "We're always happy to hear from you!",
    section: "Contact Us",
  };
  return (
    <>
      <Breadcrumbs
        path="Contact Us"
        description={details.description}
        section={details.section}
      />
      <div id="contact" className="contact-section section">
        <div className="px-5 md:max-w-[90%] xl:max-w-[80%] relative mx-auto">
          <div className="lg:grid grid-cols-[1fr_2fr] gap-5">
            <div data-aos="fade-right">
              <div className="contact-information-box-3">
                <div className="single-contact-info-box">
                  <div className="contact-info">
                    <h6>Address:</h6>
                    {address.map((add, index) => (
                      <p key={index}>{add}</p>
                    ))}
                  </div>
                </div>

                <div className="single-contact-info-box">
                  <div className="contact-info">
                    <h6>Phone:</h6>
                    {phone.map((phone, index) => (
                      <p key={index}>{phone}</p>
                    ))}
                  </div>
                </div>

                <div className="single-contact-info-box">
                  <div className="contact-info">
                    <h6>Email:</h6>
                    {email.map((email, index) => (
                      <p key={index}>{email}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="contact-form-box contact-form contact-form-3"
            >
              <div className="form-container-box">
                <form className="contact-form form" id="ajax-contact">
                  <div>
                    <div className="md:grid md:grid-cols-2 gap-5">
                      <div className="form-group form-input-box">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Name*"
                          required
                          data-error="Name is required."
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="form-group form-input-box">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email*"
                          required
                          data-error="Valid email is required."
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group form-input-box">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          placeholder="Subject"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group form-input-box">
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows={8}
                          placeholder="Write Your Message*"
                          required
                          data-error="Please, leave us a message."
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button
                        type="submit"
                        className="default-theme-btn-two"
                        data-text="Send Message"
                      >
                        Send Message<span></span>
                      </button>
                    </div>
                    <div className="messages">
                      <div
                        className="alert alert alert-success alert-dismissable alert-dismissable hidden"
                        id="msgSubmit"
                      >
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-hidden="true"
                        >
                          &times;
                        </button>{" "}
                        Thank You! your message has been sent.{" "}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="map">
        <iframe
          allow="unload"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3093.98973709836!2d-86.54376691239675!3d39.15221505859619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDA5JzA4LjAiTiA4NsKwMzInMjAuMCJX!5e0!3m2!1sen!2sus!4v1699530779885!5m2!1sen!2sus"
          style={{
            border: "0",
            width: "100%",
            height: "390px",
            marginBottom: "-10px",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
