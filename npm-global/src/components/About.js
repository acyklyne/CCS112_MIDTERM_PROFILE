import React from 'react';
import aboutImage from './assets/Try Magic Design.png'; // Adjust the path if necessary

const About = () => {
    return (
        <div className="container text-center my-5">
            <h1 className="display-4">ABOUT ME</h1>
            <img src={aboutImage} alt="About Me" className="img" />
            <p style={{ fontSize: '24px', fontFamily: "Seravek, 'Gill Sans Nova', Ubuntu, Calibri, 'DejaVu Sans', source-sans-pro, sans-serif", textAlign: 'justify', marginTop: '40px', marginBottom: '60px'}}>
                I am Acy Klyne Aguilar, an aspiring software developer with a passion for learning new technologies. 
                Tech-savvy with a warm and friendly demeanor. Skilled at logical 
                and analytical resolution. Team builder who is acutely attentive to 
                employee and customer needs. Punctual problem solver and avid 
                multitasker. Track record of being an essential part of the 
                management team and instrumental in providing effective solutions 
                that produce immediate impact and contribute to the company's long-term success.
            </p>
            <h1 style={{ fontSize:'30px'}}>TRAININGS</h1>
            <p style={{ fontSize: '24px', fontFamily: "Seravek, 'Gill Sans Nova', Ubuntu, Calibri, 'DejaVu Sans', source-sans-pro, sans-serif", textAlign: 'justify', marginTop: '40px', marginBottom: '60px'}}>
            • TESDA | Smart Technopreneurship 101  - August 29, 2023 <br />
            • TESDA | Introduction to CSS - September 4, 2023 <br />
            • AWS Training and Certification | Fundamentals of Analytics on AWS 1 - August 19, 2024 <br />
            • AWS Training and Certification | Fundamentals of Analytics on AWS 2 - August 17, 2024
            </p>

            <h1 style={{ fontSize:'30px'}}>EDUCATION</h1>
            <p style={{ fontSize: '24px', fontFamily: "Seravek, 'Gill Sans Nova', Ubuntu, Calibri, 'DejaVu Sans', source-sans-pro, sans-serif", textAlign: 'justify', marginTop: '40px', marginBottom: '60px'}}>
            College Undergraduate: Pamantasan ng Cabuyao (2 years) <br />
            Bachelor of Science in Computer Science <br />
            2022  <br />
            Cabuyao, Laguna <br />
            <br />
            Senior Highschool: Pamantasan ng Cabuyao Senior Highschool Department <br />
            Science, Technology, Engineering, and Mathematics (STEM) <br />
            2020 – 2022 <br />
            Cabuyao, Laguna <br />
            <br />
            Junior Highschool: Gulod National Highschool <br />
            2016 – 2020  <br />
            Cabuyao, Laguna <br />
            <br />
            Elementary: Gulod Elementary School <br />
            2009 – 2016 <br />
            Cabuyao, Laguna <br /></p>
            


        </div>
    );
};

export default About;
