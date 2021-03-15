export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '604f35dce81318cefc4bbe01',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-yinix2wo',
                  apiId: '21ceb4cd-2cc4-4257-9ce5-eedadf5eb808'
                },
                {
                  buildHookId: '604f35dc53456e90e584b37f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6woy7o32',
                  apiId: '0ea24e95-c20a-4a94-aa1e-e3257998255f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hannesheyden/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6woy7o32.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
