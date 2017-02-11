var program = require('commander');
var fs = require('fs');
var path = require('path');

program
.version('1.0.0', '-v --version')
.usage('[routername]')
.arguments('[routername]')
.action(function (routername) {
     routernameVal = routername;
  })
.parse(process.argv);

program.on('--help', function(){
  console.log('It will create a restful API Template file into Views Dir for express');
});
program.parse(process.argv);


function loadTemplate(name) {
  return fs.readFileSync(path.join(__dirname, '..', 'template', name), 'utf-8');
}

function write(name, str, mode) {
  fs.writeFileSync(name,str, { mode: mode || 0666 });
}


function main() {
	var destinationPath = program.args.shift() || '.';
	var tmp = loadTemplate('tmp.js');
	
	tmp = tmp.replace(/{name}/gi, routernameVal);
	write(`./views/${routernameVal}.js`, tmp);
}



main()