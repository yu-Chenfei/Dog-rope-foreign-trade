// Module 1 tab
$('#oneWrap #twoWrapRow button').on('mouseover', function () {
  $(this).css({ 'color': 'white', 'backgroundColor': 'rgb(245,153,44)' }).siblings().css({ 'color': 'black', 'backgroundColor': 'rgb(239,239,239)' });
  let $i = $(this).index();
  let $l = '';
  if ($i == 0) {
    $l = '0';
  } else if ($i == 1) {
    $l = '78%';
  }
  $('#oneWrap #oneWrapRowTop').css({ 'right': $l, 'transition': 'all linear .4s' });
  $('#oneWrap #oneWrapRowTop>div').eq($i).css('opacity', 1).siblings().css('opacity', 0);
});