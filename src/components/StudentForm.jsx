import { useState } from 'react'

function StudentForm() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    registrationDate: '',
    program: '',
    semester: '',
    gender: '',
    address: '',
    terms: false
  })

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  function handleChange(event) {

    const { name, value, type, checked } = event.target

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })

    setError('')
    setSuccess('')
  }

  function handleSubmit(event) {

    event.preventDefault()

    setError('')
    setSuccess('')

    if (!formData.name.trim()) {
      setError('Please enter your name.')
      return
    }

    if (formData.name.trim().length < 3) {
      setError('Name must be at least 3 characters.')
      return
    }

    if(!/^[A-Za-z ]+$/.test(formData.name.trim())){
      setError('Name must contain letters and spaces only.')
      return
    }

    if (!formData.email) {
      setError('Please enter your email.')
      return
    }

    if (!/^[A-Za-z0-9._%+-]+@(gmail|yahoo|outlook)\.com$/i.test(formData.email.trim())) {
      setError('Email must be from Gmail, Yahoo, or Outlook.')
      return
    }

    if (!formData.phone) {
      setError('Please enter your phone number.')
      return
    }


    if (!/^[0-9]{11}$/.test(formData.phone)) {
      setError('Phone number must contain exactly 11 digits.')
      return
    }

    if (!formData.password) {
    setError('Please enter your password.')
    return
    }

    if (formData.password.length < 8) {
      setError('Password must contain at least 8 characters.')
      return
    }

    if (!/[A-Z]/.test(formData.password)) {
      setError('Password must contain an uppercase letter.')
      return
    }

    if (!/[a-z]/.test(formData.password)) {
      setError('Password must contain a lowercase letter.')
      return
    }

    if (!/[0-9]/.test(formData.password)) {
      setError('Password must contain a number.')
      return
    }

    if (!/[^A-Za-z0-9\s]/.test(formData.password)) {
      setError('Password must contain a special character.')
      return
    }

    if (/\s/.test(formData.password)) {
      setError('Password cannot contain spaces or whitespace.')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (!formData.registrationDate) {
      setError('Please select a registration date.')
      return
    }

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const selectedDate = new Date(formData.registrationDate + 'T00:00:00')

    if (selectedDate < today) {
      setError('Registration date cannot be in the past.')
      return
    }

    if (!formData.program) {
      setError('Please select a program.')
      return
    }

    if (!formData.semester) {
      setError('Please select a semester.')
      return
    }

    if (!formData.gender) {
      setError('Please select your gender.')
      return
    }

    if (!formData.address.trim()) {
      setError('Please enter your address.')
      return
    }

    if (!formData.terms) {
      setError('Please accept the terms and conditions.')
      return
    }

    console.log('Student Information:')
    console.log({
    ...formData,
    password: '[REDACTED]',
    confirmPassword: '[REDACTED]'
    })

    setSuccess('Student registered successfully!')

    setFormData({
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      registrationDate: '',
      program: '',
      semester: '',
      gender: '',
      address: '',
      terms: false
    })
  }

  return (
    <div className="card shadow-sm">

      <div className="card-body p-4">

        <h2 className="mb-4">
          Student Registration
        </h2>

        <form onSubmit={handleSubmit}>

          {/* Name */}

          <div className="mb-3">

            <label className="form-label">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
            />

          </div>


          {/* Email */}

          <div className="mb-3">

            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />

          </div>


          <div className="mb-3">

            <label className="form-label">
              Phone Number
            </label>

            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />

          </div>

          {/* Password */}

          <div className="mb-3">

            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />

          </div>

          {/* Confirm Password */}

          <div className="mb-3">

            <label className="form-label">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

          </div>

          {/* Registration Date */}

          <div className="mb-3">

            <label className="form-label">
              Registration Date
            </label>

            <input
              type="date"
              name="registrationDate"
              className="form-control"
              value={formData.registrationDate}
              onChange={handleChange}
            />

          </div>

          <div className="mb-3">

            <label className="form-label">
              Program
            </label>

            <select
              name="program"
              className="form-select"
              value={formData.program}
              onChange={handleChange}
            >

              <option value="">
                Select Program
              </option>

              <option value="Computer Science">
                Computer Science
              </option>

              <option value="Software Engineering">
                Software Engineering
              </option>

              <option value="Information Technology">
                Information Technology
              </option>

            </select>

          </div>

          <div className="mb-3">

            <label className="form-label">
              Semester
            </label>

            <select
              name="semester"
              className="form-select"
              value={formData.semester}
              onChange={handleChange}
            >

              <option value="">
                Select Semester
              </option>

              <option value="1">
                Semester 1
              </option>

              <option value="2">
                Semester 2
              </option>

              <option value="3">
                Semester 3
              </option>

              <option value="4">
                Semester 4
              </option>

              <option value="5">
                Semester 5
              </option>

              <option value="6">
                Semester 6
              </option>

              <option value="7">
                Semester 7
              </option>

              <option value="8">
                Semester 8
              </option>

            </select>

          </div>

          <div className="mb-3">

            <label className="form-label d-block">
              Gender
            </label>

            <div className="form-check form-check-inline">

              <input
                type="radio"
                name="gender"
                value="Male"
                className="form-check-input"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
              />

              <label className="form-check-label">
                Male
              </label>

            </div>


            <div className="form-check form-check-inline">

              <input
                type="radio"
                name="gender"
                value="Female"
                className="form-check-input"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
              />

              <label className="form-check-label">
                Female
              </label>

            </div>

          </div>

          <div className="mb-3">

            <label className="form-label">
              Address
            </label>

            <textarea
              name="address"
              className="form-control"
              rows="4"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
            />

          </div>

          <div className="mb-3">

            <div className="form-check">

              <input
                type="checkbox"
                name="terms"
                className="form-check-input"
                checked={formData.terms}
                onChange={handleChange}
              />

              <label className="form-check-label">
                I agree to the terms and conditions.
              </label>

            </div>

          </div>

          {error && (
            <div className="alert alert-danger">
              {error}
            </div>
          )}

          {success && (
            <div className="alert alert-success">
              {success}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary"
          >
            Register Student
          </button>

        </form>

      </div>

    </div>
  )
}

export default StudentForm
