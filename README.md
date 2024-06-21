# mi-react

## Getting Started

### (1) Initialize the project

```bash
npm init -y
npm install react react-dom
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli webpack-dev-server html-webpack-plugin
```

### (2) Create webpack config file

```javascript
// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
        ]
    },
    devServer: {
        port: 3000,
    },
};
```

## Add css support

```bash
npm install style-loader css-loader --save-dev
```

Webpack rules:

```
rules: [
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
    },
]
```

## Add scss support

```bash
npm install style-loader sass-loader sass --save-dev
```

Webpack rules:

```
rules: [
    {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
    },
]
```

## Don't use serve for react apps

The package `serve` is a simple tool for serving static web applications. 

## Credits

- [Saurabh Mhatre](https://saurabhnativeblog.medium.com/), check his article! [React30-Project23: Setting Up a React Project Using Webpack and Babel](https://saurabhnativeblog.medium.com/react30-project23-setting-up-a-react-project-using-webpack-and-babel-f4ca5554dfec)