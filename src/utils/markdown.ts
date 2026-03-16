import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Article } from '@/data/articles';

const articlesDirectory = path.join(process.cwd(), 'src/content/articles');

export interface FullArticle extends Article {
    content: string;
    heroImage: string;
    h2: { line1: string; line2: string };
    h2color: string;
    titleLines: { line1: string; line2: string; line3?: string };
}

export function getAllArticlesContent(): FullArticle[] {
    if (!fs.existsSync(articlesDirectory)) {
        return [];
    }
    const fileNames = fs.readdirSync(articlesDirectory);
    const allArticlesData = fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map((fileName) => {
            const fullPath = path.join(articlesDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const matterResult = matter(fileContents);

            return {
                ...(matterResult.data as any),
                content: matterResult.content,
            } as FullArticle;
        });

    return allArticlesData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticleById(id: string): FullArticle | undefined {
    const articles = getAllArticlesContent();
    return articles.find(article => article.id.toString() === id);
}
