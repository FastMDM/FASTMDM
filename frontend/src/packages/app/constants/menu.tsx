export type menuType = {
    id: number,
    name: string,
    translate?: string,
    path: string,
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
        path: '/legal',
    },
    {
        id: 19,
        name: 'Restaurant',
        icon: 'angle-up',
        translate: 'sidebar.nav.Restaurant',
        icontype: 'FontAwesome5',
        open: true,
        path: '/restaurants',
    },
    {
        
        id: 0,
        name: 'Database',
        translate: 'sidebar.nav.Database',
        path: '/database',
        label: { value: 12, color: 'success' },
        icontype: 'FontAwesome5',
        icon: 'layer-group',
        open: true,
        submenu: [
            {
                id: 1,
                name: 'Specialists',
                path: '/database/specialist',
                icontype: 'FontAwesome5',
                icon: 'layer-group'
                       
            },
            {
                id: 2,
                name: 'Products',
                path: '/database/product',
                icontype: 'FontAwesome5',
                icon: 'layer-group'            
            },
            {
                id: 3,
                name: 'Organizations',
                path: '/database/organization',
                icontype: 'FontAwesome5',
                icon: 'layer-group'            
            },
            {
                id: 4,
                name: 'Problems',
                path: '/database/problem',
                icontype: 'FontAwesome5',
                icon: 'layer-group'            
            },
            {
                id: 5,
                name: 'Roles',
                path: '/database/role',
                icontype: 'FontAwesome5',
                icon: 'layer-group'            
            },
            {
                id: 6,
                name: 'Users',
                path: '/database/user',
                icontype: 'FontAwesome5',
                icon: 'layer-group'            
            },
            {
                id: 7,
                name: 'Secret questions',
                path: '/database/secret-question',
                icontype: 'FontAwesome5',
                icon: 'layer-group'            
            },
            {
                id: 8,
                name: 'Orders',
                path: '/database/order',
                icontype: 'FontAwesome5',
                icon: 'layer-group'            
            },
            {
                id: 9,
                name: 'Visitors',
                path: '/database/visitor',
                icontype: 'FontAwesome5',
                icon: 'layer-group'            
            },
            {
                id: 10,
                name: 'Diagnostics processing statuses',
                path: '/database/diagnostics-processing-status',
                icontype: 'FontAwesome5',
                icon: 'layer-group'            
            },
            {
                id: 11,
                name: 'Testing processing statuses',
                path: '/database/testing-processing-status',
                icontype: 'FontAwesome5',
                icon: 'layer-group'            
            },
            {
                id: 12,
                name: 'Event logs',
                path: '/database/event-log',
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
        path: "/trouble",
        icon: 'adjust',
        icontype: 'FontAwesome5',
        open: true,
        submenu: [
            {
                id: 1,
                name: 'Catalogue',
                path: '/trouble/cat',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            },
            {
                id: 2,
                name: 'Comments',
                path: '/trouble/comment',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            },
            {
                id: 3,
                name: 'Create',
                path: '/trouble/create',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            },
            {
                id: 4,
                name: 'Delete',
                path: '/trouble/delete',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            },
            {
                id: 5,
                name: 'Knowledge base',
                path: '/trouble/kb',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            },
            {
                id: 6,
                name: 'My',
                path: '/trouble/my',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            },
            {
                id: 7,
                name: 'Recommend',
                path: '/trouble/recommend',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            },
            {
                id: 8,
                name: 'Same',
                path: '/trouble/same',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            },
            {
                id: 9,
                name: 'Similar',
                path: '/trouble/similar',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            },
            {
                id: 10,
                name: 'Solution',
                path: '/trouble/solution',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            },
            {
                id: 11,
                name: 'Solve',
                path: '/trouble/solve',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            },
            {
                id: 12,
                name: 'View',
                path: '/trouble/view',
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
        path: "/classifiers",
        icon: 'adjust',
        open: true,
        submenu: [
            {
                id: 1,
                name: 'Organization activities',
                path: '/classifiers/org-activities',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            },
            {
                id: 2,
                name: 'Locations',
                path: '/classifiers/locations',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            },
            {
                id: 3,
                name: 'Diagnostics directions',
                path: '/classifiers/diagnostics-directions',
                icontype: 'FontAwesome5',
                icon: 'adjust'            
            },
            {
                id: 4,
                name: 'Testing directions',
                path: '/classifiers/test-directions',
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
        path: '/chat',
    },
    {
        id: 4,
        name: 'Diagnostics',
        icon: 'share-square',
        translate: 'sidebar.nav.Diagnostics',
        icontype: 'FontAwesome5',
        open: true,
        path: '/diagnostics',
    },
    {
        id: 5,
        name: 'Learning',
        icon: 'angellist',
        translate: 'sidebar.nav.Learning',
        icontype: 'FontAwesome5',
        open: true,
        path: '/learning',
    },
    {
        id: 6,
        name: 'Teaching',
        icon: 'desktop',
        translate: 'sidebar.nav.Teaching',
        icontype: 'FontAwesome5',
        open: true,
        path: '/teaching',
    },
    {
        id: 7,
        name: 'Testing',
        icon: 'paper-plane',
        translate: 'sidebar.nav.Testing',
        icontype: 'FontAwesome5',
        open: true,
        path: '/testing',
    },
    {
        id: 8,
        name: 'Exchange',
        icon: 'battery-empty',
        translate: 'sidebar.nav.Exchange',
        icontype: 'FontAwesome5',
        open: true,
        path: '/exchange',
    },
    {
        id: 9,
        name: 'Directories',
        icon: 'calendar',
        translate: 'sidebar.nav.Directories',
        icontype: 'FontAwesome5',
        open: true,
        path: '/directories',
    },
    {
        id: 10,
        name: 'Search',
        icon: 'search',
        translate: 'sidebar.nav.Search',
        icontype: 'FontAwesome5',
        open: true,
        path: '/search',
    },
    {
        id: 11,
        name: 'News',
        icon: 'file',
        translate: 'sidebar.nav.News',
        icontype: 'FontAwesome5',
        open: true,
        path: '/news',
    },
    {
        id: 12,
        name: 'Translation',
        icon: 'plus',
        translate: 'sidebar.nav.Translation',
        icontype: 'FontAwesome5',
        open: true,
        path: '/translation',
    },
    {
        id: 13,
        name: 'Promo',
        icon: 'percent',
        translate: 'sidebar.nav.PromoCode',
        icontype: 'FontAwesome5',
        open: true,
        path: '/promo',
    },
    {
        id: 14,
        name: 'About',
        icon: 'map',
        translate: 'sidebar.nav.About',
        icontype: 'FontAwesome5',
        open: true,
        path: '/about',
    },
    {
        id: 15,
        name: 'Help',
        icon: 'question',
        translate: 'sidebar.nav.Chat',
        icontype: 'FontAwesome5',
        open: true,
        path: '/help',
    },
    {
        id: 16,
        name: 'Login',
        icon: 'angle-right',
        translate: 'sidebar.nav.Login',
        icontype: 'FontAwesome5',
        open: true,
        path: '/login',
    },
    {
        id: 17,
        name: 'Register',
        icon: 'angle-left',
        translate: 'sidebar.nav.Register',
        icontype: 'FontAwesome5',
        open: true,
        path: '/register',
    },
    {
        id: 18,
        name: 'Recover',
        icon: 'angle-up',
        translate: 'sidebar.nav.Recover',
        icontype: 'FontAwesome5',
        open: true,
        path: '/recover',
    },

];


