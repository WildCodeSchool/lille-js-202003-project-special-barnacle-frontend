import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

const ContactezNegodi = () => {
  return (
    <div className="col-sm-6 pt-5 mx-auto text-center">
      <h4>Nous contacter</h4>
      <ul>
        <li className=" list-group-item listBackground ">
          <PhoneIcon />
          <span className=""> 02 41 01 23 45</span>
        </li>
        <li className=" list-group-item listBackground ">
          <MailIcon />
          <span className="ml-2" id="mail">
            contact@negodi.fr
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ContactezNegodi;
