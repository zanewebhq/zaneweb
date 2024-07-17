import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';

export const getContentFromFile = async (filePath: string) => {
  const file = await fs.readFile(`src/content/${filePath}`, 'utf8');
  const { content } = matter(file);

  return content;
};

export const getContentFromDirectory = async <T>(dir: string = '') => {
  const posts = await fs.readdir(`src/content/${dir}`);

  return await Promise.all(
    posts
      .filter((file) => path.extname(file) === '.mdx')
      .map(async (file) => {
        const filePath = `src/content/${dir}/${file}`;
        const fileContent = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(fileContent);
        const slug = file.replace(/\.mdx$/, '');

        return { ...data, slug, body: content } as T;
      }),
  );
};
