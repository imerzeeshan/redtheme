import { projectDetail } from "@/assets/assets";
import Breadcrumbs from "@/components/Breadcrumbs";
import CallToActtion from "@/components/CallToActtion";
import Contact from "@/components/Contact";
import SkillBar from "@/components/SkillsBar";

const ProjectDetails = async () => {
  const { projects } = projectDetail;

  const currentProject = projects.find(
    (project) => project.id.toString() === "1"
  );

  if (!currentProject) return null;

  const { image, details, summary, skills, projectDetails } = currentProject;

  const detail = {
    description: "Web Design and development for ABC Bank",
    section: "Single Project Page",
  };
  return (
    <>
      <Breadcrumbs
        description={detail.description}
        section={detail.section}
        path="Project Details"
      />
      <div className="section">
        <div className="px-5 md:max-w-[90%] xl:max-w-[80%] relative mx-auto">
          <div data-aos="fade-up">
            <img src={image?.src} alt={image?.alt} className="mb-25" />
          </div>

          <div className="flex flex-col md:flex-row md:justify-between mb-5 border-b-1 border-b-[#d8d8d8] ">
            <div className="flex service-header-skills">
              <p>
                <strong>Project Type:</strong>
              </p>
              <p>{details?.projectType}</p>
            </div>
            <div className="flex service-header-skills">
              <p>
                <strong>Categories:</strong>
              </p>
              <p className="flex gap-1">
                {details?.categories.map(
                  (eachCategory: string, index: number) => (
                    <span key={index}>
                      {eachCategory}
                      {index !== details.categories.length - 1 ? "," : ""}
                    </span>
                  )
                )}
              </p>
            </div>
            <div className="flex service-header-skills">
              <p>
                <strong>Website:</strong>
              </p>
              <p>{details?.website}</p>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 gap-5 my-5">
            <div>
              <p>
                <span className="big-text">{summary?.title}</span>{" "}
                <span className="small-text">{summary?.subtitle}</span>{" "}
                {summary?.description}
              </p>
            </div>

            <div data-aos="fade-up">
              <p>
                <strong>Teachnology Used:</strong>
              </p>
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
          </div>
          <div className="flex flex-col gap-5">
            {projectDetails?.map((eachDetails: string, index: number) => (
              <p key={index}>{eachDetails}</p>
            ))}
          </div>
        </div>
      </div>
      <CallToActtion />
      <Contact />
    </>
  );
};

export default ProjectDetails;
