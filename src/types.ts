export interface Project {
    id: string;
    title: string;
    description: string;
    tags: { name: string; color: string }[];
    image: string;
    link?: string;
    layout: 'standard' | 'large' | 'tall' | 'wide';
}

export interface NavItem {
    id: string;
    label: string;
    color: string;
}

export interface Stat {
    value: string;
    label: string;
    color: 'primary' | 'secondary' | 'accent';
}
