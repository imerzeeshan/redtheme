import { teamMembers } from "@/assets/assets";
import Link from "next/link";
import React from "react";

const Team = () => {
  return (
    <>
      <section id="team" className="team sections-bg">
        <div
          className="container aos-init aos-animate w-full md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-7xl mx-auto px-4"
          data-aos="fade-up"
        >
          <div className="section-header">
            <h2>Expert Team</h2>
            <p>
              Our team of experienced professionals is committed to
              understanding your unique business needs
            </p>
          </div>

          <div className="grid grid-cols-1 px-3 md:grid-cols-2 md:gap-15 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="member">
                  <img src={member.image} className="img-fluid" alt="" />
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                  <div className="social">
                    <Link href={member.social.twitter}>
                      <i className="bi bi-twitter"></i>
                    </Link>
                    <Link href={member.social.twitter}>
                      <i className="bi bi-facebook"></i>
                    </Link>
                    <Link href={member.social.twitter}>
                      <i className="bi bi-linkedin"></i>
                    </Link>
                    <Link href={member.social.twitter}>
                      <i className="bi bi-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
