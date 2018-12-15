$('.form-actions input').click(function() {
    var error = false;

    $('.active.tab-form .simple-value').each(function(index) {
        var simpleValue = $('.active.tab-form .simple-value')[index];

        console.log(simpleValue.value);
        if(!simpleValue.value) {
            
            simpleValue.classList.add('red-border');
            error = true;
        } else {
            simpleValue.classList.remove('red-border');
        }
    });

    if(error) {
        return;
    }

    var tabid = document.querySelector('.tab-form.active').getAttribute('tabid');

    tabid = +tabid + 1;

    if(tabid <= 5) {
        $('.tab-form').removeClass('active');

        $('[tid="'+ tabid +'"]').addClass('active');
        $('[tabid="'+ tabid +'"]').addClass('active');
    };
})