import { features } from "@/assets/assets";
import React from "react";

const Feature = () => {
  const { image, reasons } = features;
  return (
    // <!-- Featured -->
    <section id="featured" className="featured">
      <div className="px-5 md:px-0 md:max-w-[90%] xl:max-w-[80%] relative mx-auto">
        <div className="section-header" data-aos="fade-up">
          <h2>Why Choose Us?</h2>
          <p>Your Business's IT Success is Our Driving Force</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[37%_60%] gap-5">
          {/* <!-- start  skills --> */}
          <div className="center">
            <div className="list-center-wrap" data-aos="fade-up">
              <div className="img-fluid">
                <img src="/assets/images/about.jpg" alt="icon" />
              </div>
            </div>
          </div>
          {/* <!-- end  skills --> */}

          {/* <!-- start  left --> */}
          <div className="w-fit">
            <div className="">
              <p>
                In today's
                <span className="big-text">rapidly evolving technology</span>
                landscape, choosing the right IT partner is crucial for your
                business success. At{" "}
                <span className="small-text">RedTheme</span>, we stand out from
                the crowd with our unwavering commitment to quality, expertise,
                and customer satisfaction. Here are just a few reasons why you
                should choose us:
              </p>
            </div>
            <div className="">
              <div className="left lg:grid grid-cols-2 gap-5">
                {reasons.map((reason, index) => (
                  <div key={index} className="list-wrap" data-aos="fade-up">
                    <div className="icon">
                      <img src={reason.icon} alt="icon" />
                    </div>
                    <div className="description">
                      <h4>
                        {reason.title1},
                        <span style={{ color: "#c00113" }}>
                          {" "}
                          {reason.title2}
                        </span>
                      </h4>
                      <p>{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* <!-- end  right --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- Featured -->
  );
};

export default Feature;
