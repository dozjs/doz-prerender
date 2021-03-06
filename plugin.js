var PUBLIC_URL = '__DOZ_PRERENDER_PUBLIC_URL__';

function normalizeSlash(url) {
    return url.replace(/([^:]\/)\/+/g, "$1");
}

function fixUrl(obj) {

    if (obj.props && obj.props.href && obj.props.href.split(':').length === 1) {
        obj.props.href = normalizeSlash(window[PUBLIC_URL] + obj.props.href);
    }

    if (obj.children) {
        for (var i = 0; i < obj.children.length; i++) {
            var o = obj.children[i];
            if (typeof o === 'object')
                fixUrl(o);
        }
    }
}

module.exports = function (Doz, app, options) {

    if (!window[PUBLIC_URL]) return;

    app.on('draw', function (next) {
        fixUrl(next);
    });
};