#!/usr/bin/env node
import { program } from 'commander';
import download from 'download-git-repo'
import handlebars from 'handlebars';
import inquirer from 'inquirer';
import ora from 'ora';
import chalk from 'chalk';
import symbols from 'log-symbols'
import fs from 'fs'

// 要删除非空文件夹，需要先把文件夹里的文件删除，再删除空文件夹
function removeDir(path) {
    let data = fs.readdirSync(path); //data是一个数组，文件夹名和文件名用引号括起来，如["1", "2.txt", "3.html"]
  
    for (let i = 0; i < data.length; ++ i) {
      //用循环判断数组中的元素是文件还是文件夹，是文件就删除，是文件夹就继续查找
      let url = path + "/" + data[i];
      let stat = fs.statSync(url); //用fs.stat获取文件或文件夹的详细信息
      if (stat.isDirectory()) {
        //用isDirectory判断元素是不是文件夹，是的话继续查找
        removeDir(url);
      } else {
        //不是文件夹的话，就是文件，删除文件
        fs.unlinkSync(url);
      }
    }
    // 删除空文件夹
    fs.rmdirSync(path);
  }
  
program.version('1.0.0', '-v, --version')
    .description('create a reduck model filename.js in your path')
    .command('create <filename>')
    .option('-p, --path [value]','template file path, default current diectory')
    .action((filename, opts) => {
        console.log(filename,opts)
        if(!fs.existsSync(filename)){
            inquirer.prompt([
                {
                    name: 'modelName',
                    message: '请输入model名字'
                },
                {
                    name: 'modelType',
                    message: '请输入model类型'
                }
            ]).then((answers) => {
                const spinner = ora('正在下载模板...');
                spinner.start();
                const currentDir = process.cwd();
                const createFileDir = opts.path || currentDir;
                download('github:Qhappyman/cli', currentDir, (err) => {
                    if(err){
                        spinner.fail();
                        console.log(symbols.error, chalk.red(err));
                    }else{
                        
                        const template = `${currentDir}/practice/template.js`; //模板文件所在位置
                        const newFileName = `${createFileDir}/${filename}.js` //新的文件存放位置
                        const meta = {
                            filename,
                            modelName: answers.modelName,
                            modelType: answers.modelType
                        }
                        if(fs.existsSync(template)){
                            const content = fs.readFileSync(template).toString();
                            const result = handlebars.compile(content)(meta);
                            fs.existsSync(createFileDir)?'': fs.mkdirSync(createFileDir)
                            fs.writeFileSync(newFileName, result); //将模板渲染后的内容写入新文件
                            console.log('cure',currentDir)
                            // fs.rmdirSync(`${currentDir}/practice`)
                            removeDir(`${currentDir}/practice`) //删除github下载的模板目录
                        }
                        console.log(symbols.success, chalk.green('项目初始化完成'));
                        spinner.stop();
                    }
                })
            })
        }else{
            // 错误提示项目已存在，避免覆盖原有项目
            console.log(symbols.error, chalk.red('项目已存在'));
        }
    })
program.parse(process.argv);