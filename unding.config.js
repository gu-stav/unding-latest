import GitHub from "@auth/core/providers/github";

import article from './content-schemas/article';
import pages from './content-schemas/pages';

import NewHeader from './NewHeader.svelte';

export const auth = () => ({
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID ?? '71f1c49ab6b41c712e78',
            clientSecret: process.env.GITHUB_SECRET ?? 'e1771c58fba890cee36f53efff15435bd789fa6e'
        })
    ]
})

export const schema = [
    article,
    pages
];

export const components = {
    Header: NewHeader
};
