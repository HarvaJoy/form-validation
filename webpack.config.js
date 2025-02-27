const path = require('path');

// entry -> output

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'index.js',
        /*Switch the following 2 lines to run the project localy*/
        publicPath: '/build/'

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
    devtool: 'eval-source-map',
    devServer: {
        // contentBase: path.resolve(__dirname, 'build'),
        open: true,
        port: 9000,
        hot: true,
        historyApiFallback: true,
        // output: {
        //     filename: 'index.js',
        //     publicPath: 'http://localhost:8081/form-validation/'
        static: {
            directory: path.join(__dirname, "build")
        // // },
        // // histo
        // // open: ['/form-validation'],

        }
    }
    
}