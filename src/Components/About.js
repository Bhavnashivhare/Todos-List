import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>About ToDoList App</h1>
      <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
        Welcome to the <strong>ToDoList App</strong> – your ultimate productivity companion!  
        Our application helps you stay organized, manage tasks efficiently, and achieve your goals with ease.
      </p>
      
      <h2 style={{ fontSize: '1.5rem', marginTop: '1.5rem' }}>Why Choose ToDoList App?</h2>
      <ul style={{ marginLeft: '1.5rem', lineHeight: '1.6' }}>
        <li><strong>Simple & Intuitive Interface:</strong> Easily create, edit, and delete tasks with just a few clicks.</li>
        <li><strong>Task Prioritization:</strong> Focus on what matters most by organizing your tasks by priority.</li>
        <li><strong>Persistent Data:</strong> Your tasks are saved locally, ensuring you never lose track of your to-dos.</li>
        <li><strong>Responsive Design:</strong> Access your tasks seamlessly on both desktop and mobile devices.</li>
      </ul>

      <h2 style={{ fontSize: '1.5rem', marginTop: '1.5rem' }}>Our Mission</h2>
      <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
        At <strong>ToDoList App</strong>, we believe in empowering individuals and teams to maximize their productivity.  
        Whether you're a student managing assignments, a professional tracking project tasks, or someone organizing daily errands, our app is here to help you succeed.
      </p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '1.5rem' }}>Get Started Today!</h2>
      <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
        Start organizing your tasks now and experience a more productive life.  
        Thank you for choosing <strong>ToDoList App</strong> – your trusted productivity partner.
      </p>
    </div>
  );
};

export default About;