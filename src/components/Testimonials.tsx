"use client";
// components/SwiperCarousel.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Import necessary modules

import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import Pagination styles
import "swiper/css/navigation"; // Import Navigation styles
import { testimonials } from "@/assets/assets";

const Testimonials = () => {
  return (
    // <!--  Testimonials Section  -->
    <section id="testimonials" className="testimonials">
      <div className="mx-auto" data-aos="fade-up">
        <div className="section-header">
          <h2>Testimonials</h2>
          <p>
            Our testimonials are a testament to the satisfaction of our clients
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30} // Space between slides
          slidesPerView={3} // Number of slides visible at once
          loop={true} // Enable infinite loop
          autoplay={{
            delay: 3500, // Autoplay delay in ms
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          pagination={{ clickable: true }} // Enable clickable pagination
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 1, spaceBetween: 30 },
            1024: { slidesPerView: 2, spaceBetween: 30 },
            1224: { slidesPerView: 3, spaceBetween: 30 },
          }}
          // navigation={true} // Enable navigation arrows
          data-aos="fade-up"
          data-aos-delay="100"
          className="px-5 md:px-0 md:max-w-[90%] xl:max-w-[80%] relative mx-auto"
        >
          {testimonials.map((testi, index) => (
            <SwiperSlide key={index}>
              {/* <div className=""> */}
              <div className="testimonial-item">
                <div className="flex items-center info-box">
                  <img
                    src={testi.img}
                    className="testimonial-img flex-shrink-0"
                    alt="testimonials_image"
                  />
                  <div>
                    <h3>{testi.name}</h3>
                    <h4>{testi.role}</h4>
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <i className="bi bi-star-fill" key={i}></i>
                      ))}
                    </div>
                  </div>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  {testi.text}
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
              {/* </div> */}
            </SwiperSlide>
          ))}
          {/* <!-- End testimonial item --> */}

          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
    // End Testimonials Section
  );
};

export default Testimonials;
