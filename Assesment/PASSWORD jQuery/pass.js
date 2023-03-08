$(document).ready(function() {
    $(".password").on("keyup", function(){ 
        //set password strength 0
        var password_strength = 0;
        //check if password length is less than 6 characheter
        if ($(this).val().length < 6) { 
            $(".password_strength")
            .removeClass("strength_week strength_medium strength_good strength_strong")
            .text("Very Week")
            .addClass('strength_veryweek');
            return false;
        }
        //check if password length is greater than 7 charachter
        if ($(this).val().length > 7) { password_strength += 1;}
        //check if password has upper and lower charachters
        if ($(this).val().match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) { password_strength += 1; }
        //check if password has upper and lower charachters and numbers
        if ($(this).val().match(/([a-zA-Z])/) && $(this).val().match(/([0-9])/)) { password_strength += 1; }
        //check if password has one special charachters
        if ($(this).val().match(/([!,%,&,@,#,$,^,*,?,_,~])/)) { password_strength += 1; }
        //check if password has two special charachters
        if ($(this).val().match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,",%,&,@,#,$,^,*,?,_,~])/)) { password_strength += 1; }
        //check and set strength text according password strength value
        if (password_strength == 1 ) { 
            $(".password_strength")
            .removeClass("strength_veryweek strength_medium strength_good strength_strong")
            .text("Week")
            .addClass('strength_week'); 
        } 
        else if (password_strength == 2 ) { 
            $(".password_strength")
            .removeClass("strength_week strength_veryweek strength_good strength_strong")
            .text("Medium")
            .addClass('strength_medium'); 
        } 
        else if (password_strength == 3 ) { 
            $(".password_strength")
            .removeClass("strength_week strength_medium strength_veryweek strength_strong")
            .text("Good")
            .addClass('strength_good'); 
        }
        else if (password_strength == 4 ) { 
            $(".password_strength")
            .removeClass("strength_week strength_medium strength_good strength_veryweek")
            .text("Strong")
            .addClass('strength_strong'); 
        }
        
        // you can check password strength in console
        console.log(password_strength);
    });
});