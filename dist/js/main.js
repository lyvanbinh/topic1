
(function ($) {
    "use strict";


    /*==================================================================
   [ Focus input ]*/
    $('.input100').each(function () {
        $(this).on('blur', function () {
            if ($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })
    })


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



})(jQuery);

document.addEventListener('DOMContentLoaded', function () {
    // Lấy tham chiếu đến form và các trường input
    var loginForm = document.querySelector('.login100-form');
    var usernameInput = document.querySelector('input[name="username"]');
    var passwordInput = document.querySelector('input[name="pass"]');

    // Xử lý sự kiện khi form được submit
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Ngăn chặn form submit mặc định

        // Kiểm tra tên đăng nhập và mật khẩu
        if (usernameInput.value === 'admin' && passwordInput.value === 'admin') {
            // Nếu đúng, chuyển hướng đến trang index.html
            window.location.href = 'index.html';
        } else {
            // Nếu sai, hiển thị thông báo hoặc thực hiện các hành động khác
            alert('Invalid username or password. Please try again.');
        }
    });
});



