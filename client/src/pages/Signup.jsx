import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    role: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Submit the form data (e.g., send it to the backend)
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-800">
      <div className="text-center mb-6">
        <p className="text-3xl text-white">Welcome Back</p>
        <p className="text-xl text-white">Discover your passions,</p>
        <p className="text-blue-200 italic">Be Unstoppable</p>
      </div>
      <form
        className="bg-gray-700 p-8 rounded shadow-lg w-80"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between mb-4">
          <label className="text-white flex items-center">
            <input
              className="mr-2"
              type="radio"
              name="role"
              value="Instructor"
              onChange={handleChange}
              required
            />
            Instructor
          </label>
          <label className="text-white flex items-center">
            <input
              className="mr-2"
              type="radio"
              name="role"
              value="Student"
              onChange={handleChange}
            />
            Student
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-black block">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email address"
            className="w-full p-2 mt-1 rounded bg-gray-600 text-black placeholder:text-gray-400"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="text-black block">
            Create password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
            className="w-full p-2 mt-1 rounded bg-gray-600 text-black placeholder:text-gray-400"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="text-black block">
            Confirm password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Re-enter password"
            className="w-full p-2 mt-1 rounded bg-gray-600 text-black placeholder:text-gray-400"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="phoneNumber" className="text-black block">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            placeholder="123456789"
            className="w-full p-2 mt-1 rounded bg-gray-600 text-black placeholder:text-gray-400"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-black w-full py-2 rounded"
        >
          Create account
        </button>
      </form>
    </div>
  );
};

export default Signup;
