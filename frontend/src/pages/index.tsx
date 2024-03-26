import { ArticleDetails } from './ArticleDetails';
import { Articles } from './Articles';
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<Articles />} />
            <Route path="Articles" element={<Articles />} />
            <Route path="Articles/:articleId" element={<ArticleDetails />} />
        </Route>,
    ),
);
