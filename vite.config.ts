import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { PluginOptions } from "babel-plugin-react-compiler";

const ReactCompilerConfig: Partial<PluginOptions> = {
    // sources: (filename) => {
    //     return filename.indexOf("src/path/to/dir") !== -1;
    // },
};

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [["babel-plugin-react-compiler", ReactCompilerConfig] /*must run first!*/]
            }
        })
    ]
});
