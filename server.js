const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.status(200).send('Olá mundo')
}); 

app.listen(3000, () => {
    console.log('Servidor Api NoFood iniciano na porta 3000.');
});
