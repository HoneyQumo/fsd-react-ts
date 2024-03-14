import { IBuildOptions } from './types/config'
import WebpackDevServer from 'webpack-dev-server'

export function buildDevServer(options: IBuildOptions): WebpackDevServer.Configuration  {

	return {
		port: options.port,
		open: true,
		historyApiFallback: true,
	}
}