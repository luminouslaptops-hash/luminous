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
];
