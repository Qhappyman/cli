#!/usr/bin/env node
import { program } from 'commander'

//program testCommander create -V
// program.version('1.0.0')
// console.log(process.argv)
// program.parse()

//version testCommander -v
// program
//   .version('1.0.0','-v, --version','this is cli version')
//   .parse(process.argv);

// program.version('1.0.0')
// .description('this is a commander program')
// program.parse()

// function myparse(val,val2){
//     console.log(val,val2)
//     return val+val2
// }
//testCommander --company=bytedance
// program.option('-a')
// .option('-n --name','enter your name')
// .option('-s, --no-student')
// .option('-c, --company <value>', 'enter your company','baidu')
// .option('-h, --home [value]', 'enter your home',myparse,1)
// .option('-m, --mularg [value...]','mul arguments')
// program.parse()
// console.log(program.opts())

//command
function handleAge(age,arg){
    return age -10 - arg
}
program
    .command('create <project> [owner]')
    .argument('<age>','enter age', handleAge,1)
    .option('-s --save','add save to dependence')
    .option('-n, --name <char>', 'enter char')
    .description('this is a command')
    .action((project,owner,age,option,command)=>{
        console.log(project,owner,age,option,command)
})

program.parse()