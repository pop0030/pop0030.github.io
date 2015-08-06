//圖片序列
var frames_array = SpriteSpin.sourceArray('./img/img_0_{lane}_{frame}.jpg', {
    lane: [0, 3], //垂直
    frame: [0, 30], //橫向
    digits: 1 //位數
});;


$('#p003').spritespin({
    source: frames_array,
    width: 720,
    height: 720,
    frames: 31,
    lanes: 4,
    lane: 1,
    frame: 0,
    sense: 1,
    senceLane: -0.5,
    animate: false,
    mods: ['drag', 'zoom', '360'],
    render: 'canvas',

});

var api = $('#p003').spritespin("api");

$('.arrow-right').click(function(event) {
    api.stopAnimation();
    api.nextFrame();
});
$('.arrow-left').click(function(event) {
    api.stopAnimation();
    api.prevFrame();
});
$('.arrow-up').click(function(event) {
    api.stopAnimation();
    api.prevLane();
});
$('.arrow-down').click(function(event) {
    api.stopAnimation();
    api.nextLane();
});

$('#arrow-right').click(function(event) {
    api.stopAnimation();
    api.nextFrame();
});
$('#arrow-left').click(function(event) {
    api.stopAnimation();
    api.prevFrame();
});
$('#arrow-up').click(function(event) {
    api.stopAnimation();
    api.prevLane();
});
$('#arrow-down').click(function(event) {
    api.stopAnimation();
    api.nextLane();
});

var details_array = [0, 8, 15];
var detail_index = 0;

$('#f01').click(function(event) {
    api.updateLane(1);
    setDetailIndex(0);
});

$('#f02').click(function(event) {
    api.updateLane(1);
    setDetailIndex(1);
});

$('#f03').click(function(event) {
    api.updateLane(1);
    setDetailIndex(2);
});

$('#f04').click(function(event) {
    api.updateLane(0);
    api.updateFrame(0);
});

$('#zoom').click(function(event) {
    api.stopAnimation();
    api.toggleZoom();
});

$('#startzoom').click(function(event) {
    api.stopAnimation();
    api.startZoom();
});

$('#endzoom').click(function(event) {
    api.stopAnimation();
    api.endZoom();
});

$('#autopaly').click(function(event) {
    api.toggleAnimation();
});


$('#fullscreen').click(function(event) {
    api.requestFullscreen();
    return false;
});

function setDetailIndex(index) {
    detail_index = index;
    api.playTo(details_array[detail_index]);
}
