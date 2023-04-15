const fs = require('fs');

fs.writeFile('fileass.txt', 'Bipul is chhutiya because he disrespect Sanatani culture', (err)=>{
    console.log(err)
})

const read = fs.readFile('fileass.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log(err)
        return;
    } 
        const file = data
        fs.readFile('fileass.txt', 'utf-8', (err,data)=>{
            if(err){
                console.log(err)
                return;
            }
            const file2 = data
            fs.appendFile('fileass.txt', `${file}, ${file2}`, (err, data)=>{
                if(err){
                    console.log(err)
                    return;
                }
                console.log(data)
            })
        })
})

// in this code we have covered everything about the async filesystem, including append, read and write even we have read the file from some other file and then wirte in some other file, that is we have created new file for that.