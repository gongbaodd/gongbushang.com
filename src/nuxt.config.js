const isDev = process.env.NODE_ENV !== 'production';
const introduction = {
    author: [
        '宫健',
        '宫不上',
        'gongbaodd',
        'MiaTakeshi',
        'gongbaodd@qq.com',
        'gongbaodd@live.cn',
        'gongbaodd@gmail.com'
    ],
    title: {
        chs: [
            'Web前端开发工程师',
            '扰民的口琴手',
            '手残级ukulele爱好者',
            '随手画画的泥石流',
            '博物馆爱好者',
            '滑板上下班',
        ],
        eng: [
            'Front-end developer in web.',
            'Harmonica Amature.',
            'Ukulele Amature.',
            'Schetch everywhere.',
            'Museum lover.',
            'Skateboarding to work.'
        ]
    },
    topic: {
        chs: [
            'TypeScript更新了',
            '有一篇简单好学的BD谱',
            '又有了新的展览',
            '网上有了新的GraphQL文章',
            '有人分享了Rust在Web应用前景',
            '有好看的设计稿',
            '又有新的播客出现了（ 最好和开发有关）',
            'ArchLinux'
        ],
        eng: [
            'There \'s an update in TypeScript.',
            'Good Harmonica tabs to learn.',
            'New shows in a museum,',
            'Some news about graphQL.',
            'Rust can do more in web development.',
            'A new design on dribbble.',
            'A new podcast(better be dev - related).',
            'ArchLinux',
        ]
    }
};

const metaAuthor = introduction.author.join(',');
const metaTopic = introduction.topic.chs.concat(
    introduction.topic.eng
).join(',');
const metaSum = introduction.title.chs.concat(
    introduction.title.eng
).join(',');

const config = {
    mode: 'spa',
    srcDir: './src/client',
    /*
     ** Headers of the page
     */
    head: {
        title: '宫不上书',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui'
            },
            {
                hid: 'description',
                name: 'description',
                content: '宫不上的诗歌，宫不上的远方，宫不上的年华'
            },
            {
                name: 'summary',
                content: metaSum,
            },
            {
                name: 'author',
                content: metaAuthor,
            },
            {
                name: 'topic',
                content: metaTopic,
            },
            {
                name: 'og:email',
                content: 'gongbaodd@qq.com'
            },
            {
                name: 'og:type',
                content: metaTopic,
            },
            {
                name: 'og:phone_number',
                content: '+86-13810547993'
            },

        ],
        link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: '/static/favicon.ico'
            },
            {
                rel: isDev ? 'preload' : 'stylesheet',
                as: 'style',
                href: 'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css',
                onload: isDev ? 'rel="stylesheet"' : '',
            }
        ]
    },
    /*
     ** Customize the progress bar color
     */
    loading: {
        color: '#304FFE'
    },
    /*
     ** Build configuration
     */
    build: {},
    css: [
        '~/assets/material_icons.css',
        '~/assets/style.css'
    ],
    modules: [
        [
            'nuxt-typescript'
        ],
        [
            '@nuxtjs/vuetify',
            {
                materialIcons: false,
                css: true,
            }
        ],
        [
            '@nuxtjs/apollo',
            {
                clientConfigs: {
                    default: {
                        httpEndpoint: '/graphql',
                    }
                }
            }
        ]
    ],
    introduction,
};

module.exports = config;