// Page Builder Utility
import { createPage } from '../components/index.js';

// Predefined page configurations
export const pageConfigs = {
  home: {
    title: 'Hanzel Lacida | Fractional CMO, Google Ads & SEM Expert, Composer & Music Producer | Business Consulting Solutions',
    description: 'Hanzel Lacida provides expert Fractional CMO services, Google Ads management, SEM strategies, business consulting, and music production. Explore his tailored digital marketing solutions and captivating music compositions.',
    heroProps: {
      title: 'Expert PPC Management & Digital Marketing Solutions',
      subtitle: 'Transform your business with data-driven Google Ads strategies and comprehensive digital marketing solutions. From fractional CMO services to music production, I deliver results that scale.',
      primaryButton: { href: '/services/', text: 'Explore Services' },
      secondaryButton: { href: '/free-marketing-audit-call/', text: 'Free Marketing Audit' },
      imageSrc: 'images/banner.png',
      imageAlt: 'Digital Marketing Solutions'
    },
    aboutProps: {
      title: 'About Hanzel Lacida',
      subtitle: 'Former Senior Account Strategist at Google (2020-2023) with expertise in PPC management, SEM strategies, and business consulting. Also a talented composer and music producer.',
      heading: 'Fractional CMO & Google Ads Expert',
      description: 'I help businesses scale their digital presence through strategic Google Ads management, comprehensive SEM campaigns, and data-driven marketing strategies. With experience managing millions in ad spend, I deliver measurable ROI for clients across industries.',
      primaryLink: { href: '/about/', text: 'Learn More About Hanzel →' },
      secondaryLink: { href: 'https://linktr.ee/hanslacida', text: 'LinkTree Bio →' },
      imageSrc: 'images/banner1.png',
      imageAlt: 'Hanzel Lacida'
    },
    servicesProps: {
      title: 'Our Services',
      subtitle: 'We provide expert PPC management, tailored keyword strategies, and comprehensive campaign optimization to maximize your ROI.',
      services: [
        {
          title: 'Google Ads Management',
          description: 'Comprehensive PPC campaign management with strategic optimization and performance tracking.',
          icon: 'fas fa-chart-line',
          link: '/services/'
        },
        {
          title: 'SEM Strategy',
          description: 'Data-driven search engine marketing strategies to improve your online visibility and conversions.',
          icon: 'fas fa-search',
          link: '/services/'
        },
        {
          title: 'Business Consulting',
          description: 'Strategic business consulting to help scale your operations and maximize growth potential.',
          icon: 'fas fa-lightbulb',
          link: '/services/'
        }
      ]
    },
    contactProps: {
      title: 'Get In Touch',
      subtitle: 'Ready to scale your business? Let\'s discuss how I can help you achieve your marketing goals.',
      formId: 'contact-form'
    }
  },
  
  services: {
    title: 'Services | Hanzel Lacida - PPC Management & Digital Marketing Expert',
    description: 'Comprehensive PPC management, SEM strategies, and business consulting services. Expert Google Ads management to maximize your ROI and scale your business.',
    heroProps: {
      title: 'Comprehensive Digital Marketing Services',
      subtitle: 'From Google Ads management to strategic business consulting, I provide end-to-end solutions to help your business grow and succeed online.',
      primaryButton: { href: '/contact/', text: 'Get Started' },
      secondaryButton: { href: '/free-marketing-audit-call/', text: 'Free Audit' },
      imageSrc: 'images/banner.png',
      imageAlt: 'Digital Marketing Services'
    },
    servicesProps: {
      title: 'Our Services',
      subtitle: 'Comprehensive digital marketing solutions tailored to your business needs.',
      services: [
        {
          title: 'Google Ads Management',
          description: 'Full-service PPC campaign management including keyword research, ad creation, optimization, and performance tracking.',
          icon: 'fas fa-chart-line',
          link: '/services/google-ads-management/'
        },
        {
          title: 'SEM Strategy',
          description: 'Strategic search engine marketing planning and execution to improve your online visibility and drive qualified traffic.',
          icon: 'fas fa-search',
          link: '/services/sem-strategy/'
        },
        {
          title: 'Business Consulting',
          description: 'Strategic business consulting to help you scale operations, optimize processes, and maximize growth potential.',
          icon: 'fas fa-lightbulb',
          link: '/services/business-consulting/'
        },
        {
          title: 'Fractional CMO',
          description: 'Part-time Chief Marketing Officer services to provide strategic marketing leadership without the full-time cost.',
          icon: 'fas fa-user-tie',
          link: '/services/fractional-cmo/'
        },
        {
          title: 'Campaign Optimization',
          description: 'Data-driven optimization of existing campaigns to improve performance and maximize return on ad spend.',
          icon: 'fas fa-cogs',
          link: '/services/campaign-optimization/'
        },
        {
          title: 'Analytics & Reporting',
          description: 'Comprehensive analytics setup and regular reporting to track performance and identify growth opportunities.',
          icon: 'fas fa-chart-bar',
          link: '/services/analytics-reporting/'
        }
      ]
    }
  },
  
  about: {
    title: 'About Hanzel Lacida | PPC Expert & Digital Marketing Strategist',
    description: 'Learn about Hanzel Lacida, former Senior Account Strategist at Google, and his expertise in PPC management, SEM strategies, and business consulting.',
    heroProps: {
      title: 'About Hanzel Lacida',
      subtitle: 'Former Senior Account Strategist at Google with expertise in PPC management, SEM strategies, and business consulting. Also a talented composer and music producer.',
      primaryButton: { href: '/contact/', text: 'Work With Me' },
      secondaryButton: { href: '/case-studies/', text: 'View Case Studies' },
      imageSrc: 'images/banner1.png',
      imageAlt: 'Hanzel Lacida'
    },
    aboutProps: {
      title: 'My Story',
      subtitle: 'From Google to entrepreneurship: How I help businesses scale through strategic digital marketing.',
      heading: 'Former Google Senior Account Strategist',
      description: 'I spent three years at Google (2020-2023) as a Senior Account Strategist, managing millions in ad spend and helping businesses of all sizes optimize their digital marketing efforts. This experience gave me deep insights into what works and what doesn\'t in the digital marketing landscape.',
      primaryLink: { href: '/case-studies/', text: 'View My Work →' },
      secondaryLink: { href: 'https://linktr.ee/hanslacida', text: 'Connect With Me →' },
      imageSrc: 'images/banner1.png',
      imageAlt: 'Hanzel Lacida at Google'
    }
  },
  
  contact: {
    title: 'Contact Hanzel Lacida | Get Started with Expert PPC Management',
    description: 'Ready to scale your business? Contact Hanzel Lacida for expert PPC management, SEM strategies, and business consulting services.',
    heroProps: {
      title: 'Let\'s Start a Conversation',
      subtitle: 'Ready to scale your business? Let\'s discuss how I can help you achieve your marketing goals with expert PPC management and digital marketing strategies.',
      primaryButton: { href: '#contact', text: 'Send Message' },
      secondaryButton: { href: '/free-marketing-audit-call/', text: 'Free Audit Call' },
      imageSrc: 'images/banner.png',
      imageAlt: 'Contact Hanzel Lacida'
    },
    contactProps: {
      title: 'Get In Touch',
      subtitle: 'Whether you\'re looking to optimize your Google Ads campaigns, develop a comprehensive SEM strategy, or need strategic business consulting, I\'m here to help you achieve your goals.',
      formId: 'contact-form'
    }
  }
};

// Function to build a page
export function buildPage(pageType, customProps = {}) {
  const config = pageConfigs[pageType];
  if (!config) {
    throw new Error(`Unknown page type: ${pageType}`);
  }
  
  // Merge default config with custom props
  const mergedConfig = {
    ...config,
    heroProps: { ...config.heroProps, ...customProps.heroProps },
    aboutProps: { ...config.aboutProps, ...customProps.aboutProps },
    servicesProps: { ...config.servicesProps, ...customProps.servicesProps },
    contactProps: { ...config.contactProps, ...customProps.contactProps }
  };
  
  return createPage(mergedConfig);
}

// Function to create a custom page
export function createCustomPage(config) {
  return createPage(config);
} 