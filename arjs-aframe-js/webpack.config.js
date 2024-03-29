// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');

const isProduction = process.env.NODE_ENV == 'production';

const externals = {
    aframe: {
        commonjs: 'aframe',
        commonjs2: 'aframe',
        amd: 'aframe',
        root: 'AFRAME' // indicates global variable
    },
    three: {
        commonjs: 'three',
        commonjs2: 'three',
        amd: 'three',
        root: 'THREE' // indicates global variable
    }
};


const config = {
    entry: './src/index.js',
    output: {
        library: 'ARjs',
        path: path.resolve(__dirname, 'dist'),
        filename: 'aframe-ar.js',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.([cm]?ts|tsx)$/,
                loader: 'ts-loader',
            },
            {
                test: /\.worker\.js$/,
                use: {
                    loader: 'worker-loader',
                    options: {
                        inline: 'no-fallback'
                    }
                }
            }

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ],
        extensionAlias: {
            '.ts': ['.js', '.ts'],
            '.cts': ['.cjs', '.cts'],
            '.mts': ['.mjs', '.mts']
        }
    },
    externals
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
