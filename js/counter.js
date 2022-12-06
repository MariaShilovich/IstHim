
    $('document').ready(function() {
        'use strict';
       var unDate = Date.now()/1000;
       var tdate = unDate.toFixed();
      
    	$('.countdown').final_countdown({
            'start': 1622494800, // 01.06.2021
            'end': 1733052021,   // 01.12.2024
            'now': tdate        // текущая дата
        });
    });

    
