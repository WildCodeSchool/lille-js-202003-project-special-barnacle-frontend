import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

const ContactezNegodi = () => {
  return (
    <div className="col-sm-4 p-2 text-center mx-auto text-sm-left ">
      <h4 className=" list-group-item listBackground ">Nous contacter</h4>
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
