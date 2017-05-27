module.exports = function(app) {
     app.get('/', (req, res) => {
        res.json({ message: 'hello index!' });
    });
    app.use('/users', require('./reg.js'));
    app.use('/users', require('./login.js'));
}