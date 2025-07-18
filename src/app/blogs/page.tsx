import { blogs } from "@/assets/assets";
import Breadcrumbs from "@/components/Breadcrumbs";

const Blogs = () => {
  const { posts } = blogs;
  const description =
    "Our latest blog posts, featuring images and videos to enhance your reading experience.";

  return (
    <>
      <Breadcrumbs path="Blogs" description={description} section={"Blogs"} />

      <section id="recent-posts" className="recent-posts sections-bg">
        <div
          className="px-5 md:px-0 md:max-w-[90%] xl:max-w-[80%] mx-auto"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-8">
            {posts.map((blog) => (
              <div key={blog.id}>
                <article>
                  <div className="post-img">
                    <img src={blog.image} alt="" className="img-fluid" />
                  </div>
                  <p className="post-category">{blog.category}</p>
                  <a href={`/blogs/${blog.id}`}>
                    <h2 className="title leading-6 text-[#c00113] hover:underline">
                      {blog.title}
                    </h2>
                  </a>
                  <div className="flex items-center">
                    <div className="post-meta">
                      <p className="post-author">{blog.author}</p>
                      <p className="post-date">
                        <time dateTime={blog.date}>{blog.display_date}</time>
                      </p>
                    </div>
                  </div>
                  <p className="text-4-line">{blog.excerpt}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
