


module.exports = function(grunt) {
	
	grunt.initConfig({
		resize_crop: {
				dev: {
					options: {
						format:"jpg",
						width: 300,
						height: 300,	
				},
				files: [{
					expand: true,
					src: ['*.{gif,jpg,png}'],
					cwd: ['images/']
					dest: 'images/'
				}]
			  }
			},
		});



		grunt.loadNpmTasks('grunt_resize-crop');

		grunt.registerTask('default', ['resize-images'] );
	};