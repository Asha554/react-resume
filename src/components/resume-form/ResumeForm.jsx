import React, { useState } from 'react'
import image from '../../image.png';
import './ResumeForm.css';

function ResumeForm() {
  return (
    <form><div>
    <img src={image} className="App-img" alt='' />
    <p>
      ASHA
    </p>
    <h1>Information</h1>
    <h2>Name : Asha</h2>
    <h2>Email : nayakasha@gmail.com</h2>
    <h2>Phone :9141224137</h2>
    <h2 ><a
    >https://www.linkedin.com/in/asha-nayak-33146a280/</a></h2>
    <h1>About</h1>
    <h2>To work with an organization where can learn new
      skills and increase my abilities for the organizational
      goal as well as myself</h2>
    <h1>Education</h1>
    <h2>B.E (Pursuing: 2nd year) <h2 />
      Shri Madhwa Vadhiraja Institute of Technology and
      Managements. .Bantakal Udupi.
      CGPA: 8.22
    </h2>
    <h2>Passed out from Hindu P.U collage shirva. in 2021.</h2>
    <h2>Mark: 89.0%</h2>
    <h2>Passed out 10th from Hindu Junior collage shirva in 2019.</h2>
    <h2>Marks: 89.00</h2>
    <h1>Technical skills </h1>
    <h2>➢ Programing Language: C, C++, JAVA, PYTHON.</h2>
    <h2>➢ Technical _MS Word.</h2>
    <h2>➢Html , CSS and Javascript </h2>
    <h1>Achievements/Certification </h1>
    <h2>➢Ethical hacking and Cybersecurity </h2>
    <h2>➢Introduction to Git-Hub </h2>
    <h2>➢Programming Skills Development on 10th March 2023</h2>
  </div></form>
    

  )

}

export default ResumeForm;


