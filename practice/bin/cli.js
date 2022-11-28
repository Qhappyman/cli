#!/usr/bin/env node
import {program} from 'commander';
import download from 'download-git-repo'
import path from 'path'
// const program = new commander()

// program
//     .version('0.0.1')
//     .parse(process.argv);

//   program
// 	.version('1.0.0')
// 	.option('-a, --add', 'add Something')
// 	.option('-u, --update', 'update Something')
// 	.option('-r, --remove', 'remove Something')
// //   .parse(process.argv);
// program.parse()
// console.log(program.opts())

// program.command('mypull <branch>')
// .option('-down','is download repo')
// .action((arg,down)=>{
//     console.log(arg,down)
//     const dir = process.cwd()
//     download('github:Qhappyman/javascript', 'test',function (err) {
//         console.log(err ? 'Error' : 'Success')
//       })
// })

console.log(program.parse(process.argv))
// console.log(program.opts())
// program
//   .name('string-util')
//   .description('CLI to some JavaScript string utilities')
//   .version('0.8.0')
//   .command('create','createnewapp')
//   .option('-s')
// //   .parse(process.argv)
// // program.parse()
//   program.command('createeee')
//   .description('创建文件')
//   .option('-n, --name <char>','输入文件名字')
//   .action((name,opt)=>{
// console.log(name)
// })
// program.parse(); //??作用
// console.log(program.opts())
// program.command('split')
//   .description('Split a string into substrings and display as an array')
//   .argument('<string>', 'string to split')
//   .option('--first', 'display just the first substring')
//   .option('-s, --separator <char>', 'separator character', ',')
//   .action((str, options) => {
//     const limit = options.first ? 1 : undefined;
//     console.log(str.split(options.separator, limit),str);
//   });
// program.parse()
// console.log(program.opts())
// program.option('-m, --mar','this is mar')
// program.parse(); //??作用
// console.log(program.opts())
//option来定义选项,可以定义一个短选项和一个长选项，解析后的选项可以通过opts()方法获取，同时会被传递给命令处理函数
//选项及其选项参数可以用空格分隔，也可以组合成同一个参数。选项参数可以直接跟在短选项之后，也可以在长选项后面加上 =
// serve -p 80
// serve -p80
// serve --port 80
// serve --port=80

// program
//   .option('-d, --debug', 'output extra debugging')
//   .option('-s, --small', 'small pizza size')
//   .option('-p, --pizza-type <type>', 'flavour of pizza','cheap'); //传入参数,最后一项可以设置默认参数
// program.parse()
// console.log(program.opts())
//option选项值类型有两种，不传参数为boolean，传入参数会解析参数<value>

//命令command
//通过.command可以配置命令，配置命令的参数有两种方式，第一种是直接卸载command中接在命令的后面，第二种是.arguments.
//参数<value>为必填，参数[value]为选填，传入参数顺序和命令顺序一致
// program
//   .command('clone <source> [destination]')
//   .argument('<dirs...>','yigename') //当参数为..时表示可以传入多个值，会解析为一个数组，但是必须放在命令后参数最后面
//   .description('clone a repository into a newly created directory')
//   .option('-s','console -s')
//   .action((source, destination,name,command) => { //命令处理函数拿到参数集合和命令本身
//     console.log('clone command called',source,destination,name,command);
//   });
//  program.parse()
// console.log(program.parse(process.argv))

// program
//   .option('--first')
//   .option('-s, --separator <char>');
// //前面的是命令行输入的简称，后面的是options解析到的内容， <char>说明输入的是字符，不写默认会是布尔值
// program.parse();

// const options = program.opts();
// console.log(options)
// const limit = options.first ? 1 : undefined;
// console.log(program.args[0].split(options.separator, limit));