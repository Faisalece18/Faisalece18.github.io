import React from 'react';
import { Chrono } from 'react-chrono';
import '../styles/timeline.css';


// const amity = 'https://drive.google.com/uc?export=view&id=1z8KwaXKcrUNNpGfeSXeDK1GQEFS3HSfU';
// const ipcv = 'https://drive.google.com/uc?export=view&id=1OAJYVBlH_Ti1R_G641cI_buVGwrqZBQn';
// const isi = 'https://drive.google.com/uc?export=view&id=1x6KFFJJ9SEjzF3zJ6n3S_hzUTyF-aXLc';
// const ppcu = 'https://drive.google.com/uc?export=view&id=1sStsE92BC9aeyVCiDgLf0jyKPsWu4vGP';
// const tcs = 'https://drive.google.com/uc?export=view&id=1avYjRxyqQG9QMAv00RSMX0tOx0XLpB_r';
// const uam = 'https://drive.google.com/uc?export=view&id=1QCspz7ZCOfhTqn7jyuAOaU3ZKMnXuvzx';
// const ubx = 'https://drive.google.com/uc?export=view&id=1JJUt8H1itbVm_v_box83CzmzNYBY6pg7';

const projectEntries = [
  {
    cardTitle: "ChatPDF - AI-Powered PDF Question Answering",
    cardSubtitle: "Retrieval-Augmented Generation Application",
    cardDetailedText: "Built a Streamlit RAG application using LangChain, Gemini API, FAISS, and optimized document chunking for multi-PDF question answering.",
    githubUrl: "",
    demoUrl: "",
    date: "2024"
  },
  {
    cardTitle: "CodeWizard - AI-Powered Coding Assistant",
    cardSubtitle: "Locally Hosted LLM Application",
    cardDetailedText: "Developed a Gradio-based coding assistant using a locally hosted large language model with dynamic prompting and conversation-history management.",
    githubUrl: "",
    demoUrl: "",
    date: "2024"
  },
  {
    cardTitle: "Cold Email Generator - LLM-Based Outreach Automation",
    cardSubtitle: "Job Outreach Application",
    cardDetailedText: "Built a Streamlit application using LangChain, Groq LLaMA3, and ChromaDB to generate context-aware emails from job postings.",
    githubUrl: "",
    demoUrl: "",
    date: "2024"
  },
  
  {
    cardTitle: "Student Management System",
    cardSubtitle: "Database-Backed Web Application",
    cardDetailedText: "Built a database-backed web application with separate student and administrator interfaces for notices, routines, results, and student management.",
    githubUrl: "",
    demoUrl: "",
    date: "2023"
  },
  {
    cardTitle: "Freelancer Hiring",
    cardSubtitle: "PHP Web Platform",
    cardDetailedText: "Developed a PHP-based freelancer platform with user profiles, messaging, and administrative content management.",
    githubUrl: "",
    demoUrl: "",
    date: "2023"
  }
  
  
];

const entries = projectEntries.map((project) => ({
  ...project,
  timelineContent: (
    <div className="project-timeline-content">
      <p>{project.cardDetailedText}</p>
      <div className="project-timeline-actions">
        <a href={project.githubUrl || undefined} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>
          GitHub
        </a>
        <a href={project.demoUrl || undefined} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>
          Demo
        </a>
      </div>
    </div>
  )
}));


const Timeline = () => {
  return (
    <Chrono items={entries} 
    mode="VERTICAL_ALTERNATING" 
    slideShow={true} 
    hideControls={true} 
    slideItemDuration={4500}
    slideShowType="slide_from_sides" 
    // disableClickOnCircle={true} 
    allowDynamicUpdate={true}
    activeItemIndex={null}
    titleDateFormat='MMM YYYY'
    scrollable
    // timelinePointShape={null}
    >
      <div className="chrono-icons">
      </div>
    </Chrono>
  );
};

export default Timeline;
