import React from 'react';
import { team } from '../assets/img';

const AboutTeam = () => {
  return (
    <section className="py-3 py-md-5 py-xl-8 bg-black text-white">
      <div className="container">
        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <img className="img-fluid rounded" loading="lazy" src={team} alt="Team" />
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-11">
                <h2 className="h1 mb-3 text-danger">About Our Software Engineering Team</h2>
                <p className="lead fs-5 text-light mb-3">
                  We are a passionate team of software engineers dedicated to building exceptional digital solutions.
                  Our goal is to provide innovative and reliable software that meets the needs of our clients and users.
                  We leverage cutting-edge technologies and best practices to deliver high-quality software products.
                </p>
                <p className="text-light mb-5">
                  At our core, we believe in the power of technology to transform businesses and improve lives.
                  Whether it's developing robust web applications, creating scalable mobile solutions, or implementing
                  cloud-based systems, our team is committed to excellence in software engineering.
                </p>

                <div className="row gy-4 gy-md-0 gx-xxl-5">
                  <div className="col-12 col-md-6">
                    <div className="d-flex">
                      <div className="me-4 text-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                        </svg>
                      </div>
                      <div style={{padding: '10px' , boxShadow: '0 0 20px 5px red'  , height : '150px' }}>
                        <h4 className="mb-2 text-white">Innovative Solutions</h4>
                        <p className="text-light mb-0">We focus on crafting innovative software solutions that solve real-world challenges.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="d-flex">
                      <div className="me-4 text-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-fire" viewBox="0 0 16 16">
                          <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                        </svg>
                      </div>
                      <div   style={{padding: '10px' , boxShadow: '0 0 20px 5px red', height : '150px'  }}>
                        <h4 className="mb-2 text-white">Digital Excellence</h4>
                        <p className="text-light mb-0">We strive for digital excellence, ensuring our software meets the highest standards of quality and performance.</p>
                      </div>
                    </div>
                  </div>
                </div> {/* end row */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
