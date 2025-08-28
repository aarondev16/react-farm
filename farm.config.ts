import * as path from "node:path";
import { defineConfig } from "@farmfe/core";
import farmPluginPostcss from "@farmfe/js-plugin-postcss";

export default defineConfig({
	plugins: ["@farmfe/plugin-react", farmPluginPostcss()],
	compilation: {
		resolve: {
			alias: {
				"@": path.join(process.cwd(), "src"),
				stream$: "readable-stream",
				"$__farm_regex:^/(utils)$": path.join(process.cwd(), "src/$1"),
			},
		},
		output: {
			publicPath: "./",
		},
	},
});
