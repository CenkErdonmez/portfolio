"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, Phone, MapIcon, Send } from "lucide-react";
import headerPic from "../images/me.png";
import coderGif from "../images/codergif.gif";
import artibel from "../images/artibel.png";
import bscafrica from "../images/bscafrica.png";
import calculator from "../images/calculator.png";
import givingly from "../images/givingly.png";
import movieproject from "../images/movieproject.png";
import Link from "next/link";

export function AppPage() {
  return (
    <div className='min-h-screen bg-black text-white '>
      <main className='container mx-auto px-4'>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function HeroSection() {
  return (
    <motion.section
      className='p-10 flex flex-col md:flex-row items-center justify-between'
      initial='hidden'
      animate='visible'
      variants={fadeIn}
    >
      <motion.div
        className='md:w-1/2 mb-8 md:mb-0 text-center md:text-left'
        variants={fadeIn}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className='text-3xl font-bold mb-4'>Hello, I'm</h2>
        <h2 className='text-5xl font-bold mb-4 text-yellow-500'>
          Cenk Erdonmez
        </h2>
        <p className='text-2xl'>A Front End Web Developer</p>
      </motion.div>
      <motion.div
        className='md:w-1/3'
        variants={fadeIn}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Image src={headerPic} alt={"asdasd"} className='rounded-full' />
      </motion.div>
    </motion.section>
  );
}

function AboutSection() {
  return (
    <motion.section
      className='p-10 w-full flex-col justify-between items-center'
      id='about'
      initial='hidden'
      whileInView='visible'
      variants={fadeIn}
      viewport={{ once: true }}
    >
      <motion.div className='text-left w-full  ' variants={staggerContainer}>
        <h2 className='text-3xl font-bold mb-8 text-yellow-500'>About Me</h2>

        <motion.div
          className='flex flex-col md:flex-row w-full justify-between items-center gap-4'
          variants={fadeIn}
        >
          <div className='flex flex-col gap-2 md:w-1/2'>
            <p>
              Born in Ankara, Turkey in 1992. Graduated from Marmara University
              Electrical-Electronics Engineering Department in 2018.
            </p>
            <p>
              I have been working as a Front End Developer for more than 3
              years.
            </p>
            <p>
              Currently, I am working as a Front End Developer at{" "}
              <span className='text-yellow-500'>Merzigo</span>.
            </p>
            <p>
              I have been working on various projects and I am always looking
              for new challenges.
            </p>
            <a
              className='bg-yellow-500 text-black text-center px-4 py-2 rounded hover:bg-yellow-400 transition-colors duration-200'
              href='/CenkErdonmezResume.pdf'
              download='CenkErdonmezResume'
              target='_blank'
            >
              Download CV
            </a>
          </div>
          <div className='md:w-1/3'>
            <Image
              src={coderGif}
              alt='Cenk Erdonmez'
              className='rounded-full'
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

function SkillsSection() {
  const skills = [
    "React",
    "Next.js",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Rest API",
    "Axios",
    "GraphQL",
    "Socket.io",
    "MQTT",
    "Git",
    "Figma",
    "SEO",
    "Google Analytics",
    "Jira",
    "Confluence",
    "GitHub",
    "Python",
    "Flask",
    "Firebase",
    "Docker",
  ];

  return (
    <motion.section
      id='skills'
      className='p-10 text-center'
      initial='hidden'
      whileInView='visible'
      variants={staggerContainer}
      viewport={{ once: true }}
    >
      <h2 className='text-3xl font-bold mb-8 text-yellow-500 text-left'>
        My Skills
      </h2>
      <motion.div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className='bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-yellow-500 hover:text-black transition duration-300 ease-in-out'
            variants={fadeIn}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "Givingly",
      description: "Next.js, Firebase, Tailwind CSS",
      image: givingly,
      link: "https://capstone-team-8.vercel.app",
    },
    {
      title: "Movie Project",
      description: "Html, CSS, JavaScript, Rest API",
      image: movieproject,
      link: "https://the-trio-of-feeders.netlify.app",
    },
    {
      title: "Artibel",
      description: "Html, Sass, JavaScript, Rest API",
      image: artibel,
      link: "https://artibeldeneme.netlify.app",
    },
    {
      title: "Calculator",
      description: "React, JavaScript",
      image: calculator,
      link: "https://papaya-tartufo-fc24c9.netlify.app",
    },
    {
      title: "BSCAfrica",
      description: "Html, Css, JavaScript, Wordpress, PHP",
      image: bscafrica,
      link: "https://bscafrica.net",
    },
  ];

  return (
    <motion.section
      className='p-10 text-center'
      id='projects'
      initial='hidden'
      whileInView='visible'
      variants={staggerContainer}
      viewport={{ once: true }}
    >
      <h2 className='text-3xl font-bold mb-8 text-left text-yellow-500'>
        My Projects
      </h2>
      <motion.div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className='bg-gray-700 p-6 rounded flex flex-col items-center justify-between gap-4'
            variants={fadeIn}
          >
            <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
            <Image
              src={project.image}
              alt={project.title}
              className='rounded'
            />
            <p>{project.description}</p>
            <Link target='_blank' href={project.link}>
              <button className='bg-yellow-500 text-black py-2 px-4 rounded hover:bg-black hover:text-yellow-500 transition duration-300 ease-in-out'>
                <Send className='inline mr-2' /> View Project
              </button>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

function ContactSection() {
  return (
    <motion.section
      className='p-10 text-center'
      id='contact'
      initial='hidden'
      whileInView='visible'
      variants={fadeIn}
      viewport={{ once: true }}
    >
      <h2 className='text-3xl font-bold mb-8 text-left text-yellow-500'>
        Contact Me
      </h2>
      <motion.div
        className='flex flex-col md:flex-row justify-between items-center gap-2'
        variants={staggerContainer}
      >
        <motion.div variants={fadeIn}>
          <p>
            {" "}
            <MapIcon className='inline mx-2' />
            Istanbul, Turkey
          </p>
        </motion.div>
        <motion.div variants={fadeIn}>
          <p>
            <Phone className='mx-2 inline' />: +90 545 312 44 52
          </p>
        </motion.div>
        <motion.div variants={fadeIn}>
          <p>
            <Mail className='mx-2 inline' />: cenkerdonmez@gmail.com
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className='bg-gray-900 p-10 mx-auto text-center text-white flex justify-between items-center'>
      <p>
        &copy; {new Date().getFullYear()} Cenk Erdonmez. All rights reserved.
      </p>
      <Link target='_blank' href='https://www.linkedin.com/in/cenkerdonmez/'>
        <Linkedin className='mx-2' />
      </Link>
      <Link target='_blank' href='https://github.com/CenkErdonmez'>
        <Github className='mx-2' />
      </Link>
      <Link target='_blank' href='mailto:cenkerdonmez@gmail.com'>
        <Mail className='mx-2' />
      </Link>
    </footer>
  );
}

