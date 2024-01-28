export type menuType = {
    id: number,
    name: string,
    translate?: string,
    pathnext: string,
    pathexpo?: string,
    icon: string,
    icontype: string,
    open?: boolean,
    label?: Object,
    submenu?: menuType[]
  }
  

export const Menu: menuType[] = [
    {
        id: 20,
        name: 'Legal',
        icon: 'angle-up',
        translate: 'sidebar.nav.Legal',
        icontype: 'FontAwesome5',
        open: true,
        pathnext: '/legal',
        pathexpo: 'legal/index',
    },
    {
        id: 19,
        name: 'Restaurant',
        icon: 'angle-up',
        translate: 'sidebar.nav.Restaurant',
        icontype: 'FontAwesome5',
        open: true,
        pathnext: '/restaurants',
        pathexpo: 'restaurants/index',
    },
    {
        
        id: 0,
        name: 'Database',
        translate: 'sidebar.nav.Database',
        pathnext: '/database',
        label: { value: 12, color: 'success' },
        icontype: 'FontAwesome5',
        icon: 'layer-group',
        open: true,
        pathexpo: 'database/index',
        submenu: [
            {
                id: 1,
                name: 'Specialists',
                pathnext: '/database/specialist',
                icontype: 'FontAwesome5',
                icon: 'layer-group',
                pathexpo: 'database/specialist/index',                       
            },
            {
                id: 2,
                name: 'Products',
                pathnext: '/database/product',
                pathexpo: 'database/product/index',
                icontype: 'FontAwesome5',
                icon: 'layer-group'            
            },
            {
                id: 3,
                name: 'Organizations',
                pathnext: '/database/organization',
                pathexpo: 'database/organization/index',
                icontype: 'FontAwesome5',
                icon: 'layer-group'            
            },
            {
                id: 4,
                name: 'Problems',
                pathnext: '/database/problem',
                pathexpo: 'database/problem/index',
                icontype: 'FontAwesome5',
                icon: 'layer-group'            
            },
            {
                id: 5,
                name: 'Roles',
                pathnext: '/database/role',
                pathexpo: 'database/role/index',
                icontype: 'FontAwesome5',
                icon: 'layer-group'            
            },
            {
                id: 6,
                name: 'Users',
                pathnext: '/database/user',
                pathexpo: 'database/user/index',
                icontype: 'FontAwesome5',
                icon: 'layer-group'            
            },
            {
                id: 7,
                name: 'Secret questions',
                pathnext: '/database/secret-question',
                pathexpo: 'database/secret-question/index',
                icontype: 'FontAwesome5',
                icon: 'layer-group'            
            },
            {
                id: 8,
                name: 'Orders',
                pathnext: '/database/order',
                pathexpo: 'database/order/index',
                icontype: 'FontAwesome5',
                icon: 'layer-group'            
            },
            {
                id: 9,
                name: 'Visitors',
                pathnext: '/database/visitor',
                pathexpo: 'database/visitor/index',
                icontype: 'FontAwesome5',
                icon: 'layer-group'            
            },
            {
                id: 10,
                name: 'Diagnostics processing statuses',
                pathnext: '/database/diagnostics-processing-status',
                pathexpo: 'database/diagnostics-processing-status/index',
                icontype: 'FontAwesome5',
                icon: 'layer-group'            
            },
            {
                id: 11,
                name: 'Testing processing statuses',
                pathnext: '/database/testing-processing-status',
                pathexpo: 'database/testing/processing-status/index',
                icontype: 'FontAwesome5',
                icon: 'layer-group'            
            },
            {
                id: 12,
                name: 'Event logs',
                pathnext: '/database/event-log',
                pathexpo: 'database/event-log/index',
                icontype: 'FontAwesome5',
                icon: 'layer-group'            
            },
        ]
    },
    {
        id: 1,
        name: 'Trouble',
        translate: 'sidebar.nav.ProblemSolving',
        label: { value: 5, color: 'success' },
        pathnext: "/trouble",
        pathexpo: 'trouble/index',
        icon: 'adjust',
        icontype: 'FontAwesome5',
        open: true,
        submenu: [
            {
                id: 1,
                name: 'Catalogue',
                pathnext: '/trouble/cat',
                pathexpo: 'trouble/cat/index',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            },
            {
                id: 2,
                name: 'Comments',
                pathnext: '/trouble/comment',
                pathexpo: 'trouble/comment/index',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            },
            {
                id: 3,
                name: 'Create',
                pathnext: '/trouble/create',
                pathexpo: 'trouble/create/index',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            },
            {
                id: 4,
                name: 'Delete',
                pathnext: '/trouble/delete',
                pathexpo: 'trouble/delete/index',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            },
            {
                id: 5,
                name: 'Knowledge base',
                pathnext: '/trouble/kb',
                pathexpo: 'trouble/kb/index',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            },
            {
                id: 6,
                name: 'My',
                pathnext: '/trouble/my',
                pathexpo: 'trouble/my/index',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            },
            {
                id: 7,
                name: 'Recommend',
                pathnext: '/trouble/recommend',
                pathexpo: 'trouble/recommend/index',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            },
            {
                id: 8,
                name: 'Same',
                pathnext: '/trouble/same',
                pathexpo: 'trouble/same/index',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            },
            {
                id: 9,
                name: 'Similar',
                pathnext: '/trouble/similar',
                pathexpo: 'trouble/similar/index',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            },
            {
                id: 10,
                name: 'Solution',
                pathnext: '/trouble/solution',
                pathexpo: 'trouble/solution/index',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            },
            {
                id: 11,
                name: 'Solve',
                pathnext: '/trouble/solve',
                pathexpo: 'trouble/solve/index',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            },
            {
                id: 12,
                name: 'View',
                pathnext: '/trouble/view',
                pathexpo: 'trouble/view/index',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            }
        ]        
    },
    {
        id: 2,
        name: 'Classifiers',
        translate: 'sidebar.nav.Classifiers',
        label: { value: 5, color: 'success' },
        icontype: 'FontAwesome5',
        pathnext: "/classifiers",
        pathexpo: 'classifiers/index',
        icon: 'adjust',
        open: true,
        submenu: [
            {
                id: 1,
                name: 'Organization activities',
                pathnext: '/classifiers/org-activities',
                icontype: 'FontAwesome5',
                pathexpo: 'classifiers/org-activities/index',
                icon: 'adjust'            
            },
            {
                id: 2,
                name: 'Locations',
                pathnext: '/classifiers/locations',
                pathexpo: 'classifiers/locations/index',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            },
            {
                id: 3,
                name: 'Diagnostics directions',
                pathnext: '/classifiers/diagnostics-directions',
                pathexpo: 'classifiers/diagnostics-direction/index',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            },
            {
                id: 4,
                name: 'Testing directions',
                pathnext: '/classifiers/test-directions',
                pathexpo: 'classifiers/test-direction/index',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            }
        ]        
    },
    {
        id: 3,
        name: 'Chat',
        icon: 'comments',
        translate: 'sidebar.nav.Chat',
        icontype: 'FontAwesome5',
        open: true,
        pathnext: '/chat',
        pathexpo: 'chat/index',
    },
    {
        id: 4,
        name: 'Diagnostics',
        icon: 'share-square',
        translate: 'sidebar.nav.Diagnostics',
        icontype: 'FontAwesome5',
        open: true,
        pathnext: '/diagnostics',
    },
    {
        id: 5,
        name: 'Learning',
        icon: 'angellist',
        translate: 'sidebar.nav.Learning',
        icontype: 'FontAwesome5',
        open: true,
        pathnext: '/learning',
    },
    {
        id: 6,
        name: 'Teaching',
        icon: 'desktop',
        translate: 'sidebar.nav.Teaching',
        icontype: 'FontAwesome5',
        open: true,
        pathnext: '/teaching',
    },
    {
        id: 7,
        name: 'Testing',
        icon: 'paper-plane',
        translate: 'sidebar.nav.Testing',
        icontype: 'FontAwesome5',
        open: true,
        pathnext: '/testing',
    },
    {
        id: 8,
        name: 'Exchange',
        icon: 'battery-empty',
        translate: 'sidebar.nav.Exchange',
        pathexpo: 'exchange/index',
        icontype: 'FontAwesome5',
        open: true,
        pathnext: '/exchange',
    },
    {
        id: 9,
        name: 'Directories',
        icon: 'calendar',
        translate: 'sidebar.nav.Directories',
        icontype: 'FontAwesome5',
        open: true,
        pathnext: '/directory',
        pathexpo: 'directory/index',
    },
    {
        id: 10,
        name: 'Search',
        icon: 'search',
        translate: 'sidebar.nav.Search',
        icontype: 'FontAwesome5',
        open: true,
        pathnext: '/search',
        pathexpo: 'search/index',
    },
    {
        id: 11,
        name: 'News',
        icon: 'file',
        translate: 'sidebar.nav.News',
        icontype: 'FontAwesome5',
        open: true,
        pathnext: '/news',
        pathexpo: 'news/index',
    },
    {
        id: 12,
        name: 'Translation',
        icon: 'plus',
        translate: 'sidebar.nav.Translation',
        icontype: 'FontAwesome5',
        open: true,
        pathnext: '/translation',
        pathexpo: 'translation/index',
    },
    {
        id: 13,
        name: 'Promo',
        icon: 'percent',
        translate: 'sidebar.nav.PromoCode',
        icontype: 'FontAwesome5',
        open: true,
        pathnext: '/promo',
        pathexpo: 'promo/index',
    },
    {
        id: 14,
        name: 'About',
        icon: 'map',
        translate: 'sidebar.nav.About',
        icontype: 'FontAwesome5',
        open: true,
        pathnext: '/about',
        pathexpo: 'about/index',
    },
    {
        id: 15,
        name: 'Help',
        icon: 'question',
        translate: 'sidebar.nav.Chat',
        icontype: 'FontAwesome5',
        open: true,
        pathnext: '/help',
        pathexpo: 'help',
    },
    {
        id: 16,
        name: 'Login',
        icon: 'angle-right',
        translate: 'sidebar.nav.Login',
        icontype: 'FontAwesome5',
        open: true,
        pathnext: '/login',
        pathexpo: 'login/index',
    },
    {
        id: 17,
        name: 'Register',
        icon: 'angle-left',
        translate: 'sidebar.nav.Register',
        icontype: 'FontAwesome5',
        open: true,
        pathnext: '/register',
        pathexpo: 'register/index',
    },
    {
        id: 18,
        name: 'Recover',
        icon: 'angle-up',
        translate: 'sidebar.nav.Recover',
        icontype: 'FontAwesome5',
        open: true,
        pathnext: '/recover',
        pathexpo: 'recover/index',
    },

];


