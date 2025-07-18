import { BlogsDetails } from "@/assets/assets";
import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";

const BlogDetails = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const { blogs } = BlogsDetails;
  const currentBlog = blogs.find((blog) => blog.id.toString() === blogId);

  const details = {
    description: "How to host website on any hosting provider?",
    section: "Single Blog Page",
  };
  return (
    <>
      <Breadcrumbs
        description={details.description}
        section={details.section}
        path="Single Blog"
      />
      <div className="single-page">
        <div className="section">
          <div className="px-5 md:px-0 md:max-w-[90%] xl:max-w-[80%] mx-auto">
            <div className="" data-aos="fade-up">
              <img src={currentBlog?.image.src} alt="icon" className="mb-25" />
            </div>

            <div className="mb-5">
              <p className="text-[15px] text-[#5F5F65]">
                <span className="text-[32px] text-[#C00113]">
                  {currentBlog?.title}
                </span>{" "}
                <span className="text-[22px] text-[#353535]">
                  {currentBlog?.subtitle}
                </span>{" "}
                {currentBlog?.description}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {currentBlog?.content.map((eachContent, index) => (
                <p key={index}>{eachContent}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
