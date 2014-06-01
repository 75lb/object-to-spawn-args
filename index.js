module.exports = function(object, options){
    var output = [];
    options = options || {};
    
    for (var prop in object){
        var value = object[prop];
        if (value){
            output.push("--" + prop);
            if (options.quote){
                output.push("\"" + value + "\"");
            } else {
                output.push(value);
            }
        }
    }
    return output;
};
