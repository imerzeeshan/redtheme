import ParticlesBackground from "@/components/ParticlesBackground";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-[150%]">
      {/*  Hero Section  */}
      <section id="hero" className="hero">
        {/* <div id="particles-js"></div> */}
        <ParticlesBackground />
        <div id="repulse-circle-div"></div>
        <div className="px-5 md:max-w-[90%] lg:max-w-[80%] relative mx-auto">
          <div className="lg:flex lg:gap-3">
            <div className="text-left caption">
              <h1 data-aos="fade-up" className="leading-12">
                IT Solutions and Business Services for Success
              </h1>
              <h2 data-aos="fade-up" className="leading-6">
                Harness the power of technology to boost productivity, optimize
                operations, and achieve your business goals.
              </h2>
              <div className="social" data-aos="fade-up">
                <Link href="#">
                  <i className="bi bi-twitter"></i>
                </Link>
                <Link href="#">
                  <i className="bi bi-facebook"></i>
                </Link>
                <Link href="#">
                  <i className="bi bi-linkedin"></i>
                </Link>
                <Link href="#">
                  <i className="bi bi-instagram"></i>
                </Link>
              </div>
              <div className="d-flex justify-content-start">
                <Link
                  href="#contact"
                  className="default-theme-btn-one mr-20"
                  data-aos="fade-up"
                >
                  Contact Us<span></span>
                </Link>
                <Link
                  href="#services"
                  className="default-theme-btn-two"
                  data-aos="fade-up"
                >
                  Get Started<span></span>
                </Link>
              </div>
            </div>
            <div >
              <img
                src="/assets/images/hero-img.png"
                className="rounded-4 hover:translate-y-[-7px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Section  */}
    </div>
  );
};

export default Hero;
