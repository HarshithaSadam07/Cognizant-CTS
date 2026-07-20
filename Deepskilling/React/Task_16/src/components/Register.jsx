import React, { useState } from 'react'

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  // onChange validation
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })

    // Validate on change
    const newErrors = { ...errors }

    if (name === 'name') {
      if (value.length < 5) {
        newErrors.name = 'Name must be at least 5 characters.'
      } else {
        delete newErrors.name
      }
    }

    if (name === 'email') {
      if (!value.includes('@') || !value.includes('.')) {
        newErrors.email = 'Email must contain @ and .'
      } else {
        delete newErrors.email
      }
    }

    if (name === 'password') {
      if (value.length < 8) {
        newErrors.password = 'Password must be at least 8 characters.'
      } else {
        delete newErrors.password
      }
    }

    setErrors(newErrors)
  }

  // onSubmit validation
  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}

    if (form.name.length < 5) {
      newErrors.name = 'Name must be at least 5 characters.'
    }
    if (!form.email.includes('@') || !form.email.includes('.')) {
      newErrors.email = 'Email must contain @ and .'
    }
    if (form.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters.'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      alert('Please fix the validation errors before submitting.')
      return
    }

    // Success
    alert(`Registration successful! Welcome, ${form.name}!`)
    setSuccess(true)
    setForm({ name: '', email: '', password: '' })
    setErrors({})
  }

  return (
    <div className="register-card">
      <h2>📧 Register</h2>

      {success && (
        <div className="success-msg">✅ Registration Successful! Please check your email.</div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name (min 5 chars)"
            value={form.name}
            onChange={handleChange}
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password (min 8 chars)"
            value={form.password}
            onChange={handleChange}
            className={errors.password ? 'input-error' : ''}
          />
          {errors.password && <span className="error-text">{errors.password}</span>}
        </div>

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  )
}

export default Register
