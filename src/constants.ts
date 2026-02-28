import type { Project, NavItem, Stat } from './types';
import chessImage from './assets/Chess.png';
import calcImage from './assets/Calculator.png';
import todoImage from './assets/ToDo_List.png';
import glassPortfolioImage from './assets/Glassmorphoism_Portfolio.png';
import simplePortfolioImage from './assets/Simple_Portfolio.png';

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
    { proficiency: 80, name: 'HTML5', gradient: 'from-teal-400 to-blue-500' },
    { proficiency: 85, name: 'CSS3', gradient: 'from-fuchsia-600 to-rose-600' },
    { proficiency: 80, name: 'JavaScript', gradient: 'from-violet-600 to-fuchsia-600' },
    { proficiency: 60, name: 'Tailwind CSS', gradient: 'from-rose-400 to-pink-600' },
    { proficiency: 50, name: 'React', gradient: 'from-purple-500 to-pink-500' },
    { proficiency: 40, name: 'nodeJS', gradient: 'from-pink-500 to-orange-500' },
    { proficiency: 40, name: 'ExpressJS', gradient: 'from-blue-600 to-violet-600' },
    { proficiency: 75, name: 'API', gradient: 'from-green-400 to-cyan-500' },
    { proficiency: 50, name: 'Database', gradient: 'from-blue-500 to-indigo-500' },
    { proficiency: 85, name: 'UI/UX', gradient: 'from-cyan-500 to-blue-600' },
    { proficiency: 40, name: 'Figma', gradient: 'from-blue-500 to-purple-500' },
    { proficiency: 90, name: 'C', gradient: 'from-sky-400 to-blue-600' },
    { proficiency: 80, name: 'C++', gradient: 'from-teal-300 to-emerald-500' },
    { proficiency: 60, name: 'Python', gradient: 'from-cyan-400 to-fuchsia-500' },
    // { proficiency: 35, name: 'Prototyping', gradient: 'from-violet-600 to-fuchsia-600' },
];

const getGradientByName = (name: string) => {
    // Find the object where the name matches
    const tag = MARQUEE_TAGS_ROW_1.find(item => item.name === name);

    // Return the gradient string, or a default fallback if not found
    return tag ? tag.gradient : 'from-gray-400 to-gray-500';
};
export const PROJECTS: Project[] = [
    {
        id: '1',
        title: 'Chess',
        description: 'Fully functional pvp chess game inspired by chess.com ',
        tags: [
            { name: 'HTML5', color: getGradientByName('HTML5') },
            { name: 'CSS3', color: getGradientByName('CSS3') },
            { name: 'JavaScript', color: getGradientByName('JavaScript') }
        ],
        image: chessImage,
        layout: 'standard',
        link: 'https://chess-rishu.rishusoni6393.workers.dev/'
    },
    {
        id: '2',
        title: 'NeoCalc',
        description: 'Neomorphic standard calculator with simplified UI.',
        tags: [
            { name: 'HTML5', color: getGradientByName('HTML5') },
            { name: 'CSS3', color: getGradientByName('CSS3') },
            { name: 'JavaScript', color: getGradientByName('JavaScript') }
        ],
        image: calcImage,
        layout: 'standard',
        link: 'https://calculator-rishu.rishusoni6393.workers.dev/'
    },
    {
        id: '3',
        title: 'TaskFlow',
        description: 'A simple task manager with local browser storage support.',
        tags: [
            { name: 'HTML5', color: getGradientByName('HTML5') },
            { name: 'CSS3', color: getGradientByName('CSS3') },
            { name: 'JavaScript', color: getGradientByName('JavaScript') }
        ],
        image: todoImage,
        layout: 'standard',
        link: 'https://todo-rishu.rishusoni6393.workers.dev/'
    },
    {
        id: '4',
        title: 'GlassPortfolio',
        description: 'A Modern portfolio with glassmorphoism aesthetic and 3D animation effect.',
        tags: [
            { name: 'React', color: getGradientByName('React') },
            { name: 'Tailwind CSS', color: getGradientByName('Tailwind CSS') }
        ],
        image: glassPortfolioImage,
        layout: 'standard',

        link: 'https://portfolio-rishu.pages.dev/'
    },
    {
        id: '5',
        title: 'SimplePortfolio',
        description: 'Minimalistic portfolio website with clean animations and features light/dark mode.',
        tags: [
            { name: 'React', color: getGradientByName('React') },
            { name: 'Tailwind CSS', color: getGradientByName('Tailwind CSS') }
        ],
        image: simplePortfolioImage,
        layout: 'standard',
        link: 'https://pre-portfolio-rishu.rishusoni6393.workers.dev/'
    }
];
