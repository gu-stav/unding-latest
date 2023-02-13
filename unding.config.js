import GitHub from "@auth/core/providers/github";

export const studio = () => ({
    auth: {
        providers: [
            GitHub({
                clientId: process.env.GITHUB_ID ?? '71f1c49ab6b41c712e78',
                clientSecret: process.env.GITHUB_SECRET ?? 'e1771c58fba890cee36f53efff15435bd789fa6e'
            })
        ]
    }
})
