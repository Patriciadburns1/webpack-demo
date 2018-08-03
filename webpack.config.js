//node syntax 

const{resolve} = require('path'); 

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: resolve(__dirname, 'dist')
    },
    mode: 'development',
    devtool: 'inline-source-map',
    module:{
        rules:[{
            test: /\.css$/,
            use: [
                'style-loader', 'css-loader'
            ]
        },
        {
            test: /\.(png|svg|gif|jpe?g$)/, 
            use: {
                loader: 'file-loader',
                options: {
                    outputPath: 'images/'
                }
            }
        }
        {
            test:/\.jsx?$/, 
            exclude: /node_modules/, 
            loader: 'babel-loader'
        }
       
    ]
    }

}

