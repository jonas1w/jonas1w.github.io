import type { CollectionEntry } from 'astro:content';

export type PostEntry = CollectionEntry<'posts'>;

export type PostPreview = Omit<PostEntry, 'data'> & {
  url: string;
  frontmatter: PostEntry['data'];
};

export type PostNavigationLink = {
  url: string;
  title: PostEntry['data']['title'];
} | null;
