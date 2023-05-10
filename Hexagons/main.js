$('.filter a').on('click',function(){
    var item= $(this).attr('data-filter')
    $('.slide').hide()
    $(item).show()
    return false
  })
  
  $('.filter a').on('click',function(){
    $('.filter a').removeClass()
    $(this).addClass('selected')
    return false
  })
  
  $('.show-filter').on('click', function(){
    if($('.filter').is(':visible')){
      $('.show-filter').text('Hide Filter')
      $('.filter').hide()
    }
    else{
      $('.show-filter').text('Show Filter')
      $('.filter').show()
    }
    return false
  })