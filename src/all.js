$(document).ready(function () {
  $('.QAList').click(function (e) {
    e.preventDefault(e)
    // 標題變色
    $(this).find('.QATitle').toggleClass('active')
    // 下方段落打開
    $(this).find('.QAcontent').slideToggle()
    // 其他的段落收起來
    $(this).siblings().find('.QAcontent').slideUp()
    // 其他的標題收回active
    $(this).siblings().find('.QATitle').removeClass('active')
  })
  $('.QAList').click(function (e) {
    e.preventDefault(e)
    $(this).find('.fa-plus').toggleClass('d-none')
    $(this).find('.fa-minus').toggleClass('d-block')
  })
  $('.serviceItem a').click(function (e) {
    e.preventDefault()
    $(this).toggleClass('active')
    $(this).parent().siblings().find('a').removeClass('active')
  })
  $('.member10000').click(function (e) {
    e.preventDefault()
    $('.memberPrice').text('10000')
  })
  $('.member15000').click(function (e) {
    e.preventDefault()
    $('.memberPrice').text('15000')
  })
  $('.member20000').click(function (e) {
    e.preventDefault()
    $('.memberPrice').text('20000')
  })
  $('.member25000').click(function (e) {
    e.preventDefault()
    $('.memberPrice').text('25000')
  })
  $('.memberUp25000').click(function (e) {
    e.preventDefault()
    $('.memberPrice').text('>25000')
  })
})
