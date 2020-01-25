module.exports = {
  dest       : './public',
  title      : 'Photo Sphere Viewer',
  description: 'A JavaScript library to display Photo Sphere panoramas',
  head       : [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    logo        : '/favicon.png',
    smoothScroll: true,
    sidebarDepth: 3,
    nav         : [
      { text: 'Guide', link: '/getting-started' },
      { text: 'API', link: '/api/' },
      { text: 'Changelog', link: '/changelog' },
      { text: 'GitHub', link: 'https://github.com/mistic100/Photo-Sphere-Viewer' }
    ],
    sidebar     : [
      {
        title       : 'Guide',
        sidebarDepth: 3,
        collapsable : false,
        children    : [
          'getting-started',
          'config',
          'methods-events',
          'navbar',
          'markers',
          'cropped-panorama'
        ]
      }
    ]
  },
  plugins    : [
    ['@vuepress/google-analytics', {
      'ga': 'UA-28192323-3'
    }]
  ]
};
