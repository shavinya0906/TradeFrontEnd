import React from "react";

const NotFound = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="text-center">
            <h1 className="display-4">404 Not Found</h1>
            <p className="lead">
              Looks like you've followed a broken link or entered a URL that
              doesn't exist on this site.
            </p>
            {/* You can add additional content or styling here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
