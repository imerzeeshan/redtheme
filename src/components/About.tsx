import React from "react";
import SkillBar from "./SkillsBar";
import { aboutCompany } from "@/assets/assets";

const About = () => {
  const { skills } = aboutCompany;
  
  return (
    //   <!-- About -->
    <section id="about" className="about">
      <div className="px-5 md:max-w-[90%] lg:max-w-[80%] relative mx-auto">
        <div className="section-header text-center" data-aos="fade-up">
          <h2>About Our Company</h2>
          <p>
            We're Passionate About Helping Businesses Thrive with Technology
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/*  start  skills  */}
          <div className="col-md-6 center">
            <p>
              At <span className="big-text">RedTheme</span>{" "}
              <span className="small-text">
                we are passionate about providing businesses with the IT
                solutions they need to succeed
              </span>{" "}
              in today's competitive marketplace. We offer a comprehensive suite
              of services, from IT infrastructure and security to cloud
              computing and business applications, all delivered with the
              expertise and dedication you deserve.
            </p>
            <div data-aos="fade-up">
              <ul id="skills">
                {skills.map((skill, i) => (
                  <SkillBar
                    key={i}
                    label={skill.label}
                    percentage={skill.percentage}
                  />
                ))}
              </ul>
            </div>
            <a href="/contact" className="default-theme-btn-two">
              Contact Us <span></span>
            </a>
          </div>
          {/*  end  skills  */}

          {/* start  left  */}
          <div className="col-md-6">
            <div className="list-center-wrap">
              <img src="/assets/images/skills.jpg" alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
