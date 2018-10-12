const LangKey = 'DaoStyleLang';

function getLang() {
  return localStorage.getItem(LangKey) || 'en';
}

function setLang(lang) {
  localStorage.setItem(LangKey, lang);
}

export {
  getLang,
  setLang,
};
