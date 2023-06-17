import React from 'react';

function PortfolioSection() {
  return (
    <section className="container">
      <h2>Portfolio</h2>
      <div className="row">
        {/* Example portfolio item */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <img
              src="https://techhubsouthflorida.org/wp-content/uploads/2021/08/1200px-Amazon_Web_Services_Logo.jpg"
              className="card-img-top"
              alt="Project"
            />
            <div className="card-body">
              <h5 className="card-title">Project Name</h5>
              <p className="card-text">
                A brief description of the project.
              </p>
              <a href="#" className="btn btn-primary">
                View Project
              </a>
            </div>
          </div>
        </div>
        {/* Add more portfolio items as needed */}
      </div>
    </section>
  );
}

export default PortfolioSection;
