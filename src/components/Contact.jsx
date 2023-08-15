import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContactClick = () => {
    if (!name || !email || !isValidEmail(email)) {
      alert('Please enter a valid name and email.');
    } else {
      sendEmail();
    }
  };

  const isValidEmail = (email) => {
    // Simple email validation regex
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const sendEmail = () => {
    const subject = 'New Contact Form Submission';
    const body = `Hey I want to know more about the Product! \nName: ${name}\nEmail: ${email}`;
    const mailtoLink = `mailto:arshad@onemailbox.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className='w-full py-16 text-white px-4' id='contact'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want to learn more about GAIL?
          </h1>
          <p>Sign up and we'll contact you.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black mx-2'
              type='text'
              placeholder='Name'
              value={name}
              onChange={handleNameChange}
            />
            <input
              className='p-3 flex w-full rounded-md text-black mt-4 sm:mt-0 mx-2'
              type='email'
              placeholder='Email'
              value={email}
              onChange={handleEmailChange}
            />
            <button
              className='bg-[#5271ff] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'
              onClick={handleContactClick}
            >
              Contact Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{' '}
            <span className='text-[#5271ff]'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
