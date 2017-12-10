const path = require('path');
const srcPath = path.join(__dirname, 'src');

module.exports = {
    rules: [{
            test: /\.jsx?/,
            include: srcPath,
            loader: 'babel-loader'
        },
        {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ],
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf|png|jpg)$/,
            loader: "file-loader"
        }
    ]
};