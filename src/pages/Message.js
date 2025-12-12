import React, { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import '../App.css';

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace these with your actual EmailJS credentials
      const serviceID = 'service_j8fdg1s';
      const templateID = 'template_4cvw9p4';
      const publicKey = '77x0XZhZ6lZDiAd20';

      const templateParams = {
        from_name: `${firstName} ${lastName}`,
        from_email: email,
        contact_number: contactNumber,
        message: message,
        to_email: 'roquejericoturingan@gmail.com'
      };

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceID,
          template_id: templateID,
          user_id: publicKey,
          template_params: templateParams
        })
      });

      if (response.ok) {
        confirmAlert({
          title: 'Success!',
          message: 'Your message has been sent successfully! We will get back to you soon.',
          buttons: [
            {
              label: 'OK',
              onClick: () => console.log('Message sent successfully')
            }
          ]
        });

        // Reset the form
        setFirstName('');
        setLastName('');
        setEmail('');
        setContactNumber('');
        setMessage('');
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      confirmAlert({
        title: 'Error',
        message: 'Failed to send message. Please try emailing directly at roquejericoturingan@gmail.com. Thank you.',
        buttons: [
          {
            label: 'OK',
            onClick: () => console.log('Error acknowledged')
          }
        ]
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (


    <div className="form-container">
      <form className="form border border-dark" onSubmit={handleSubmit}>
        <h2 className="text-center l-m">Leave a Message</h2>
        <div className="flex">
          <label>
            <input
              required
              placeholder=""
              type="text"
              className="input"
              value={firstName}
              onChange={handleFirstNameChange}
              disabled={isSubmitting}
            />
            <span>First Name</span>
          </label>

          <label>
            <input
              required
              placeholder=""
              type="text"
              className="input"
              value={lastName}
              onChange={handleLastNameChange}
              disabled={isSubmitting}
            />
            <span>Last Name</span>
          </label>
        </div>

        <label>
          <input
            required
            placeholder=""
            type="email"
            className="input"
            value={email}
            onChange={handleEmailChange}
            disabled={isSubmitting}
          />
          <span>Email</span>
        </label>

        <label>
          <input
            required
            type="tel"
            placeholder=""
            className="input"
            value={contactNumber}
            onChange={handleContactNumberChange}
            disabled={isSubmitting}
          />
          <span>Contact Number</span>
        </label>
        <label>
          <textarea
            required
            rows="3"
            placeholder=""
            className="input01"
            value={message}
            onChange={handleMessageChange}
            disabled={isSubmitting}
          ></textarea>
          <span>Message</span>
        </label>

        <button type="submit" className="fancy" disabled={isSubmitting}>
          <span className="top-key"></span>
          <span className="text">{isSubmitting ? 'Sending...' : 'Submit'}</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </button>
      </form>

      <div className="card3">
        <a href="https://www.instagram.com/rjonclick.js/" target="_blank" className="socialContainer containerOne">
          <svg className="socialSvg instagramSvg" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
        </a>
   
        <a href="https://www.linkedin.com/in/roque-jerico-turingan/" target='_blank' className="socialContainer containerThree">
          <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
        </a>
        
       <a href="https://www.facebook.com/rjturingan.py/" target='_blank' className="socialContainer containerFour">
         <svg className="socialSvg facebookSvg" viewBox="0 0 512 512">
           <path d="M464 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h236V316h-64v-80h64v-48c0-64 39.1-99.2 96.6-99.2 27.7 0 57.4 5 57.4 5v63h-32.3c-31.9 0-41.7 19.8-41.7 40v48h80l-12.8 80h-67.2V512h131.3c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48z"></path>
         </svg>
       </a>

      </div>             
    </div>
  );
}

export default Form;