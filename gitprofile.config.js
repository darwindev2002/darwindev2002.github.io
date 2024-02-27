// gitprofile.config.js

const config = {
  github: {
    username: 'darwindev2002', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [
        "PhotoLandHK",
        "04-nano-darwindev2002",
        "05-classes-darwindev2002",
      ], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'darwinchan02',
    // twitter: 'arif_szn',
    // mastodon: 'arifszn@mastodon.social',
    // facebook: '',
    // instagram: '',
    // dribbble: '',
    // behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    // stackoverflow: '', // format: userid/username
    // skype: '',
    // telegram: '',
    // website: 'https://arifszn.com',
    // phone: '',
    email: 'darwin0630@gmail.com',
  },
  resume: {
    // fileUrl:
    //   'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'C/C++',
    'Go',
    'Java',
    'SQL (Postgres, MySQL, NoSQL)',
    'JavaScript',
    'HTML/CSS',
    'C#',
    'PHP',
    'bash',
    'MATLAB',
    'R',

    'React.js',
    'Node.js',
    'Vue.js',
    'Angular',

    'Django',
    'Flask',

    'Laravel',

    'Nginx',

    'Numpy',
    'PyTorch',
    'Scikit-learn',
    'Pandas',
    'TensorFlow',

    'Git (GitHub, GitLab)',
    'Jupyter',
    'MongoDB',
    'Azure',
    'AWS'
  ],
  
  experiences: [
    {
      company: 'Firmstudio',
      position: 'Web Developer',
      from: 'June 2022',
      to: 'February 2023',
      companyLink: 'https://www.firmstudio.com/',
    },
    {
      company: 'University of California, San Diego',
      position: 'CSE Tutor',
      from: 'March 2022',
      to: 'June 2022',
    },
    {
      company: 'PhotoLandHK',
      position: 'Software Developer',
      from: 'October 2020',
      to: 'April 2021',
    },
    {
      company: 'Green River College Math Learning Center',
      position: 'Math Tutor',
      from: 'July 2019',
      to: 'June 2020',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'University of California, San Diego',
      degree: 'MS Computer Science',
      from: '2022',
      to: '2023',
    },
    {
      institution: 'University of California, San Diego',
      degree: 'BS Computer Science',
      from: '2020',
      to: '2022',
    },
    {
      institution: 'Green River College',
      degree: 'AS Computer Science',
      from: '2018',
      to: '2020',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'SurfStore Cloud-Based File Storage',
      description:
        'A Dropbox-inspired scalable cloud storage service, enabling file sync across clients with gRPC, integrated RAFT protocol for metadata server replication and consistent hashing for efficient data distribution',
      // imageUrl: 'https://via.placeholder.com/250x250',
      link: '',
      majorLang: ['Go', 'bash'],
    },
    {
      title: '2048 AI',
      description:
        'An AI player for the classic 2048 game, utilizing the expectimax search algorithm, consistenly achieving scores above 20,000 and successfully reached the 2048 tile',
      // imageUrl: 'https://via.placeholder.com/250x250',
      link: '',
      majorLang: ['Python'],
    },
    {
      title: 'Project X',
      description:
        'An innovative online platform for Hong Kong photographers to purchase gear and for merchants to create their online shops',
      // imageUrl: 'https://via.placeholder.com/250x250',
      link: '',
      majorLang: ['JavaScript', 'HTML', 'C#'],
    },
    {
      title: 'Copy Folder Structure Mac App',
      description:
        'A user-friendly Mac App that replicates a source folder structure to a target path',
      link: 'https://github.com/darwindev2002/py-copy-directory-structure',
      majorLang: ['Python'],
    },
    {
      title: 'Vectorization for Aliev-Panfilov Cardiac Simulation',
      description:
        'A vectorized version of the Aliev-Panfilov cardiac simulation through multi-threading and concurrency, achieved 87-99% scaling efficiency on various core counts',
      link: '',
      majorLang: ['C++', 'MPI'],
    },
    {
      title: 'Ready Meal One',
      description:
        'A user-friendly Web App team project for college students to quickly access and save recipes',
      imageUrl: './src/assets/ready-meal-one-logo_no-text.png',
      link: 'https://github.com/darwindev2002/-cse110-fa21-group1',
      majorLang: ['JavaScript', 'HTML', 'CSS'],
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many posts to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'pastel',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
