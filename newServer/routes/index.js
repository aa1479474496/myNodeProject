module.exports = function(app) {
     app.get('/', (req, res) => {
        res.json({ message: 'hello index!' });
    });
    app.get('/proxy', (req, res) => {
        res.json({ message: '测试代理' });
    });
    app.use('/users', require('./reg.js'));
    app.use('/users', require('./login.js'));
    app.use('/users', require('./upload.js'));
}