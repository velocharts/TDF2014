$(document).ready(function() {
	var circle
	var data


	//Width and height of SVG
		 	var data
			var w = 840;
			var h = 1050;
			var padding = 60;
			var duration = 2000; //duration for chart update

var mylist=document.getElementById("myList");
var teamS=mylist.options[mylist.selectedIndex].text;

var riderlist = ["FROOME Christopher","QUINTANA ROJAS Nairo Alexander","RODRIGUEZ OLIVER Joaquin","CONTADOR Alberto","KREUZIGER Roman","MOLLEMA Bauke","FUGLSANG Jakob","VALVERDE Alejandro","NAVARRO Daniel","TALANSKY Andrew","KWIATKOWSKI Michal","NIEVE ITURRALDE Mikel","TEN DAM Laurens","MONFORT Maxime","BARDET Romain","ROGERS Michael","MORENO FERNANDEZ Daniel","BAKELANTS Jan","PORTE Richie","SCHLECK Andy","SERPA José","GADRET John","ANTON Igor","ROLLAND Pierre","VELITS Peter","GESINK Robert","COSTA Rui Alberto","POELS Wouter","JEANNESSON Arnold","KLÖDEN Andreas","CHAVANEL Sylvain","GAUTIER Cyril","MARTIN Daniel","DUPONT Hubert","MORABITO Steve","ZUBELDIA Haimar","RIBLON Christophe","DE CLERCQ Bart","EVANS Cadel","ROCHE Nicolas","DUMOULIN Tom","ASTARLOZA Mikel","HERNANDEZ BLAZQUEZ Jesus","GENIEZ Alexandre","VAN GARDEREN Tejay","VUILLERMOZ Alexis","PLAZA MOLINA Ruben","VORGANOV Eduard","MALACARNE Davide","NORDHAUG Lars-Peter","TROFIMOV Yury","MEDEREL Maxime","DIDIER Laurent","AMADOR Andrey","CUNEGO Damiano","MOINARD Amaël","NIEMIEC Przemyslaw","GALLOPIN Tony","FEDRIGO Pierrick","DANIELSON Thomas","LEVARLET Guillaume","GILBERT Philippe","COPPEL Jérôme","TANKINK Bram","VOECKLER Thomas","VICHOT Arthur","VOIGT Jens","CLARKE Simon","IZAGUIRRE INSAUSTI Jon","HESJEDAL Ryder","DE MARCHI Alessandro","HANSEN Adam","MOLARD Rudy","IMPEY Daryl","GESCHKE Simon","MORI Manuele","KENNAUGH Peter","OROZ Juan José","ROJAS José Joaquin","GERRANS Simon","EL FARES Julien","SAGAN Peter","LAGUTIN Sergey","GAVAZZI Francesco","QUINZIATO Manuel","ALBASINI Michael","SIMON Julien","MATE MARDONES Luis Angel","DELAPLACE Anthony","SIUTSOU Kanstantsin","BOOKWALTER Brent","TOSATTO Matteo","FLECHA GIANNONI Juan Antonio","MOSER Moreno","GASPAROTTO Enrico","DE GENDT Thomas","CASTROVIEJO NICOLAS Jonathan","BURGHARDT Marcus","ARASHIRO Yukiya","KOREN Kristijan","HOOGERLAND Johnny","TAARAMÄE Rein","IRIZAR Markel","FEILLU Brice","BOOM Lars","MARTIN Tony","BENNATI Daniele","BAK Lars Ytting","LOSADA ALGUACIL Alberto","BRUTT Pavel","MARANGONI Alan","LEMOINE Cyril","MILLAR David","BODNAR Maciej","GARCIA ECHEGUIBEL Egoitz","MARINO Jean Marc","SABATINI Fabio","ERVITI Imanol","SMUKULIS Gatis","NAVARDAUSKAS Ramunas","DEGENKOLB John","SICARD Romain","VEILLEUX David","MINARD Sébastien","KADRI Blel","ROY Jérémy","LOPEZ GARCIA David","FAVILLI Elia","GREIPEL André","MEYER Cameron","VANMARCKE Sep","WYNANTS Maarten","FISCHER Murilo Antoniobil","REZA Kévin","STANNARD Ian","PAULINHO Sergio Miguel Moreira","CIMOLAI Davide","DE KORT Koen","PEREZ MORENO Ruben","THOMAS Geraint","KUCHYNSKI Aliaksandr","TRENTIN Matteo","DUMOULIN Samuel","VAN POPPEL Boy","CURVERS Roy","FRÖHLINGER Johannes","KRISTOFF Alexander","CAVENDISH Mark","TERPSTRA Niki","LEEZER Thomas","HIVERT Jonathan","GOSS Matthew Harley","STEEGMANS Gert","LANCASTER Brett Daniel","VANDBORG Brian","COUSIN Jérome","FERRARI Roberto","GENE Yohann","PINEAU Jérôme","ROELANDTS Jurgen","O'GRADY Stuart","HENDERSON Gregory","WILLEMS Frederik","TIMMER Albert","LOBATO DEL VALLE Juan José","KITTEL Marcel","MURAVYEV Dmitriy","BAZAYEV Assan","TUFT Svein","BOECKMANS Kris","WESTRA Lieuwe","LE MEVEL Christophe","SIEBERG Marcel","BAUER Jack","LUTSENKO Alexey","BONNET William","VEELERS Tom","IZAGUIRRE INSAUSTI Gorka","PÉRAUD Jean-Christophe","VAN POPPEL Danny","PINOT Thibaut","BOASSON HAGEN Edvald","KIRYIENKA Vasili","SCHÄR Michael","GUTIERREZ José Ivan","DENNIS Rohan","NOVAL GONZALEZ Benjamin","BONO Matteo","BRAJKOVIC Janez","VANDE VELDE Christian","MALORI Adriano","VAN DEN BROECK Jurgen","KESSIAKOFF Fredrik","BOUET Maxime","BOUHANNI Nacer","KING Edward","KASHECHKIN Andrey","BAGOT Yoann"]


//var myListR=document.getElementById("myListR");
var dropdown = document.getElementById("myListR");
for (var i = 0; i < riderlist.length; ++i) { dropdown[dropdown.length] = new Option(riderlist[i], riderlist[i]);};
var riderS=myListR.options[myListR.selectedIndex].text;



  

	//Data for starting overall standings
	
	var data = data2014;
	var formatTime = d3.time.format("%H:%M"),
    formatMinutes = function(d) { return formatTime(new Date(2012, 0, 1, 0, 0,d)); }

	//set scales for starting overall standings
		var xScale = d3.scale.linear()
                    .domain([0, d3.max(data, function(d) { return d.Position21; })])
//Uses final stage to get extend on seconds back
                     .range([padding, w - padding]);
		var yScale = d3.scale.linear()
                     .domain([0, d3.max(data, function(d) { return d.SecBack21; })])
                     .range([padding, h - padding]);				 

					 //Define X axis
			var xAxis = d3.svg.axis()
							  .scale(xScale)
							  .orient("top")
							  .ticks(10);

			//Define Y axis
			var yAxis = d3.svg.axis()
							  .scale(yScale)
							  .orient("left")
							  .tickValues([0, 600,1200,1800,2400,3000,3600,3600+1800,2*3600,3*3600,4*3600])
							  .tickFormat(formatMinutes);

	//Create SVG element
		var svg = d3.select("#chart")
						.append("svg")
						.attr("width", w)
						.attr("height", h);
//STARTING STANDINGS - Build starting overall standings circles					
				var circle = svg.selectAll("circle")
			   .data(data)
			   .enter()
			   .append("circle")
	// For starting standings circles lined up in middle of svg		   
			  .attr("cx", function(d) {
			   		return 100;})
			   .attr("cy", function(d) {
			   		return 100;})
	//set colour - highlight if selected
			  .attr("fill", function(d) {
				 if (d.Name == riderS) { return "rgb(227,27,35)" }
			 else if (d.Team == teamS) { return "rgb(0,121,193)" }
			  else {  return "rgb(217,217,217)" }
			  })


			.attr("stroke", "black")
			.attr("stroke-width", 0.5)	
			 .attr("r", function(d) {
			  if (d.Team == teamS) { return 6}
			  else if (d.Name == riderS) { return 6 }
			  else {  return 5 }
			  })
	//set up tool tips	
var tips = svg.selectAll("circle")	
			.append("title")
			.text(function(d) {
				return d.Name + " | Position: " + d.Position1 + " | " + d.Team + " | Overall Time:" + d.TimeBack1;});

//Create X axis
			svg.append("g")
				.attr("class", "x axis")
				.attr("transform", "translate(0," + (padding -15) + ")")
				.call(xAxis);

			//Create Y axis
			svg.append("g")
				.attr("class", "y axis")
				.attr("transform", "translate(" + padding + ",0)")
				.call(yAxis);		
//x axis label
	svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", w / 3)
    .attr("y", 12)
	.attr("font-family", "sans-serif")
	.attr("fill", "rgb(90,90,90)")
    .text("General Classification - Position");	
//Y axis label
	svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
	.attr("font-family", "sans-serif")
	.attr("fill", "rgb(90,90,90)")
    .attr("y", 3)
	.attr("x", - 80)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Time Back - hours:minutes");


			var circle = svg.selectAll("circle")
			    .data(data)
			    .transition()
			    .duration(5000)
			    .attr("cx", function(d) {
			   		return xScale(d.Position1);})
			   .attr("cy", function(d) {
			   		return yScale(d.SecBack1);})

//change of selected team
				d3.select("#myList")
				.on("change", function() {
			var mylist=document.getElementById("myList");
var teamS=mylist.options[mylist.selectedIndex].text
var myListR=document.getElementById("myListR");
var riderS=myListR.options[myListR.selectedIndex].text;
		svg.selectAll("circle")
			   .data(data)
			    .transition()
			    .duration(1000)
	//set colour
			   .attr("fill", function(d) {
			 if (d.Name == riderS) { return "rgb(227,27,35)" }
			 else if (d.Team == teamS) { return "rgb(0,121,193)" }
			  else {  return "rgb(217,217,217)" }
			  })
			.attr("stroke", "black")
			.attr("stroke-width", 0.5)	
			 .attr("r", function(d) {
			  if (d.Team == teamS) { return 6}
			  else if (d.Name == riderS) { return 6 }
			  else {  return 5 }
			  })
				});
	//on change of rider dropdown			
						d3.select("#myListR")
				.on("change", function() {
		var myListR=document.getElementById("myListR");
var riderS=myListR.options[myListR.selectedIndex].text;
	var mylist=document.getElementById("myList");
var teamS=mylist.options[mylist.selectedIndex].text

		svg.selectAll("circle")
			   .data(data)
			    .transition()
			    .duration(1000)

	//set colour
			   .attr("fill", function(d) {
			 if (d.Name == riderS) { return "rgb(227,27,35)" }
			 else if (d.Team == teamS) { return "rgb(0,121,193)" }
			  else {  return "rgb(217,217,217)" }
			  })
			.attr("stroke", "black")
			.attr("stroke-width", 0.5)	
			 .attr("r", function(d) {
			  if (d.Team == teamS) { return 7}
			  else if (d.Name == riderS) { return 7 }
			  else {  return 5 }
			  })
				});
var timeout1 = [];
				var timeout2 = [];var timeout3 = [];var timeout4 = [];var timeout5 = [];
				var timeout6 = [];var timeout7 = [];var timeout8 = [];var timeout9 = [];
				var timeout10 = [];var timeout11 = [];var timeout12 = [];var timeout13 = [];
				var timeout14 = [];var timeout15 = [];var timeout16 = [];var timeout17 = [];
				var timeout18 = [];var timeout19 = [];
				
				
	$("#play").click(function() {	

	$("#stageButton2").click();
	var delayTime = 200;
	
	
	timeout1 = setTimeout(function() {$("#stageButton3").click();},(duration) + delayTime);
	timeout2 = setTimeout(function() {$("#stageButton4").click();},(duration * 2) + delayTime);
	timeout3 = setTimeout(function() {$("#stageButton5").click();},(duration * 3) + delayTime);
	timeout4 = setTimeout(function() {$("#stageButton6").click();},(duration * 4) + delayTime);
	timeout5 = setTimeout(function() {$("#stageButton7").click();},(duration * 5) + delayTime);
	timeout6 = setTimeout(function() {$("#stageButton8").click();},(duration * 6) + delayTime);
	timeout7 = setTimeout(function() {$("#stageButton9").click();},(duration * 7) + delayTime);
	timeout8 = setTimeout(function() {$("#stageButton10").click();},(duration * 8) + delayTime);
	timeout9 = setTimeout(function() {$("#stageButton11").click();},(duration * 9) + delayTime);
	timeout10 = setTimeout(function() {$("#stageButton12").click();},(duration * 10) + delayTime);
	timeout11 = setTimeout(function() {$("#stageButton13").click();},(duration * 11) + delayTime);
	timeout12 = setTimeout(function() {$("#stageButton14").click();},(duration * 12) + delayTime);
	timeout13 = setTimeout(function() {$("#stageButton15").click();},(duration * 13) + delayTime);
	timeout14 = setTimeout(function() {$("#stageButton16").click();},(duration * 14) + delayTime);
	timeout15 = setTimeout(function() {$("#stageButton17").click();},(duration * 15) + delayTime);
	timeout16 = setTimeout(function() {$("#stageButton18").click();},(duration * 16) + delayTime);
	timeout17 = setTimeout(function() {$("#stageButton19").click();},(duration * 17) + delayTime);
	timeout18 = setTimeout(function() {$("#stageButton20").click();},(duration * 18) + delayTime);
	timeout19 = setTimeout(function() {$("#stageButton21").click();},(duration *19) + delayTime);


	
	
		});

		$('#pause').click(function() {
		clearTimeout(timeout1);
clearTimeout(timeout2);
clearTimeout(timeout3);
clearTimeout(timeout4);
clearTimeout(timeout5);
clearTimeout(timeout6);
clearTimeout(timeout7);
clearTimeout(timeout8);
clearTimeout(timeout9);
clearTimeout(timeout10);
clearTimeout(timeout11);
clearTimeout(timeout12);
clearTimeout(timeout13);
clearTimeout(timeout14);
clearTimeout(timeout15);
clearTimeout(timeout16);
clearTimeout(timeout17);
clearTimeout(timeout18);
clearTimeout(timeout19);
});

	
// TRY TO KEEP ALL TOUR SPECIFIC CODE BELOW THIS LINE	

 $("#stageTitle").html(stageData2013.course[0] + " - " + stageData2013.distance[0]);
  $("#stageText").html(stageBlurb[0]);
 $("#stageWinner").html(stageData2013.winner[0]);
		
// on change in stage
		$(".stg").click(function() {
	
var stageN = this.id;

//test array for stage details


switch (stageN)
{
  case "stageButton1" : 
  
  $("#stageTitle").html(stageData2013.course[0] + " - " + stageData2013.distance[0]);
  $("#stageWinner").html(stageData2013.winner[0]);
 $("#stageText").html(stageBlurb[0]);

  $(".btn").removeClass("active focus");
	$("#stageButton1").addClass("active focus");
	 $.each(data,function(d) {
    this.PositionZ = this.Position1;
	this.SecBackZ = this.SecBack1;
this.TimeBackZ = this.TimeBack1;
	});
     break;
case "stageButton2" : 
     //alert(stageN + " d.Position2");
	// document.getElementById("imgClickAndChange").src = "images/PROFIL2.png";
    $("#stageTitle").html(stageData2013.course[1] + " - " + stageData2013.distance[1]);
$("#stageText").html(stageBlurb[1]);
 $("#stageWinner").html(stageData2013.winner[1]);

	$(".btn").removeClass("active focus");
	$("#stageButton2").addClass("active focus");
		 $.each(data,function(d) {
    this.PositionZ = this.Position2;
	this.SecBackZ = this.SecBack2;
this.TimeBackZ = this.TimeBack2;
	});
	
	break;
	case "stageButton3"  : 
	 //document.getElementById("imgClickAndChange").src = "imagess/PROFIL3.png";
    $("#stageTitle").html(stageData2013.course[2] + " - " + stageData2013.distance[2]);
  $("#stageText").html(stageBlurb[2])
  $("#stageWinner").html(stageData2013.winner[2]);
	 
 $(".btn").removeClass("active focus");
	$("#stageButton3").addClass("active focus");
		 $.each(data,function(d) {
    this.PositionZ = this.Position3;
	this.SecBackZ = this.SecBack3;
this.TimeBackZ = this.TimeBack3;
	});

	break;
	case "stageButton4"  : 
	 //document.getElementById("imgClickAndChange").src = "images/PROFIL4.png";
	     $("#stageTitle").html(stageData2013.course[3] + " - " + stageData2013.distance[3]);
  $("#stageText").html(stageBlurb[3]);
  $("#stageWinner").html(stageData2013.winner[3]);
		$(".btn").removeClass("active focus");
	$("#stageButton4").addClass("active focus");
		 $.each(data,function(d) {
    this.PositionZ = this.Position4;
	this.SecBackZ = this.SecBack4;
this.TimeBackZ = this.TimeBack4;
	});
  break;
  case "stageButton5"  : 
   //document.getElementById("imgClickAndChange").src = "images/PROFIL5.png";
      $("#stageTitle").html(stageData2013.course[4] + " - " + stageData2013.distance[4]);
  $("#stageText").html(stageBlurb[4]);
  $("#stageWinner").html(stageData2013.winner[4]);
	$(".btn").removeClass("active focus");
	$("#stageButton5").addClass("active focus");
		 $.each(data,function(d) {
    this.PositionZ = this.Position5;
	this.SecBackZ = this.SecBack5;
this.TimeBackZ = this.TimeBack5;
	});
	 break;
	case "stageButton6"  : 
	 //document.getElementById("imgClickAndChange").src = "images/PROFIL6.png";
     $("#stageTitle").html(stageData2013.course[5] + " - " + stageData2013.distance[5]);
	  $("#stageText").html(stageBlurb[5]);
	  $("#stageWinner").html(stageData2013.winner[5]);
 	$(".btn").removeClass("active focus");
	$("#stageButton6").addClass("active focus");
 		 $.each(data,function(d) {
    this.PositionZ = this.Position6;
	this.SecBackZ = this.SecBack6;
this.TimeBackZ = this.TimeBack6;
	});
  break;
  case "stageButton7"  : 
   //document.getElementById("imgClickAndChange").src = "images/PROFIL7.png";
   	     $("#stageTitle").html(stageData2013.course[6] + " - " + stageData2013.distance[6]);
  $("#stageText").html(stageBlurb[6]);
  $("#stageWinner").html(stageData2013.winner[6]);
	$(".btn").removeClass("active focus");
	$("#stageButton7").addClass("active focus");
  		 $.each(data,function(d) {
    this.PositionZ = this.Position7;
	this.SecBackZ = this.SecBack7;
this.TimeBackZ = this.TimeBack7;
	});
  break;
  case "stageButton8"  : 
//   document.getElementById("imgClickAndChange").src = "images/PROFIL8.png";
	     $("#stageTitle").html(stageData2013.course[7] + " - " + stageData2013.distance[7]);
  $("#stageText").html(stageBlurb[7]);
  $("#stageWinner").html(stageData2013.winner[7]);
	$(".btn").removeClass("active focus");
	$("#stageButton8").addClass("active focus");
		 $.each(data,function(d) {
    this.PositionZ = this.Position8;
	this.SecBackZ = this.SecBack8;
this.TimeBackZ = this.TimeBack8;
	});
  break;
  case "stageButton9"  : 
  // document.getElementById("imgClickAndChange").src = "images/PROFIL9.png";
  	     $("#stageTitle").html(stageData2013.course[8] + " - " + stageData2013.distance[8]);
  $("#stageText").html(stageBlurb[8]);
  $("#stageWinner").html(stageData2013.winner[8]);
	$(".btn").removeClass("active focus");
	$("#stageButton9").addClass("active focus");
  		 $.each(data,function(d) {
    this.PositionZ = this.Position9;
	this.SecBackZ = this.SecBack9;
this.TimeBackZ = this.TimeBack9;
	});
  break;
  case "stageButton10"  : 
   //document.getElementById("imgClickAndChange").src = "images/PROFIL10.png";
   	     $("#stageTitle").html(stageData2013.course[9] + " - " + stageData2013.distance[9]);
  $("#stageText").html(stageBlurb[9]);
  $("#stageWinner").html(stageData2013.winner[9]);
	$(".btn").removeClass("active focus");
	$("#stageButton10").addClass("active focus");
   		 $.each(data,function(d) {
    this.PositionZ = this.Position10;
	this.SecBackZ = this.SecBack10;
this.TimeBackZ = this.TimeBack10;
	});

  break;
  case "stageButton11"  : 
   //document.getElementById("imgClickAndChange").src = "images/PROFIL11.png";
   	    $("#stageTitle").html(stageData2013.course[10] + " - " + stageData2013.distance[10]);
  $("#stageText").html(stageBlurb[10]);
  $("#stageWinner").html(stageData2013.winner[10]);
	$(".btn").removeClass("active focus");
	$("#stageButton11").addClass("active focus");
$.each(data,function(d) {
this.PositionZ = this.Position11;
this.SecBackZ = this.SecBack11;
this.TimeBackZ = this.TimeBack11;
	});

  break;
  
   case "stageButton12"  : 
   //document.getElementById("imgClickAndChange").src = "images/PROFIL12.png";
   	    $("#stageTitle").html(stageData2013.course[11] + " - " + stageData2013.distance[11]);
  $("#stageText").html(stageBlurb[11]);
  $("#stageWinner").html(stageData2013.winner[11]);
	$(".btn").removeClass("active focus");
	$("#stageButton12").addClass("active focus");
 		 $.each(data,function(d) {
    this.PositionZ = this.Position12;
	this.SecBackZ = this.SecBack12;
this.TimeBackZ = this.TimeBack12;
	});

  break;
 
   case "stageButton13"  : 
   //document.getElementById("imgClickAndChange").src = "images/PROFIL13.png";
   	     $("#stageTitle").html(stageData2013.course[12] + " - " + stageData2013.distance[12]);
  $("#stageText").html(stageBlurb[12]);
  $("#stageWinner").html(stageData2013.winner[12]);
	$(".btn").removeClass("active focus");
	$("#stageButton13").addClass("active focus");
   		 $.each(data,function(d) {
    this.PositionZ = this.Position13;
	this.SecBackZ = this.SecBack13;
this.TimeBackZ = this.TimeBack13;
	});

  break;
   case "stageButton14"  : 
   //document.getElementById("imgClickAndChange").src = "images/PROFIL14.png";
   	     $("#stageTitle").html(stageData2013.course[13] + " - " + stageData2013.distance[13]);
  $("#stageText").html(stageBlurb[13]);
  $("#stageWinner").html(stageData2013.winner[13]);
	$(".btn").removeClass("active focus");
	$("#stageButton14").addClass("active focus");
  		 $.each(data,function(d) {
    this.PositionZ = this.Position14;
	this.SecBackZ = this.SecBack14;
this.TimeBackZ = this.TimeBack14;
	});

  break;
     case "stageButton15"  : 
   //document.getElementById("imgClickAndChange").src = "images/PROFIL15.png";
   	     $("#stageTitle").html(stageData2013.course[14] + " - " + stageData2013.distance[14]);
  $("#stageText").html(stageBlurb[14]);
  $("#stageWinner").html(stageData2013.winner[14]);
	 $(".btn").removeClass("active focus");
	$("#stageButton15").addClass("active focus");
 		 $.each(data,function(d) {
    this.PositionZ = this.Position15;
	this.SecBackZ = this.SecBack15;
this.TimeBackZ = this.TimeBack15;
	});

  break;
   case "stageButton16"  : 
   //document.getElementById("imgClickAndChange").src = "images/PROFIL16.png";
   	     $("#stageTitle").html(stageData2013.course[15] + " - " + stageData2013.distance[15]);
  $("#stageText").html(stageBlurb[15]);
  $("#stageWinner").html(stageData2013.winner[15]);
	$(".btn").removeClass("active focus");
	$("#stageButton16").addClass("active focus");
  		 $.each(data,function(d) {
    this.PositionZ = this.Position16;
	this.SecBackZ = this.SecBack16;
this.TimeBackZ = this.TimeBack16;
	});

  break;
  
   case "stageButton17"  : 
   //document.getElementById("imgClickAndChange").src = "images/PROFIL17.png";
   	     $("#stageTitle").html(stageData2013.course[16] + " - " + stageData2013.distance[16]);
  $("#stageText").html(stageBlurb[16]);
  $("#stageWinner").html(stageData2013.winner[16]);
	$(".btn").removeClass("active focus");
	$("#stageButton17").addClass("active focus");
  		 $.each(data,function(d) {
    this.PositionZ = this.Position17;
	this.SecBackZ = this.SecBack17;
this.TimeBackZ = this.TimeBack17;
	});

  break;
  
    case "stageButton18"  : 
   //document.getElementById("imgClickAndChange").src = "images/PROFIL18.png";
   	     $("#stageTitle").html(stageData2013.course[17] + " - " + stageData2013.distance[17]);
  $("#stageText").html(stageBlurb[17]);
  $("#stageWinner").html(stageData2013.winner[17]);
	$(".btn").removeClass("active focus");
	$("#stageButton18").addClass("active focus");
 		 $.each(data,function(d) {
    this.PositionZ = this.Position18;
	this.SecBackZ = this.SecBack18;
this.TimeBackZ = this.TimeBack18;
	});

  break;
  
  case "stageButton19"  : 
   //document.getElementById("imgClickAndChange").src = "images/PROFIL19.png";
   	     $("#stageTitle").html(stageData2013.course[18] + " - " + stageData2013.distance[18]);
  $("#stageText").html(stageBlurb[18]);
  $("#stageWinner").html(stageData2013.winner[18]);
	$(".btn").removeClass("active focus");
	$("#stageButton19").addClass("active focus");
		 $.each(data,function(d) {
    this.PositionZ = this.Position19;
	this.SecBackZ = this.SecBack19;
this.TimeBackZ = this.TimeBack19;
	});

  break;
  
  case "stageButton20"  : 
   //document.getElementById("imgClickAndChange").src = "images/PROFIL20.png";
   	     $("#stageTitle").html(stageData2013.course[19] + " - " + stageData2013.distance[19]);
  $("#stageText").html(stageBlurb[19]);
  $("#stageWinner").html(stageData2013.winner[19]);
	$(".btn").removeClass("active focus");
	$("#stageButton20").addClass("active focus");
 		 $.each(data,function(d) {
    this.PositionZ = this.Position20;
	this.SecBackZ = this.SecBack20;
this.TimeBackZ = this.TimeBack20;
	});

  break;
  
  case "stageButton21"  : 
   //document.getElementById("imgClickAndChange").src = "images/PROFIL21.png";
   	     $("#stageTitle").html(stageData2013.course[20] + " - " + stageData2013.distance[20]);
  $("#stageText").html(stageBlurb[20]);
  $("#stageWinner").html(stageData2013.winner[20]);
	$(".btn").removeClass("active focus");
	$("#stageButton21").addClass("active focus");
   		 $.each(data,function(d) {
    this.PositionZ = this.Position21;
	this.SecBackZ = this.SecBack21;
this.TimeBackZ = this.TimeBack21;
	});

  break;
  
}

//code to update graphic after button click
		svg.selectAll("circle")
			   .data(data)
			    .transition()
			    .duration(duration)
 .attr("cx", function(d) {
			   		return xScale(d.PositionZ);})
			   .attr("cy", function(d) {
			   		return yScale(d.SecBackZ);})

					tips.text(function(d) {
				return d.Name + " | Position: " + d.PositionZ + " | " + d.Team + " | Overall Time:" + d.TimeBackZ;});
					/*
	//set colour
			  .attr("fill", function(d) {
			  if (d.Team == teamS) { return "rgb(0,121,193)" }
			  else {  return d.Colour }
			  })
			.attr("stroke", "black")
			.attr("stroke-width", 0.5)	
			 .attr("r", function(d) {
			  if (d.Team == teamS) { return 7}
			  else {  return 5 }
			  })         */
				}); 		

		
				
				
});
