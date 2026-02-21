const config = {
    title: 'neovim-web',
    startPage: 'home',

    files: [
        'home',
        'about'
    ],

    links: [
        { label: 'GitHub', url: 'https://github.com', icon: 'fab fa-github' },
        { label: 'LinkedIn', url: 'https://linkedin.com', icon: 'fab fa-linkedin' },
    ],

    alpha: {
        enabled: true,
        animation: 'cube',
        title: 'neovim',
        titleColor: 'var(--blue)',
        titleAccent: '-web',
        titleAccentColor: 'var(--comment)',
        subtitle: 'A Neovim-themed personal website framework',
        subtitleColor: 'var(--comment)',
        actions: [
            { key: 'h', icon: 'fas fa-home',     label: 'Home',  cmd: 'home' },
            { key: 'a', icon: 'fas fa-user',     label: 'About', cmd: 'about' },
            { key: '?', icon: 'fas fa-terminal', label: 'Help',  cmd: ':help' },
            { key: 's', icon: 'fas fa-database', label: 'SQL',   cmd: ':sql' },
            { key: 'g', icon: 'fas fa-gamepad',  label: 'Snake', cmd: ':snake' },
        ]
    },

    meta: {
        description: 'A Neovim-themed personal website',
        ogImage: 'images/og-image.png',
        favicon: 'images/favicon.svg',
        favicon32: 'images/favicon-32.png',
    },

    analytics: {
        enabled: false,
        googleId: ''
    },

    repo: {
        url: '',
        branch: 'main'
    },

    contact: {
        email: 'hello@example.com'
    },

    blog: {
        enabled: true,
        manifestPath: 'posts/posts.json',
        postsDir: 'posts'
    },

    themes: ['tokyo', 'gruvbox', 'dracula', 'cyberpunk', 'latte'],
    defaultTheme: 'tokyo',
};
