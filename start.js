require("babel-core/register")(
    {
       presets: ['stage-0', 'es2015']
    }
);

require("babel-polyfill");
require("./src/app.js");
