module.exports = {
    css: {
      loaderOptions: {
        sass: {
              prependData: `@import "~@/public/css/remo-ui.scss"`
              } 
        },
        scss: {
            prependData: `@import "~@/public/css/remo-ui.scss;` 
        },  
    }

}   