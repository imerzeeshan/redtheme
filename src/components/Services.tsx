import { homeServices } from "@/assets/assets";
import Link from "next/link";

const Services = () => {
  const { content } = homeServices;
  return (
    // Start Service Section
    <div id="services" className="section relative">
      <div className="top-icon-box">
        <div className="px-5 md:max-w-[90%] lg:max-w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.map((eachService) => (
              <div
                key={eachService.id}
                data-aos={eachService.animation}
              >
                <Link href={`/services/${eachService.id}`}>
                  <div className="icon-box">
                    <div className="icon">
                      <i className={eachService.icon}></i>
                    </div>
                    <h4 className="title">{eachService.title}</h4>
                    <p>{eachService.description}</p>
                    <span></span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    //    End Service Section
  );
};

export default Services;
