import React, { useState } from "react";
import "./Contact.css";
import { Button, Typography } from "@material-ui/core";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import InstagramIcon from "@material-ui/icons/Instagram";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="title">Contact Us</div>

      <div className="contents">
        <a className="mailBtn" href="mailto:praveen2025@gmail.com">
          Email: <span className="span">praveen2025@gmail.com</span>
        </a>
        <div>Phone: <span className="span">+91 8349305349</span></div>
        <div>Location: <span className="span">Bhubaneswar, Odisha</span></div> 
        <div className="contactLinks">
            
            <a
              href="https://github.com/PraveenKrGit"
              target="blank"
            >
              <AiFillGithub className="youtubeSvgIcon" />
            </a>
            <a href="https://instagram.com/prave.enkr" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
      </div>
    </div>
  );
};

export default Contact;

// const Contact = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('/send-email', {
//         name,
//         email,
//         message
//       });
//       console.log(response.data.message);

//       setName('');
//       setEmail('');
//       setMessage('');
//     } catch (error) {
//       console.error('Error sending email:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Contact Us</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <div>
//           <label>Message:</label>
//           <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;
