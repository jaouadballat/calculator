$(document).ready(function(){
	var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };
	//Add your var's here!
	var number='', newnumber='', operator='';
	var totaldiv = $('#total');
	totaldiv.val(0);
    $("#numbers a").not("#clear, #clearall").click(function(){
        number += $(this).text();
        totaldiv.text(number);
        testNumLength(number);
    });
    $('#operators a').not('#equals').click(function(){
        operator = $(this).text();
        newnumber = number;
        number = "";
        totaldiv.text(0);
    });
    $('#clear').click(function(){
       number = ""; 
        totaldiv.text(0);
    });
    $('#clearall, #all').click(function(){
        number = "";
        if($(this).attr("id")==="clearall"){
            newnumber = "";
        }
        totaldiv.text(0);
    });
    $('#equals').click(function(){
        
        if(operator == "+"){
            number = parseInt(newnumber, 10)+parseInt(number, 10);
            totaldiv.text(number);
        }else if(operator == "-"){
            number = parseInt(newnumber, 10)-parseInt(number, 10);
            totaldiv.text(number);
            
        }else if(operator == "*"){
            number = parseInt(newnumber, 10)*parseInt(number, 10);
            totaldiv.text(number);
            
        }else{
            number = parseInt(newnumber, 10)/parseInt(number, 10);
            totaldiv.text(number);
            
        }
    })
});