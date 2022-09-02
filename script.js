$('h3').css('color', 'blue');
$('#error-msg').text('Number Only').css('opacity', '0')
var numbers = /[^0-9]/gi;

$('#text').keyup(function() {
    
    if ($('#text').val().match(numbers)) {
        $('#error-msg').css('opacity','1')
    } else {
        $('#error-msg').css('opacity','0')
    }
})

$().ready(function(){
    $('p.para1').css({color:'cyan', background: 'grey'})
    $('p.para2').addClass('myClass')
    $('p.para2').removeClass('myClass')
    $('#btn1').click(function(){
        $('p.para2').toggleClass('myClass')
    })

    $('#myDiv').text('Hello, I\'m under the water').css('color', 'pink')
    $('#myDiv').html('<h1>Lorem Ipsum</h1>')
    //alert($('#myDiv').text())
    $('#items').append('<li>(Appended) List Item</li>')
    $('#items').prepend('<li>(Prepended) List Item</li>')
    $('#items li:nth-child(3)').appendTo('ul li:nth-child(4)')
    $('#items').before('<h3>Before</h3>')
    $('#items').after('<h3>After</h3>')
    $('#items li:nth-child(2)').detach()
    //$('ul').empty()
    $('a').attr('target', '_blank')
    $('a').after($('a').attr('href')).css('display', 'block')
    //$('a').removeAttr('target')
    //$('p').wrapAll('<h1></h1>')
    //$('p').wrap('<h1></h1>')
    $('#newItem').before('<h4>Enter new Item to the List</h4>')
    $('#newItem').keyup(function(e){
        let code = e.which
        e.preventDefault()
        if(code == 13) {
            $('#items').append('<li>'+ e.target.value +'</li>')
            $('#newItem').val('')
        }
    })

    var myArr = ['Jan', 'Alyssa','Prench','Kym']

    $.each(myArr, function(i, val){
        $('#users').append('<li>'+(i+1)+'.) '+val+'</li>')
    })

    var liArr = $('#items li').toArray()
    $.each(liArr, function(i, val){
        console.log(val.innerHTML);
    })


    // For Effects and Animations
    $('#btnFadeOut').click(function(){
        $('#box').fadeOut(1000, function(){
            $('#btnFadeOut').text('It\'s Gone')
        })
    })
    $('#btnFadeIn').click(function(){
        $('#box').fadeIn(1000, function(){
            $('#btnFadeOut').text('Fade-Out')
        })
    })
    $('#btnFadeTog').click(function(){
        $('#box').fadeToggle(1000)
    })

    $('#btnSlideDown').click(function(){
        $('#box').slideDown(1000, function(){
            $('#btnFadeOut').text('It\'s Gone')
        })
    })
    $('#btnSlideUp').click(function(){
        $('#box').slideUp(1000, function(){
            $('#btnFadeOut').text('Fade-Out')
        })
    })
    $('#btnSlideTog').click(function(){
        $('#box').slideToggle(1000)
    })
    $('#btnStop').click(function(){
        $('#box').stop()
    })
})

