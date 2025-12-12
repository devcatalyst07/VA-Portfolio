import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import rjturingan from '../files/about-rj.png';
import html from '../files/html.png';
import css from '../files/css.png';
import bootstrap from '../files/bootstrap.png';
import javascript from '../files/javascript.png';
import react from '../files/react.png';
import node from '../files/node.png';
import express from '../files/express.png';
import mongodb from '../files/mongodb.png';
import nosql from '../files/nosql.png';
import git from '../files/git.png';
import postman from '../files/postman.png';
import robo3t from '../files/robo3t.png';
import sublime from '../files/sublime.png';
import vscode from '../files/vscode.png';
import frontend from '../files/frontend.png';
import backend from '../files/backend.png';
import others from '../files/others.png';
import csharp from '../files/csharp.png';
import java from '../files/java.png';
import python from '../files/python.png';
import tailwind from '../files/tailwind.png';
import typescript from '../files/typescript.png';
import sitecore from '../files/sitecore.png';



const About = () => {

    return (
        <div>
          <div className="row division division_2">
            <div className="col-lg-8 col-sm-12 col-md-12">
              <div id="name-div2">
                <h1>ABOUT RJ</h1> <br></br>
                <p className="p2">Hello, I am <strong className='red'>Roque Jerico!</strong></p>
                <p>I'm a creative problem-solver and passionate tech enthusiast with a knack for building intuitive, user-friendly web experiences. Since <strong className='red'>2021</strong>, I've been designing, developing, and refining digital content across various platforms, always aiming to blend functionality with clean, modern aesthetics.</p>
                <p>Over the years, I've built a diverse technical background. I previously worked as a <strong className='red'>Front-end Software Engineer at Manulife Business Processing Services and served as a Part-time Engineering College Instructor at the National College of Science and Technology</strong>, I also worked as an <strong className='red'>IT Support Specialist at Your Virtual World</strong>, where I assisted Lead Generators with hardware/software issues and helped build websites using the MERN Stack.</p>
                <p>Today, I continue to grow my skills through freelance and project-based work, collaborating with clients to develop responsive websites, optimize user experiences, and deliver scalable full-stack solutions.</p>
                <p>I'm currently looking for a full-time opportunity as a <strong className='red'>Full Stack Developer</strong>, where I can contribute my experience, creativity, and passion for building impactful digital products. Let's connect!</p>
                <p></p><p></p><p></p>

              <div className='row'>

                <h1>Skills</h1>
                          <div className="col-lg-4 col-sm-6">
                            <div className="item"> <img src={frontend} className="icon feature_box_col_one icon-skills" alt="frontend"/><i className="fa fa-globe"></i>
                              <h6>Frontend Development</h6>
                              <img className="icon-skills" src={javascript} alt="javascript"/>
                              <img className="icon-skills" src={react} alt="react"/>
                              <img className="icon-skills" src={html} alt="html"/>
                              <img className="icon-skills" src={css} alt="css"/>
                              <img className="icon-skills" src={bootstrap} alt="bootstrap"/>
                              <img className="icon-skills" src={tailwind} alt="tailwind"/>
                              <img className="icon-skills" src={typescript} alt="typescript"/>
                            </div>
                          </div>
                          <div className="col-lg-4 col-sm-6">
                            <div className="item"> <img src={backend} className="icon feature_box_col_one icon-skills" alt="backend"/><i className="fa fa-globe"></i>
                              <h6>Backend Development</h6>
                              <img className="icon-skills" src={java} alt="java"/>
                              <img className="icon-skills" src={javascript} alt="javascript"/>
                              <img className="icon-skills" src={node} alt="node"/>
                              <img className="icon-skills" src={express} alt="express"/>
                              <img className="icon-skills" src={mongodb} alt="mongodb"/>
                              <img className="icon-skills" src={csharp} alt="c#"/>
                              <img className="icon-skills" src={python} alt="python"/>
                              <img className="icon-skills" src={nosql} alt="nosql"/>
                            </div>
                          </div>
                          <div className="col-lg-4 col-sm-6">
                            <div className="item"> <img src={others} className="icon feature_box_col_one icon-skills" alt="others"/><i className="fa fa-globe"></i>
                              <h6>Others</h6>
                              <img className="icon-skills" src={git} alt="git"/>
                              <img className="icon-skills" src={postman} alt="postman"/>
                              <img className="icon-skills" src={robo3t} alt="robo3t"/>
                              <img className="icon-skills" src={sublime} alt="sublime"/>
                              <img className="icon-skills" src={vscode} alt="vscode"/>
                              <img className="icon-skills" src={sitecore} alt="sitecore"/>

                            </div>
                
                          </div>
              </div>
               
              </div>
            </div>
            <div className="col-lg-4 col-rj">
              <img id="myself2" src={rjturingan} className="myself" alt="myself" />
            </div>
          </div>
        </div>
        


      );
    };  

export default About;