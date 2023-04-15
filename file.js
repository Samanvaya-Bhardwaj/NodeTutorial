//  there are 2 types of methods we can access file module, that is synchronus and non synchronus

// sysc

const fs = require('fs');
fs.writeFileSync("file.txt", "I am going to fuck Ravi Randi and Gourav Meetha even bipul is ready to provide me blowjob \n")

fs.appendFileSync("file.txt", '1 more thing i want to add they give their ass for just 20RS \n')

const read = fs.readFileSync('file.txt', 'utf-8');
fs.appendFileSync("file.txt", read)
fs.writeFileSync('./Content/Content.txt', read)

const first = fs.readFileSync('./Content/first.txt', 'utf-8')
const second = fs.readFileSync('./Content/second.txt', 'utf-8')

fs.appendFileSync('./Content/Content.txt', `${first}, \n ${second}`)