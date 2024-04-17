import inquirer from "inquirer"
const answer:{
    geo:string
}= await inquirer.prompt([{
    name:"geo",
    type:"input",
    message:"Enter your sentence to count the words"
}])
const news = answer.geo.trim().split(' ');

console.log(news)

console.log(`Your sentence word count is ${news.length}`)