import React from "react";

const Footer = ({logo}) => {
  return (
    <div id="contact" className="flex flex-row flex-wrap items-center justify-around p-10">
        <img src={logo}/>
        <div>
          <a href='https://www.instagram.com/hophoet' target="_blank">Nous suivre</a>
        </div>
    </div>
  );
};

export default Footer;
