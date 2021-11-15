module.exports = {
    css: {
        // https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
        loaderOptions: {
            scss: {
                additionalData: `
                    @import "~@/assets/scss/index.scss";
                `,
            },
        },
    },
}