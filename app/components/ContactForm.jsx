import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please tell us what brings you here.';
    if (!formData.preferredTime.trim()) newErrors.preferredTime = 'Preferred time is required.';
    if (!formData.agree) newErrors.agree = 'You must agree to be contacted.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit logic here
      console.log("Form submitted", formData);
    }
  };

  return (
    <section className="contact-section py-16 px-6 md:px-16 bg-[#fefaf4]">
      <div className="max-w-xl mx-auto bg-white shadow-lg p-8 rounded-md border border-gray-200">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Get In Touch</h2>
        <p className="text-center text-gray-600 mb-6">
          Please fill out the form below. We’ll get back to you within one business day.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={`form-input ${errors.name && 'border-red-500'}`}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className={`form-input ${errors.phone && 'border-red-500'}`}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email && 'border-red-500'}`}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">What brings you here?</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`form-input h-28 resize-none ${errors.message && 'border-red-500'}`}
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          {/* Preferred Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Preferred time to reach you</label>
            <input
              name="preferredTime"
              type="text"
              value={formData.preferredTime}
              onChange={handleChange}
              placeholder="e.g., Mornings, Evenings"
              className={`form-input ${errors.preferredTime && 'border-red-500'}`}
            />
            {errors.preferredTime && <p className="error">{errors.preferredTime}</p>}
          </div>

          {/* Agree */}
          <div className="flex items-center">
            <input
              name="agree"
              type="checkbox"
              checked={formData.agree}
              onChange={handleChange}
              className="h-4 w-4 text-green-600"
            />
            <label className="ml-2 text-sm text-gray-700">I agree to be contacted</label>
          </div>
          {errors.agree && <p className="error">{errors.agree}</p>}

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
