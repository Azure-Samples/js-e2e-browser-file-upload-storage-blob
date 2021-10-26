import React from "react";

function About() {
  return (
    <div>
      <h2> About </h2>
      <h3> The Why</h3>
      <p> The switch to remote work, lesser physical activities and social isolation have created new challenges. With the increased level of stress and loss of jobs worldwide, the development of affordable, safe, and efficient ways to maintain physical and mental health has become more important. Yoga is a great way to achieve this. However, since the beginning of the pandemics, fitness centers and yoga studios around the world have been either fully or partially unavailable due to distancing restrictions. The practitioner’s ability to receive guidance from professional instructors has significantly reduced. Navigating the ocean of online sessions published by fitness centers and independent instructors is challenging, especially for beginners and people with injuries or other health issues.</p>
      <h3> The How</h3>
      <p> In our capstone project we set a goal to make the growing amount of online video content for at-home yoga practice more accessible and searchable. Our work will empower instructors, their students, and online fitness platforms to build personalized and balanced program of exercises with AI-powered tools for summarization of videos and recommendation engine for picking practices that best match the user’s needs.  </p>
      <h3> Previous Work</h3>
      <p> The analysis of existing solutions has shown that while several applications have been developed, there are a lot of barriers to adopting them by a large population who used to regularly do yoga before the pandemics, but couldn’t find an affordable and convenient way to get personalized guided experience from the comfort of their homes. The barriers are either with the technology (inaccurate classification of poses, inconvenient UI) or with price (one-off payment for the equipment and installation + ongoing subscription costs). In the competitive landscape, we are targeting a group of people who are beginner to intermediate level and spend a substantial amount of their daily time at the computer and plan to develop a set of features that are requested by students and instructors: at the first stage, we will make the online content more accessible to the students by augmenting the recordings of yoga sessions with automatically generated summaries describing the exercise (in English and Sanskrit) and interpreting the benefits for body and mind, enabling search and personalization. Later on, we will take the learnings and reuse them for providing real-time feedback for the instructors and students on the live sessions, indicating if students are not keeping pace with the instructions and highlighting those in need of help, based on an accurate classifier of main yoga asanas. 
</p>
    <h3> The Implementation </h3>
    <p> In order to achieve this, we are working on developing an innovative solution powered by a mix of open source and our own computer vision ML models, multimodal summarization algorithms and advanced analytics wrapped into an inference pipeline hosted on Azure compute resources.</p>
    <p> 
        <ul> 
            <li> Layer 1: pose detection algorithms (2d and/or 3d). Alpha Pose - current choice</li>
            <li> Layer 2: smoothing of time series extracted from videos (the choice of the algorithm(s) is subject to the findings of ongoing research, but our current plan is to use Savitzky–Golay filter or Bartlett window)</li>
            <li> Layer 3: action detection on videos (the choice of the algorithm(s) is subject to the findings of ongoing research, but our current plan is to use spatio-temporal inception graph convolutional Networks) </li>
            <li> Layer 4: summarization (new metrics for the assessment of proximity between the baseline and generated summary will be developed, inspired by BLEU and ROUGE from NLP, in order to capture non-binary estimation of how close the extracted “script” of poses is to the “target”, endpoint and pipeline for asynchronously processing uploaded videos and storing structured output in a database) </li>
            <li> Layer 5: user experience for navigation and search (navigation through uploaded sessions augmented with generated summaries in the form of short text and audio annotation, session transcript, list of contraindications and health benefits; UI for specifying user preferences as search criteria; personalization engine for matching preprocessed video sessions to the search queries, rendering aggregated analytics on completed practice) </li>
        </ul>
    </p>
    <h3> Acknowledgments</h3>
    <p> We appreciate the help of domain experts and stakeholders who provided us support and data for developing the solution: 
      <ul>
        <li> Pavel Dmitriev: certified yoga teacher, VP of Data Science at Outreach, board member - Star.AI, PhD</li>
        <li> Lynn Jensen: certified yoga teacher, writer, leads "Yoga for Women classes at Microsoft"</li>
      </ul>
    </p>
    <h3> The Team </h3>
    <p> Alexandra Savelieva, Duncan Howard, Karthik Srinivasan, Linda Yang, Simran Bhatia</p>
    <br />
    </div>
  );
}

export default About;