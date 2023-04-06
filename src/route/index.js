// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',

  salary: '600$ в місяць',

  address: 'м.Київ вул.Садова 10',
}

var footer = {
  social: {
    email: {
      href: 'mailto:dmytro@gmail.com',
      text: 'dmytro@gmail.com',
    },
    phone: {
      href: 'tel:+3800000123',
      text: '+38000000123',
    },
    linkedin: {
      href: ' http',
      text: 'Linkedin',
    },
  },
}

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume| Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
      work on a new project I learn the domain and try to understand the idea of the project. Good team
      player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
      tournament position, goals etc), analyzing by simple mathematics models and preparing probability
      for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },
    footer,
  })
})

// ================================================================

router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume| Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 9,
        },
        {
          name: 'VS Code',
          point: 7,
        },
        {
          name: 'Git',
          point: 10,
          isTop: true,
        },
        {
          name: 'Terminal',
          point: 8,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          isTop: false,
        },
      ],
      hobbies: [
        { name: 'Sports', isMain: false },
        { name: 'Swimming', isMain: true },
        { name: 'Dancing', isMain: true },
      ],
    },
    footer,
  })
})
// ================================================================

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume| Education',
    },

    header,

    main: {
      education: [
        {
          name: 'Запорізький державний медичний університет',
          isEnd: true,
        },
        {
          name: 'Запорізький національний університет',
          isEnd: true,
        },
        {
          name: 'Національний університет "Запорізька політехніка"',
          isEnd: true,
        },
      ],
      certificates: [
        { name: 'Перший', id: 1 },
        { name: 'Другий', id: 2 },
        { name: 'Третій', id: 3 },
      ],
    },

    footer,
  })
})

// ================================================================

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',
    page: {
      title: 'Resume| Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'It Brains',
            url: null,
          },
          duration: {
            from: '10.10.2023',
            to: null,
          },

          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://resume.co.ua/',
              about:
                'Airbnb competitor. High-load application for searching apartments',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML/CSS',
                },
                {
                  name: 'NOde.js',
                },
              ],
              awards: [
                {
                  name: 'asdfagdfhgsfdgh',
                },
                {
                  name: 'React.js',
                },
              ],

              stackAmount: 3,
              awardAmount: 2,
            },
          ],
        },
      ],
    },
    footer,
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
