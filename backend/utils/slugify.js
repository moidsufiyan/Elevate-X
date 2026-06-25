import slugify from 'slugify';

const makeSlug = (text) => {
  if (!text) return "";
  return slugify(text, {
    lower: true,
    strict: true,
    trim: true,
  });
};

export default makeSlug;
