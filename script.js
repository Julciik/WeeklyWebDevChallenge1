var register = document.getElementsByName('registerForm')[0];
var confPass = document.getElementsByName('passwordConfirm')[0];

confPass.addEventListener("input", function (event) {
    if (confPass.value != document.getElementsByName('password')[0].value) {
        confPass.setCustomValidity('Hasła muszą się zgadzać.');
    } else {
        confPass.setCustomValidity('');
    }
});
