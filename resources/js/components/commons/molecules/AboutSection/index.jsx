import { useState, useTransition } from "react";
import TabButton from "../../atoms/TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>PHP</li>
                <li>ASP.NET (C#)</li>
                <li>MySQL</li>
                <li>Docker</li>
                <li>React</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Universitas Putra Indonesia YPTK Padang</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>-</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()

    const handlerTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <img 
                    src="/images/statics/about-me.png" 
                    alt="about-me" 
                    width={500}
                    height={500}
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I am a fullstack web developer with a passion for creating interactive and responsive web applications. I have experience working with, Javascript, React, Node.js, ASP.NET, MySQL, PHP(Wordpress, CodeIgniter), HTML, CSS, and GIT. I am a quick learner and i am always to expand my knowledge and skill set. I am a team player and i am excited to work with others to create amazing applications
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selectTab={() => handlerTabChange("skills")} active={tab === "skills"}>
                            {" "}
                            Skils {" "}
                        </TabButton>
                        <TabButton selectTab={() => handlerTabChange("education")} active={tab === "education"}>
                            {" "}
                            Education {" "}
                        </TabButton>
                        <TabButton selectTab={() => handlerTabChange("certifications")} active={tab === "certifications"}>
                            {" "}
                            Certifications {" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;