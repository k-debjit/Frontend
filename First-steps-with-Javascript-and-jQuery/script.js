$('.show-filters').on('click', function(){
  //1. when our navigation is expanded, collapse it
  //2. Change text of show filters to s'show filters'
  //3. otherwise, if the nav is collapsed, expand it
  //4. change the text to say 'hide filters'
  if($('.filters-list').is(':visible')){
    $('.filters-list').slideUp()
    $('.show-filters').text('show filters')
  }
  else{
    $('.filters-list').slideDown()
    $('.show-filters').text('hide filters')
  }
  //this will block the default behaviour of the # href jumping
  //to the top of the page
  return false
})

$('.filters-list a').on('click',function(){
  var filter = $(this).attr('data-filter')
  //1. hide all the products
//2. show the products with a particular filter
$('.product').hide()
$(filter).show()

// first we remove all the selected classes from our filters
$('.filters-list a').removeClass('selected')
//this will add a class name of selected to the current filter
//link what we have clicked on
$(this).addClass('selected')

  //this blocks the link from following the href
  return false
})

