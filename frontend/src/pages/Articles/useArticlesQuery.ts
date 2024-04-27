import { useQuery } from '@tanstack/react-query';
import { ArticleResponse, getArticles } from '../../adapters/api/articles';

export function useArticleQuery() {
    const { data, isLoadingError } = useQuery<ArticleResponse[]>({
        queryKey: ['articles'],
        queryFn: getArticles,
    });
    return {
        articles: data ?? [],
        articlesAreLoading: isLoadingError,
    };
}
