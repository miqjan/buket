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
        }
    ]
};