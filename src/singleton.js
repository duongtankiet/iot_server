let Singleton = (function () {
    let instance;
    function createInstance() {
        return Object(); // tạo object rỗng, có thể thay bằng Class khác
    }
    return {
        getInstance: function () {
            if (!instance) { // nếu chưa tồn tại thì tạo mới
                instance = createInstance();
            }
            return instance;

        },
        activeTime1: 0,
        activeTime2: 0,
        activeTime3: 0,
        activeTime4: 0,
        activeTime5: 0,
        activeTime6: 0
    };
})();
module.exports = Singleton;
