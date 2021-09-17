import React from "react";
import { Link } from "react-router-dom";
import NotFound from "../martini.png";

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <img
          src={NotFound}
          alt='404'
          style={{
            width: "100px",
            height: "100px",
          }}
        />
        <h1>The page you are looking is missing</h1>
        <Link to='/' className='btn btn-primary'>
          Back Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
