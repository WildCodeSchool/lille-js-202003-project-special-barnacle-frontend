import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';

const ContactezNegodi = () => {
  return (
    <div className="container text-center">
      <h4 className=" list-group-item listBackground ">Nous contacter</h4>
      <ul>
        <li className="list-group-item listBackground">
          <PhoneIcon />
          <span className=""> 02 41 01 23 45</span>
        </li>
        <li className="list-group-item listBackground">
          <MailIcon />
          <span className="ml-2" id="mail">
            contact@negodi.fr
          </span>
        </li>

        <li className="list-group-item listBackground">
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
