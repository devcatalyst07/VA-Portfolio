import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
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
import backend from '../files/backend.jpg';
import others from '../files/others.png';
import voyage from '../files/voyage.jpg';
import ncst from '../files/ncst.jpg';

function FeatureBox() {
  return (
    <div className="feat bg-gray pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="section-head col-sm-12">
            <h4 className="mt-5"><span className="skills">Skills and</span> Projects</h4>
          </div>
          <h2>Skills</h2>
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
              <img className="icon-skills" src={javascript} alt="javascript"/>
              <img className="icon-skills" src={node} alt="node"/>
              <img className="icon-skills" src={express} alt="express"/>
              <img className="icon-skills" src={mongodb} alt="mongodb"/>
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
          <h2>Projects</h2>
          <div className="col-lg-4 col-sm-6">
           <div className="item"> <img src={voyage} className="icon feature_box_col_one icon-skills" alt="voyage"/><i className="fa fa-globe"></i>
              <h6><a className="text-decoration-none" href="https://capstone3-nine-xi.vercel.app/">Brew Voyage Cafe</a></h6>
              <p>Brew Voyage Cafe is one of my capstone project during the Zuitt Coding Boot Camp. It's an online store called an E-Commerce using MERN App, where people can buy different types of coffee. I received an award as best in Capstone 2.</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
           <div className="item"> <img src={ncst} className="icon feature_box_col_one icon-skills" alt="ncst"/><i className="fa fa-globe"></i>
              <h6><a className="text-decoration-none" href="https://cgms.capstone.pw/about">NCST E-Grading System</a></h6>
              <p>Our college thesis project, the NCST E-Grading System, is a revolutionary tool for managing grades. As the group leader and main programmer of the group, we assure that it seamlessly integrates with MS Excel, enabling easy import/export of grade data and generating comprehensive reports for analysis and record-keeping.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureBox;
