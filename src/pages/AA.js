import React from 'react';
import Nav from '../components/Nav';
import './Proj.css';
import Footer from '../sections/Footer/Footer';

const AA = () => {
  return (
    <div>
        <Nav/>
        <div className='proj'>
            <div className='title'>Account Access</div>
            <div className='description'>Account Access allows a user with an investment account at T. Rowe Price to review, maintain and edit their portfolio.</div>
            <div className='quick-stats'>
                <div className='stat'>
                    <div className='stat-label'>Type</div>
                    <div className='stat-data'>Financial Services</div>
                </div>
                <div className='stat'>
                    <div className='stat-label'>Stack</div>
                    <div className='stat-data'>React, Redux, D3, GraphQL, React Testing Library, Java, AWS Lambda, AWS S3</div>
                </div>
                <div className='stat'>
                    <div className='stat-label'>Live Site</div>
                    <a href='https://www.troweprice.com/usis/my-accounts' target='_blank' className='stat-data' rel="noreferrer">Account Access</a>
                    <div className='stat-data'>(Requires a T. Rowe Price account)</div>
                </div>
            </div>
            <div className='title'>Project Purpose and Goal</div>
            <div className='description'>
                Maintain, debug and enhance the existing application. During the time 
                I was on the team, our biggest goal was to simplify the on-screen 
                information in a way a user with minimal investment experience could 
                understand. I helped create price charts D3.js, unified all
                "as of" dates across the site and simplified business language and 
                component logic. Throughout my time maintaining this application, 
                my ability to read and write code had increased dramtically - I worked 
                in a fast-paced environment with no senior or junior developers 
                other than myself.</div>
        </div>
        <Footer/>
    </div>
  )
};

export default AA;