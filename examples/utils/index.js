const LangKey = 'DaoStyleLang';

function getLang() {
  return localStorage.getItem(LangKey) || 'zh';
}

function setLang(lang) {
  localStorage.setItem(LangKey, lang);
}

export {
  getLang,
  setLang,
};
