
    $('document').ready(function() {
        'use strict';
       var unDate = Date.now()/1000;
       var tdate = unDate.toFixed();
      
    	$('.countdown').final_countdown({
            'start': 1622494800, // 01.06.2021
            'end': 1648760400,   // 01.04.2022
            'now': tdate        // текущая дата
        });
    });

    