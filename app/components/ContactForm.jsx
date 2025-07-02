"use client"

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    contactConsent: false
  })

  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required'
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please let us know what brings you here'
    }
    
    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = 'Preferred contact time is required'
    }
    
    if (!formData.contactConsent) {
      newErrors.contactConsent = 'Please agree to be contacted'
    }
    
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length === 0) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData)
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        preferredTime: '',
        contactConsent: false
      })
      setErrors({})
    } else {
      setErrors(newErrors)
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-3xl font-serif text-[#8B7355] text-center mb-2">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Simply fill out the brief fields below and Dr. Blake will be in touch with you soon, 
            usually within one business day. This form is safe, private, and completely free.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'border-red-500' : ''}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'border-red-500' : ''}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? 'border-red-500' : ''}
                placeholder="(555) 234-5678"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                What brings you here?
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'border-red-500' : ''}
                placeholder="How can I help you?"
                rows={4}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred time to reach you
              </label>
              <Input
                id="preferredTime"
                name="preferredTime"
                type="text"
                value={formData.preferredTime}
                onChange={handleChange}
                className={errors.preferredTime ? 'border-red-500' : ''}
                placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
              />
              {errors.preferredTime && (
                <p className="mt-1 text-sm text-red-500">{errors.preferredTime}</p>
              )}
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
                {errors.contactConsent && (
                  <p className="mt-1 text-sm text-red-500">{errors.contactConsent}</p>
                )}
              </div>
            </div>

            <Button 
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
