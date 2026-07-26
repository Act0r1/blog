import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const posts = (await getCollection('blog')).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
	);
	return rss({
		title: 'insafdev',
		description: 'Notes on ML, Rust and things I build in the evenings',
		site: context.site,
		items: posts.map((post) => ({
			link: `/blog/${post.id}/`,
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
		})),
	});
}
