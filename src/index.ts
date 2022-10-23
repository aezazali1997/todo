import {Answers} from 'inquirer';
import inquirer from 'inquirer';
let todos= [];
inquirer.prompt([
  {
    name:'item',
    type:'input',
    message:'Enter the todo',
  }
]).then((answer:Answers)=>{
  console.log('Todo\n'+answer.item);
})