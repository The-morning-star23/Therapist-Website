"use client";

import { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    contactConsent: false
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) newErrors.message = 'Please let us know what brings you here';
    if (!formData.preferredTime.trim()) newErrors.preferredTime = 'Preferred contact time is required';
    if (!formData.contactConsent) newErrors.contactConsent = 'Please agree to be contacted';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        preferredTime: '',
        contactConsent: false
      });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <section className="contactform-section">
      <div className="contactform-container">
        <div className="contactform-box">
          <h2 className="contactform-title">Get In Touch</h2>
          <p className="contactform-subtitle">
            Simply fill out the brief fields below and Dr. Blake will be in touch with you soon, 
            usually within one business day. This form is safe, private, and completely free.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { id: "name", type: "text", placeholder: "Your full name" },
              { id: "email", type: "email", placeholder: "you@example.com" },
              { id: "phone", type: "tel", placeholder: "(555) 234-5678" },
              { id: "preferredTime", type: "text", placeholder: "e.g., Mornings, Evenings, Weekends" }
            ].map(({ id, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className="contactform-label">
                  {id === "preferredTime" ? "Preferred time to reach you" : id.charAt(0).toUpperCase() + id.slice(1)}
                </label>
                <input
                  id={id}
                  name={id}
                  type={type}
                  value={formData[id]}
                  onChange={handleChange}
                  className={`contactform-input ${errors[id] ? 'border-red-500' : ''}`}
                  placeholder={placeholder}
                />
                {errors[id] && <p className="contactform-error">{errors[id]}</p>}
              </div>
            ))}

            <div>
              <label htmlFor="message" className="contactform-label">
                What brings you here?
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`contactform-input ${errors.message ? 'border-red-500' : ''}`}
                placeholder="How can I help you?"
              />
              {errors.message && <p className="contactform-error">{errors.message}</p>}
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="contactConsent"
                  name="contactConsent"
                  type="checkbox"
                  checked={formData.contactConsent}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                />
              </div>
              <div className="ml-3">
                <label htmlFor="contactConsent" className="text-sm text-gray-600">
                  I agree to be contacted
                </label>
                {errors.contactConsent && <p className="contactform-error">{errors.contactConsent}</p>}
              </div>
            </div>

            <button type="submit" className="contactform-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
