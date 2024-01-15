import { createClient } from "microcms-js-sdk";
const client = createClient({
    serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: import.meta.env.MICROCMS_API_KEY,
});
//型定義
export type Blog = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    content: string;

    // eyecatch追加
    eyecatch?: {
        url:string;
    }
};
export type BlogResponse = {
    totalCount: number;
    offset: number;
    limit: number;
    contents: Blog[];
};

//API呼び出し、eyecatchパラメータ追加により修正
export const getBlogs = async (queries?: { fields?: string[] }) => {
    const fields = queries?.fields ? queries.fields.concat("eyecatch") : ["eyecatch"];

    return await client.get<BlogResponse>({ endpoint: "blogs", queries:{ ...queries,fields }, });
};
export const getBlogDetail = async (contentId: string, queries?: any) => {
    return await client.getListDetail<Blog>({
        endpoint: "blogs",
        contentId,
        queries,
    });
};