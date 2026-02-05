export interface Homework {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  dueDate: string;
  requirements: string[];
}

export interface Module {
  id: string;
  title: string;
  topic: string;
  duration: string;
  videoUrl: string;
  description: string;
  order: number;
  homework: Homework;
}

export interface EnrolledClass {
  id: string;
  title: string;
  description: string;
  instructor: string;
  thumbnail: string;
  modules: Module[];
  totalModules: number;
  currentModuleIndex: number;
}

export const enrolledClasses: EnrolledClass[] = [
  {
    id: 'class-1',
    title: 'Web Design Fundamentals',
    description: 'Learn the basics of creating beautiful, responsive websites',
    instructor: 'John Smith',
    thumbnail: '🎨',
    currentModuleIndex: 0,
    modules: [
      {
        id: 'mod-1-1',
        title: 'Introduction to HTML',
        topic: 'HTML Basics',
        duration: '12:45',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4',
        description: 'Learn HTML structure and semantic elements',
        order: 1,
        homework: {
          id: 'hw-1-1',
          title: 'Create Your First HTML Page',
          description: 'Build a personal portfolio page using semantic HTML elements. Include a header with navigation, main content section, and a footer.',
          difficulty: 'easy',
          dueDate: 'February 11, 2026',
          requirements: [
            'Use semantic HTML elements (header, nav, main, footer)',
            'Create a navigation menu with at least 3 links',
            'Add a hero section with an image and text',
            'Include an about section with your bio',
            'Add proper meta tags and page structure'
          ],
        },
      },
      {
        id: 'mod-1-2',
        title: 'CSS Styling Essentials',
        topic: 'CSS Basics',
        duration: '18:30',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4',
        description: 'Master CSS selectors, properties, and layouts',
        order: 2,
        homework: {
          id: 'hw-1-2',
          title: 'Style Your Portfolio with CSS',
          description: 'Apply CSS styling to your HTML portfolio page from the previous assignment.',
          difficulty: 'easy',
          dueDate: 'February 18, 2026',
          requirements: [
            'Apply a color scheme with at least 3 colors',
            'Style navigation with hover effects',
            'Use CSS Flexbox for layout',
            'Add custom fonts from Google Fonts',
            'Create a responsive design with media queries'
          ],
        },
      },
      {
        id: 'mod-1-3',
        title: 'Responsive Design',
        topic: 'Responsive Web Design',
        duration: '22:15',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4',
        description: 'Create mobile-friendly layouts using media queries',
        order: 3,
        homework: {
          id: 'hw-1-3',
          title: 'Make Your Portfolio Mobile-Friendly',
          description: 'Enhance your portfolio with advanced responsive techniques.',
          difficulty: 'medium',
          dueDate: 'February 25, 2026',
          requirements: [
            'Test on mobile, tablet, and desktop viewports',
            'Implement mobile-first design approach',
            'Use CSS Grid for complex layouts',
            'Add hamburger menu for mobile navigation',
            'Optimize images for different screen sizes'
          ],
        },
      },
      {
        id: 'mod-1-4',
        title: 'Flexbox and Grid',
        topic: 'Advanced CSS',
        duration: '25:00',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerEscapes.mp4',
        description: 'Master modern CSS layout techniques',
        order: 4,
        homework: {
          id: 'hw-1-4',
          title: 'Build a Multi-Section Layout',
          description: 'Create a complex layout using both Flexbox and CSS Grid.',
          difficulty: 'medium',
          dueDate: 'March 4, 2026',
          requirements: [
            'Use CSS Grid for main layout',
            'Use Flexbox for component-level layouts',
            'Create a card-based project showcase',
            'Implement gap and spacing properly',
            'Create smooth transitions between layouts'
          ],
        },
      },
      {
        id: 'mod-1-5',
        title: 'JavaScript Basics',
        topic: 'JavaScript Fundamentals',
        duration: '20:10',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerJoyrides.mp4',
        description: 'Introduction to JavaScript and DOM manipulation',
        order: 5,
        homework: {
          id: 'hw-1-5',
          title: 'Add Interactivity with JavaScript',
          description: 'Add JavaScript functionality to your portfolio website.',
          difficulty: 'hard',
          dueDate: 'March 11, 2026',
          requirements: [
            'Add smooth scroll navigation',
            'Implement form validation',
            'Create interactive project filtering',
            'Add animations on scroll',
            'Build a contact form with JavaScript validation'
          ],
        },
      },
    ],
    totalModules: 5,
  },
  {
    id: 'class-2',
    title: 'Digital Marketing Strategy',
    description: 'Master modern digital marketing and social media strategies',
    instructor: 'Sarah Johnson',
    thumbnail: '📱',
    currentModuleIndex: 1,
    modules: [
      {
        id: 'mod-2-1',
        title: 'Marketing Fundamentals',
        topic: 'Basics of Marketing',
        duration: '15:20',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4',
        description: 'Understand core marketing principles',
        order: 1,
        homework: {
          id: 'hw-2-1',
          title: 'Analyze Market and Define Target Audience',
          description: 'Research a product/service and define its target market.',
          difficulty: 'easy',
          dueDate: 'February 12, 2026',
          requirements: [
            'Choose a product or service to analyze',
            'Identify primary and secondary target audiences',
            'Create a customer persona document',
            'Analyze competitor marketing strategies',
            'Develop a unique value proposition'
          ],
        },
      },
      {
        id: 'mod-2-2',
        title: 'Social Media Strategy',
        topic: 'Social Media Marketing',
        duration: '19:45',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4',
        description: 'Build effective social media campaigns',
        order: 2,
        homework: {
          id: 'hw-2-2',
          title: 'Create a Social Media Marketing Plan',
          description: 'Develop a comprehensive social media strategy for your chosen brand.',
          difficulty: 'medium',
          dueDate: 'February 19, 2026',
          requirements: [
            'Select platforms based on target audience',
            'Create content calendar for 4 weeks',
            'Design 5 sample social media posts',
            'Plan engagement and community management',
            'Set measurable KPIs and metrics'
          ],
        },
      },
      {
        id: 'mod-2-3',
        title: 'SEO Optimization',
        topic: 'Search Engine Optimization',
        duration: '24:30',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4',
        description: 'Optimize your website for search engines',
        order: 3,
        homework: {
          id: 'hw-2-3',
          title: 'Conduct SEO Audit and Optimization',
          description: 'Perform an SEO audit on a website and create an optimization plan.',
          difficulty: 'hard',
          dueDate: 'February 26, 2026',
          requirements: [
            'Analyze current SEO performance',
            'Research and list target keywords',
            'Identify technical SEO issues',
            'Create meta descriptions and tags',
            'Develop backlink strategy'
          ],
        },
      },
    ],
    totalModules: 3,
  },
  {
    id: 'class-3',
    title: 'Hand Stitching Techniques',
    description: 'Learn traditional and modern hand stitching methods',
    instructor: 'Emma Wilson',
    thumbnail: '✂️',
    currentModuleIndex: 0,
    modules: [
      {
        id: 'mod-3-1',
        title: 'Getting Started with Needles and Thread',
        topic: 'Tools and Materials',
        duration: '11:15',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerEscapes.mp4',
        description: 'Choose the right tools and materials for hand stitching',
        order: 1,
        homework: {
          id: 'hw-3-1',
          title: 'Prepare Your Stitching Kit',
          description: 'Gather and organize materials for hand stitching practice.',
          difficulty: 'easy',
          dueDate: 'February 13, 2026',
          requirements: [
            'Gather 5 different types of needles',
            'Select threads in various colors',
            'Prepare fabric scraps for practice',
            'Document your materials with photos',
            'Create a storage solution for your kit'
          ],
        },
      },
      {
        id: 'mod-3-2',
        title: 'Basic Hand Stitches',
        topic: 'Essential Stitches',
        duration: '28:40',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerJoyrides.mp4',
        description: 'Master essential hand stitching techniques',
        order: 2,
        homework: {
          id: 'hw-3-2',
          title: 'Practice Essential Stitches',
          description: 'Create a sampler showing 8 different hand stitches.',
          difficulty: 'medium',
          dueDate: 'February 20, 2026',
          requirements: [
            'Practice running stitch on fabric',
            'Master backstitch technique',
            'Create even stitches with consistent spacing',
            'Learn slip stitch for invisible seams',
            'Submit photos of your sampler'
          ],
        },
      },
      {
        id: 'mod-3-3',
        title: 'Advanced Embroidery',
        topic: 'Decorative Stitching',
        duration: '32:00',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4',
        description: 'Create beautiful embroidered designs',
        order: 3,
        homework: {
          id: 'hw-3-3',
          title: 'Create an Embroidered Design',
          description: 'Design and embroider a decorative piece using multiple stitches.',
          difficulty: 'hard',
          dueDate: 'February 27, 2026',
          requirements: [
            'Sketch a design on fabric',
            'Use at least 5 different stitches',
            'Create shading with thread colors',
            'Complete a cohesive piece',
            'Document your process with photos'
          ],
        },
      },
    ],
    totalModules: 3,
  },
  {
    id: 'class-4',
    title: 'Java Programming Mastery',
    description: 'Learn Java from basics to advanced enterprise applications',
    instructor: 'করিম হোসেন',
    thumbnail: '☕',
    currentModuleIndex: 0,
    modules: [
      {
        id: 'mod-4-1',
        title: 'Java Fundamentals',
        topic: 'Java Basics',
        duration: '25:30',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4',
        description: 'Learn Java syntax and core concepts',
        order: 1,
        homework: {
          id: 'hw-4-1',
          title: 'Write Your First Java Program',
          description: 'Create basic Java programs demonstrating variables, loops, and conditionals.',
          difficulty: 'easy',
          dueDate: 'February 12, 2026',
          requirements: [
            'Write a program that uses variables',
            'Create loops for iteration',
            'Implement if-else statements',
            'Use arrays in your program',
            'Compile and run without errors'
          ],
        },
      },
      {
        id: 'mod-4-2',
        title: 'Object-Oriented Programming',
        topic: 'OOP Concepts',
        duration: '30:20',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4',
        description: 'Master OOP principles in Java',
        order: 2,
        homework: {
          id: 'hw-4-2',
          title: 'Build a Class Hierarchy',
          description: 'Create classes demonstrating inheritance and polymorphism.',
          difficulty: 'medium',
          dueDate: 'February 19, 2026',
          requirements: [
            'Create parent and child classes',
            'Implement method overriding',
            'Use abstract classes',
            'Implement interfaces',
            'Demonstrate polymorphism'
          ],
        },
      },
      {
        id: 'mod-4-3',
        title: 'Advanced Java Concepts',
        topic: 'Advanced Topics',
        duration: '35:45',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4',
        description: 'Explore advanced Java features',
        order: 3,
        homework: {
          id: 'hw-4-3',
          title: 'Create a Complete Application',
          description: 'Build a small application using collections and exception handling.',
          difficulty: 'hard',
          dueDate: 'February 26, 2026',
          requirements: [
            'Use ArrayList and HashMap',
            'Implement custom exceptions',
            'Use try-catch-finally blocks',
            'Create a GUI with Swing or JavaFX',
            'Document your code with comments'
          ],
        },
      },
    ],
    totalModules: 3,
  },
  {
    id: 'class-5',
    title: 'UI/UX Design Professional Course',
    description: 'Master user interface and user experience design principles',
    instructor: 'নাজমা বেগম',
    thumbnail: '🎨',
    currentModuleIndex: 0,
    modules: [
      {
        id: 'mod-5-1',
        title: 'Design Principles Fundamentals',
        topic: 'Design Theory',
        duration: '21:40',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerEscapes.mp4',
        description: 'Learn fundamental design principles',
        order: 1,
        homework: {
          id: 'hw-5-1',
          title: 'Analyze Design Principles',
          description: 'Identify and explain design principles in real-world applications.',
          difficulty: 'easy',
          dueDate: 'February 13, 2026',
          requirements: [
            'Analyze 5 websites using design principles',
            'Create a mood board',
            'Document color psychology choices',
            'Sketch wireframes for a simple app',
            'Present your findings'
          ],
        },
      },
      {
        id: 'mod-5-2',
        title: 'User Research and Testing',
        topic: 'UX Research',
        duration: '27:15',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerJoyrides.mp4',
        description: 'Conduct effective user research',
        order: 2,
        homework: {
          id: 'hw-5-2',
          title: 'Conduct User Interview',
          description: 'Perform user interviews and create user personas.',
          difficulty: 'medium',
          dueDate: 'February 20, 2026',
          requirements: [
            'Plan and conduct 3 user interviews',
            'Create 2 detailed user personas',
            'Identify user pain points',
            'Document findings in a report',
            'Present insights to the class'
          ],
        },
      },
      {
        id: 'mod-5-3',
        title: 'Prototyping and Testing',
        topic: 'Design Tools',
        duration: '31:50',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4',
        description: 'Create and test design prototypes',
        order: 3,
        homework: {
          id: 'hw-5-3',
          title: 'Design and Test a Prototype',
          description: 'Create a prototype and conduct usability testing.',
          difficulty: 'hard',
          dueDate: 'February 27, 2026',
          requirements: [
            'Create a high-fidelity prototype',
            'Conduct 5 usability tests',
            'Analyze test results',
            'Iterate on design',
            'Present final design solution'
          ],
        },
      },
    ],
    totalModules: 3,
  },
  {
    id: 'class-6',
    title: 'Content Marketing Strategy',
    description: 'Learn to create and execute effective content marketing strategies',
    instructor: 'সারা আলী',
    thumbnail: '📝',
    currentModuleIndex: 0,
    modules: [
      {
        id: 'mod-6-1',
        title: 'Content Strategy Fundamentals',
        topic: 'Strategy Basics',
        duration: '19:25',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4',
        description: 'Understand content marketing basics',
        order: 1,
        homework: {
          id: 'hw-6-1',
          title: 'Create a Content Strategy',
          description: 'Develop a content strategy for a target audience.',
          difficulty: 'easy',
          dueDate: 'February 14, 2026',
          requirements: [
            'Define your target audience',
            'Identify content pillars',
            'Plan content themes',
            'Create a content calendar',
            'Set measurable goals'
          ],
        },
      },
      {
        id: 'mod-6-2',
        title: 'Content Creation and Publishing',
        topic: 'Content Production',
        duration: '28:30',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4',
        description: 'Create compelling content',
        order: 2,
        homework: {
          id: 'hw-6-2',
          title: 'Create 4 Content Pieces',
          description: 'Write blog posts, social media content, and multimedia posts.',
          difficulty: 'medium',
          dueDate: 'February 21, 2026',
          requirements: [
            'Write 2 blog posts (1000+ words each)',
            'Create 10 social media posts',
            'Design 1 infographic',
            'Record a short video',
            'Publish across channels'
          ],
        },
      },
      {
        id: 'mod-6-3',
        title: 'Analytics and Optimization',
        topic: 'Performance Metrics',
        duration: '25:40',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerEscapes.mp4',
        description: 'Measure and optimize content performance',
        order: 3,
        homework: {
          id: 'hw-6-3',
          title: 'Analyze Content Performance',
          description: 'Analyze metrics and create an optimization plan.',
          difficulty: 'hard',
          dueDate: 'February 28, 2026',
          requirements: [
            'Track content performance metrics',
            'Analyze audience engagement',
            'Identify top-performing content',
            'Create optimization strategy',
            'Present actionable recommendations'
          ],
        },
      },
    ],
    totalModules: 3,
  },
  {
    id: 'class-7',
    title: 'Python for Data Science',
    description: 'Learn data analysis and machine learning with Python',
    instructor: 'ইমরান খান',
    thumbnail: '🐍',
    currentModuleIndex: 0,
    modules: [
      {
        id: 'mod-7-1',
        title: 'Python Basics for Data Science',
        topic: 'Python Fundamentals',
        duration: '23:50',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerJoyrides.mp4',
        description: 'Master Python for data analysis',
        order: 1,
        homework: {
          id: 'hw-7-1',
          title: 'Complete Python Challenges',
          description: 'Solve Python programming challenges.',
          difficulty: 'easy',
          dueDate: 'February 15, 2026',
          requirements: [
            'Work with Pandas DataFrames',
            'Clean and prepare data',
            'Use NumPy for calculations',
            'Handle missing values',
            'Create simple visualizations'
          ],
        },
      },
      {
        id: 'mod-7-2',
        title: 'Data Analysis and Visualization',
        topic: 'Data Visualization',
        duration: '29:35',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4',
        description: 'Visualize and analyze data effectively',
        order: 2,
        homework: {
          id: 'hw-7-2',
          title: 'Create Data Analysis Report',
          description: 'Analyze a dataset and create comprehensive visualizations.',
          difficulty: 'medium',
          dueDate: 'February 22, 2026',
          requirements: [
            'Load and explore a dataset',
            'Perform exploratory data analysis',
            'Create multiple visualizations',
            'Use Matplotlib and Seaborn',
            'Document findings'
          ],
        },
      },
      {
        id: 'mod-7-3',
        title: 'Machine Learning Fundamentals',
        topic: 'ML Basics',
        duration: '34:20',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4',
        description: 'Introduction to machine learning',
        order: 3,
        homework: {
          id: 'hw-7-3',
          title: 'Build a ML Model',
          description: 'Create a machine learning model and evaluate its performance.',
          difficulty: 'hard',
          dueDate: 'February 29, 2026',
          requirements: [
            'Prepare and split data',
            'Train a classification model',
            'Evaluate model performance',
            'Use scikit-learn library',
            'Document results and insights'
          ],
        },
      },
    ],
    totalModules: 3,
  },
  {
    id: 'class-8',
    title: 'Branding and Logo Design',
    description: 'Create distinctive brand identities and logos',
    instructor: 'আশিক রায়',
    thumbnail: '🏷️',
    currentModuleIndex: 0,
    modules: [
      {
        id: 'mod-8-1',
        title: 'Brand Identity Fundamentals',
        topic: 'Branding Basics',
        duration: '20:15',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4',
        description: 'Understand brand identity and strategy',
        order: 1,
        homework: {
          id: 'hw-8-1',
          title: 'Develop a Brand Strategy',
          description: 'Create a comprehensive brand strategy document.',
          difficulty: 'easy',
          dueDate: 'February 16, 2026',
          requirements: [
            'Define brand mission and values',
            'Analyze competitor brands',
            'Create brand personality guidelines',
            'Develop brand voice guidelines',
            'Document brand story'
          ],
        },
      },
      {
        id: 'mod-8-2',
        title: 'Logo Design Techniques',
        topic: 'Logo Design',
        duration: '28:45',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerEscapes.mp4',
        description: 'Design professional logos',
        order: 2,
        homework: {
          id: 'hw-8-2',
          title: 'Design 3 Logo Variations',
          description: 'Create multiple logo design variations for a brand.',
          difficulty: 'medium',
          dueDate: 'February 23, 2026',
          requirements: [
            'Research logo design trends',
            'Sketch logo concepts',
            'Create 3 digital logo variations',
            'Use Adobe Illustrator or Figma',
            'Present logos in mockups'
          ],
        },
      },
      {
        id: 'mod-8-3',
        title: 'Brand Guideline Creation',
        topic: 'Brand Standards',
        duration: '26:30',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerJoyrides.mp4',
        description: 'Create comprehensive brand guidelines',
        order: 3,
        homework: {
          id: 'hw-8-3',
          title: 'Create Brand Guideline Document',
          description: 'Develop complete brand guidelines for a company.',
          difficulty: 'hard',
          dueDate: 'March 2, 2026',
          requirements: [
            'Create logo usage guidelines',
            'Define color palette and usage',
            'Set typography standards',
            'Document image guidelines',
            'Create brand guideline PDF'
          ],
        },
      },
    ],
    totalModules: 3,
  },
];