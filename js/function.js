shuffle = function(v){
    for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
    return v;
};

// 自訂定函數-經歷前加線
expoPreLine = function() {
    let ec = $('.expocard');
    let em = $('.expo_main');
    let ecHeight = ec.height();
    let ecOuterHeight = ec.outerHeight(true);
    let ecNum = ec.length - 1;
    let emHeight = em.height();
    let expoPreHeight = (ecHeight + ecOuterHeight) / 2;
    $('.expo_pre').css({
        top: ecHeight / 2,
        height: expoPreHeight * ecNum
    });
};