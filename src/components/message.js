import React, { useState } from "react";
import axios from "axios";
import "../component.css";

const Messages = () => {
  const [formData, setFormData] = useState({
    name: "",
    phno: "",
    email: "",
    message: ""
  });

  const display = () => {
      const successDiv = document.querySelector('.request-sucess');
      if (successDiv) {
        successDiv.style.visibility = 'visible';
      }
    
  };
  const close = () => {
    const successDiv = document.querySelector('.request-sucess');
    if (successDiv) {
      successDiv.style.visibility = 'hidden';
    }
  };
  // Event handler for form submission
 // Event handler for form submission
const handleSubmit = async (e) => {
  e.preventDefault();

  // Simple form validation
  if (!formData.name.trim()) {
    // Focus on the name input field
    document.getElementById('name').focus();
    return;
  }

  if (!formData.phno.trim()) {
    alert("Please enter your phone number.");
    return;
  }

  if (!formData.email.trim()) {
    alert("Please enter your email address.");
    return;
  }

  if (formData.service === "Choose our service") {
    alert("Please choose a service.");
    return;
  }

  // If the form data is valid, trigger the API call
  console.log(formData);
  display();
  try {
    await submitForm();
   
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

  




// Function to make the API call
const submitForm = async () => {
  try {
    const response = await axios.post(
      "https://srv442800.hstgr.cloud:2000/lunar/contact-us",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      console.log("Form submitted successfully");
      console.log(response.data);

      if (response.data.status === true) {
        // Handle success
        console.log("Server responded with success");
        display(); // Move the display() function here
      } else {
        // Handle failure
        console.error("Server responded with failure:", response.data.message);
      }
    } else {
      console.error("Form submission failed:", response.statusText);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};



  // Event handler for input changes
  const handleChange = (e) => {
    const { id, value } = e.target;

    // Update the corresponding field in the form data state
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };
 
  

  return (
    <div className=" home">
      <div className="sub-contact" style={{color:"black"}}>
         <h3 style={{color:"white"}}>Lunar Enterprises welcomes you..</h3>
         <p style={{fontWeight:"400"}}>
         Welcome to Lunar enterprises, your partner in elevating your online presence. Join us on your journey towards digital success. Whether you are a startup, SME, or established enterprise, we have the expertise to improve your digital presence. Our mission is to build businesses with exceptional digital solutions that drive growth, build brand presence, and create lasting connections. Let's turn your digital dreams into reality.

         
         </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="mb-3 select-box">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="enter your name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 select-box">
          <label htmlFor="phno" className="form-label">
            Phone no
          </label>
          <input
            type="tel"
            className="form-control"
            id="phno"
            aria-describedby="emailHelp"
            placeholder="enter your phone number"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 select-box">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="enter your mail id"
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your Email with anyone else.
          </div>
        </div>
        <div className="mb-3 select-box">
            <label htmlFor="messages">Enter your message</label>
            <input
            type="text"
            className="form-control"
            id="message"
            aria-describedby="emailHelp"
            placeholder="enter your message"
            onChange={handleChange}
          />
        </div>

       

        <button type="submit" className="btn btn-danger">
          Submit
        </button>
      </form>
         <div className="request-sucess">
          <h5>Request submitted successfully</h5>
          <button onClick={close}>close</button>
         </div>
    </div>
  );
};

export default Messages;