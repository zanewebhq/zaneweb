export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const slugify = (str: string) => {
  let slug = str.replace(/^\s+|\s+$/g, '');

  slug = slug.toLowerCase();

  slug = slug
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

  return slug;
};
