import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import yvwImage from '../files/yvw.PNG';



const posts = [
    {
      id: 1,
      date: { day: '1', month: 'MDSI' },
      imgSrc: 'https://media.glassdoor.com/l/e6/c2/aa/e0/office.jpg?signature=d6cb61bf5a3527386f62c80cedde35809ccdc33ff5a64b419b50bd4fbe8f44ce',
      title: 'Front-End Software Engineer at Manulife Data Services Inc. (Nov 2023 - June 2025)',
      description: 'As a Front-End Engineer, I develop, maintain, and update content for the Content Management Application (CMA) within US Retirement under Global Digital Marketing. I design responsive email templates for weekly communications, ensuring semantic HTML, internal CSS, and seamless Salesforce integration. I lead microsite projects for ARA and STAFF websites, focusing on user experience and business goals, and utilize Sitecore for website content management. Coordinates with cross-functional teams, including designers, back-end developers, and project managers, to implement new features, troubleshoot issues, and ensure high-quality deliverables using high programming languages such as JavaScript and its library (Node and React). '
    },
    {
      id: 2,
      date: { day: '2', month: 'NCST' },
      imgSrc: 'https://i.ytimg.com/vi/SYyjkciEmc8/maxresdefault.jpg',
      title: 'Part-Time Engineering Instructor at National College of Science and Technology (March 2024 - May 2025)',
      description: 'I serve as a thesis adviser for Computer Engineering students, guiding capstone projects with mentorship and academic rigor. Additionally, I founded the Engineering Society and Alliance, fostering professional development and enhancing student skills through collaboration and hands-on experiences.'
    },
    {
      id: 3,
      date: { day: '3', month: 'YVW' },
      imgSrc: yvwImage,
      title: 'IT Support at Your Virtual World (June 2021 - Feb 2023)',
      description: 'I provided technical support to lead generators and agents, resolving hardware, software, and network issues. Managed user accounts, ensured security compliance, and built responsive website content using the MERN stack (MongoDB, Express.js, React, Node.js), ensuring a seamless user experience.'
    },
    {
      id: 4,
      date: { day: '4', month: 'EDU' },
      imgSrc: 'https://www.processmaker.com/wp-content/uploads/2019/12/464-768x511.jpg',
      title: 'Education',
      description: 'I earned a Bachelor of Science in Computer Engineering from National College of Science and Technology, where I received the Best Thesis Prototype award. I completed the JavaScript Full Stack course at Zuitt Coding Bootcamp with High Honors, earning the Best in Capstones and achieving a perfect grade. I also graduated with high honors from Senior High School at NCST, where I was Editor-in-Chief of the newspaper "The Nation Builder."'
    }
  ];
  
  const Post = ({ post }) => {
    return (
      <div className="vesti-col timeline-post">
        <div className="vesti-content-wrapper">
          <div className="photo">
            <img src={post.imgSrc} alt={post.title} />
            <div className="vesti-date-wrapper">
              <div className="vesti-date">
                <span className="day">{post.date.day}</span>
                <br />
                <span className="month">{post.date.month}</span>
              </div>
            </div>
          </div>
          <div className="vesti-desc">
            <a className="desc-a" href="#">
              <h4>{post.title}</h4>
            </a>
            <p>{post.description}</p>
          </div>
        </div>
      </div>
    );
  };
  

const Qualifications = () => {

    return (        
        <div className="container timeline-div">
        <div className="timeline clearfix">
        <h1 className="fixed-title">
          Experience and <span className="experience">Education</span>
        </h1>
        
          <div className="vertical-line">
            {posts.map(post => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>

        
      );
    };  

export default Qualifications;