$(document).ready(function () {
    $(".set > a").on("click", function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass("active");
            $(this).siblings('.content').slideUp(200);
            $(".set > a i").removeClass("fa-sort-asc").addClass("fa-sort-desc");
        }
        else {
            $(".set > a i").removeClass("fa-sort-asc").addClass("fa-sort-desc");
            $(this).find("i").removeClass("fa-sort-desc").addClass("fa-sort-asc");
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $('.content').slideUp(200);
            $(this).siblings('.content').slideDown(200);
        }
    });
    
});
var check = function(blockId){
   var id = blockId
    var sectorId = $("input[name='"+id+"']")
    sectorId.val(function(index,newVal){
         if(newVal < 0)  return 0
        else  if(newVal > 20) return 20
        else return newVal
            })
    summ()
}
var timeCalc = function () {
    return +($("input[name='posudQuanity']").val() * 0.5) + +$("input[name='ytyhQuanity']").val() + +$("input[name='timeCardQuanity']").val()
}
var decr = function(blockId) {
    var id = blockId
    var sectorId = $("input[name='"+id+"']")
    sectorId.val(function(index,newVal){
         if(newVal > 0)  return +newVal - 1
        else  return 0
            })
    summ()
}
var incr = function(blockId) {
    var id = blockId
    var sectorId = $("input[name='"+id+"']")
    sectorId.val(function(index,newVal){
        if(newVal < 19) return +newVal + 1
         else return 20
            })
    summ()
}
$('#1buttonChoose').click(function(){
    $('.checkButtonTest').removeClass('choosenButton')
    $('#1buttonChoose').addClass('choosenButton')
    summ()
    });
$('#2buttonChoose').click(function(){
    $('.checkButtonTest').removeClass('choosenButton')
    $('#2buttonChoose').addClass('choosenButton')
    summ()
    });
$('#3buttonChoose').click(function(){
    $('.checkButtonTest').removeClass('choosenButton')
    $('#3buttonChoose').addClass('choosenButton')
    summ()
    });
var summ = function(){
    sum = 0;
    sum += 4000 + $("input[name='roomQuanity']").val() * 3000 + $("input[name='bathRoomQuanity']").val() * 4000 + $("input[name='holodQuanity']").val() * 2000 + $("input[name='dyxQuanity']").val() * 2000 + $("input[name='pechQuanity']").val() * 2000 + $("input[name='stollQuanity']").val() * 3500 + $("input[name='posudQuanity']").val() * 1500 + $("input[name='ytyhQuanity']").val() * 3000 + $("input[name='balconyQuanity']").val() * 3500 + $("input[name='windowsQuanity']").val() * 2500 + $("input[name='timeCardQuanity']").val() * 3000;
    if($("input[name='afRem']").prop("checked")) sum += 4000
    if($("input[name='general']").prop("checked")) sum += 4000
    if($('#2buttonChoose').hasClass('choosenButton')) sum *=0.9
    if($('#3buttonChoose').hasClass('choosenButton')) sum *=0.8
    $('#cost').empty()
    $('#cost').text(sum + " ТЕНГЕ")
    $('#hour').empty()
    $('#hour').text(timeCalc() +" часов")
    return sum;
};
$(document).ready(summ ());