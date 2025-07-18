"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Import necessary modules
import { ourPartners } from "@/assets/assets";

const Clients = () => {
  const { companies } = ourPartners;
  return (
    <div id="clients" className="clients section">
      <div
        className="px-5 md:px-0 md:max-w-[90%] xl:max-w-[80%] relative mx-auto"
        data-aos="zoom-out"
      >
        <div className="clients-slider swiper">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30} // Space between slides
            slidesPerView={3} // Number of slides visible at once
            loop={true} // Enable infinite loop
            autoplay={{
              delay: 3500, // Autoplay delay in ms
              disableOnInteraction: false, // Continue autoplay after user interaction
            }}
            // pagination={{ clickable: true }} // Enable clickable pagination
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 10 },
              640: { slidesPerView: 3, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 5, spaceBetween: 30 },
              //   1224: { slidesPerView: 5, spaceBetween: 30 },
            }}
            // navigation={true} // Enable navigation arrows
            data-aos="fade-up"
            data-aos-delay="100"
            className=""
          >
            {companies.map((company) => (
              <SwiperSlide className="swiper-slide">
                <img
                  src={company.image}
                  className="img-fluid"
                  alt="partners-company-logo"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Clients;
