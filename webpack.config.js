//Configurar nuestro path
const path = require ('path');
const HtmlWebPackPlugin= require ('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output:{
        path : path.resolve(__dirname, 'dist'),
        filename : 'bundle.js',
    },
    resolve:{
        extensions: ['.js', '.jsx']
    },
    module : {
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                //uso del loader que previamente instalamos
                use: {
                    loader: "html-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            //se va a empujar como
            filename: "./index.html",
        })
    ]
}