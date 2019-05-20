new Vue({
    el: '#app',
    data: {
        punchline: 'Les nouvelles technologies sont là pour nous faciliter la vie',
        headings: {
            skills: 'Compétences',
            education: 'Formations',
            experiences: 'Expériences',
            portfolio: 'Projets personnels',
            hobbies: 'Loisirs'
        },
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
        ],
        skills: [
            {
                category: 'Langages & BDD',
                listOfSkills: [
                    {
                        name: 'Javascript ES5, ES6',
                        value: 40
                    },
                    {
                        name: 'CSS3',
                        value: 35
                    }
                ]
            }
        ]
    },
    methods: {
        networkClass: function(index) {
            return 'fa-' + this.social[index].network
        }
    }
})