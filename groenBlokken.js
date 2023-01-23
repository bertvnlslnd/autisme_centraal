function ledsKleuren(e)
{
    var idBasisBlok = $("#"+e.id).attr("basisblok")
    var value = Math.round(e.value/10);

    var j=0;
	//console.log("i:"+ value);
    //console.log("ledsAan:")
	for(j = 1; j <= value; j++)
	{
		$("#"+ idBasisBlok+"L"+j).removeClass("led");
		$("#"+ idBasisBlok+"L"+j).addClass("ledOn");
		//console.log("#led"+kolom+j);			
    }	
	//console.log(j);
	if(j!=11){
        console.log("leds uit");
		for(var k = value+1;k <= 10; k++)
		{
	    	$("#"+ idBasisBlok+"L"+k).addClass("led");
			$("#"+ idBasisBlok+"L"+k).removeClass("ledOn");
            //console.log("#led"+kolom+k);
		}
	}

}

function groeneBlokken($basisBlok,$titel)
{
    var aantal = 10;
    var idBasisBlok = $basisBlok.attr('id');
    for (var j = 0; j <= aantal-1; j++){
		var div = $("<div id='"+idBasisBlok+"L"+(aantal-j)+ "' class = led/>");
		$(div).appendTo($basisBlok);
        var tekst = $("<p>"+$titel+"</p>");
        
	}
    $(tekst).appendTo($basisBlok);
    var slider = $("<div id ='"+idBasisBlok+"_slider' basisblok ="+ idBasisBlok+"></div>");
    $(slider).appendTo($basisBlok)
    $("#"+idBasisBlok+"_slider").roundSlider({
        radius: 40,
        sliderType: "min-range",
        circleShape: "half-top",
        showTooltip: false,
        value: 0,
        drag: "ledsKleuren",
		change:"ledsKleuren",
        });

}