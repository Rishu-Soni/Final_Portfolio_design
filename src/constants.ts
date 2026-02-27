import type { Project, NavItem, Stat } from './types';

export const NAV_ITEMS: NavItem[] = [
    { id: 'hero', label: 'Start', color: 'primary' },
    { id: 'about', label: 'About', color: 'secondary' },
    { id: 'projects', label: 'Work', color: 'accent' },
    { id: 'contact', label: 'Contact', color: 'white' },
];

export const STATS: Stat[] = [
    { value: '1+', label: 'Years Exp.', color: 'primary' },
    { value: '5+', label: 'Projects', color: 'secondary' },
    { value: '12+', label: 'Tech Stacks', color: 'accent' },
];

export const MARQUEE_TAGS_ROW_1 = [
    { name: 'HTML5', gradient: 'from-teal-400 to-blue-500' },
    { name: 'CSS3', gradient: 'from-fuchsia-600 to-rose-600' },
    { name: 'JavaScript', gradient: 'from-violet-600 to-fuchsia-600' },
    { name: 'Tailwind CSS', gradient: 'from-rose-400 to-pink-600' },
    { name: 'React', gradient: 'from-purple-500 to-pink-500' },
    { name: 'nodeJS', gradient: 'from-pink-500 to-orange-500' },
    { name: 'ExpressJS', gradient: 'from-blue-600 to-violet-600' },
    { name: 'API', gradient: 'from-green-400 to-cyan-500' },
    { name: 'Database', gradient: 'from-blue-500 to-indigo-500' },
    { name: 'UI/UX', gradient: 'from-cyan-500 to-blue-600' },
    { name: 'Figma', gradient: 'from-blue-500 to-purple-500' },
    { name: 'Prototyping', gradient: 'from-violet-600 to-fuchsia-600' },
    { name: 'C', gradient: 'from-sky-400 to-blue-600' },
    { name: 'C++', gradient: 'from-teal-300 to-emerald-500' },
    { name: 'Python', gradient: 'from-cyan-400 to-fuchsia-500' },
];

// export const MARQUEE_TAGS_ROW_2 = [
// ];

export const PROJECTS: Project[] = [
    {
        id: '1',
        title: 'Nova Chess',
        description: 'AI-powered 3D Chess engine with real-time analytics and holographic UI.',
        tags: [
            { name: 'NextJS', color: 'primary' },
            { name: 'Socket.io', color: 'secondary' }
        ],
        image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1000&q=80',
        layout: 'large'
    },
    {
        id: '2',
        title: 'NeoCalc',
        description: 'Glassmorphic scientific calculator with history tape.',
        tags: [
            { name: 'React', color: 'accent' }
        ],
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80',
        layout: 'tall'
    },
    {
        id: '3',
        title: 'TaskFlow',
        description: 'Kanban-style task manager with drag-and-drop support and collaborative real-time updates.',
        tags: [
            { name: 'Svelte', color: 'green-400' },
            { name: 'Firebase', color: 'yellow-400' }
        ],
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1000&q=80',
        layout: 'wide'
    },
    {
        id: '4',
        title: 'LockKey',
        description: 'Entropy-based secure password generator.',
        tags: [
            { name: 'Vue 3', color: 'blue-400' }
        ],
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&q=80',
        layout: 'standard'
    }
];
