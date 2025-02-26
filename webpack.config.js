const path = require('path');

// entry -> output

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './docs'),
        filename: 'index.js',
        /*Switch the following 2 lines to run the project localy*/
        publicPath: '/docs/'

    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test:/\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'                
            
            ],        
        }, {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
        }]
    },
    mode: 'development',
    devtool: "inline-source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, "docs")
        },
        // open: ['/form-validation'],

    }
    
};