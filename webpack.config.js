let path = require ("path");

let config = {
    entry: "./js/script.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "./js"),
        publicPath: "js/"
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    }
};

module.exports = (env, options) => {
    config.devtool = options.mode === "production" ?
                    "source-map" :
                    "cheap-module-eval-source-map";
    return config;
}