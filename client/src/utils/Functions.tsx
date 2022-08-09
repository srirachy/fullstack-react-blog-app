export default {
  slugify(str: string) {
    return str
      .toLowerCase()
      .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/g, '')
      .replace(/\s+/g, '-');
  },
};
