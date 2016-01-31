module.exports = function(app) {
	app.get('/views/:page', function(req, res) {
		res.render(`partials/${req.params.page}`)
	})

	app.get('*', function(req, res) {
		res.render('index')
	})
}
