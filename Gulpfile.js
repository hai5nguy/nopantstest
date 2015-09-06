var gulp        = require('gulp');
var server      = require('gulp-express');
var del         = require('del');

gulp.task('clean', function (cb) {
    del(['./dist/**', '!./dist']).then(function () {
        cb();
    }, function (error) {
        cb(error);
    });
});

gulp.task('move', ['clean'], function () {
    var filesToMove = [
        './src/frontend/index.html'
    ];
    return gulp.src(filesToMove).pipe(gulp.dest('./dist'));
});

gulp.task('server', ['move'], function () {
    server.run([ './src/backend/server.js' ]);
    gulp.watch([ './dist/**' ], function (event) {
        if (event && event.type === 'changed') {
            console.log('File changed: ', event.path);
            server.notify(event);
        }
    });
    
});


gulp.task('watch-index', function () {
     var htmlFiles = [
         './src/frontend/index.html'
     ];
     gulp.watch(htmlFiles, ['move']);
});



gulp.task('default', ['server', 'watch-index']);





// var gulp 		= require('gulp');
// var clean 		= require('gulp-clean');
// var server		= require('gulp-express');
// var sass 		= require('gulp-sass');
// var exec        = require('child_process').exec;
// var MongoClient = require('mongodb').MongoClient;

// gulp.task('clean', function () {
// 	return gulp.src('./dist', { read: false })
// 		.pipe(clean());
// });

// gulp.task('move', ['clean'], function () {
// 	var filesToMove = [
// 		// './src/app/index.html',
// 		'./src/app/index.js'
// 	];
// 	return gulp.src(filesToMove)
// 		.pipe(gulp.dest('./dist'))
// });

// gulp.task('html', function () {
// 	return gulp.src('./src/app/index.html')
// 		.pipe(gulp.dest('./dist'));
// });

// gulp.task('watch:html', ['html'], function () {
// 	var htmlFiles = [
// 		'!./src/app/bower_components/**',
// 		'./src/app/**/*.html'
// 	];
// 	gulp.watch(htmlFiles, ['html']);
// });

// gulp.task('sass', function () {
// 	gulp.src('./src/app/sass/style.scss')
// 		.pipe(sass().on('error', sass.logError))
// 		.pipe(gulp.dest('./dist/'))
// });

// gulp.task('watch:sass', ['sass'], function () {
// 	var stylingFiles = [
// 		'!./src/app/bower_components/**',
// 		'./src/app/**/*.scss',
// 		'./src/app/**/*.sass'
// 	];

// 	gulp.watch(stylingFiles, ['sass']);
// });


// gulp.task('server', function () {
// 	server.run([ 'app.js' ]);
// 	gulp.watch([ './dist/**' ], server.notify);
// });

// gulp.task('mongo-start', function (cb) {

//     var tries = 0;

//     startMongo();
//     var timer = setInterval(connectToMongo, 2000);


//     function startMongo() {
//         exec('mongod --dbpath ./localdb/db/');
//     }
    
//     function connectToMongo() {
//         if (tries >= 3) {
//             clearTimeout(timer);
//             cb('Unable to start local mongo server');
//             return; 
//         }

//         MongoClient.connect('mongodb://localhost:27017/sanspantalones', function (error, database) {
//             if (error) {
//                 tries++;
//                 startMongo();
//             } else {
//                 clearTimeout(timer);
//                 cb();
//             }
//         });
//     }
// });

// gulp.task('mongo-stop', function (cb) {
//     exec('mongo admin --eval "db.shutdownSever()"', function (err, stdout, stderr) {
//         console.log('stdout ', stdout);
//         console.log('stderr ', stderr);
//         cb(err);
//     });
// });

// gulp.task('test2', function (cb) {
//     console.log('test2');
//     cb();
// });

// gulp.task('test', ['mongo-start'], function (cb) {
//     console.log('blah');
//     cb();
// });
// // gulp.task('watches', ['watch:sass', 'watch:scripts', 'watch:markup', 'watch:others']);

// gulp.task('watches', ['watch:html', 'watch:sass']);
// gulp.task('default', ['clean', 'move', 'watches', 'server']);


// // gulp.task('one', function () {
// // 	console.log('one');
// // });
// // gulp.task('two', function () {
// // 	console.log('two');
// // });
// // gulp.task('three', function () {
// // 	console.log('three');
// // });
// // gulp.task('four', function () {
// // 	console.log('four');
// // });
// // gulp.task('five', function () {
// // 	console.log('five');
// // });
// // gulp.task('six', function () {
// // 	console.log('six');
// // });

// // gulp.task('a', ['one', 'two', 'five']);
// // gulp.task('b', ['three', 'four']);

// // gulp.task('c', ['a', 'b']);
