const newsRouter = require('./news');

function route(app){

    // router default
    app.get('/', (req, res) => {
        res.render('home');
    });
    
    app.get('/search', (req, res) => {
        
        res.render('search');
    });

    //nạp tat ca router lien quan den news từ -> news.js
    app.use('/news', newsRouter);

    
}

module.exports = route;