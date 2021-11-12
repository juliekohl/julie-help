module.exports = {
    css: {
        // https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/assets/scss/index.scss";
                `,
            },
        },
    },
}