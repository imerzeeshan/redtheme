import { blogs } from "@/assets/assets";

const Blogs = () => {
  const { posts } = blogs;
  return (
    <section id="recent-posts" className="recent-posts sections-bg">
      <div
        className="px-5 md:px-0 md:max-w-[90%] xl:max-w-[80%] mx-auto"
        data-aos="fade-up"
      >
        <div className="section-header">
          <h2>Blogs</h2>
          <p>
            Our latest blog posts, featuring images and videos to enhance your
            reading experience
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-8">
          {posts.map((blog) => (
            <div key={blog.id}>
              <article>
                <div className="post-img">
                  <img src={blog.image} alt="" className="img-fluid" />
                </div>
                <p className="post-category">{blog.category}</p>
                <h2 className="title leading-6 text-[#c00113] hover:underline cursor-pointer">
                  <a href={`/blogs/${blog.id}`}>{blog.title}</a>
                </h2>
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
        {/* <!-- End recent posts list --> */}
      </div>
    </section>
  );
};

export default Blogs;
