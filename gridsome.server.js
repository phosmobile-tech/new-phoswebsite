// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addContentType }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  })
}

// const works = require(data in './src/data/data.json')
// WORK.JSON FILE
const posts = require('./src/data/work.json')

module.exports = function (api) {
  api.loadSource(store => {
    const contentType = store.addContentType({
      typeName: 'DataWork'
    })

    for (const item of posts) {
      contentType.addNode({
        id: item.id,
        title: item.title,
        path: item.path,
        img: item.img,
        fields: {
          content: item.content
        }
      })
    }
  })
}


// DATA.JSON FILE
// const product = require('./src/data/product.json')

// module.exports = function (api) {
//   api.loadSource(store => {
//     const contentType = store.addContentType({
//       typeName: 'Post'
//     })

//     for (const item of product) {
//       contentType.addNode({
//         id: item.id,
//         title: item.title,
//         path: item.path,
//         content: item.content
//       })
//     }
//   })
// }

// module.exports = function (api) {
//   api.loadSource(store => {
//     const contentType = store.addContentType({
//       typeName: 'DataWork',
//       route: '/works/:id'
//     })

//     for (const item of works) {
//       contentType.addNode({
//         id: work.id,
//         title: work.title,
//         path: '/works/'+work.slug,
//         fields: {
//           content: work.content
//         }
//       })
//     }
//   })
// }
