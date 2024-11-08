const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/',(req,res)=>{
    res.send("Landing page - Grupo 3")
})

app.get('/integrantes',(req,res)=>{
    res.json([
        {
            "nombre":"Michelle",
            "apellido":"Suarez",
            "edad":20,
            "pasatiempo":"Jugar Tenis"
        },
        {
            "nombre":"Marlon",
            "apellido":"Nicolalde",
            "edad":20,
            "pasatiempo":"Jugar Basketball"
        },
        {
            "nombre":"Isaac",
            "apellido":"Quinapallo",
            "edad":20,
            "pasatiempo":"Jugar Videojuegos"
        },
        {
            "nombre":"Joseph",
            "apellido":"Caza",
            "edad":20,
            "pasatiempo":"Jugar Futbol"
        }
    ])
})



app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});