import StoryblokClient from 'storyblok-js-client';

export const Storyblok = new StoryblokClient({
	accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
	cache: { clear: 'auto', type: 'memory' },
});

export const fetchStory = async (slug) => {
	try {
		const response = await Storyblok.get(`cdn/stories/${slug}`, {
			version: 'draft',
		});
		return response.data.story;
	} catch (error) {
		console.error('Error fetching story:', error);
		return null;
	}
};
