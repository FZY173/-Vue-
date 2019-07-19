const express = require("express");
const app = express();

// 允许跨域问题
app.use(require('cors')());
app.use(express.json());

app.set('secret','123ssss')

//托管静态文件，可以通过/uploads去访问
app.use('/uploads',express.static(__dirname + '/uploads'))


app.get('/', async (req,res) => {
    res.send('indexaaaaaaaaaaaaaa')
});

require('./plugins/db')(app)
require('./routes/admin')(app)

app.listen(3001,() => {
    console.log('http://localhost:3001/')
});
