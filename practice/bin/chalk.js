#!/usr/bin/env node
import chalk from 'chalk';
import logSymbols from 'log-symbols';
import ora from 'ora'

//chalk文本样式
const log = console.log;
log(chalk.blue('12312'))
log(chalk.blue.bgRed.bold('Hello world!'))
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

//定义特殊颜色
const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color
console.log(error('Error!'));
console.log(warning('Warning!'));

//log-symbols符号
log(logSymbols.success,'success')
log(logSymbols.error,'error')
log(logSymbols.info,'info')
log(logSymbols.warning,'warning')

 //loading图标
const spinner = ora('Loading unicorns').start();
setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Loading rainbows';
}, 2000);
setTimeout(() => {
    spinner.stop()
}, 4000);
