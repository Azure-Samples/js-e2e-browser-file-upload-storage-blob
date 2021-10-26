import React from "react";
import logo from "./images/logo.gif";

function Home() {
  return (
    <div>
      <h2> Welcome! </h2>
        <p>The mission of this initiative is to help people stay physically and mentally fit while staying safe during the unprecedented times of the pandemic and beyond, by improving the online yoga practice experience.</p>
        <br />
        <p>The switch to remote work, lesser physical activities and social isolation have created new challenges. With the increased level of stress and loss of jobs worldwide, the development of affordable, safe, and efficient ways to maintain physical and mental health has become more important. Yoga is a great way to achieve this. However, since the beginning of the pandemics, fitness centers and yoga studios around the world have been either fully or partially unavailable due to distancing restrictions. The practitioner’s ability to receive guidance from professional instructors has significantly reduced. Navigating the ocean of online sessions published by fitness centers and independent instructors is challenging, especially for beginners and people with injuries or other health issues. In our capstone project we set a goal to make the growing amount of online video content for at-home yoga practice more accessible and searchable. Our work will empower instructors, their students, and online fitness platforms to build personalized and balanced program of exercises with AI-powered tools for summarization of videos and recommendation engine for picking practices that best match the user’s needs.  .</p>
        <img src={logo} alt="loading..." />
    </div>
  );
}

export default Home;