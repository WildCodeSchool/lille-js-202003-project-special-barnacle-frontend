import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';

const ContactezNegodi = () => {
  return (
    <div className="container-fluid">
      {/* <div className="col-sm-4 p-2 text-center mx-auto text-sm-left"> */}
      <h4 className="text-center list-group-item listBackground col-lg-6">
        Nous contacter
      </h4>
      <ul>
        <li className="text-center list-group-item listBackground col-lg-6">
          <PhoneIcon />
          <span className=""> 02 41 01 23 45</span>
        </li>
        <li className="text-center list-group-item listBackground col-lg-6">
          <MailIcon />
          <span className="text-center ml-2 col-lg-6" id="mail">
            contact@negodi.fr
          </span>
        </li>

        <li className="text-center list-group-item listBackground col-lg-6">
          <Link to="/">
            <img
              src="img/iconfacebook.png"
              alt="facebook"
              width="30px"
              className="mr-3"
            />
          </Link>

          <Link to="/">
            <img
              src="img/icontwitter.png"
              alt="facebook"
              width="30px"
              className="mr-3"
            />
          </Link>

          <Link to="/">
            <img
              src="img/iconlinkedin.png"
              alt="facebook"
              width="30px"
              className="mr-3"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ContactezNegodi;
