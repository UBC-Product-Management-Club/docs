/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  
    // But you can create a sidebar manually
    
    moduleSidebar: [
      'intro',
      {
        type: 'category',
        label: 'Discovery',
        items: ['discovery/intro', 'discovery/identify-the-problem-space', 'discovery/understand-the-user', 'discovery/define-and-prioritize', 'discovery/set-product-objectives'],
      },
      {
        type: 'category',
        label: 'Planning',
        items: ['planning/intro', 'planning/define-product-vision', 'planning/product-strategies', 'planning/product-requirements', 'planning/product-roadmap'],
      },
      {
        type: 'category',
        label: 'Recruiting',
        items: ['recruiting/intro', 'recruiting/finding-opportunities', 'recruiting/resume-workshop', 'recruiting/interview-prep'],
      },
      {
        type: 'category',
        label: 'Execution',
        items: ['execution/intro', 'execution/development-methodologies', 'execution/stakeholder-management', 'execution/mvp', 'execution/product-launch'],
      },
      {
        type: 'category',
        label: 'Growth',
        items: ['growth/intro', 'growth/opportunity-identification', 'growth/understand-user-needs', 'growth/product-enhancements', 'growth/manage-growth'],
      },
    ],
     
  };
  
  module.exports = sidebars;
  