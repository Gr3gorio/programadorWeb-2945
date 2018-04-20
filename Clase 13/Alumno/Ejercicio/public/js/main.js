$(document).ready(function () {
  console.log('Init')
  $('#home').click(function () {
    $('#root').load('../partials/home.html', function () {
      console.log('Carga Home')
    })
  })
})
