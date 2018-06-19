/* global __dirname, require, module*/
const nodeExternals = require('webpack-node-externals');

const config = {
    output: {
        filename: 'functions/index.js',
        libraryTarget: 'this'
    },
    target: 'node',
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader' }
        ]
    },
    externals: [nodeExternals()]
};

module.exports = config;
