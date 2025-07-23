import { aboutCompany } from "@/assets/assets";
import Breadcrumbs from "@/components/Breadcrumbs";
import Feature from "@/components/Feature";
import SkillBar from "@/components/SkillsBar";
import Link from "next/link";

const About = () => {
  const { description, skills, image } = aboutCompany;

  return (
    <>
      <Breadcrumbs
        path="About"
        description={description.mission}
        section={"About"}
      />
      <section id="about" className="about">
        <div className="px-5 md:max-w-[90%] lg:max-w-[80%] relative mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/*  start  skills  */}
            <div className="col-md-6 center">
              <p>
                At <span className="big-text">RedTheme</span>{" "}
                <span className="small-text">
                  we are passionate about providing businesses with the IT
                  solutions they need to succeed
                </span>{" "}
                in today's competitive marketplace. We offer a comprehensive
                suite of services, from IT infrastructure and security to cloud
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
              <Link href="/contact" className="default-theme-btn-two">
                Contact Us <span></span>
              </Link>
            </div>
            {/*  end  skills  */}

            {/* start  left  */}

            <div className="list-center-wrap">
              <img src={image} alt="icon" />
            </div>
          </div>
        </div>
      </section>
      <Feature />
    </>
  );
};

export default About;
