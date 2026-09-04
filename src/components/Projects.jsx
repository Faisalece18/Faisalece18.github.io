import React, { useState }  from 'react';
import ProjectCard from './ProjectCard';
import '../styles/projects.css';


import banhadex from '../assets/projects/banhadex.png';
import banhate from '../assets/projects/banhate.png';
import llm4review from '../assets/projects/llm4review.png';
import thesis from '../assets/projects/thesis.png';


const Projects = () => {
    const projectsData = [
        {
        title: "BanHADEX: Towards Explainable HAte Speech Detection in Bangla Using Human Annotated EXplanation.",
        subtitle: "ACL 2026 (Main Conference, Long Paper)",
        description: "BanHADEX, the first Bangla hate-speech dataset built for explainability rather than just classification. It contains over 19,000 YouTube comments, each labeled with binary hate classification, seven fine-grained hate categories, seven target groups, and a human-written explanation — collected through a two-stage majority-voting annotation pipeline. Our experiments across open- and closed-source LLMs show that explanation-guided LoRA fine-tuning meaningfully improves both classification accuracy and explanation quality, laying groundwork for more transparent, culturally grounded content moderation in low-resource languages.",
        image: banhadex,
        buttonLabel: "Link",
        buttonLink: "https://aclanthology.org/2026.acl-long.2022/"
        },
        {
        title: "BanHate: An Up-to-Date and Fine-Grained Bangla Hate Speech Dataset.",
        subtitle: "BLP-2025 @ IJCNLP-AACL 2025",
        description: "BanHate, a large-scale Bangla hate speech dataset built to capture the evolving, often implicit nature of online hate — something earlier Bangla resources, limited to simple binary classification, largely missed. It comprises 19,203 YouTube comments collected between April 2024 and June 2025, each annotated for binary hate labels, seven fine-grained hate categories, and seven target groups through a custom collection, filtering, and majority-voting annotation pipeline. Benchmarking a range of open- and closed-source LLMs, we found that LoRA fine-tuning gives a substantial boost to open-source models, while strong closed-source models like GPT-4o and Gemini do well on binary classification but struggle with implicit and fine-grained hate — establishing BanHate as a new benchmark for Bangla hate speech research.",
        image: banhate,
        buttonLabel: "Link",
        buttonLink: "https://aclanthology.org/2025.banglalp-1.19/"
        },
        {
        title: "LLM4Review: A Pretrained Transformer-Based Framework for Multi-Language Code Review",
        subtitle: "16th ICCCNT 2025",
        description: "LLM4Review, a lightweight, transformer-based framework that automates code review across multiple programming languages. Built by fine-tuning Salesforce's CodeT5 on real pull-request data collected from a large open-source GitHub repository, the system generates context-aware, human-like review comments directly from code diffs and PR titles — going beyond prior single-language or purely BLEU-optimized approaches by supporting multiple languages and evaluating outputs on both semantic and lexical quality. Using a mix of BERTScore, BLEURT, ROUGE, and BLEU, we show the model produces feedback that's not just accurate but natural and human-like (BERTScore F1 of 0.83, BLEURT of 0.78), while its more varied phrasing versus reference comments reflects realistic, paraphrased feedback rather than rote repetition — the kind developers actually find useful in practice.",
        image: llm4review, 
        buttonLabel: "Link",
        buttonLink: ""
        },
        {
        title: " Optimizing Sentiment Analysis of Bangla Text: Machine Learning & Deep Learning Perspective",
        subtitle: "Undergraduate Thesis",
        description: "For my undergraduate thesis, I built and evaluated a sentiment analysis pipeline for Bangla text spanning multiple real-world domains — including cricket commentary, news articles, restaurant reviews, and Bengali drama/entertainment content. The work involved collecting and preprocessing domain-specific datasets, combining them into a unified corpus, and comparing classical machine learning approaches against deep learning models to identify what best captures sentiment across Bangla's varied linguistic registers and domains. The project also explored explanation generation for model predictions, aiming to make the sentiment classifications more interpretable rather than treating them as black-box outputs.",
        image: thesis, 
        buttonLabel: "GitHub",
        buttonLink: "https://github.com/Faisalece18/Sentiment-Analysis"
        }     
    ];
      
    const [visibleProjects, setVisibleProjects] = useState(3);

    // const showMoreProjects = () => {
    //     setVisibleProjects(visibleProjects + 3);
    // };

    const showLessProjects = () => {
        setVisibleProjects(3);
    };

    const showAllProjects = () => {
        setVisibleProjects(projectsData.length);
      };


    return (
        <div>
          <div className='project-cards'>
            {projectsData.slice(0, visibleProjects).map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                infoText={project.infoText}
                image={project.image}
                links={project.links}
                buttonLabel={project.buttonLabel}
                buttonLink={project.buttonLink}
                demoLink={project.demoLink}
              />
            ))}
          </div>
          <div className='view-buttons'>
            {visibleProjects < projectsData.length ? (
              <button onClick={showAllProjects} className="view-more-button">
                Show All {projectsData.length} projects
              </button>
            ) : (
              <button onClick={showLessProjects} className="view-more-button">
                Show Less
              </button>
            )}
          </div>
        </div>
      );
}

export default Projects;