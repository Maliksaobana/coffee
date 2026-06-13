interface navArray {
    label: string;
    link: string;
}
interface testimonials {
    id: string;
    name: string;
    comment: string;
    review: string;
    profileImg: string;
    tag: string;
}

export const navigationArray: navArray[] = [
    {
        label: 'home',
        link: 'home',
    },
    {
        label: 'menu',
        link: 'menu',
    },
    {
        label: 'gallery',
        link: 'gallery',
    },
    {
        label: 'reviews',
        link: 'reviews',
    },
    {
        label: 'about us',
        link: 'about',
    }
]

export const userComments: Array<testimonials> = [
    {
        id: 'peter paul',
        name: 'peter paul',
        tag: 'irish town',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quibusdam recusandae sint tempora tenetur velit voluptate voluptates. Ea, eveniet!',
        review: '4.5',
        profileImg: '../../src/assets/userImages/user_1.jpg'
    },
    {
        id: 'sandra blake',
        name: 'sandra blake',
        tag: 'london, uk',
        comment: 'word',
        review: '4',
        profileImg: '../../src/assets/userImages/user_2.jpg'
    }
]