export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
    {
        id: 5,
        name: 'Resume',
        href: '/assets/Sujal_Dixit_Resume.pdf',
    },
];

/*export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];*/

export const myProjects = [
    {
        title: 'Flare - Realtime Messaging Application',
        desc: 'Flare is a modern, dynamic chat application designed for seamless communication. With features like real-time messaging, group chats, and personalized profiles. It\'s built with the latest web technologies to provide a smooth and responsive user experience across devices.',
        subdesc:
            'Built using React with Tailwind CSS, Flare combines the power of Firebase for real-time communication and Google Auth for secure sign-in, making it a reliable choice for instant messaging.',
        href: 'https://github.com/SujalD04/Flare_App',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/flare.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/javascript.png',
            },
            {
                id: 4,
                name: 'Firebase',
                path: '/assets/firebase.png',
            },
        ],
    },
    {
        title: 'AI Functions Inspector Application',
        desc: 'AI Powered Functions Inspection Application used to inspect the functionalities of machinery parts and provide solutions based on the conditions using AI. Also provide the user with Voice and Image processing capabilities',
        subdesc:
            'Built using JS along with HTML and Bootstrap CSS. The app uses Node.js for Back-end and MongoDB for the Database Management. The app uses Python for training the model along with Flask API.',
        href: 'https://github.com/SujalD04/Chatbot',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/ai.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'JavaScript',
                path: '/assets/javascript.png',
            },
            {
                id: 2,
                name: 'Bootstrap',
                path: 'assets/bootstrap.png',
            },
            {
                id: 3,
                name: 'Node.js',
                path: '/assets/nodejs.png',
            },
            {
                id: 4,
                name: 'Python',
                path: '/assets/python.png',
            },
        ],
    },
    {
        title: 'Algorithm Visualizer',
        desc: 'Algorithm Visualizer is an interactive web application that allows users to visualize various algorithms in action.',
        subdesc:
            'Built using React for a dynamic user interface and D3.js for powerful, scalable visualizations. Whether you\'re exploring sorting, searching, graph traversal, or dynamic programming, the website provides clear, step-by-step visualizations to help users grasp the concepts easily. Node.js powers the backend, ensuring smooth data handling.',
        href: 'https://github.com/SujalD04/Algorithm-Visualizer',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/algorithm.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/nodejs.png',
            },
            {
                id: 4,
                name: 'D3.js',
                path: '/assets/d3.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet, isLargeScreen) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [1, -4.5, 0] : isLargeScreen ? [1, -5.5, 0] : [0.65, -6.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Technology and Gaming (TAG)',
        pos: 'Game Developer',
        duration: 'Feb 2023 - May 2023',
        title: "Collaborated with a team of four to conceptualize, pitch, and implement a game idea, contributing to\n" +
            "detailed project documentation and reporting.",
        icon: '/assets/tag.png',
        animation: 'victory',
    },
    /*{
        id: 2,
        name: 'Figma',
        pos: 'Web Developer',
        duration: '2020 - 2022',
        title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
        icon: '/assets/figma.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Notion',
        pos: 'Junior Web Developer',
        duration: '2019 - 2020',
        title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
        icon: '/assets/notion.svg',
        animation: 'salute',
    },*/
];