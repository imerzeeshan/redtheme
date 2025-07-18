"use client";
import { project } from "@/assets/assets";
import Breadcrumbs from "@/components/Breadcrumbs";
// import Link from "next/link";
import { useState } from "react";

type ProjectItem = {
  id: number;
  image: string;
};

const Portfolio = () => {
  const { projects } = project;
  const [projectList, setProjectList] = useState<ProjectItem[]>(projects);
  const details = {
    description:
      "Showcases a variety of projects that we have completed for our clients",
    section: "Our Portfolio",
  };
  const handleFilter = (filter: string) => {
    const filterData = projects.filter(
      (eachItem) => eachItem.filter === filter
    );
    setProjectList(filterData);
  };
  return (
    <div className="single-page">
      <Breadcrumbs
        description={details.description}
        section={details.section}
        path="Out Portfolio"
      />
      <section id="portfolio" className="portfolio">
        <div
          className="px-5 md:max-w-[90%] xl:max-w-[80%] relative mx-auto"
          data-aos="fade-up"
        >
          <div
            className="portfolio-isotope"
            data-portfolio-filter="*"
            data-portfolio-layout="masonry"
            data-portfolio-sort="original-order"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              <ul className="portfolio-flters">
                <li
                  onClick={() => setProjectList(projects)}
                  data-filter="*"
                  className="filter-active"
                >
                  All <span></span>
                </li>
                <li
                  onClick={() => handleFilter("filter-app")}
                  data-filter=".filter-app"
                >
                  App Design <span></span>
                </li>
                <li
                  onClick={() => handleFilter("filter-product")}
                  data-filter=".filter-product"
                >
                  App Development <span></span>
                </li>
                <li
                  onClick={() => handleFilter("filter-branding")}
                  data-filter=".filter-branding"
                >
                  Branding <span></span>
                </li>
                <li
                  onClick={() => handleFilter("filter-books")}
                  data-filter=".filter-books"
                >
                  IT Solutions <span></span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 portfolio-container">
              {projectList.map((project) => (
                <div key={project.id} className="portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <a
                      href={`/portfolio/${project.id}`}
                      data-gallery="portfolio-gallery-app"
                    >
                      <img
                        src={project.image}
                        className="img-fluid"
                        alt="project Image"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
