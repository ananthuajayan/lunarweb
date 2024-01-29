import React, { useState } from "react";
import axios from "axios";
import "../component.css";
// import background from '../images/contact us.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phno: "",
    email: "",
    service: "Choose our service"
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
  setFormData({
    name: "",
    phno: "",
    email: "",
    service: "Choose our service"
  });
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

  const handleSelectChange = (e) => {
    const { id, value } = e.target;

    // Update the corresponding field in the form data state
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
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
    <div className="contact-us">
      <div className="sub-contact">
          <h3>Contact Us</h3>
       <p>We're eager to hear from you and discuss how Lunar can elevate your digital presence. Whether you have inquiries about our web development services, digital marketing strategies, or want to explore a tailored solution for your unique needs, our team is ready to assist you. Feel free to reach out through the contact form. Our commitment is to provide prompt and personalized responses, ensuring that your journey with Lunar is seamless and rewarding.
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

        <select
        
          className="form-select select-box "
          aria-label="Default select example"
          id="service"
          style={{ marginBottom: "20px" }}
          onChange={handleSelectChange}
          value={formData.service}
        >
          <option value="Choose our service">Choose our service</option>
          <option value="1">Software Design & Development</option>
          <option value="2">Mobile Application Development</option>
          <option value="3">Web Designing & Development</option>
          <option value="4">Digital Marketing</option>
          <option value="5">Social Media Marketing</option>
          <option value="6">Brand Promotion</option>
          <option value="7">3D Modeling & Animation</option>
          <option value="8">Graphic Designing</option>
        </select>

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

export default Contact;