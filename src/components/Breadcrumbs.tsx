const Breadcrumbs = ({
  section,
  description,
  path,
}: {
  section: string;
  description: string;
  path: string;
}) => {
  return (
    <div className="breadcrumbs relative">
      <div className="page-header flex items-center">
        <div className="relative">
          <div className="mx-5 md:mx-10 lg:mx-15 xl:mx-38">
            <div className="text-left">
              <h2>{section}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div className="">
          <ol className="mx-auto">
            <li>
              <a href="/">Home</a>
            </li>
            <li>{path}</li>
          </ol>
        </div>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
