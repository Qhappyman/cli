#!/usr/bin/env node
import  inquirer from 'inquirer';
//教学文档:https://www.gingerdoc.com/tutorials/nodejs-interactive-command-line-prompts
//官网:https://www.npmjs.com/package/inquirer#installation
inquirer
  .prompt([
    {
        type:'input',
        name:'name',
        message: 'What is our name?',
        default:'jack',
        filter:(e)=>{
            return 'Mr.'+e
        }
    },
    {
        type:'input',
        name: 'phone',
        message: 'What is your phone?',
        default: (param) => {
            return param.name === 'Mr.jack'? '12345678910' : '98765432198'
        },
        validate: function(val) {
            if(val.match(/\d{11}/g)) { // 校验位数
                return true;
            }
            return "请输入11位数字";
        }
    },
    {
        type:'list',
        name:'company',
        message:'What is your company',
        choices:['bytedence','BYD','bilibili'],
        default: ['bytedance'],
        when:(param)=>{
            // console.log(param)
            return !param.name.includes('jack')
        }
    },
    {
        type:'rawlist',
        name:'job',
        message:'what is your job',
        choices:['frontEnd','backEnd','pm']
    },
    {
        type:'expand',
        name:'home',
        message:'where are you from?',
        choices:[
        {
          key: 's',
          value: 'shanxi',
        },
        {
          key: 'b',
          value: 'beijing',
        },
        {
          key: 'c',
          value: 'sichuan',
        },
        {
          key: 'o',
          value: 'others',
        },
      ],
    },
    {
        type:'checkbox',
        name:'favorite',
        message:'what is your favorite things',
        choices:['study','lol','hikiing','sleep','exercise']
    },
    { 
        type:'editor',
        name:'introduce',
        message:'introduce yourself'
    },
    {
        type:'password',
        name:'password',
        message:'tell me your computer password'
    }
  ])
  .then(answers => {
    console.info('Answer:', answers);
    if(answers.home === 'others'){
        inquirer.prompt(
            [
                {
                    type:'input',
                    name:'home',
                    message: 'What is our home?'
                }
            ]
            )
        .then(res => {
            answers.home = res.home;
            console.log(answers)
        })
    }
  });