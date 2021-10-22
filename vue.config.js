/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    pages: {
        top: {
            entry: 'src/pages/top/main.js', // エントリーポイントとなるjs
            template: 'public/index.html', // テンプレートのHTML
            filename: 'index.html', // build時に出力されるファイル名
        },
        join: {
            entry: 'src/pages/join/main.js', // エントリーポイントとなるjs
            template: 'public/join.html', // テンプレートのHTML
            filename: 'join.html', // build時に出力されるファイル名
        },
    },
    outputDir: 'docs/', //これ
};