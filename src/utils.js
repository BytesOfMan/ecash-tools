module.exports = {
    expand: function (arrayOrObject) {
        return console.log(JSON.stringify(arrayOrObject, null, 2));
    },
};
