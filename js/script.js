var emailRegexp = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*");
var nanRegexp = new RegExp("^([^0-9]*)$");


function submitForm(event) {
    event.preventDefault();
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var message = $("#message").val();

    var validationPassed = validateFields(firstname, lastname, email);

    //Boolsk sats - Om x är sant kör koden, annars inte.
    validationPassed && handleModal(firstname);
}


function validateFields(firstname, lastname, email) {
    var isValid = true;
    $('.error-message').remove();

    if (firstname.length < 2 || !nanRegexp.test(firstname)) {
        isValid = false;
        $('#firstname').before('<div class="error-message">Förnamn måste innehålla minst 2 karaktärer och får inte vara siffror</div>');
    }

    if (lastname.length < 2 || !nanRegexp.test(lastname)) {
        isValid = false;
        $('#lastname').before('<div class="error-message">Efternamn måste innehålla minst 2 karaktärer och får inte vara siffror</div>');
    }

    if (email.length < 1 || !emailRegexp.test(email)) {
        isValid = false;
        $('#email').before('<div class="error-message">Email måste följa formatet: exempel@mail.com</div>');
    }

    return isValid;
}

function handleModal(firstname) {
    //Remove focus from form
    $('*:focus').blur();

    //Clear form
    $('#contact-form').trigger('reset');

    //Show modal
    $('main').append('<div class="_modal"><div class="_modal-content"><h1>Tack ' + firstname + ' för ditt meddelande!</h1></div></div>');

    //Remove modal
    $('._modal').click(function () {
        $('._modal').addClass('_hide');

        setTimeout(function () {
            $('._modal').remove();
        }, 300)
    })
}


