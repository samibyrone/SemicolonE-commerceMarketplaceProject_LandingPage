import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const CustomeNavLink = ({ href, className, children }) => {
  const linkStyles =
    "text-[15px font-medium text-gray-600 cursor-pointer list-none";
  return (
    <NavLink
      to = {href}
      className={({ isActive }) =>
        isActive
          ? `${className} ${linkStyles} text-primary-green`
          : `${className} ${linkStyles}`
      }
    >
      {children}
    </NavLink> 
  );
};

const CustomeLink = ({className, children }) => {
    const linkStyles =
      "text-[15px font-medium text-gray-600 cursor-pointer list-none";
    return (
        <NavLink className={`${className} ${linkStyles}`}>
          {children}
        </NavLink> 
    )
};

const Badges = ({color, children}) => {
    return (
        <div className={`w-[18px] h-[18px] ${color} rounded-full text-[12px] flex justify-center text-white`}>
            {children}
        </div>
    );
};

const Title = ({ level, children, className }) => {
  const Tag = `h${level}`;
  return <Tag className={className}> {children} </Tag>;
};
     

const BodyOne = ({ children, className }) =>  <p className={className}> {children}  </p>;
      
const BodyTwo = ({ children, className }) =>  <p className={className}> {children}  </p>;
      
const Caption = ({ children, className }) =>  <span className={className}>  {children}  </span>;
      
const Span = ({ children, className }) => <span className={className}>  {children}  </span>;


Title.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

CustomeNavLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired,
  };
  
  CustomeLink.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired,
};

Badges.propTypes = {
  color: PropTypes.isRequired,
  children: PropTypes.node.isRequired,
};


export {
  Title, 
  BodyOne, 
  BodyTwo, 
  Caption, 
  Span, 
  Badges, 
  CustomeLink, 
  CustomeNavLink, 
};