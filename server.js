const express = require('express'); 
const path = require('path')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)

const sequelize = require('./config/connection')

const app = express(); 
const PORT = process.env.PORT || 3001; 

const sess = {
    secret: 'Super secret',
    resave: false, 
    saveUninitialized: true, 
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
    },
    store: new SequelizeStore({
        db: sequelize,
    })
}

app.use(session(sess));

app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 
app.use(express.static(path.join(__dirname, 'public')));



sequelize.sync({force: true}).then(() => {
app.listen(PORT, () => console.log(`ServerRun - http://localhost:${PORT}`))
}); 