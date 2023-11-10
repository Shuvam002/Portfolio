"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import Link from 'next/link'
const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>C++</li>
                <li>Python</li>
                <li>Sequelize</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>B.Tech in Computer Science and Engineering (2020-2024) <br />Meghnad Saha Institute of Technology, Kolkata</li>
                
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li><Link href={"https://www.credly.com/badges/1f817a0b-d14f-435b-ba06-20e0de6b19e2/public_url"} className="hover:text-blue-400 border-b border-purple-400">Google Cybersecurity Certificate</Link></li>
                <li><Link href={"https://ude.my/UC-620caa6f-bcab-42bc-8709-e299d5ccc466"} className="hover:text-blue-400 border-b border-purple-400">Database Management System</Link></li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/about.png" width={500} height={500} className='flex relative' alt='' />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I am a tech enthusiast with a passion for creating
                        interactive and responsive web applications as well as creating softwares and mobile applications. I have experience
                        working with JavaScript, React, Redux, Node.js, Express, MySQL, MongoDB,
                        Sequelize, HTML, CSS, C++, Python and Git. I am a quick learner and I am always
                        looking to expand my knowledge and skill set. I am a team player and
                        I am excited to work with others to create amazing applications.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>

            </div></section>
    )
}

export default AboutSection