import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import fs from 'fs';
import path from 'path';

function mediaPlugin() {
	return {
		name: 'serve-media',
		closeBundle() {
			const src = path.join(process.cwd(), 'media');
			const dest = path.join(process.cwd(), 'dist/media');
			if (fs.existsSync(src)) {
				fs.mkdirSync(dest, { recursive: true });
				for (const file of fs.readdirSync(src)) {
					fs.copyFileSync(path.join(src, file), path.join(dest, file));
				}
			}
		},
		configureServer(server) {
			server.middlewares.use((req, res, next) => {
				const url = req.url.split('?')[0];
				if (url.startsWith('/media/')) {
					const filePath = path.join(process.cwd(), url);
					if (fs.existsSync(filePath)) {
						const ext = path.extname(filePath).toLowerCase();
						const contentTypes = {
							'.png': 'image/png',
							'.jpg': 'image/jpeg',
							'.jpeg': 'image/jpeg',
							'.gif': 'image/gif',
							'.webp': 'image/webp'
						};
						res.setHeader('Content-Type', contentTypes[ext] || 'application/octet-stream');
						fs.createReadStream(filePath).pipe(res);
						return;
					}
				}
				next();
			});
		}
	};
}

export default defineConfig({
	plugins: [svelte(), mediaPlugin()],
	base: './',
	build: {
		rollupOptions: {
			input: 'index.html'
		}
	}
});
