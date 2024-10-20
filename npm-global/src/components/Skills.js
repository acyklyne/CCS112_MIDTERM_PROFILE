import React from 'react';
import { ProgressBar, Accordion } from 'react-bootstrap';

const Skills = () => {
    const csSkillsData = [
        { name: 'JavaScript', level: 60, description: 'Proficient in ReactJS and NodeJS programming.' },
        { name: 'React', level: 40, description: 'Experience with functional components and hooks.' },
        { name: 'CSS', level: 60, description: 'Strong understanding of layouts, animations, and responsive design.' },
        { name: 'Python', level: 74, description: 'Familiar with data analysis and scripting.' },
        { name: 'Java', level: 85, description: 'Experience in OOP principles and building applications.' },
        { name: 'Data Analytics', level: 87, description: 'Skilled in data visualization and statistical analysis.' },
        { name: 'SQL', level: 87, description: 'Experienced in database design and complex queries.' }
    ];

    const dataAnalyticsSkillsData = [
        { name: 'Data Visualization', level: 84, description: 'Experienced with tools like MySQL and Amazon Redshift.' },
        { name: 'Statistical Analysis', level: 85, description: 'Proficient in using statistical methods for data interpretation.' },
        { name: 'Machine Learning', level: 60, description: 'Familiar with algorithms like regression and clustering.' },
        { name: 'Data Cleaning', level: 75, description: 'Skilled in preparing data for analysis using SQL.' },
        { name: 'Excel', level: 80, description: 'Skilled in manipulating data using advance Excel skills' }
    ];

    return (
        <div className="container my-5">
            <h1 className="display-4">My Skills</h1>
            <Accordion defaultActiveKey="{null}">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Application/Software Development Skills</Accordion.Header>
                    <Accordion.Body>
                        {csSkillsData.map((skill, index) => (
                            <div key={index} className="mb-4">
                                <h5>{skill.name}</h5>
                                <ProgressBar now={skill.level} label={`${skill.level}%`} className="mb-2" />
                                <p>{skill.description}</p>
                            </div>
                        ))}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Data Analytics Skills</Accordion.Header>
                    <Accordion.Body>
                        {dataAnalyticsSkillsData.map((skill, index) => (
                            <div key={index} className="mb-4">
                                <h5>{skill.name}</h5>
                                <ProgressBar now={skill.level} label={`${skill.level}%`} className="mb-2" />
                                <p>{skill.description}</p>
                            </div>
                        ))}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Skills;
