export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      // login
      {
        path: '/login',
        component: './User/Login',
        routes: [
          { path: '/login', name: 'login', }
        ]
      },
      // app
      {
        path: '/',
        component: '../layouts/BasicLayout',
        Routes: ['src/pages/Authorized'],
        routes: [
          { path: '/' },
          //
          {
            path: '/generator',
            icon: 'export',
            name: 'generator',
            routes: [
              {
                path: '/generator/generator-list',
                name: 'generatorList',
                component: './Generator/GeneratorList',
              },
              {
                path: '/generator/generator-ds-form',
                name: 'generatorDsForm',
                component: './Generator/GeneratorDsForm',
              },
              {
                path: '/generator/generator-form',
                name: 'generatorForm',
                component: './Generator/GeneratorForm',
              },
            ],
          },
          {
            path: '/config',
            icon: 'environment',
            name: 'config',
            routes: [
              {
                path: '/config/config-list',
                name: 'configList',
                component: './Config/ConfigList',
              },
              {
                path: '/config/config-form',
                name: 'configForm',
                component: './Config/ConfigForm',
                hideInMenu: true,
              },
              {
                path: '/config/config-form/:id',
                name: 'configForm',
                component: './Config/ConfigForm',
                hideInMenu: true,
              },
              {
                path: '/config/config-form/:duplicate/:id',
                name: 'configForm',
                component: './Config/ConfigForm',
                hideInMenu: true,
              },
              {
                path: '/config/config-profile/:id',
                name: 'configProfile',
                component: './Config/ConfigProfile',
                hideInMenu: true,
              },
            ],
          },
          {
            path: '/template',
            icon: 'copy',
            name: 'template',
            routes: [
              {
                path: '/template/template-list',
                name: 'templateList',
                component: './Template/TemplateList',
              },
              {
                path: '/template/template-form',
                name: 'templateForm',
                component: './Template/TemplateForm',
                hideInMenu: true,
              },
              {
                path: '/template/template-form/:id',
                name: 'templateForm',
                component: './Template/TemplateForm',
                hideInMenu: true,
              },
              {
                path: '/template/template-form/:duplicate/:id',
                name: 'templateForm',
                component: './Template/TemplateForm',
                hideInMenu: true,
              },
              {
                path: '/template/template-profile/:id',
                name: 'templateProfile',
                component: './Template/TemplateProfile',
                hideInMenu: true,
              },
            ],
          },
          // {
          //   name: 'exception',
          //   icon: 'warning',
          //   path: '/exception',
          //   routes: [
          //     // exception
          //     {
          //       path: '/exception/403',
          //       name: 'not-permission',
          //       component: './Exception/403',
          //     },
          //     {
          //       path: '/exception/404',
          //       name: 'not-find',
          //       component: './Exception/404',
          //     },
          //     {
          //       path: '/exception/500',
          //       name: 'server-error',
          //       component: './Exception/500',
          //     },
          //   ],
          // },
        ],
      },
    ]
  }
];
