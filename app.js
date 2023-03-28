const express =  require('express')
const connection = require('./core')

const PORT = 8080
const app = express()

connection.connect((error) => {
    if(error){
        console.log(error);
    }else{
        console.log('Connected');
    }
})
app.listen(PORT, ()=>{
    console.log("Server is running on Port:", PORT)
})

app.use(express.json())
