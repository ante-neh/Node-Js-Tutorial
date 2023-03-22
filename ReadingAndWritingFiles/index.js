const fs = require("fs")
const path = require('path')
const fsPromises = require("fs").promises

// fs.readFile('./starter.txt', (err, data) =>{
//     if (err) throw err 
//     console.log(data)// this will print the buffer form of the data
// })


// fs.readFile('./starter.txt', (err, data)=>{
//     if(err) throw err
//     console.log(data.toString()) // toString()  method used to change the buffer mode to string format(readable format)
// })

// fs.readFile('./starter.txt', 'utf8' /*a parameter used to change the buffer mode to string format*/, (err, data) =>{
//      if(err) throw err
//      console.log(data)
//  })


//using the path module to spacfiy the path we are dealing with
// fs.readFile(path.join(__dirname, 'starter.txt'), 'utf8', (err, data)=>{
//     if (err) throw err
//     console.log(data)
// })
// node js is asyncronous the output of this program will be Hello... then the content on starter.txt
// console.log('Hello....')



//exit on uncaught errors
// fs.readFile('./home.txt', 'utf8', (err, data)=>{
//     if (err) throw err
//     console.log(data)
// })


// process.on('uncaughtException', err =>{
//     console.error('There was an uncaught error: ${err}')
//     process.exit(1)
// })

//writing to file
// fs.writeFile(path.join(__dirname, 'reply.txt'), 'Nice to meet you', (err) => {
//     if (err )throw err
//     console.log('write complete')

//     //appending to a file
//     fs.appendFile(path.join(__dirname, 'reply.txt'), 'Arsenal', err=>{
//     if (err) throw err
//     console.log('append complete')

//     // renaming a file

//         fs.rename(path.join(__dirname, 'reply.txt'), (path.join(__dirname, 'newReply.txt')), err=>{
//         if (err) throw err
//         console.log("rename complete")
//         })
//     })
    
// })



// example
// fs.open(path.join(__dirname, 'new.txt'),'w', err=>{
//     if (err) throw err
//     console.log("file created successfully")
// })

// fs.appendFile(path.join(__dirname, 'new.txt'), 'hello', err=>{
//     if (err) throw err
//     console.log('file updated successfully')
// })

// fs.readFile(path.join(__dirname, 'new.txt') ,'utf8', (err, data)=>
// {
//     if (err) throw err
//     console.log(data)
// })

//  fs.writeFile(path.join(__dirname, 'new.txt'),'Arsenal', err=>{
//      if (err) throw err
//      console.log('file updated successfully')
//  })

// fs.readFile(path.join(__dirname, 'new.txt'),'utf8', (err, data)=>{
//     if (err) throw err
//     console.log(data)
// })

// fs.unlink(path.join(__dirname, 'new.txt'), err=>{
//     if (err) throw err
//     console.log("file deleted")
// })
// WORKING WITH FSPROMISES


const fsOp = async() =>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname, 'starter.txt'), 'utf8')
        console.log(data)
        await fsPromises.unlink(path.join(__dirname, 'starter.txt'))
        await fsPromises.writeFile(path.join(__dirname, 'promise.txt'),data)
        await fsPromises.appendFile(path.join(__dirname, 'promise.txt'), '\n season 4')
        await fsPromises.rename(path.join(__dirname, 'promise.txt'),path.join(__dirname, 'newPromise.txt'))
        const newData = await fsPromises.readFile(path.join(__dirname, 'newPromise.txt'),'utf8')
        console.log(newData)
    }
    catch(err)
    {
        console.log(err)
    } 
}


fsOp()

