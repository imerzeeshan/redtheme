const Counter = () => {
  return (
    //    <!--  Start Counter Section  -->
    <div
      id="stats-counter"
      className="stats-counter section aos-init aos-animate"
    >
      <div className="text-center" data-aos="fade-up">
        <div
          className="px-5 md:max-w-[90%] lg:max-w-[80%] relative mx-auto grid grid-cols-1 lg:grid-cols-3 
            gap-5 items-center justify-center"
        >
          <div className="stats-item flex flex-col items-center">
            <div className="icon">
              <i className="flaticon-102-avatar"></i>
            </div>
            <span
              data-purecounter-start="0"
              data-purecounter-end="232"
              data-purecounter-duration="1"
              className="purecounter"
            ></span>
            <p>Happy Clients</p>
          </div>
          {/* <!-- End Stats Item --> */}

          <div className="stats-item flex flex-col items-center">
            <div className="icon">
              <i className="flaticon-060-award"></i>
            </div>
            <span
              data-purecounter-start="0"
              data-purecounter-end="521"
              data-purecounter-duration="1"
              className="purecounter"
            ></span>
            <p>Completed Projects</p>
          </div>
          {/* <!-- End Stats Item --> */}

          <div className="stats-item flex flex-col items-center">
            <div className="icon">
              <i className="flaticon-122-circular-clock"></i>
            </div>
            <span
              data-purecounter-start="0"
              data-purecounter-end="453"
              data-purecounter-duration="1"
              className="purecounter"
            ></span>
            <p>Hours Of Support</p>
          </div>
          {/* <!-- End Stats Item --> */}
        </div>
      </div>
    </div>
    // <!--  End Counter Section  -->
  );
};

export default Counter;
