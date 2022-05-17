const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin'); // otomatis membuat file index.html

module.exports = {
    mode: "development",
    entry: {
        index: './src/index.js',
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: 'Restaurant Page', // page title
    //     }),
    // ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        // clean: true, // membersihkan file tidak terpakai di folder dist secara otomatis
    },
};