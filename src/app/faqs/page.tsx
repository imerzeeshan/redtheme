"use client";
import { faqs } from "@/assets/assets";
import Breadcrumbs from "@/components/Breadcrumbs";

const FAQs = () => {
  const details = {
    description:
      "It is a list of questions and answers that are commonly asked about a particular topic or product",
    section: "Frequently Asked Questions",
  };
  const handleFaqs = (id: number) => {
    const div = document.getElementById(`faq-content-${id}`);
    const arrow = document.getElementById(`down-arrow-${id}`);
    if (div) {
      div.classList.toggle("max-h-0");
      div.classList.toggle("opacity-0");
      div.classList.toggle("scale-y-95");

      div.classList.toggle("max-h-[1000px]");
      div.classList.toggle("opacity-100");
      div.classList.toggle("scale-y-100");
    }
    arrow?.classList.toggle("rotate-180");
  };

  return (
    <>
      <Breadcrumbs
        path="faqs"
        description={details.description}
        section={details.section}
      />
      <div className="single-page">
        <section id="faq" className="faq">
          <div
            className="px-5 md:max-w-[90%] xl:max-w-[80%] relative mx-auto"
            data-aos="fade-up"
          >
            <div className="row gy-4">
              <div
                className="accordion accordion-flush"
                id="faqlist"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {faqs.map((faq) => (
                  <div
                    className="accordion-item"
                    onClick={() => handleFaqs(faq.id)}
                    key={faq.id}
                  >
                    <h3 className="accordion-header flex justify-between items-center cursor-pointer">
                      <button
                        className="accordion-button collapsed cursor-pointer"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-1"
                      >
                        <span className="num">
                          <i className="bi bi-arrow-right-circle-fill"></i>
                        </span>
                        {faq.question}
                      </button>
                      <div className="w-[20px] mr-5">
                        <img
                          id={`down-arrow-${faq.id}`}
                          src="/down-arrow.svg"
                          alt="down-arrow"
                        />
                      </div>
                    </h3>
                    <div
                      id={`faq-content-${faq.id}`}
                      className="accordion-collapse transition-all duration-500 ease-in-out max-h-0 overflow-hidden opacity-0 scale-y-95"
                      data-bs-parent="#faqlist"
                    >
                      <div className="accordion-body text-black">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQs;
