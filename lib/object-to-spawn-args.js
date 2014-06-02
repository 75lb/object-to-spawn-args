module.exports = function(object, options){
    var output = [];
    options = options || {};
    
    for (var prop in object){
        var value = object[prop];
        if (value !== undefined){
            if (prop.length === 1){
                output.push("-" + prop);
                if (value !== true){
                    if (options.quote){
                        output.push("\"" + value + "\"");
                    } else {
                        output.push(value);
                    }
                }
            } else {
                output.push("--" + prop);
                if (value !== true){
                    if (options.quote){
                        output.push("\"" + value + "\"");
                    } else {
                        output.push(value);
                    }
                }
            }
        }
    }
    return output;
};
