import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer" className="footer-section">
      <div className="w-full">
        <div className="footer-content pb-5">
          <div className="flex flex-wrap gap-5 p-10 lg:px-10 lg:flex-row xl:px-35">
            <div className="lg:flex-1/3">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link href="#" className="logo flex items-center">
                    <img src="/assets/images/logo.png" alt="logo" />
                  </Link>
                </div>
                <div className="footer-text">
                  <p>
                    At RedTheme we are passionate about providing businesses
                    with the IT solutions they need to succeed in today's
                    competitive marketplace.
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <Link href="#" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </Link>
                  <Link href="#" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </Link>
                  <Link href="#" className="instagram">
                    <i className="bi bi-instagram"></i>
                  </Link>
                  <Link href="#" className="aedin">
                    <i className="bi bi-aedin"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:flex-1 footer-column">
              <div className="service-widget footer-widget">
                <div className="footer-widget-heading">
                  <h3>Services</h3>
                </div>
                <ul className="list">
                  <li>
                    <Link href="#">Web Design</Link>
                  </li>
                  <li>
                    <Link href="#">App Developemnt</Link>
                  </li>
                  <li>
                    <Link href="#">Cloud Services</Link>
                  </li>
                  <li>
                    <Link href="#">Domain And Hosting</Link>
                  </li>
                  <li>
                    <Link href="#">Seo Optimization</Link>
                  </li>
                  <li>
                    <Link href="#">Social Media</Link>
                  </li>
                  <li>
                    <Link href="#">Data Secure</Link>
                  </li>
                  <li>
                    <Link href="#">Web Hosting</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:flex-1 footer-column">
              <div className="service-widget footer-widget">
                <div className="footer-widget-heading">
                  <h3>Information</h3>
                </div>
                <ul className="list">
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/services/plans">Pricing</Link>
                  </li>
                  <li>
                    <Link href="/faqs">FAQs</Link>
                  </li>
                  <li>
                    <Link href="/team">Team</Link>
                  </li>
                  <li>
                    <Link href="/blogs">Blogs</Link>
                  </li>
                  <li>
                    <Link href="/blogs/single-blog">Single Blog</Link>
                  </li>
                  <li>
                    <Link href="#term-conditions">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link href="/">Sample Page</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:flex-1/3">
              <div className="contact-widget footer-widget mb-25">
                <div className="footer-widget-heading">
                  <h3>Contacts</h3>
                </div>
                <div className="footer-text">
                  <p>
                    <i className="bi bi-geo-alt-fill mr-5"></i> 101 West Town ,
                    PBO 12345, United States
                  </p>
                  <p>
                    <i className="bi bi-telephone-inbound-fill mr-5"></i> +1
                    1234 56 789
                  </p>
                  <p>
                    <i className="bi bi-envelope-fill mr-5"></i>
                    contact@example.com
                  </p>
                </div>
              </div>
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Newsletter</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Don't miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <i className="bi bi-telegram"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center lg:mx-10 xl:mx-35">
            <div className="copyright-text">
              <p>
                RedTheme<span>.</span> © 2024 - Designed by{" "}
                <Link href="https://www.templatemonster.com/authors/zrthemes/">
                  ZRTHEMES
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
