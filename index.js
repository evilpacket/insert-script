module.exports = function (url) {
    url = url || '';
    var elem = document.createElement('script');
    elem.setAttribute('src', url);

    var head = document.getElementsByTagName('head')[0];
    head.appendChild(elem);
};
