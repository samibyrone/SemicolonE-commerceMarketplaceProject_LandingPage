import React from 'react';
import logoImg from "../assets/images/logo.png";
import { Caption, Title, BodyOne } from './CustomComponent';
import { CustomLink } from './CustomComponent';

export const Footer = () => {
  return (
    <>
      <footer className='py-14'>
        <div className='container grid-cols-1 grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div> 
            <img src={logoImg} alt="Logo" className="h-7"/>

            <div className='flex flex-col gap-2 mt-5'>
              <Caption>Address : 312, Herbert Macaulay Way, Sabo Yaba, Lagos.</Caption>
              <Caption>Email : info@semicolon.africa</Caption>
              <Caption>Call : +2349060008609</Caption>
            </div>
            <br />
            <BodyOne>
              Subscribe To Our Newsletter To Stay Connected On Our Products,
              get Offers And Updates
            </BodyOne>
            <input 
              type="text" 
              className='p-3 w-full border bg-white-100 border-gray-300 rounded-md outline-none'
              placeholder='Enter Your Email Address...'
            />
          </div>
          <div>
            <Title level={5}>Our Stores</Title>
            <div className='flex flex-col gap-4'>
              <CustomLink>Normal</CustomLink>
              <CustomLink>Shop With Sidebar</CustomLink>
              <CustomLink>Shop With Category</CustomLink>
              <CustomLink>Shop Filters Top Bar</CustomLink>
              <CustomLink>Shop Wide</CustomLink>
              <CustomLink>My Account</CustomLink>
            </div>
          </div>
          <div>
            <Title level={5}>Usefull Links</Title>
            <div className='flex flex-col gap-4'>
              <CustomLink>Normal</CustomLink>
              <CustomLink>Shop With Sidebar</CustomLink>
              <CustomLink>Shop With Category</CustomLink>
              <CustomLink>Shop Filters Top Bar</CustomLink>
              <CustomLink>Shop Wide</CustomLink>
              <CustomLink>My Account</CustomLink>
            </div>
          </div>
          <div>
            <Title level={5}>Our Stores</Title>
            <div className='flex flex-col gap-4'>
              <CustomLink>Normal</CustomLink>
              <CustomLink>Shop With Sidebar</CustomLink>
              <CustomLink>Shop With Category</CustomLink>
              <CustomLink>Shop Filters Top Bar</CustomLink>
              <CustomLink>Shop Wide</CustomLink>
              <CustomLink>My Account</CustomLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
