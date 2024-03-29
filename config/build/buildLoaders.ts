import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { IBuildOptions } from './types/config'


export function buildLoaders({ isDev }: IBuildOptions): webpack.RuleSetRule[] {

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	}

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
						localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
					},
				},
			},
			'sass-loader',
		],
	}

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	const fileLoader = {
			test: /\.(png|jpe?g|gif|woff2|woff)$/i,
			use: [
				{
					loader: 'file-loader',
				},
			],
		}

	return [
		fileLoader,
		svgLoader,
		typescriptLoader,
		cssLoader,
	]
}