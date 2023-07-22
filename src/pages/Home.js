import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import turinganImage from '../files/turinganA.jfif';
import cv from '../files/Turingan-resume.pdf';

const Home = () => {
  const sentences = ['A Web Developer from the Philippines', 'Front End Developer', 'Back End Developer'];
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [displayedSentence, setDisplayedSentence] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let currentSentence = '';
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      currentSentence += sentences[sentenceIndex][currentIndex];
      setDisplayedSentence(currentSentence);
      currentIndex++;

      if (currentIndex === sentences[sentenceIndex].length) {
        clearInterval(typingInterval);

        if (sentenceIndex === 2) {
          setTimeout(() => {
            const eraseInterval = setInterval(() => {
              currentSentence = currentSentence.slice(0, -1);
              setDisplayedSentence(currentSentence);

              if (currentSentence === '') {
                clearInterval(eraseInterval);
                setTimeout(() => {
                  setSentenceIndex(0); // Transition back to the main sentence
                }, 1000);
              }
            }, 100);
          }, 5000);
        }
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [sentenceIndex]);

  useEffect(() => {
    let currentSentence = '';
    let currentIndex = 0;

    const initialTypingInterval = setInterval(() => {
      currentSentence += sentences[0][currentIndex];
      setDisplayedSentence(currentSentence);
      currentIndex++;

      if (currentIndex === sentences[0].length) {
        clearInterval(initialTypingInterval);
      }
    }, 100);

    return () => clearInterval(initialTypingInterval);
  }, []);

  return (
    <div className="container-fluid div-1">
      <div className="row div-2">
        <div className="col-lg-8 col-sm-12 col-md-12">
          <div id="name-div1">
            <p className="p1">Hello, I am</p>
            <p className="p2"><strong>Roque Jerico,</strong></p>
            <p className="p3">{displayedSentence}</p>
            <a href={cv} download target="_blank" className="download-link text-decoration-none">Download CV</a>
          </div>
        </div>
        <div className="col-lg-4">
          <img id="myself" src={turinganImage} className="rounded-circle myself" alt="myself" />
        </div>
      </div>
    </div>
  );
};

export default Home;
