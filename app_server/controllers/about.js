const about = function(req,res, next){
    res.render('about',{title: 'About My Site'});
}

module.exports = {
    about
}