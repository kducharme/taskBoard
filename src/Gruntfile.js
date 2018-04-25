require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks
 
grunt.initConfig({
    eslint: {
        target: ['file.js']
    }
});
 
grunt.registerTask('default', ['eslint']);