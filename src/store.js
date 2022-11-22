import { reactive } from "vue";

export const store = reactive({

    titleMenuOne: 'About',
    titleMenuTwo: 'Services',
    titleMenuThree: 'Support',
    linkMenuOne: [
        {
            title: 'The Company',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            url: '#'
        },
        {
            title: 'Instituzional',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            url: '#'
        },
        {
            title: 'Social & Events',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            url: '#'
        },
        {
            title: 'Innovation',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            url: '#'
        },
        {
            title: 'Environment',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            url: '#'
        },
        {
            title: 'Technology',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            url: '#'
        }
    ],
    linkMenuTwo: [
        {
            title: 'Audite & Assurance',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            url: '#',
            img: '/svgs/svg-1.svg'
        },
        {
            title: 'Financial Advisory',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            url: '#',
            img: '/svgs/svg-2.svg'
        },
        {
            title: 'Analytics M&A',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            url: '#',
            img: '/svgs/svg-3.svg'
        },
        {
            title: 'Middle Marketing',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            url: '#',
            img: '/svgs/svg-4.svg'
        },
        {
            title: 'Legal Consulting',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            url: '#',
            img: '/svgs/svg-5.svg'
        },
        {
            title: 'Regulatory Risk',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            url: '#',
            img: '/svgs/svg-6.svg'
        }
    ],
    linkMenuThree: [
        {
            title: 'Responsibility',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            url: '#'
        },
        {
            title: 'Terms of Use',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            url: '#'
        },
        {
            title: 'About Cookies',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            url: '#'
        },
        {
            title: 'Privacy Policy',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            url: '#'
        },
        {
            title: 'Accesibility',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            url: '#'
        },
        {
            title: 'Information',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            url: '#'
        }
    ]


})