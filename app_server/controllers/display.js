const display = function(req,res,next){
    res.render('display',{h1:'under construction'});
};

const index = function(req,res,next){
    res.render('index', {title : 'Gita Book Store'});
};

module.exports = {
    display,
    index
}