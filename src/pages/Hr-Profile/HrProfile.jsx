import React, { useState } from "react";

const HrProfile = () => {
  const [username, setUsername] = useState(localStorage.getItem("userName") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [password, setPassword] = useState(localStorage.getItem("password") || "");

  function handleSubmit(e) {
    e.preventDefault();
    // Update values in local storage
    localStorage.setItem("userName", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    // Show success message or perform any other action
    console.log("Profile updated successfully!");
  }

  function handleChange(e) {
    const { id, value } = e.target;
    // Update corresponding state based on input field ID
    if (id === "username") {
      setUsername(value);
    } else if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    }
  }

  return (
    <div>
      <h1>Profile</h1>
      {/* Profile */}
      <div className='p-6 max-w-lg mx-auto'>
        <h1 className='text-3xl font-semibold text-center my-12'>Profile</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          {/* File input */}
          <input
            type='file'
            hidden
            accept='image/*'
          />
          {/* Profile picture */}
          <img
            src='/path/to/default/profile/image'
            alt='profile'
            className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'
          />
          {/* Username input */}
          <input
            type='text'
            placeholder='Username'
            id='username'
            defaultValue={username}
            className='border p-3 rounded-lg'
            onChange={handleChange}
          />
          {/* Email input */}
          <input
            type='email'
            placeholder='Email'
            id='email'
            defaultValue={email}
            className='border p-3 rounded-lg'
            onChange={handleChange}
          />
          {/* Password input */}
          <input
            type='password'
            placeholder='Password'
            id='password'
            defaultValue={password}
            className='border p-3 rounded-lg'
            onChange={handleChange}
          />
          {/* Update button */}
          <button
            type='submit'
            className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'
          >
            Update
          </button>
        </form>
        <div className='flex justify-between mt-5'>
          {/* Delete account link */}
          <span className='text-red-700 cursor-pointer'>Delete account</span>
          {/* Sign out link */}
          <span className='text-red-700 cursor-pointer'>Sign out</span>
        </div>
      </div>
    </div>
  );
};

export default HrProfile;
