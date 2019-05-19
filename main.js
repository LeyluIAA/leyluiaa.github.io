new Vue({
    el: '#app',
    data: {
        punchline: 'Les nouvelles technologies sont là pour nous faciliter la vie',
        basics: {
            name: 'Florent Demeulenaere',
            occupation: 'Développeur fullstack',
            mail: 'florent.demeulenaere@gmail.com',
            address: 'Métropole Lilloise',
            phone: '0120464748'
        },
        social: [
            {
                network: 'linkedin',
                link: 'https://www.linkedin.com/in/florent-demeulenaere-b6b7ba63/'
            },
            {
                network: 'facebook',
                link: ''
            },
            {
                network: 'twitter',
                link: 'https://twitter.com/leyluiaa'
            },
            {
                network: 'github',
                link: 'https://github.com/LeyluIAA'
            },
            {
                network: 'codepen',
                link: ''
            }
        ]
    },
    methods: {
        networkClass: function(index) {
            return 'fa-' + this.social[index].network
        }
    }
})