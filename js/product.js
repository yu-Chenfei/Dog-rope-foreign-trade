$(function () {
  // Modular 1 tab1
  $('#oneWrap .list_btn').on('click', function () {
    let $i = $(this).index();
    $('#oneWrap .one #oneRow').eq($i - 1).css('display', 'block').siblings().css('display', 'none');
  });
  // Modular 1 tab2
  $('#oneWrap .list_btn1').on('click', function () {
    let $i = $(this).index();
    $('#oneWrap .two #oneRow').eq($i - 1).css('display', 'block').siblings().css('display', 'none');
  });
});