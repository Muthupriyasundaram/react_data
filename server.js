const express =require('express');
    const app =express();
    app.use((req,res,next) =>{
        const currentTime =new Date().toLocaleString();
        console.log('Time:',currentTime);
        next();
    });
    app.get('/',(req,res) =>{
        res.send('successful response');
    });
    app.listen(3000,() => console.log('Example app listening on port'));

