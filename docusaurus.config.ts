import{themes as prismThemes} from 'prism-react-renderer';
import type{Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config : Config = {
    title : 'Sunny\'s Tech Blog',
    tagline : 'Personal Tech Blog & Portfolio',
    favicon : 'img/favicon.ico',

    // Set the production url of your site here
    url : 'https://your-username.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    baseUrl : '/',

    // GitHub pages deployment config
    organizationName : 'your-username',      // Usually your GitHub org/user name.
    projectName : 'your-username.github.io', // Usually your repo name.
    deploymentBranch : 'gh-pages',
    trailingSlash : false,

    onBrokenLinks : 'throw',
    onBrokenMarkdownLinks : 'warn',

    i18n : {
        defaultLocale : 'en',
        locales : ['en'],
    },

    presets : [
        [
            'classic',
            {
                docs : {
                    sidebarPath : './sidebars.ts',
                    routeBasePath : '/notes', // Change docs route to notes
                },
                blog : {
                    showReadingTime : true,
                    blogSidebarCount : 'ALL',
                    blogSidebarTitle : 'All Posts',
                },
                theme : {
                    customCss : './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig : {
        navbar : {
            title : '',
            hideOnScroll : false,
            items : [
                {
                    type : 'docSidebar',
                    sidebarId : 'tutorialSidebar',
                    position : 'left',
                    label : 'Notes',
                },
                {to : '/blog', label : 'Blogs', position : 'left'},
                {to : '/about', label : 'About', position : 'left'},
                {to : '/archives', label : 'Archives', position : 'left'},
                {
                    href : 'https://github.com/your-username',
                    label : 'GitHub',
                    position : 'right',
                },
            ],
        },
        footer : {
            style : 'dark',
            links : [
                {
                    title : 'Content',
                    items : [
                        {
                            label : 'About',
                            to : '/about',
                        },
                        {
                            label : 'Blogs',
                            to : '/blog',
                        },
                        {
                            label : 'Notes',
                            to : '/notes',
                        },
                    ],
                },
                {
                    title : 'Categories',
                    items : [
                        {
                            label : 'Systems',
                            to : '/blog/tags/systems',
                        },
                        {
                            label : 'AI',
                            to : '/blog/tags/ai',
                        },
                        {
                            label : 'Robot',
                            to : '/blog/tags/robot',
                        },
                    ],
                },
                {
                    title : 'Connect',
                    items : [
                        {
                            label : 'GitHub',
                            href : 'https://github.com/your-username',
                        },
                    ],
                },
            ],
            copyright : `Copyright © ${new Date().getFullYear()} Sunny's Tech Blog.`,
        },
        prism : {
            theme : prismThemes.github,
            darkTheme : prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;