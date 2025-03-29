"use client";

import { useState } from "react";
import "./style.css";

export default function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", event: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="event-register-container">
      <h2 className="event-register-title">Event Registration</h2>
      <form className="event-register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          required
          className="event-register-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          required
          className="event-register-input"
        />
        <select
          name="event"
          onChange={handleChange}
          required
          className="event-register-input"
        >
          <option value="">Select Event</option>
          <option value="Event 1">Event 1</option>
          <option value="Event 2">Event 2</option>
        </select>
        <button type="submit" className="event-register-button">
          Register
        </button>
      </form>
    </div>
  );
}
