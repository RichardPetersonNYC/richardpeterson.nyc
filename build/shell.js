module.exports = { 
    download: {
        command: 'theme download'
    },
    deploy: {
        command: 'theme deploy'
    },
    open: {
        command: 'theme open'
    },
    shopify: {
        command: [
            'theme deploy',
            'theme open'
        ].join('&&')
    },
    watch: {
        command: 'theme watch'
    },
    serve: {
        command: 'jekyll serve'
    },
    preview: {
        command: [
            'cd dist',
            'jekyll serve'
        ].join('&&')
    },
}