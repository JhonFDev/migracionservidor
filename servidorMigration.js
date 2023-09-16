const express = require("express");
const app = express();
const port = 3000;

    const tasksis = [
        {
            id: '123456',
            isCompleted: false,
            description: 'Walk the dog',
        },
        {
            id: '654321',
            isCompleted: true,
            description: 'Walkingdeath',
        },
        {
            id: '142536',
            isCompleted: false,
            description: 'magic moment',
        }
    ]
    app.get('/tasks', (req, res) => {
        res.json(tasksis);
      });

app.listen(port,() =>{
    console.log(`el servior esta corriendo en el puerto: ${port}`)
})