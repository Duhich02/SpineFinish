// const fs = require('fs');
// const path = require('path')
// const axios = require('axios')
// const http = require('http')

//npx express-generator
//set DEBUG='myapp:*'; npm start

// fs.writeFile('1.txt', 'hello', 'utf-8', (err)=>{
//     if(err){
//         throw err;
//     }
//     console.log('done')
// })

// fs.readFile(path.resolve(__dirname, '1.txt'), 'utf-8', (err, data) => {
//     if(err){
//         throw err
//     }
//     console.log(data)
// })

// ;(async ()=>{
//     const data = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
//     fs.writeFile(path.resolve(__dirname, '3.txt'), JSON.stringify(data), 'utf-8', (err)=>{
//         if(err){
//             throw err;
//         }
//         console.log('done')
//     })
// })()

// http
//     .createServer((request, response)=> {
//         if (request.url === )
//         response.write(request.url)
//         response.end()
//     })
//     .listen(3000);







// const express = require('express')
// const app = express()
// const port = 3000
//
// app.get('/users', (req, res) => {
//     return res.status(200).json({
//         status:'ok'
//     })
// })
// app.get('/users/:id', (req, res) => {
//     return res.status(200).json({
//         status:'ok'
//     })
// })
//
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })






// const mysql = require('mysql2')
//
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: '1ttt'
// })
//
// connection.query('SELECT * FROM users;', (err, result) => {
//     if(err){
//         throw err
//     }
//     console.log(result)
//     process.exit(0)
// })





// const {Sequelize} = require('sequelize')
//
// const sequelize = new Sequelize('1ttt', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql'
// })
//
// ;(async ()=>{
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// })()
///hk
//        const user = await  User.create({
//             course_name: 'web dev',
//             instructor: 'Ivan',
//             credits: '22500'
//         });



// sequelize.authenticate().then(() => {
//     console.log('Connected!')
//     sequelize.close().then(() => {
//         console.log('Disconnected!')
//     })
// })