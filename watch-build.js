const browserSync = require('browser-sync');

browserSync({
    server: "build",
    files: ["build/*.html", "build/*.css", "build/*.js"],
    serveStatic: [{ route: "src", dir: "src" }]
});
