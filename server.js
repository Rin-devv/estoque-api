require('dotenv').config();
const express = require ('express');
const app = express();
const port = 3000;

app.get('/', function(req,res){
    res.send('ola munduuuu , minha senha é ' + process.env.
        senhaBancoDeDados
    )
});

app.post('/produtos', (req,res) =>  {
    res.send('o Produto foi criado!')
})
app.put('/produtos/:id', (req,res) => {
    let id = req.params.id;
    res.send(`o Produto ${id} foi alterado!`)
})
app.delete('/produtos/:id', (req,res) => {
    let id = req.params.id;
    res.send(`o Produto ${id} foi deletado!`)
})
 
app.listen(port, function (){
    console.log('servidor rodando na porta' + port)
})