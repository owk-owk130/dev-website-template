const baseConfig = {
    tmp: '.tmp',
    dev: 'dev',
    dist: 'dist',
    assets: 'dev/src'
}

module.exports = {
    dir: baseConfig,

    copy: {
        dir: [
            baseConfig.assets + '/**/images/**/*'
        ],
        build_dir: [
            baseConfig.assets + '/**/images/**/*'
        ]
    },
    ejs: {
        src: [baseConfig.dev + '/ejs/**/*.ejs', '!' + baseConfig.dev + '/ejs/**/_*.ejs']
    },
    stylus: {
        src: [baseConfig.assets + '/**/css/**/*.styl', '!' + baseConfig.dev + '/**/css/**/_*.styl']
    },
    imagemin: {
        src: [baseConfig.assets + '/**/images/**']
    },
    watch: {
        dir: [
            baseConfig.dev + '/**/*',
            '!' + baseConfig.dev + '/gulp/**/*',
            '!' + baseConfig.dev + '/ejs/**/*',
        ],
        ejs: baseConfig.dev + '/ejs/**/*.ejs',
        js: baseConfig.assets + '/**/js/**/*'

    }


}
