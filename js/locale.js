---
---

var translations = [{% for translation in site.translations %}
  {{ translation | jsonify }}{% unless forloop.last %},{% endunless %}
{% endfor %}];

var browserLocales = [].concat(navigator.languages || navigator.userLanguage || navigator.language);


for(var i = 0; i < translations.length; i++) {
  var translation = translations[i];
}

$(document).ready(function() {
  // if local in query string
  //   setLocale
  // else if local in cookie
  // else if local matches preferred languages
  //   setLocal
  // redirect if not on preferred local

  // selecting translation, set locale
  $('a.locale-chooser').on('click', function(event) {
    event.preventDefault();
    setLocale($(event.target).data('locale'));
  });
});

// save the preferred locale
function setLocale(locale) {
  document.cookie = "locale=" + locale;
}

// Get the set local from the query string or cookies
function getLocale() {
  return window.location.search.replace(/.*[?&]l=([^&$])/, "$1") ||
    document.cookie.replace(/(?:(?:^|.*;\s*)locale\s*\=\s*([^;]*).*$)|^.*$/, "$1");
}
