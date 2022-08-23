export default {
  slugify(str: string) {
    return str
      .toLowerCase()
      .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/g, '')
      .replace(/\s+/g, '-');
  },
  convertText(curString: string) {
    if (curString.length > 65) {
      return `${curString.substring(0, 65)}...`;
    }
    return curString;
  },
};
