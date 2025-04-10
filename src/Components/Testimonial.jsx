import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Testimonial.css';

const Testimonials = () => {
  return (
    <section className="py-5 py-md-4 py-lg-5 bg-light">
      <div className="container px-4 px-md-5 px-lg-0">
        <div className="d-flex flex-column align-items-center">
          {/* Header */}
          <div className="text-center mb-4">
            <h2 className="mt-4 fs-3 fs-sm-4 fs-xl-5 fw-bold">
              <span style={{ color: 'black' }}>Take a Look</span>{' '}
              <span style={{ color: 'red' }}>What Our Happy Clients</span>{' '}
              <span style={{ color: 'blue' }}>Say About Us</span>
            </h2>
          </div>

          {/* Reviews Link */}
          <div className="mt-4 mt-md-5 text-center">
            <a
              href="https://g.co/kgs/ZHn3g7h"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark fw-bold text-decoration-none border-bottom border-2 border-dark pb-1 transition-all hover:border-secondary hover:text-secondary focus:outline-none focus:ring-1 focus:ring-dark focus:ring-offset-2"
            >
              Check all our reviews
            </a>
          </div>

          {/* Testimonials Grid */}
          <div className="position-relative mt-4 mt-md-5 w-100">
            {/* Background Gradient */}
            <div
              className="position-absolute top-50 translate-middle-y w-100 h-100 mx-auto rounded-3 opacity-25 blur-lg"
              style={{
                background:
                  'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
              }}
            ></div>

            {/* Cards */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 position-relative mx-auto justify-content-center">
              {/* Testimonial 1 */}
              <div className="col">
                <div className="card h-100 shadow-lg overflow-hidden custom-card">
                  <div className="card-body d-flex flex-column p-3 p-lg-4 bg-white">
                    <div className="flex-grow-1">
                      <div className="d-flex gap-1 mb-3">
                        {[...Array(5)].map((_, index) => (
                          <svg
                            key={index}
                            className="w-4 h-4 text-warning"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <blockquote className="flex-grow-1 mt-3">
                        <p className="fs-6 text-dark lh-lg">
                          I booked with family suite rooms very nice stayed here neat and clean safe and secure good staff service good location home food very tasty. Overall good.
                        </p>
                      </blockquote>
                    </div>
                    <div className="d-flex align-items-center mt-3">
                      <img
                        className="rounded-circle flex-shrink-0 object-cover"
                        src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                        alt=""
                        style={{ width: '40px', height: '40px' }}
                      />
                      <div className="ms-2">
                        <p className="fw-bold text-dark mb-0">Dheekshan</p>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="col">
                <div className="card h-100 shadow-lg overflow-hidden custom-card">
                  <div className="card-body d-flex flex-column p-3 p-lg-4 bg-white">
                    <div className="flex-grow-1">
                      <div className="d-flex gap-1 mb-3">
                        {[...Array(5)].map((_, index) => (
                          <svg
                            key={index}
                            className="w-4 h-4 text-warning"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <blockquote className="flex-grow-1 mt-3">
                        <p className="fs-6 text-dark lh-lg">
                          Clean rooms, great management, and friendly staff. Enjoy good food, DJ, campfire, parking, free Wi-Fi, and 24-hour hot water. Safe for individuals and families. Highly recommended!
                        </p>
                      </blockquote>
                    </div>
                    <div className="d-flex align-items-center mt-3">
                      <img
                        className="rounded-circle flex-shrink-0 object-cover"
                        src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
                        alt=""
                        style={{ width: '40px', height: '40px' }}
                      />
                      <div className="ms-2">
                        <p className="fw-bold text-dark mb-0">
                        Mohammed Gulam</p>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="col">
                <div className="card h-100 shadow-lg overflow-hidden custom-card">
                  <div className="card-body d-flex flex-column p-3 p-lg-4 bg-white">
                    <div className="flex-grow-1">
                      <div className="d-flex gap-1 mb-3">
                        {[...Array(5)].map((_, index) => (
                          <svg
                            key={index}
                            className="w-4 h-4 text-warning"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <blockquote className="flex-grow-1 mt-3">
                        <p className="fs-6 text-dark lh-lg">
                          Best affordable place to stay in Kodaikanal. Best support staff for all your needs. For family and office tours with Wi-Fi and scenic views from your windows.
                        </p>
                      </blockquote>
                    </div>
                    <div className="d-flex align-items-center mt-3">
                      <img
                        className="rounded-circle flex-shrink-0 object-cover"
                        src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png"
                        alt=""
                        style={{ width: '40px', height: '40px' }}
                      />
                      <div className="ms-2">
                        <p className="fw-bold text-dark mb-0">
                        Dhaasim Sheraya</p>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;