import React from 'react';
import '../styles/home.css';
import AcademicBar from './AcademicBar';
import introImage from '../assets/introImage.png';
import Skills from './Skills';
import Projects from './Projects';
import Timeline from "./Timeline";
import Awards from './Awards';
import ResearchCard from './ResearchCard';
import Contact from './Contact';

const Home = () => {

        const heroText = [
                <div>
                        Researcher &nbsp;|&nbsp; PhD Applicant
                        <div className='academic-hero'>
                                <AcademicBar className='academic-hero' />
                        </div>                        
                </div>
        ];

        

        const introText = [
                <p style={{marginLeft: '10%', marginRight: 0}}>
                              I'm <strong>Faisal Hossain Raquib</strong>, a researcher working at the intersection of <strong>Natural Language Processing</strong>, <strong>Explainable AI</strong>, and <strong>low-resource language technology</strong>. I recently completed my <strong>B.Sc. in Electrical &amp; Computer Engineering</strong> at <strong>Rajshahi University of Engineering &amp; Technology (RUET)</strong>, Bangladesh, and I'm now looking to pursue a <strong>Ph.D.</strong> where I can push this work further.
                                <br />
                                <br />
                                My research so far has centered on making NLP systems both <em>effective</em> and <em>understandable</em> for languages that are underserved by mainstream AI research — particularly <strong>Bangla</strong>. Over the past two years, I've worked on building large-scale Bangla hate-speech resources, including <strong>BanHate</strong>, an up-to-date, fine-grained Bangla hate speech dataset, and <strong>BanHADEX</strong>, the first human-annotated hate-speech explainability dataset for Bangla, built from nearly <strong>20,000 annotated YouTube comments</strong> spanning seven hate categories with target and explanation labels. This work has been published at <strong>ACL 2026</strong> and the <strong>BLP-2025 workshop</strong> (co-located with ACL), and I had the opportunity to present it at the <strong>64th Annual Meeting of the Association for Computational Linguistics</strong> in San Diego.
                                <br />
                                <br />
                                What ties this work together is a broader interest in <strong>trustworthy, explainable AI for languages and communities that current NLP tools often overlook</strong>. I want my Ph.D. to dig deeper into this — building models that don't just perform well on benchmark languages, but that are transparent, fair, and genuinely useful when applied to low-resource and multilingual settings.
                                <br />
                                <br />
                                Beyond my research, I care about work that reaches people directly, not just papers. I founded <strong>Prarthona Paribar</strong>, a small non-profit distributing food and clothing to underprivileged communities during floods and Ramadan, and I've served as <strong>Vice President</strong> of both the <strong>Photographic Society of RUET</strong> and <strong>CESA</strong>.
                                <br />
                                <br />
                                I'm currently seeking funded graduate research opportunities for Fall 2027, and I'm open to both <strong>Ph.D.</strong> and thesis-based <strong>master's</strong> programs in <strong>Natural Language Processing</strong>, <strong>Explainable &amp; Trustworthy AI</strong>, <strong>Low-Resource Language Processing</strong>, and <strong>Multimodal Learning</strong>. If any of this overlaps with your lab's work, I'd love to connect.

                </p>
        ];

 return (
    <div className='main-div-home'>
        <div id='home'>
                <div className='hero'>
                        {/* <HeroImage /> */}
                        <h1>Faisal Hossain Raquib</h1>
                        {heroText}
                </div>
        </div>

        <div id='about' className='sections-home'/>                            
        <div className='about'>
                <h1 className='home-headers'>Introduction</h1>
                <div className='intro-grid'>
                        <div className='intro-img-container'>
                                <img src={introImage} alt='self-intro' className='intro-image'/>
                        </div>
                        <div className='intro-text-container'>
                                {introText}  
                        </div>
                </div>
                <h3>Research Interests</h3>
                <div className='research-card-section'>
                <ResearchCard title="Machine Learning" />
                <ResearchCard title="Large Language Models" />
                <ResearchCard title="Low-Resource Language" />
                <ResearchCard title="Explainable AI" />
                <ResearchCard title="Multimodal Learning" />
                <ResearchCard title="Natural Language Processing" />
                <ResearchCard title="Deep Learning" />
                <ResearchCard title="Trustworthy AI" />
                </div>
        </div>

        <div id='skills' className='sections-home'/>                            
        <div className='skills-main'>
                <h1 className='home-headers'>Technical Expertise</h1>
                <Skills />
        </div>

  <div id='projects' className='sections-home'/>                            
        <div style={{maxWidth: '100vw'}}>
                <h1 className='home-headers'>Research Projects</h1>
                <div className='projects-main'>
                        <Projects />
                </div>
                
                
        </div>



        <div id='timeline' className='sections-home'/>                            
        <div className='timeline-main'>
                
        <h1 className='home-headers'>Projects</h1>
        <Timeline
                mode="VERTICAL_ALTERNATING"
                theme={{
                primaryColor: "#000000",
                secondaryColor: "#ffffff",
                cardBgColor: "#ffffff",
                cardDetailsBackGround: "#ffffff",
                cardDetailsColor: "#111827",
                cardTitleColor: "#007fff",
                cardSubtitleColor: "#374151",
                }}
        />
        </div>

      

        <div id='awards' className='sections-home'/>                            
        <div className='awards-main'>
                <h1 className='home-headers'>Leadership &amp; Volunteer Experience</h1>
                <Awards />
        </div>

        <div id='contact' className='sections-home'/>                            
        <div className='contact-main'>
                <h1 className='home-headers'>Contact me</h1>
                <Contact />
        </div>
    </div>
 ) 
};

export default Home;