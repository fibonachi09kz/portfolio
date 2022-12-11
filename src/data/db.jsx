import avatar from '../assets/img/avatar.jpg';

export const projectList = [
    {
        id: 1,
        name: 'GitHub Repos Finder',
        title: 'Find github repo with account name',
        categories: [
            {id:1, name: 'html5'},
            {id:2, name: 'typescript'},
            {id:3, name: 'next'},
            {id:4, name: 'bootstrap'}
        ],
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://i.ibb.co/tzV846X/1.png',
    },
    {
        id: 2,
        name: 'Jane Cooper',
        title: 'Paradigm Representative',
        categories: [
            {id:1, name: 'react'},
            {id:2, name: 'typescript'},
            {id:3, name: 'spline'},
            {id:4, name: 'bootstrap'}
        ],
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://i.ibb.co/tzV846X/1.png',
    },
    {
        id: 3,
        name: 'Jane Cooper',
        title: 'Paradigm Representative',
        categories: [
            {id:1, name: 'react'},
            {id:2, name: 'css3'},
            {id:3, name: 'tailwind'},
            {id:4, name: 'figma'}
        ],
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://i.ibb.co/tzV846X/1.png',
    },
    {
        id: 4,
        name: 'Jane Cooper',
        title: 'Paradigm Representative',
        categories: [
            {id:1, name: 'react'},
            {id:2, name: 'typescript'},
            {id:3, name: 'redux'},
            {id:4, name: 'bootstrap'}
        ],
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://i.ibb.co/tzV846X/1.png',
    }
]
export const skills = [
    {
        id: 1,
        title: 'HTML5',
        extra: 'Tags, Attributes, W3, Semantic',
        description: '',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1024px-HTML5_Badge.svg.png',
        elems: [
            {
                title: 'Attributes',
                description: 'Class, code, data-, contenteditable...'
            },
            {
                title: 'Elements',
                description: 'Header, footer, div, aside, div, a, link, button...'
            },
            {
                title: 'Miscellaneous',
                description: 'Microdata, viewport, link types...'
            },
            {
                title: 'W3',
                description: 'Newest specification, validators, accessibility'
            },
        ]
    },
    {
        id: 2,
        title: 'CSS3',
        extra: 'Flex, Grid, Animation',
        description: '',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png',
        
    },
    {
        id: 3,
        title: 'JavaScript',
        extra: 'OOP, FP, Algorithm, ES6-12',
        description: '',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
        
    },
    {
        id: 4,
        title: 'TypeScript',
        extra: 'Types, Generics, Interfaces, Decorators',
        description: '',
        imageUrl:
            'https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png',
        
    },
    {
        id: 5,
        title: 'React',
        extra: 'Classes, Hooks, Framer',
        description: '',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
        
    },
    {
        id: 6,
        title: 'Redux',
        extra: 'RTK Query, Reducer, Thunks',
        description: '',
        imageUrl:
            'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
        
    },
    {
        id: 7,
        title: 'Figma',
        extra: 'Prototypes, Canvas, UI Kit',
        description: '',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png',
        
    },
    {
        id: 8,
        title: 'Spline',
        extra: '3D Modeling, Animation',
        description: '',
        imageUrl:
            'https://june-changelog.s3.eu-central-1.amazonaws.com/spline_icon_twitter_removebg_preview_db2832210b.png',
        
    },
    {
        id: 9,
        title: 'Git',
        extra: 'GitHub, GitLab, GitHub Copilot',
        description: '',
        imageUrl:
            'https://img.softline.com/mcf/46f7374595b031b43766defa79847ebe/205975d32898c2059b02/scale-dec-294x294.png',
        
    },
    {
        id: 10,
        title: 'Bootstrap',
        extra: 'UI, Components',
        description: '',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png',
        
    },
    {
        id: 11,
        title: 'Tailwind',
        extra: 'UI, Components',
        description: '',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png',
        
    },
    {
        id: 12,
        title: 'MUI',
        extra: 'UI, Components',
        description: '',
        imageUrl:
            'https://mui.com/static/logo.png',
        
    }
]

export const bioInfo = {
    profile: {
        name: 'Danila',
        surname: 'Aleksin',
        patronymic: 'Sergeevich',
        age: 21,
        birthday: '14.10.2000',
        avatar: avatar,
        address: {
            country: 'Kazakhstan',
            city: 'Karaganda'
        },
    },
    contacts: {
        phone: '+7 (778) 848-19-88',
        email: 'danya09kz@gmail.com',
        telegram: 'Fibonachi09',
        instagram: 'fibonachi',
        github: 'fibonachi09kz',
        whatsapp: '77788481988'
    },
    job: {
        category: 'Web development',
        title: 'Frontend developer',
        relocation: true
    },
    stats: {

    }
}
