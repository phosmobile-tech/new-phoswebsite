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

// PRODUCT.JSON FILE
const products = require('./src/data/product.json')
// WORK.JSON FILE
const works = require('./src/data/work.json')
// CAREER.JSON FILE
const careers = require('./src/data/career.json')
// BLOG.JSON FILE
const blogs = require('./src/data/blog.json')


module.exports = function (api) {
  api.loadSource(store => {
    const productsContent = store.addContentType({
      typeName: 'ProductData'
    })
    const worksContent = store.addContentType({
      typeName: 'WorkData'
    })
    const careersContent = store.addContentType({
      typeName: 'CareerData'
    })
    const blogsContent = store.addContentType({
      typeName: 'BlogData'
    })

    for (const product of products) {
      productsContent.addNode({
        id: product.id,
        title: product.title,
        path: product.path,
        fields: {
          content: product.content
        }
      })
    }

    for (const work of works) {
      worksContent.addNode({
        id: work.id,
        title: work.title,
        path: work.path,
        img: work.img,
        fields: {
          content: work.content
        }
      })
    }

    for (const career of careers) {
      careersContent.addNode({
        id: career.id,
        title: career.title,
        path: career.path,
        // img: career.img,
        fields: {
          content: career.content
        }
      })
    }

    for (const blog of blogs) {
      blogsContent.addNode({
        id: blog.id,
        title: blog.title,
        path: blog.path,
        // img: blog.img,
        fields: {
          content: blog.content
        }
      })
    }
  })
}
