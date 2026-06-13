type NavItem = {
    id: string,
    page: string,
}

interface NavItems {
    navigation: NavItem [] | null;
}

const navItems: NavItems = {
    navigation: [
        {
            id: 'home',
            page: 'home',
        },
        {
            id: 'template',
            page: 'template',
        },
        {
            id: 'contact us',
            page: 'contact us',
        },
        {
            id: 'about',
            page: 'about',
        }
    ]
}

export const { navigation } = navItems;