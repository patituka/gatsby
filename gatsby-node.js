require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
});

const fetch = require('node-fetch');
const slugify = require('@sindresorhus/slugify');
const { createApi } = require('unsplash-js');

const unsplash = createApi({
    accessKey: process.env.UNSPLASH_API_KEY,
    fetch: fetch
});

exports.sourceNodes = async ({ actions: { createNode }, createContentDigest }) => {
    const data = await unsplash.collections.getPhotos({ collectionId: '4399851' });
    
    data.response.results
        .forEach((item) => {
            const { id, blur_hash } = item;
            createNode({
                ...item,
                id: id,
                slug: `/${slugify(blur_hash)}`,
                internal: {
                    type: 'unsplash',
                    contentDigest: createContentDigest(item)
                }
            });
        });
};