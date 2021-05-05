module.exports = {
    module:{
        rules: [
            {
                test: /\.(sc|c)ss$/i,
                use:['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    }


}
