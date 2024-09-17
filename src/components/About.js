import React from 'react'
import { useContext, useEffect } from 'react'
import noteContext from '../context/noteContext'

const About = () => {
    
    return (
        <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="card shadow-lg">
              <div className="card-body">
                <h2 className="card-title text-center my-3">About NoteGuard</h2>
                <p className="card-text">
                  <strong>NoteGuard</strong> is a full-stack MERN (MongoDB, Express, React, Node.js) application
                  designed to manage personal notes securely and efficiently. Leveraging modern web technologies, 
                  NoteGuard ensures a seamless user experience, allowing you to store, retrieve, and organize your
                  notes with ease.
                </p>
                <hr />
                <h5 className="text-center">Key Features</h5>
                <ul>
                  <li><strong>Security:</strong> NoteGuard employs secure user authentication and authorization mechanisms to ensure that your notes remain private and protected.</li>
                  <li><strong>Cloud Storage:</strong> Notes are stored in a MongoDB database, ensuring scalability and easy access across devices.</li>
                  <li><strong>Real-Time Interaction:</strong> Built using React for the front-end, the application provides a dynamic and responsive interface.</li>
                  <li><strong>API-Driven:</strong> The back-end, built with Node.js and Express, provides a robust API for handling note management and user data securely.</li>
                </ul>
                <hr />
             
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default About