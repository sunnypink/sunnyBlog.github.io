import type{SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars : SidebarsConfig = {
    tutorialSidebar : [
        'intro',
        {
            type : 'category',
            label : 'Tips',
            items : ['tips/getting-started'],
        },
        {
            type : 'category',
            label : 'Systems',
            items : ['systems/introduction'],
        },
        {
            type : 'category',
            label : 'AI',
            items : ['ai/introduction'],
        },
        {
            type : 'category',
            label : 'Robotics',
            items : ['robotics/introduction'],
        },
    ],
};

export default sidebars;