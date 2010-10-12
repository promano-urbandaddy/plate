var getGlobalObject, exportsObject;

try {
    exportsObject = exports;
    getGlobalObject = require('../namespace').getGlobalObject;
} catch(err) {}

(function(global) {
    var add = function(callback, input, value) {
        callback(null, parseInt(input, 10) + parseInt(value, 10));
    };

    var exporter = global.getExporter('filters.add');
    exporter("add", add);
})(getGlobalObject('plate', exportsObject));