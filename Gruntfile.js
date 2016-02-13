module.exports = function(grunt) {

  grunt.initConfig({
    saas: {
      dist:{
        files: {
          'style.css' : 'styles.scss'
        }
      }
    }
    // watch{
    //   saas: {
    //     files: ['styles/*.scss'],
    //     tasks: ['saas']
    //   }
    // }
  });


  grunt.loadNpmTasks('grunt-contrib-sass');
  // grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['saas']);
   
   
};