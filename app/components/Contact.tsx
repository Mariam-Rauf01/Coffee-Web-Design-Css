"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import "../style/Contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <h1 className="contact-heading">Contact Us!</h1>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-content">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="form-input"
          />
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Your Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="form-input"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-textarea"
          />
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>

      <div className="image-container">
        <Image
          src="/images/9567160fc281329e571561b9b80dc5a1.jpg"
          alt="Coffee selection"
          width={346}
          height={400}
          className="contact-image"
        />
      </div>
    </div>
  );
};

export default Contact;
