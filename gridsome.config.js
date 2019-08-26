// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// const data = require('data')


module.exports = {
  siteName: 'PhosMobile',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        // route: 'work/:slug',
        typeName: 'Post',
        path: 'works/work-*',
        remark: {
          // remark options
        }
      }
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  }
}



// module.exports = function (json) {
//   json.loadSource(async store => {
//     const { data } = await json.get('works')

//     const contentType = store.addContentType({
//       typeName: 'Post',
//       route: 'work/:slug'  // add this for one dynamic route...
//     })

//     for (const work of data) {
//       contentType.addNode({
//         id: work.id,
//         title: work.title,
//         path: `works/${work.slug}` //... or this for a route per item
//       })
//     }
//   })
// }