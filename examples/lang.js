const defaultLang = 'zh-CN';
const storageKey = 'DaoStyleLang';
const langs = {
  'zh-CN': '中文',
  'en-US': 'English',
};

function generateLang() {
  const storageLang = localStorage.getItem(storageKey);
  if (!storageLang) {
    localStorage.setItem(storageKey, defaultLang);
  }
  return storageLang || defaultLang;
}

export {
  generateLang,
  defaultLang,
  langs,
  storageKey,
};
