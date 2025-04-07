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
import php from '../files/php.png';
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



const About = () => {

    return (
        <div>
          <div className="row division division_2">
            <div className="col-lg-8 col-sm-12 col-md-12">
              <div id="name-div2">
                <h1>ABOUT RJ</h1> <br></br>
                <p className="p2">Hello, I am <strong className='red'>Roque Jerico!</strong></p>
                <p>I'm a creative problem-solver and passionate tech enthusiast with a knack for building intuitive, user-friendly web experiences. Since <strong className='red'>2021</strong>, I've been designing and refining digital content, focusing on delivering impactful solutions that blend functionality with aesthetics.</p>
                <p>Currently, <strong className='red'>I'm a Front-end Software Engineer at Manulife Business Processing Services</strong>, where I collaborate with cross-functional teams to develop and enhance web applications. Beyond the office, I channel my love for education and technology as a <strong className='red'>Part-time Engineering College Instructor at the National College of Science and Technology</strong>, helping future engineers build strong foundations in their careers.</p>
                <p>With a sharp eye for detail and a commitment to innovation, I'm driven to create web solutions that not only meet but exceed user expectations. Let's connect and create something extraordinary!</p>
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
                              <img className="icon-skills" src={php} alt="php"/>
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