import { useQuery } from '@tanstack/react-query';
import { ArticleResponse, getArticleById } from '../../adapters/api/articles';

export function useArticleByIdQuery(id: number) {
    const { data, isLoadingError } = useQuery<ArticleResponse>({
        queryKey: ['articles', id],
        queryFn: getArticleById(id),
    });
    return {
        article: data,
        articleIsLoading: isLoadingError,
    };
}
