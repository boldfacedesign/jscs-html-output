'use strict';
var through = require('through2');
var fs = require('fs-extra');
var path = require('path');

module.exports = function () {
	return through.obj(function (file, enc, cb) {
		console.log(file);

		cb(null, file);
	}, function (cb) {
		cb();
	});
}

// module.exports = function (opts) {
// 	var errorCount = 0;
// 	var totalCount = 0;
// 	var fileText = '';
// 	var fileRef = {};
// 	var outputFile;

// 	if (opts && opts.output) {
// 		outputFile = opts.output;
// 	} else {
// 		outputFile = (process.cwd() + '/jscs.html');
// 	}

// 	function htmlEscape(str) {
// 		return String(str)
// 			.replace(/&/g, '&amp;')
// 			.replace(/"/g, '&quot;')
// 			.replace(/'/g, '&#39;')
// 			.replace(/</g, '&lt;')
// 			.replace(/>/g, '&gt;');
// 	}

// 	return through.obj(function (file, enc, cb) {
// 		fileRef = file;

// 		if (file.jscs && !file.jscs.success) {
// 			var errors = file.jscs.errors;
// 			var errorList = errors.getErrorList();

// 			var fileName = errorList[0].filename;

// 			errorList.forEach(function () {
// 				errorCount++;
// 				totalCount++;
// 			});

// 			fileText += '\t\t<div class="block">\n';

// 			if (errorCount) {
// 				var str = '\t\t\t<input type="checkbox">\n\t\t\t<h2>' + (errorCount + ' code style ' + (errorCount === 1 ? 'error' : 'errors') + ' found in ' + fileName) + '</h2>\n';

// 				fileText += str;
// 				if (opts && opts.logToConsole) {
// 					console.log((errorCount + ' code style ' + (errorCount === 1 ? 'error' : 'errors') + ' found in ' + fileName));
// 				}
// 				errorCount = 0;
// 			}

// 			errorList.forEach(function (error) {
// 				var str = '\t\t\t<p>';
// 				var lines = errors.explainError(error).split('\n');

// 				if (opts && opts.logToConsole) {
// 					console.log(errors.explainError(error));
// 				}

// 				lines.forEach(function (line, i) {
// 					if (i === 0) {
// 						str += (htmlEscape(line) + '</p>\n\t\t\t<p class="code">');
// 					} else {
// 						str += (htmlEscape(line) + '<br>\n\t\t\t');
// 					}
// 				});

// 				str = str += '</p>\n';
// 				fileText += str;
// 			});

// 			fileText += '\t\t</div>\n';
// 		}

// 		cb(null, file);
// 	}, function (cb) {
// 		if (fileRef.jscs && !fileRef.jscs.success) {
// 			fs.ensureFileSync(outputFile);
// 			var results = fs.readFileSync(path.join(__dirname, '/html-template.html'), 'utf-8');

// 			results = results.replace('{{totalCount}}', totalCount).split('</body>')[0];
// 			results += (fileText + '\t\t</div>\n\t</body>\n</html>');

// 			fs.writeFileSync(outputFile, results);
// 		}

// 		cb();
// 	});
// };
