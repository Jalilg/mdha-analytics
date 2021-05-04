        $(document).ready(function (){
            $("#esOnlyNarrLink").click(function (){
                $('html, body').animate({
                    scrollTop: $("#esOnlyNarrCard").offset().top
                }, 500);
            });

            $("#housedOnlyNarrLink").click(function (){
                $('html, body').animate({
                    scrollTop: $("#housedOnlyNarrCard").offset().top
                }, 500);
            });

            $("#homelessRehousedNarrLink").click(function (){
                $('html, body').animate({
                    scrollTop: $("#homelessRehousedNarrCard").offset().top
                }, 500);
            });

            $("#recurrenceNarrLink").click(function (){
                $('html, body').animate({
                    scrollTop: $("#recurrenceNarrCard").offset().top
                }, 500);
            });
        });


