var player = true

$('.square').click(function () {
  if (!$(this).addClass('circle') || $(this).addClass('cross'))
    if (player) {
      $(this).addClass('circle')
    } else {
      $(this).addClass('cross')
    }
  player = !player
})
