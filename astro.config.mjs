// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Plugins
import starlightThemeGalaxy from 'starlight-theme-galaxy';
import starlightFullViewMode from 'starlight-fullview-mode';
import starlightScrollToTop from 'starlight-scroll-to-top';
import starlightHeadingBadges from 'starlight-heading-badges'

// https://astro.build/config
export default defineConfig({

	// Deployment configs
	site: 'https://statemachinewiki.github.io',
	base: '/',


	integrations: [
		starlight({
			title: 'StateMachine',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Thecoldgod04' }],
			
			sidebar: [
				{
					label: 'Basic Info',
					autogenerate: { directory: 'info' },
				},
				{
					label: 'Timeline & Changes',
					autogenerate: { directory: 'timeline' },
				},
			],

			// Custom components
			components: {
				PageTitle: './src/components/PageTitle.astro',
			},

			customCss: [
				'./src/styles/custom.css',
			],

			favicon: './favicon.ico',

			// Add plugins here
			plugins: [
				starlightThemeGalaxy(),
				starlightFullViewMode({
					leftSidebarCollapsedWidth: '60px',
				}),
				starlightScrollToTop({
				}),
				starlightHeadingBadges(),
			],
		}),
	],
});
