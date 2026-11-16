let obj = {};

var encode = function (longUrl) {
    let shortUrlKey = new Date().getTime(); // 1767913791459
    obj[shortUrlKey] = longUrl;
    return shortUrlKey;
};

var decode = function (shortUrlKey) {
    return obj[shortUrlKey];
};
