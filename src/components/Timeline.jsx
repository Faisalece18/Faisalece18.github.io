import React from 'react';
import { Chrono } from 'react-chrono';
import '../styles/timeline.css';
import chatPdfLogo from '../assets/timeline/Chatpdf.png';
import codewizard from '../assets/timeline/codewizard.png';
import coldemail from '../assets/timeline/coldemail.png';
import sms from '../assets/timeline/sms.png';
import freelancer from '../assets/timeline/freelancer.png';


const projectEntries = [
  
  {
    cardTitle: "ChatPDF - AI-Powered PDF Question Answering",
    cardSubtitle: "Retrieval-Augmented Generation Application",
    cardDetailedText:
      "Built a Streamlit RAG application using LangChain, Gemini API, FAISS, and optimized document chunking for multi-PDF question answering.",
    githubUrl:
      "https://github.com/Faisalece18/Chat-With-Multiple-Documents",
    demoUrl:
      "https://achatwithpdf.streamlit.app/",
    date: " June 2025",
  },

  {
    cardTitle: "CodeWizard - AI-Powered Coding Assistant",
    cardSubtitle: "Locally Hosted LLM Application",
    cardDetailedText:
      "Developed a Gradio-based coding assistant using a locally hosted large language model with dynamic prompting and conversation-history management.",
    githubUrl:
      "https://github.com/Faisalece18/Personal-Code-Assistant",
    demoUrl:
      "https://drive.google.com/file/d/1Chax-gBvsJm6GNK3BuPB7_fmmjEGMOe_/view?usp=sharing",
    date: "May 2025",
  },

  {
    cardTitle: "Cold Email Generator - LLM-Based Outreach Automation",
    cardSubtitle: "Job Outreach Application",
    cardDetailedText:
      "Built a Streamlit application using LangChain, Groq LLaMA3, and ChromaDB to generate context-aware emails from job postings.",
    githubUrl:
      "https://github.com/Faisalece18/LLM-Project-Cold-Email-Generator",
    demoUrl:
      "https://drive.google.com/file/d/1oec_xyfOL8VTdUhT_T0rWfV6gdvmpNE8/view?usp=sharing",
    date: "March 2025",
  },

  {
    cardTitle: "Student Management System",
    cardSubtitle: "Database-Backed Web Application",
    cardDetailedText:
      "Built a database-backed web application with separate student and administrator interfaces for notices, routines, results, and student management.",
    githubUrl:
      "https://github.com/Faisalece18/Student-Management-System",
    demoUrl: "",
    date: "Aug 2021",
  },
   {
    cardTitle: "Freelancer Hiring",
    cardSubtitle: "PHP Web Platform",
    cardDetailedText:
      "Developed a PHP-based freelancer platform with user profiles, messaging, and administrative content management.",
    githubUrl:
      "https://github.com/Faisalece18/Freelancer-Hiring",
    demoUrl: "",
    date: "July 2020",
  }
 

];


/*
 * Create Chrono entries
 */
const entries = projectEntries.map((project) => ({
  ...project,

  timelineContent: (
    <div
      className="project-timeline-content"
      onClick={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
      onPointerDown={(e) => e.stopPropagation()}
    >
      <p>{project.cardDetailedText}</p>

      <div className="project-timeline-actions">

        {/* GitHub Button */}
        {project.githubUrl && (
          <a
            className="project-button github-button"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"

            onClick={(e) => {
              e.stopPropagation();
            }}

            onMouseDown={(e) => {
              e.stopPropagation();
            }}

            onPointerDown={(e) => {
              e.stopPropagation();
            }}
          >
            GitHub
          </a>
        )}

        {/* Demo Button */}
        {project.demoUrl && (
          <a
            className="project-button demo-button"
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"

            onClick={(e) => {
              e.stopPropagation();
            }}

            onMouseDown={(e) => {
              e.stopPropagation();
            }}

            onPointerDown={(e) => {
              e.stopPropagation();
            }}
          >
            Demo
          </a>
        )}

      </div>
    </div>
  ),
}));


const Timeline = () => {
  return (
    <div className="timeline-main-wrapper">

      <Chrono
  items={entries}
  mode="VERTICAL_ALTERNATING"
  slideShow={false}
  hideControls={true}
  allowDynamicUpdate={true}
  titleDateFormat="MMM YYYY"
  disableClickOnCircle={true}
  timelinePointDimension={90}
>
  <div className="chrono-icons">
    <img src={chatPdfLogo} alt="ChatPDF logo"/>
    <img src={codewizard} alt="ChatPDF logo"/>
    <img src={coldemail} alt="Cold Email logo"/>
    <img src={sms} alt="Student Management System logo"/>
        <img src={freelancer} alt="Freelancer Hiring logo"/>



  </div>
</Chrono>
    
 </div>
  );
};

export default Timeline;