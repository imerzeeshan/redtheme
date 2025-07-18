import { companyServices } from "@/assets/assets";
import Breadcrumbs from "@/components/Breadcrumbs";
// import Link from "next/link";

const Services = () => {
  const { description, services } = companyServices;
  return (
    <>
      <Breadcrumbs
        path="Services"
        description={description}
        section="Services"
      />
      <div id="services" className="section">
        <div className="top-icon-box relative">
          <div className="px-5 md:max-w-[90%] xl:max-w-[80%] relative mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.id} data-aos={service.animation}>
                  <a href={`/services/${service.id}`}>
                    <div className="icon-box">
                      <div className="icon">
                        <i className={service.icon}></i>
                      </div>
                      <h4 className="title">{service.title}</h4>
                      <p>{service.description}</p>
                      <span></span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
