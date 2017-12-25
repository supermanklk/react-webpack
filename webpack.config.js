const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js', //相对路径
    output: {
        path: path.resolve(__dirname, 'build'), //打包文件的输出路径
        filename: 'bundle.js' //打包文件名
    },
	plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', //指定模板路径
            filename: 'index.html', //指定文件名
        })
    ],
	 devServer: {
        contentBase: path.resolve(__dirname, 'build'),
		inline: true
    },
	module: {
        loaders: [ //配置加载器
				{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [
								require('autoprefixer'),
								require('precss'),
								require('postcss-flexbugs-fixes')
							]
						}
						
					}
				]
			},
            {
                test: /\.js$/, //配置要处理的文件格式，一般使用正则表达式匹配
                loader: 'babel-loader', //使用的加载器名称
                query: { //babel的配置参数，可以写在.babelrc文件里也可以写在这里
                    presets: ['env', 'react']
                }
            },
			{
			test: [/\.gif$/, /\.jpe?g$/, /\.png$/],
			loader: 'url-loader',
			options: {
			  limit: 10000 //1w字节以下大小的图片会自动转成base64
			}
			}
			
        ]
    }

}






