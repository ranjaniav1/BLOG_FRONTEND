import { getArticleBasedonCategory } from "../service/collectionOfArticle";
import { createComments, getComments } from "../service/comments";
import { getAllSeries, getHome, getLessonsBySeries } from "../service/home";
import { getSearch } from "../service/search";
import { getSettings } from "../service/settings";
import { getSingleArticle } from "../service/singleArticle";
import { useFetch } from "../utils/useFetch";


export const useHome = () => useFetch({ fetchFn: getHome })

// search
export const useSearch = (slug) =>
    useFetch({
        fetchFn: getSearch,
        params: slug,
        enabled: !!slug,
        transform: (res) => res?.articles || [],
    });

export const useSettings = () =>
    useFetch({
        fetchFn: getSettings,
        transform: (res) => res?.webSettings,
    });

export const useSingleArticles = (slug) =>
    useFetch({
        fetchFn: getSingleArticle,
        params: slug,
        enabled: !!slug,
        transform: (res) => ({
            article: res?.article,
            relatedArticles: res?.relatedArticles || [],
        }),
    });


export const useArticleCollection = (slug) =>
    useFetch({
        fetchFn: getArticleBasedonCategory,
        params: slug,
        enabled: !!slug,
        transform: (res) => res?.articles || [],
    });

export const useComments = (article) => {
    const {
        data: comments,
        loading,
        setData: setComments,
        refetch,
    } = useFetch({
        fetchFn: getComments,
        params: article,
        enabled: !!article?._id,
        transform: (res) => res || [],
    });

    const postComment = async ({ content }) => {
        if (!article?._id) return;
        try {
            const newComment = await createComments({ article, content });
            setComments((prev) => [newComment, ...(prev || [])]);
        } catch (error) {
            console.error("Error posting comment:", error);
        }
    };

    return { comments, loading, postComment, refetch };
};

export const useSeries = () =>
    useFetch({
        fetchFn: getAllSeries,
        transform: (res) => res || [],
    });

export const useLessons = (seriesId) =>
    useFetch({
        fetchFn: getLessonsBySeries,
        params: seriesId,
        enabled: !!seriesId,
        transform: (res) => res || [],
    });