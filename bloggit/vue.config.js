const host = "jaswa-zuch749.csez.zohocorpin.com";    //NO I18N

module.exports={
    assetsDir:"static", // NO I18N
    pages : {
        homepage   : {
            entry: './src/Homepage/main.js',       // NO I18N
            filename: 'homepage.html',                               // NO I18N
            title: 'homepage',                                    // NO I18N
            chunks: ['chunk-vendors', 'chunk-common', 'homepage']  // NO I18N
        },
        signin   : {
            entry: './src/Signin/main.js',       // NO I18N
            filename: 'signin.html',                               // NO I18N
            title: 'signin',                                    // NO I18N
            chunks: ['chunk-vendors', 'chunk-common', 'signin']  // NO I18N
        },
        bloggit   : {
            entry: './src/BloggIt/main.js',       // NO I18N
            filename: 'bloggit.html',                               // NO I18N
            title: 'bloggit',                                    // NO I18N
            chunks: ['chunk-vendors', 'chunk-common', 'bloggit']  // NO I18N
        },
        signup   : {
            entry: './src/SignUp/main.js',       // NO I18N
            filename: 'signup.html',                               // NO I18N
            title: 'signup',                                    // NO I18N
            chunks: ['chunk-vendors', 'chunk-common', 'signup']  // NO I18N
        },
        profile   : {
            entry: './src/Profile/main.js',       // NO I18N
            filename: 'profile.html',                               // NO I18N
            title: 'profile',                                    // NO I18N
            chunks: ['chunk-vendors', 'chunk-common', 'profile']  // NO I18N
        }
        // app   : {
        //     entry     : './src/app/main.js',       // NO I18N
        //     filename  : 'app.html',                               // NO I18N
        //     title     : 'app',                                    // NO I18N
        //     chunks    : ['chunk-vendors', 'chunk-common', 'app']  // NO I18N
        // },
        // tip   : {
        //     entry     : './src/threatIntelligence/main.js',       // NO I18N
        //     filename  : 'tip.html',                               // NO I18N
        //     title     : 'tip',                                    // NO I18N
        //     chunks    : ['chunk-vendors', 'chunk-common', 'tip']  // NO I18N
        // },
        // admin   : {
        //     entry     : './src/admin/main.js',       // NO I18N
        //     filename  : 'admin.html',                               // NO I18N
        //     title     : 'admin',                                    // NO I18N
        //     chunks    : ['chunk-vendors', 'chunk-common', 'admin']  // NO I18N
        // },
        // tools   : {
        //     entry     : './src/tools/main.js',       // NO I18N
        //     filename  : 'tools.html',                               // NO I18N
        //     title     : 'tools',                                    // NO I18N
        //     chunks    : ['chunk-vendors', 'chunk-common', 'tools']  // NO I18N
        // },
        // editor   : {
        //     template  : "./public/editor.html",                //NO I18N
        //     entry     : './src/editor/SecurityIDE.js',       // NO I18N
        //     filename  : 'editor.html',                               // NO I18N
        //     title     : 'editor',                                    // NO I18N
        //     chunks    : ['chunk-vendors', 'chunk-common', 'editor']  // NO I18N
        // },
        // development   : {
        //     entry     : './src/development/main.js',       // NO I18N
        //     filename  : 'development.html',                               // NO I18N
        //     title     : 'development',                                    // NO I18N
        //     chunks    : ['chunk-vendors', 'chunk-common', 'development']  // NO I18N
        // },
        // dashboard   : {
        //     entry     : './src/dashboard/main.js',       // NO I18N
        //     filename  : 'dashboard.html',                               // NO I18N
        //     title     : 'dashboard',                                    // NO I18N
        //     chunks    : ['chunk-vendors', 'chunk-common', 'dashboard']  // NO I18N
        // }
    },
    lintOnSave  : false,
    publicPath  : '/Portfolio/',// NO I18N
    devServer : {
        disableHostCheck : true,
        host  : host,
        port  : 9093,
        index : 'homepage.html', // NO I18N
        https : false,
        // key   : fs.readFileSync('ssl/csez.key', 'utf8'),// NO I18N
        // cert  : fs.readFileSync('ssl/csez.cert', 'utf8'),// NO I18N
        // protocolRewrite     : true,
        // cookieDomainRewrite : true,
        // cookiePathRewrite   : true,
        // hostRewrite         : true,
        // autoRewrite         : true,
        // proxy: {
        //     '^/truststore': {
        //         target: 'ht' +'tp://appsense.localzoho.com', // NO I18N
        //         target: 'ht' +'tp://localhost:8080', // NO I18N
        //         timeout: 6000,
        //         changeOrigin: true,
        //         secure: true,
        //         logLevel: 'debug',
        //         overlay: { warnings: true, errors: true }
        //         // ca: fs.readFileSync('/path/to/ca.pem'),
        //     }
        // }
        proxy : {
            '/':{
                target:'http://192.168.1.5:8010',
                changeOrigin:true
            }
        } // NO I18N
        // proxy :'http://192.168.1.5:8010' // NO I18N
    }
}