import { plans } from "@/assets/assets";
import Breadcrumbs from "@/components/Breadcrumbs";

const Plans = () => {
  const { pricing } = plans;
  const details = {
    description:
      "Offer a variety of add-on services that you can customize to your needs",
    section: "Pricing Plans",
  };
  return (
    <div className="single-page">
      <Breadcrumbs
        description={details.description}
        section={details.section}
        path="Pricing Plans"
      />
      <div className="pricing section">
        <div className="px-5 md:max-w-[90%] xl:max-w-[80%] relative mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pricing.map((plan) => (
              <div key={plan.id}>
                <div className="card text-center">
                  <div className="price">
                    <h4>
                      {plan.plan}
                      <span className="price-tag">
                        <sup>$</sup>
                        {plan.price}
                      </span>
                    </h4>
                  </div>
                  <div className="option">
                    <ul>
                      {plan.features.map((features, index) => (
                        <li className={features.liClass} key={index}>
                          <i
                            className={features.iconClass}
                            aria-hidden={features.included}
                          ></i>{" "}
                          {features.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a href="#" className="default-theme-btn-two">
                    Order Now<span></span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
