const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Blockchain", imgPath: "/images/blockchain.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "WebDev", imgPath: "/images/webdev.svg" },
  ];
  
  const counterItems = [
    { value: 4, suffix: "+", label: "Years of Experience" },
    { value: 20, suffix: "+", label: "Satisfied Clients" },
    { value: 50, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Innovative Problem-Solver",
      desc: "Delivering high-quality results while I thrive on tackling complex challenges with creative solutions, leveraging cutting-edge technologies and strategic thinking. Whether optimizing workflows or exploring decentralized systems, I approach problems with a fresh perspective to deliver impactful results.while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Results-Driven Communicator",
      desc: "I combine clear, concise communication with a focus on delivering measurable results. By articulating ideas effectively and aligning with project objectives, I ensure my contributions resonate and drive progress in any endeavor",
    },
    {
      imgPath: "/images/disc.png",
      title: "Discipline",
      desc: "I maintain a steadfast commitment to structure and consistency, ensuring tasks are completed with precision and focus. By adhering to schedules, setting clear goals, and staying accountable, I deliver high-quality results in both individual and team settings, even under pressure.",
    },

    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "I pride myself on consistently meeting deadlines with precision and reliability, ensuring projects are delivered promptly without compromising quality. By effectively managing time, prioritizing tasks, and maintaining clear communication, I uphold commitments and drive successful outcomes in fast-paced environments.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Project Manager",
      imgPath: "/images/logos/git.svg",
    },
  ];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python Developer",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Project Manager",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    {
      review:
        "Larryson infused the team with innovative ideas and deep technical knowledge, greatly enhancing our blockchain DApp efficiency. His contributions have been crucial in achieving quicker, more seamless user interactions.",
      imgPath: "/images/exp111.png",
      logoPath: "/images/logo22.png",
      title: "Blockchain/Solidity Developer",
      date: "January 2023 - 2024",
      responsibilities: [
        "Built and refined user-facing functionalities for a team project on Movement blockchain  during their hackathon, ensuring robust and intuitive interfaces for decentralized applications.",
        "Partnered with UI/UX designers to create cohesive and user-friendly experiences tailored for blockchain interactions.",
        "Enhanced blockchain web applications for optimal performance, scalability, and transaction speed.",
      ],
    },
    {
      review:
        "Larryson Chijioke’s contributions to Web3 Tutor’s web applications during his internship as a full stack developer have been outstanding. He approaches challenges with a problem-solving mindset.",
      imgPath: "/images/exp22.png",
      logoPath: "/images/logo3.png",
      title: "Full Stack Developer",
      date: "June 2020 - December 2023",
      responsibilities: [
        "Led the development of Web3 Tutor’s web applications as a full stack dev intern, focusing on scalability.",
        "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
        "Contributed to open-source projects that were used within the Web3 Tutor ecosystem.",
      ],
    },
    {
      review:
        "As a community member, Larryson Chijioke’s contributions to Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced the mobile experience and helped meet the project’s goals.",
      imgPath: "/images/exp2.png",
      logoPath: "/images/logo2.png",
      title: "React Native Developer",
      date: "March 2019 - May 2020",
      responsibilities: [
        "Built cross-platform mobile apps using React Native, integrating with Appwrite’s backend services, as a community member.",
        "Improved app performance and user experience through code optimization and testing to help grow the project.",
        "Coordinated with the product team to implement features based on community feedback, enhancing Appwrite’s mobile app.",
      ],
    },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "w3_Tutor",
      mentions: "@w3tutor_org",
      review:
        "Web3 Tutor was thrilled to have Larryson Chijioke as a full stack dev intern. He took our complex project requirements and turned them into a seamless, functional website. His problem-solving abilities are outstanding.",
      imgPath: "/images/client11.png",
    },
    {
      name: "Plain3rd",
      mentions: "@plain3rd",
      review:
        "Working with Larryson during our MovementLab hackathon was a fantastic experience. As the team lead, he helped us build a blockchain project using the Move language, transforming our concept into a secure, efficient platform. His attention to detail and commitment to quality are unmatched. I highly recommend him for any blockchain dev projects.",
      imgPath: "/images/client33.png",
    },
    {
      name: "Guy Hawkins",
      mentions: "@guyhawkins",
      review:
        "Collaborating with Larryson  was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      imgPath: "/images/client2.png",
    },
    {
      name: "Daniel",
      mentions: "@Daniel5650088",
      review:
        "I've known Larryson Chijioke for years as both a coursemate and a close friend, and I’ve watched him take on numerous projects with incredible skill. Recently, he led a blockchain project using the Move language, turning a complex idea into a sleek, efficient platform that’s secure and user-friendly. His dedication, sharp problem-solving, and ability to deliver top-notch results never cease to impress me. Larryson’s work ethic and talent make him an exceptional blockchain developer—I’d recommend him to anyone without hesitation.",
      imgPath: "/images/client22.png",
    },
    {
      name: "Floyd Miles",
      mentions: "@floydmiles",
      review:
        "Larryson’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
      imgPath: "/images/client4.png",
    },
    {
      name: "Albert Flores",
      mentions: "@albertflores",
      review:
        "Larryson was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      imgPath: "/images/client6.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "insta",
      url: "https://www.instagram.com/larrysongift",
      imgPath: "/images/insta.png",
    },
    {
      name: "fb",
      url: "https://www.facebook.com/share/16QM1CyTgi/",
      imgPath: "/images/fb.png",
    },
    {
      name: "x",
      url: "https://x.com/ChijiokeLarrys",
      imgPath: "/images/x.png",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/larryson-chijioke-aab710237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imgPath: "/images/linkedin.png",
    },
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };