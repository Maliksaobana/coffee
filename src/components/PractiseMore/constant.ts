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

interface galleryInfo {
    id: string;
    summary: string;
    description: string;
    price: string;
    imageUrl: string;
    rating: number;
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

export const navigationArrayDevice: navArray[] = [
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
    },
    {
        label: 'contact us',
        link: 'contact',
    }
]

export const userComments: Array<testimonials> = [
    {
        id: 'peter paul',
        name: 'peter paul',
        tag: 'irish town',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quibusdam recusandae sint tempora tenetur velit voluptate voluptates. Ea, eveniet!',
        review: '5',
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

export const GalleryInfo: Array<galleryInfo> = [
    {
        id: 'coffee with cupcake',
        summary: 'coffee with cupcake',
        description: 'Espresso with steamed milk. Finished with' +
            ' a delicate kiss of foam, creating a beautifully balanced, milky drink',
        price: '45',
        rating: 90,
        imageUrl: '../../src/assets/coffeeImages/coffee_with_cupcake.jpg',
    },
    {
        id: 'coffee with chocolatebread',
        summary: 'coffee with chocolatebread',
        description: 'Espresso with steamed milk. Finished with' +
            ' a delicate kiss of foam, creating a beautifully balanced, milky drink',
        price: '90',
        rating: 90,
        imageUrl: '../../src/assets/coffeeImages/coffee_with_chocolatebread.jpg',
    },
    {
        id: 'visualruth pan de jamon',
        summary: 'visualruth pan de jamon',
        description: 'Espresso with steamed milk. Finished with' +
            ' a delicate kiss of foam, creating a beautifully balanced, milky drink',
        price: '90',
        rating: 900,
        imageUrl: '../../src/assets/coffeeImages/visualruth-pan-de-jamon.jpg',
    },
    {
        id: 'syaibatulhamdi breakfast',
        summary: 'syaibatulhamdi breakfast',
        description: 'Espresso with steamed milk. Finished with' +
            ' a delicate kiss of foam, creating a beautifully balanced, milky drink',
        price: '90',
        rating: 90,
        imageUrl: '../../src/assets/coffeeImages/syaibatulhamdi-breakfast.jpg',
    },
    {
        id: 'kingapl bread',
        summary: 'kingapl bread',
        description: 'Espresso with steamed milk. Finished with' +
            ' a delicate kiss of foam, creating a beautifully balanced, milky drink',
        price: '90',
        rating: 90,
        imageUrl: '../../src/assets/coffeeImages/kingapl-bread.jpg',
    },
]

export const OpeningHours: { id: string, title: string, hours: string }[] = [
    {
        id: 'mon-thurs',
        title: 'Monday - Thursday',
        hours: '7am - 5pm'
    },
    {
        id: 'fri',
        title: 'Friday',
        hours: '7am - 4pm'
    },
    {
        id: 'sat-sun',
        title: 'Saturday - Sunday',
        hours: '9am - 5pm'
    }
]