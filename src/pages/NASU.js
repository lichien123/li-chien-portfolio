import React from 'react';
import Nav from '../components/Nav';
import './Proj.css';
import Footer from '../sections/Footer/Footer';

const NASU = () => {
  return (
    <div>
        <Nav/>
        <div className='proj'>
            <div className='title'>New Account Setup (NASU)</div>
            <div className='description'>NASU is an application that allows new and existing customers to open up an investment account with T. Rowe Price.</div>
            <div className='quick-stats'>
                <div className='stat'>
                    <div className='stat-label'>Type</div>
                    <div className='stat-data'>Financial Services</div>
                </div>
                <div className='stat'>
                    <div className='stat-label'>Stack</div>
                    <div className='stat-data'>React, Redux, Typescript, Jest, Java, AWS Lambda, AWS S3</div>
                </div>
                <div className='stat'>
                    <div className='stat-label'>Live Site</div>
                    <a href='https://www.troweprice.com/personal-investing/tools/fund-research/account-finder' target='_blank' className='stat-data' rel="noreferrer">New Account Setup</a>
                </div>
            </div>
            <div className='title'>Project Purpose and Goal</div>
            <div className='description'>
                Transform the old NASU experience, a lengthy and mostly HTML-based form,
                into a multi-step process where information is divided and displayed on
                individual "screens." Each "screen" is unique and asks the user to submit 
                a section of information, such as investment preferences, first/last name, 
                bank account information, and anything else needed to open an investment 
                account. Screens give clear and concise information as to reduce user 
                fatigue, so the quality of the user interface is quite important.</div>
        </div>
        <Footer/>
    </div>
  )
};

export default NASU;