// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-2022-an-year-in-review",
        
          title: "2022, An Year in Review",
        
        description: "A look back on the events, growth, and challenges of 2022.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/year-review/";
          
        },
      },{id: "news-started-my-internship-at-the-vision-and-learning-lab-university-of-alberta-under-the-supervision-of-dr-li-cheng-as-a-mitacs-gri-fellow",
          title: 'Started my internship at the Vision and Learning Lab, University of Alberta under...',
          description: "",
          section: "News",},{id: "news-our-paper-titled-cycle-consistent-twin-energy-based-models-for-image-to-image-translation-has-been-accepted-in-elsevier-s-medical-image-analysis-if-11-8-journal",
          title: 'Our paper titled Cycle consistent twin energy-based models for image-to-image translation has been...',
          description: "",
          section: "News",},{id: "news-successfully-completed-my-b-tech-in-electrical-engineering-from-iit-kharagpur",
          title: 'Successfully completed my B.Tech in Electrical Engineering from IIT Kharagpur.',
          description: "",
          section: "News",},{id: "news-started-working-as-a-pre-doctoral-fellow-at-the-ece-department-iisc-bangalore-under-the-supervision-of-dr-prathosh-ap-supported-by-the-kotak-iisc-ai-ml-centre-pre-doctoral-fellowship",
          title: 'Started working as a Pre-Doctoral Fellow at the ECE Department, IISc Bangalore, under...',
          description: "",
          section: "News",},{id: "news-our-paper-langdaug-langevin-data-augmentation-for-multi-source-domain-generalization-in-medical-image-segmentation-has-been-accepted-as-a-poster-at-icml-2025",
          title: 'Our paper “LangDAug: Langevin Data Augmentation for Multi-Source Domain Generalization in Medical Image...',
          description: "",
          section: "News",},{id: "news-started-working-as-a-research-intern-at-the-palm-lab-university-of-south-florida-under-the-supervision-of-prof-anshuman-chhabra",
          title: 'Started working as a Research Intern at the PALM Lab, University of South...',
          description: "",
          section: "News",},{id: "news-i-ll-be-joining-unc-chapel-hill-in-fall-2026-to-pursue-a-phd-in-computer-science",
          title: 'I’ll be joining UNC Chapel Hill in Fall 2026 to pursue a PhD...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%69%6E%6A%61%77%6C%30%33@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/kb107", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kinjawl-bhattacharyya-60bb151b2", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Uc__Y2cAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/KinjawlB", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
