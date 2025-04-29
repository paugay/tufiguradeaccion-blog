// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.tufiguradeaccion.com',
	integrations: [
		starlight({
			title: 'Tu Figura De Acción',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Inicio',
					items: [
						{ label: 'Bienvenida', slug: '' }
					],
				},
				{
					label: 'Blog',
					autogenerate: { directory: 'blog' },
				},
				{
					label: 'Guías',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
