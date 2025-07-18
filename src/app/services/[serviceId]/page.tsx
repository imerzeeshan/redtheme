import { companyServicesDetails } from "@/assets/assets";
import Breadcrumbs from "@/components/Breadcrumbs";
import SkillBar from "@/components/SkillsBar";

const details = {
  section: "Web Design Single Service Page",
  description: "Your Trusted Partner for End-to-End IT Solutions",
};

const ServiceDetails = async ({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}) => {
  const { serviceId } = await params;

  const serviceDetails = companyServicesDetails.services.find(
    (service) => serviceId === service.id.toString()
  );
  // console.log(serviceDetails);
  if (!serviceDetails) return null;

  const { skills, projectDetails, leftColumn, imageSection } = serviceDetails;

  return (
    <>
      <Breadcrumbs
        description={details.description}
        section={details.section}
        path="Single Service"
      />
      <div className="single-page">
        <div className="section">
          <div className="px-5 md:max-w-[90%] xl:max-w-[80%] relative mx-auto">
            <div className="row">
              <div className="" data-aos="fade-up">
                <img src={imageSection.img} alt="icon" className="mb-25" />
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 gap-5 mb-5">
              <p>
                <span className="big-text">{leftColumn.title}</span>{" "}
                <span className="small-text">{leftColumn.subtitle}</span> ABC
                {leftColumn.description}
              </p>

              <div className="list-right-wrap">
                <div data-aos="fade-up">
                  <p>
                    <strong>Teachnology Used:</strong>
                  </p>
                  <ul id="skills">
                    {skills?.map((skill, i) => (
                      <SkillBar
                        key={i}
                        label={skill.label}
                        percentage={skill.percentage}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              {serviceDetails?.projectDetails.paragraphs.map(
                (service, index) => (
                  <p key={index}>{service}</p>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
