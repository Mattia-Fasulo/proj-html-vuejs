import { reactive } from "vue";

export const store = reactive({
    scrollPage: false,
    titleMenuOne: 'About',
    titleMenuTwo: 'Services',
    titleMenuThree: 'Support',
    searchClass: 'a',
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
    ],
    linkMenuSection4: [
        {
            id: 0,
            text: "All",
            url: "#",
            current: true
        },
        {
            id: 1,
            text: "Istitutional",
            url: "#",
            current: false
        },
        {
            id: 3,
            text: "Social",
            url: "#",
            current: false
        },
        {
            id: 4,
            text: "Events",
            url: "#",
            current: false
        },
        {
            id: 5,
            text: "Innovation",
            url: "#",
            current: false
        },
        {
            id: 6,
            text: "Environment",
            url: "#",
            current: false
        },
        {
            id: 7,
            text: "Technology",
            url: "#",
            current: false
        }
    ],
    cardsSection4: [
        {
            categ: 'abc',
            text: "Academic professional program in social media",
            url: "/images/project-1.jpg",
        },
        {
            categ: 'ab',
            text: "President's speech at the annual meeting",
            url: "/images/project-2.jpg",
        },
        {
            categ: 'ac',
            text: "International business trip in Shanghai",
            url: "/images/project-3.jpg",
        },
        {
            categ: 'ac',
            text: "Techonology workshop with education theme",
            url: "/images/project-4.jpg",
        },
        {
            categ: 'abc',
            text: "Donation of clothes and food to the partener NGO",
            url: "/images/project-5.jpg",
        },
        {
            categ: 'ac',
            text: "Confraternization of the procurement team",
            url: "/images/project-6.jpg",
        },

    ]


})