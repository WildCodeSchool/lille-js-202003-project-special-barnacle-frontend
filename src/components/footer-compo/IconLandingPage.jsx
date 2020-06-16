import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom';

const IconLandingPage = () => {
  return (
    <div className="container-fluid px-0 mt-5 mb-5">
      <div className="d-flex justify-content-around px-2 mb-3 mt-5">
        <Link to="/" style={{ color: '#ffffff' }}>
          <FacebookIcon fontSize="large" alt="facebook" />
        </Link>
        <Link to="/" style={{ color: '#ffffff' }}>
          <TwitterIcon fontSize="large" alt="facebook" />
        </Link>
        <Link to="/" style={{ color: '#ffffff' }}>
          <LinkedInIcon fontSize="large" alt="facebook" />
        </Link>
      </div>
    </div>
  );
};

export default IconLandingPage;
