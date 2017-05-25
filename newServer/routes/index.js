module.exports = function(app) {
     app.get('/', (req, res) => {
        res.json({ message: 'hello index!' });
    });
    app.use('/api', require('./reg.js'));
    app.use('/api', require('./login.js'));
}