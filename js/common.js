if(console){
    var logger = {
        log: console.log,
        info: console.info,
        warn:console.warn,
        error: console.error,
        trace: function (tag, args, color) {
            var arr = Array.prototype.slice.call(args);
            arr.unshift(tag);
            arr.unshift(new Date().toLocaleString());
            arr.unshift('>');
            var text = arr.join("&nbsp;&nbsp;");
            var item = document.createElement('li');
            item.innerHTML = text;
            item.style.color = color || '#FFF';
            var debug = document.getElementById("console");
            if (debug) {
                debug.appendChild(item);
                debug.scrollTop = debug.scrollHeight;
            }
            return text;
        }
    };

    console.log = function () {
        logger.log.apply(console, arguments);
        logger.trace("[LOG]", arguments,'#8DDAF0');
    };

    console.info = function () {
        logger.info.apply(console, arguments);
        logger.trace("[INFO]", arguments,'#35AD83');
    };

    console.warn = function () {
        logger.warn.apply(console, arguments);
        logger.trace("[WARN]", arguments, '#FDDC03');
    };

    console.error = function () {
        logger.error.apply(console, arguments);
        logger.trace("[ERROR]", arguments, '#F25745');
    }
}
