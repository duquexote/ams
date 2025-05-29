export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  publishedAt: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  slug: string;
  featured?: boolean;
}
