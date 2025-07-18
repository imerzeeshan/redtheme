import Link from "next/link";
import React from "react";

const CallToActtion = () => {
  return (
    //  <!--  Call To Action Section  -->
    <section id="call-to-action" className="call-to-action">
      <div
        className="aos-init aos-animate max-w-4xl mx-auto lg:max-w-[58rem] xl:max-w-[78rem]"
        data-aos="zoom-out"

      >
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="">
            <h3>Let's Discuss your Projects</h3>
            {/* <!-- <p>We pride ourselves with our ability to perform and deliver results. Use the form below to discuss your project needs with our team, we will get back asap</p>--> */}
          </div>
          <div className="">
            <Link className="default-theme-btn-one" href="/contact">
              Conatct Us <span></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
  //<!-- End Call To Action Section -->
};

export default CallToActtion;
