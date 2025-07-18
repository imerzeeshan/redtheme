import { teamMembers } from "@/assets/assets";
import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";

const Teams = () => {
  const details = {
    description:
      "Our team of experienced professionals is committed to understanding your unique business needs",
    section: "Expert Team",
  };
  return (
    <>
      <Breadcrumbs
        description={details.description}
        section={details.section}
        path="Expert Team"
      />
      <section id="team" className="team sections-bg">
        <div
          className="px-5 md:max-w-[90%] xl:max-w-[80%] relative mx-auto"
          data-aos="fade-up"
        >
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
                    <a href={member.social.twitter}>
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href={member.social.twitter}>
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href={member.social.twitter}>
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href={member.social.twitter}>
                      <i className="bi bi-instagram"></i>
                    </a>
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

export default Teams;
