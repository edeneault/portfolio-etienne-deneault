import React from "react";
import { Link } from "react-router-dom";

const PortfolioDetailsContent = ({ title, category, description, meta }) => {
  return (
    <div className='portfolio-details-content'>
      <a href='/' className='category'>
        {category}
      </a>

      <h1 className='title'>{title}</h1>

      <p>{description}</p>

      <ul className='project-info'>
        <li>
          <span>Client:</span> {meta.client}
        </li>
        <li>
          <span>Date:</span> {meta.date}
        </li>
        <li>
          <span>Website:</span>
          <a href={meta.website} target='_blank' rel='noopener noreferrer'>
            {meta.website}
          </a>
        </li>
        <li>
          <span>Service:</span>
          {meta.services.map((service, index) => (
            <a key={index} className='pr-2' href='/'>
              {service}
            </a>
          ))}
        </li>
      </ul>

      <div className='project-share'>
        <span>Additional Resources:</span>
        <Link
          to={{ pathname: meta.github }}
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='ml-2 fa fa-github'></i>
          <p className='d-inline-block pl-2'>GitHub Repository</p>
        </Link>

        {/*  <a href='/'>
          <i className='fa fa-twitter' />
        </a>
        <a href='/'>
          <i className='fa fa-pinterest-p' />
        </a>
        <a href='/'>
          <i className='fa fa-google-plus' />
        </a> */}
      </div>
    </div>
  );
};

export default PortfolioDetailsContent;
