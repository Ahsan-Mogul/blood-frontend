import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-dark text-light">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-secondary">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="#" className="me-4 text-light social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="me-4 text-light social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="me-4 text-light social-icon">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="me-4 text-light social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="me-4 text-light social-icon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="me-4 text-light social-icon">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      {/* Section: Links */}
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-danger">
                <i className="fas fa-gem me-3"></i>JERRYCODE
              </h6>
              <p>
                We are totally committed to bringing your application ideas to life through direct collaboration and feedback.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-danger">Products</h6>
              <p><a href="#!" className="text-light footer-link">Spring Boot</a></p>
              <p><a href="#!" className="text-light footer-link">React</a></p>
              <p><a href="#!" className="text-light footer-link">Photoshop</a></p>
              <p><a href="#!" className="text-light footer-link">Laravel</a></p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-danger">Useful links</h6>
              <p><a href="#!" className="text-light footer-link">Pricing</a></p>
              <p><a href="#!" className="text-light footer-link">Settings</a></p>
              <p><a href="#!" className="text-light footer-link">Orders</a></p>
              <p><a href="#!" className="text-light footer-link">Help</a></p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-danger">Contact</h6>
              <p><i className="fas fa-home me-3 text-danger"></i> Dar es Salaam, Posta - IFM</p>
              <p><i className="fas fa-envelope me-3 text-danger"></i> info@example.com</p>
              <p><i className="fas fa-phone me-3 text-danger"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print me-3 text-danger"></i> + 01 234 567 89</p>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="text-center p-4 bg-black border-top border-secondary">
        © 2024 Copyright: <a className="fw-bold text-danger" href="https://www.linkedin.com/in/shamaz-raheem-6400b6303/">Shamaz</a>
      </div>
    </footer>
  );
};

export default Footer;
