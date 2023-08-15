/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  
    // But you can create a sidebar manually
    
    moduleSidebar: [
      'intro',
      {
        type: 'category',
        label: 'Discovery',
        items: ['Discovery/intro'],
      },
      {
        type: 'category',
        label: 'Planning',
        items: ['Planning/intro', 'Planning/info'],
      },
      {
        type: 'category',
        label: 'Recruiting',
        items: ['Recruiting/intro'],
      },
      {
        type: 'category',
        label: 'Execution',
        items: ['Execution/intro'],
      },
      {
        type: 'category',
        label: 'Growth',
        items: ['Growth/intro'],
      },
    ],
     
  };
  
  module.exports = sidebars;
  