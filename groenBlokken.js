
const kolommen=["Expliciet","Begrijpelijk","Beschikbaar"]
for (i = 0; i < kolommen.length; i++) {
    var $clone = $('#kolomGroeneBlokken-template').html();
    $clone = $clone.replace("{{tekst}}",kolommen[i]);
    $clone = $clone.replace("{{id}}",i);
    $clone = $clone.replace("{{id2}}",i);
    $clone = $clone.replace("{{kolom}}",i);
    $("#groenBlokken").append($clone)

    //leds plaatsen
    var aantal = 10
	for (var j = 0; j <= aantal-1; j++){
		var div = $(`<div id = led${i}${aantal-j} class = led/>`);
		$(div).appendTo($("#k"+i));
	}
    $("#slider"+i).roundSlider({
        radius: 40,
        sliderType: "min-range",
        circleShape: "half-top",
        showTooltip: false,
        value: 0,
        drag: "ledsKleuren",
		change:"ledsKleuren",
        });
}

function ledsKleuren(e)
{
    var kolom = $("#"+e.id).attr("kolom")
    var value = Math.round(e.value/10);

    var j=0;
	//console.log("i:"+ value);
    //console.log("ledsAan:")
	for(j = 1; j <= value; j++)
	{
		$("#led"+kolom+j).removeClass("led");
		$("#led"+kolom+j).addClass("ledOn");
		//console.log("#led"+kolom+j);			
    }	
	//console.log(j);
	if(j!=11){
        console.log("leds uit");
		for(var k = value+1;k <= 10; k++)
		{
	    	$("#led"+kolom+k).addClass("led");
			$("#led"+kolom+k).removeClass("ledOn");
            //console.log("#led"+kolom+k);
		}
	}

}