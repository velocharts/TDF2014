
	var circle
	var data


	//Width and height of SVG
		 	var data
			var w = 840;
			var h = 1050;
			var padding = 60;

var mylist=document.getElementById("myList");
var teamS=mylist.options[mylist.selectedIndex].text;

var riderlist = ["FROOME Christopher","QUINTANA ROJAS Nairo Alexander","RODRIGUEZ OLIVER Joaquin","CONTADOR Alberto","KREUZIGER Roman","MOLLEMA Bauke","FUGLSANG Jakob","VALVERDE Alejandro","NAVARRO Daniel","TALANSKY Andrew","KWIATKOWSKI Michal","NIEVE ITURRALDE Mikel","TEN DAM Laurens","MONFORT Maxime","BARDET Romain","ROGERS Michael","MORENO FERNANDEZ Daniel","BAKELANTS Jan","PORTE Richie","SCHLECK Andy","SERPA José","GADRET John","ANTON Igor","ROLLAND Pierre","VELITS Peter","GESINK Robert","COSTA Rui Alberto","POELS Wouter","JEANNESSON Arnold","KLÖDEN Andreas","CHAVANEL Sylvain","GAUTIER Cyril","MARTIN Daniel","DUPONT Hubert","MORABITO Steve","ZUBELDIA Haimar","RIBLON Christophe","DE CLERCQ Bart","EVANS Cadel","ROCHE Nicolas","DUMOULIN Tom","ASTARLOZA Mikel","HERNANDEZ BLAZQUEZ Jesus","GENIEZ Alexandre","VAN GARDEREN Tejay","VUILLERMOZ Alexis","PLAZA MOLINA Ruben","VORGANOV Eduard","MALACARNE Davide","NORDHAUG Lars-Peter","TROFIMOV Yury","MEDEREL Maxime","DIDIER Laurent","AMADOR Andrey","CUNEGO Damiano","MOINARD Amaël","NIEMIEC Przemyslaw","GALLOPIN Tony","FEDRIGO Pierrick","DANIELSON Thomas","LEVARLET Guillaume","GILBERT Philippe","COPPEL Jérôme","TANKINK Bram","VOECKLER Thomas","VICHOT Arthur","VOIGT Jens","CLARKE Simon","IZAGUIRRE INSAUSTI Jon","HESJEDAL Ryder","DE MARCHI Alessandro","HANSEN Adam","MOLARD Rudy","IMPEY Daryl","GESCHKE Simon","MORI Manuele","KENNAUGH Peter","OROZ Juan José","ROJAS José Joaquin","GERRANS Simon","EL FARES Julien","SAGAN Peter","LAGUTIN Sergey","GAVAZZI Francesco","QUINZIATO Manuel","ALBASINI Michael","SIMON Julien","MATE MARDONES Luis Angel","DELAPLACE Anthony","SIUTSOU Kanstantsin","BOOKWALTER Brent","TOSATTO Matteo","FLECHA GIANNONI Juan Antonio","MOSER Moreno","GASPAROTTO Enrico","DE GENDT Thomas","CASTROVIEJO NICOLAS Jonathan","BURGHARDT Marcus","ARASHIRO Yukiya","KOREN Kristijan","HOOGERLAND Johnny","TAARAMÄE Rein","IRIZAR Markel","FEILLU Brice","BOOM Lars","MARTIN Tony","BENNATI Daniele","BAK Lars Ytting","LOSADA ALGUACIL Alberto","BRUTT Pavel","MARANGONI Alan","LEMOINE Cyril","MILLAR David","BODNAR Maciej","GARCIA ECHEGUIBEL Egoitz","MARINO Jean Marc","SABATINI Fabio","ERVITI Imanol","SMUKULIS Gatis","NAVARDAUSKAS Ramunas","DEGENKOLB John","SICARD Romain","VEILLEUX David","MINARD Sébastien","KADRI Blel","ROY Jérémy","LOPEZ GARCIA David","FAVILLI Elia","GREIPEL André","MEYER Cameron","VANMARCKE Sep","WYNANTS Maarten","FISCHER Murilo Antoniobil","REZA Kévin","STANNARD Ian","PAULINHO Sergio Miguel Moreira","CIMOLAI Davide","DE KORT Koen","PEREZ MORENO Ruben","THOMAS Geraint","KUCHYNSKI Aliaksandr","TRENTIN Matteo","DUMOULIN Samuel","VAN POPPEL Boy","CURVERS Roy","FRÖHLINGER Johannes","KRISTOFF Alexander","CAVENDISH Mark","TERPSTRA Niki","LEEZER Thomas","HIVERT Jonathan","GOSS Matthew Harley","STEEGMANS Gert","LANCASTER Brett Daniel","VANDBORG Brian","COUSIN Jérome","FERRARI Roberto","GENE Yohann","PINEAU Jérôme","ROELANDTS Jurgen","O'GRADY Stuart","HENDERSON Gregory","WILLEMS Frederik","TIMMER Albert","LOBATO DEL VALLE Juan José","KITTEL Marcel","MURAVYEV Dmitriy","BAZAYEV Assan","TUFT Svein","BOECKMANS Kris","WESTRA Lieuwe","LE MEVEL Christophe","SIEBERG Marcel","BAUER Jack","LUTSENKO Alexey","BONNET William","VEELERS Tom","IZAGUIRRE INSAUSTI Gorka","PÉRAUD Jean-Christophe","VAN POPPEL Danny","PINOT Thibaut","BOASSON HAGEN Edvald","KIRYIENKA Vasili","SCHÄR Michael","GUTIERREZ José Ivan","DENNIS Rohan","NOVAL GONZALEZ Benjamin","BONO Matteo","BRAJKOVIC Janez","VANDE VELDE Christian","MALORI Adriano","VAN DEN BROECK Jurgen","KESSIAKOFF Fredrik","BOUET Maxime","BOUHANNI Nacer","KING Edward","KASHECHKIN Andrey","BAGOT Yoann"]


//var myListR=document.getElementById("myListR");
var dropdown = document.getElementById("myListR");
for (var i = 0; i < riderlist.length; ++i) { dropdown[dropdown.length] = new Option(riderlist[i], riderlist[i]);};
var riderS=myListR.options[myListR.selectedIndex].text;

console.table(data2014);



	//Data for starting overall standings
	
		data.forEach(function(d) {
    d.Position = +d.Position1;
    d.SecBack = +d.SecBack1;
	d.Position2 = +d.Position2;
    d.SecBack2 = +d.SecBack2;
	d.Position3 = +d.Position3;
    d.SecBack3 = +d.SecBack3;
	d.Position5 = +d.Position5;
    d.SecBack5 = +d.SecBack5;
	d.Position5 = +d.Position5;
    d.SecBack5 = +d.SecBack5;
	d.Position6 = +d.Position6;
    d.SecBack6 = +d.SecBack6;
	d.Position7 = +d.Position7;
    d.SecBack7 = +d.SecBack7;
	d.Position8 = +d.Position8;
    d.SecBack8 = +d.SecBack8;
	d.Position9 = +d.Position9;
    d.SecBack9 = +d.SecBack9;
	d.Position10 = +d.Position10;
    d.SecBack10 = +d.SecBack10;
	d.Position11 = +d.Position11;
    d.SecBack11 = +d.SecBack11;
	d.Position12 = +d.Position12;
    d.SecBack12 = +d.SecBack12;
	d.Position13 = +d.Position13;
   d.SecBack13 = +d.SecBack13;
   	d.Position14 = +d.Position14;
   d.SecBack14 = +d.SecBack14;
   	d.Position15 = +d.Position15;
   d.SecBack15 = +d.SecBack15;
   d.Position16 = +d.Position16;
   d.SecBack16 = +d.SecBack16;
    d.Position17 = +d.Position17;
   d.SecBack17 = +d.SecBack17;
       d.Position18 = +d.Position18;
   d.SecBack18 = +d.SecBack18;
     d.Position19 = +d.Position19;
   d.SecBack19 = +d.SecBack19;
       d.Position20 = +d.Position20;
   d.SecBack20 = +d.SecBack20;
       d.Position21 = +d.Position21;
   d.SecBack21 = +d.SecBack21;
	});
	
	var formatTime = d3.time.format("%H:%M"),
    formatMinutes = function(d) { return formatTime(new Date(2012, 0, 1, 0, 0,d)); }

	//set scales for starting overall standings
		var xScale = d3.scale.linear()
                    .domain([0, d3.max(data, function(d) { return d.Position21; })])

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
		var svg = d3.select("body")
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

	svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", w / 3)
    .attr("y", 12)
	.attr("font-family", "sans-serif")
	.attr("fill", "rgb(90,90,90)")
    .text("General Classification - Position");	

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


		/*		//Create labels
			svg.selectAll("text")
			   .data(data)
			   .enter()
			   .append("text")
			   .text(function(d) {
			   		return d.Hname;})
			   .attr("x", function(d) {
			   		return xScale(d.Position);})
			   .attr("y", function(d) {
			   		return yScale(d.SecBack) + 18;})
			   .attr("font-family", "sans-serif")
			   .attr("text-anchor", "middle")
			   .attr("font-size", "11px")
			   .attr("fill", "black");	
			*/

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


				d3.select("#stageList")
				.on("change", function() {
			var stageList=document.getElementById("stageList");

var stageN=stageList.options[stageList.selectedIndex].text


switch (stageN)
{
  case "Stage 1" : 
   document.getElementById("imgClickAndChange").src = "images/PROFIL1.png";
     data.forEach(function(d) {
    d.PositionZ = d.Position1;
	d.SecBackZ = d.SecBack1;
d.TimeBackZ = d.TimeBack1;

	});
     break;
case "Stage 2" : 
     //alert(stageN + " d.Position2");
	 document.getElementById("imgClickAndChange").src = "images/PROFIL2.png";
	 data.forEach(function(d) {
    d.PositionZ = d.Position2;
	d.SecBackZ = d.SecBack2;
d.TimeBackZ = d.TimeBack2;
	});
	break;
	case "Stage 3" : 
	 document.getElementById("imgClickAndChange").src = "imagess/PROFIL3.png";
     
	 data.forEach(function(d) {
    d.PositionZ = d.Position3;
	d.SecBackZ = d.SecBack3;
d.TimeBackZ = d.TimeBack3;
	});

	break;
	case "Stage 4" : 
	 document.getElementById("imgClickAndChange").src = "images/PROFIL4.png";
   
	 data.forEach(function(d) { 
    d.PositionZ = d.Position4;
	d.SecBackZ = d.SecBack4;
d.TimeBackZ = d.TimeBack4;
	});
  break;
  case "Stage 5" : 
   document.getElementById("imgClickAndChange").src = "images/PROFIL5.png";
     //alert(stageN + " d.Position3");
	 data.forEach(function(d) {
  
    d.PositionZ = d.Position5;
	d.SecBackZ = d.SecBack5;
	d.TimeBackZ = d.TimeBack5;
	});
	 break;
	case "Stage 6" : 
	 document.getElementById("imgClickAndChange").src = "images/PROFIL6.png";
     //alert(stageN + " d.Position3");
	 data.forEach(function(d) {
  
    d.PositionZ = d.Position6;
	d.SecBackZ = d.SecBack6;
	d.TimeBackZ = d.TimeBack6;
	});
  break;
  case "Stage 7" : 
   document.getElementById("imgClickAndChange").src = "images/PROFIL7.png";
     //alert(stageN + " d.Position3");
	 data.forEach(function(d) {
  
    d.PositionZ = d.Position7;
	d.SecBackZ = d.SecBack7;
	d.TimeBackZ = d.TimeBack7;
	});
  break;
  case "Stage 8" : 
   document.getElementById("imgClickAndChange").src = "images/PROFIL8.png";
     //alert(stageN + " d.Position3");
	 data.forEach(function(d) {
  
    d.PositionZ = d.Position8;
	d.SecBackZ = d.SecBack8;
	d.TimeBackZ = d.TimeBack8;
	});
  break;
  case "Stage 9" : 
   document.getElementById("imgClickAndChange").src = "images/PROFIL9.png";
     //alert(stageN + " d.Position3");
	 data.forEach(function(d) {
  
    d.PositionZ = d.Position9;
	d.SecBackZ = d.SecBack9;
	d.TimeBackZ = d.TimeBack9;
	});
  break;
  case "Stage 10" : 
   document.getElementById("imgClickAndChange").src = "images/PROFIL10.png";
     //alert(stageN + " d.Position3");
	 data.forEach(function(d) {
  
    d.PositionZ = d.Position10;
	d.SecBackZ = d.SecBack10;
		d.TimeBackZ = d.TimeBack10;
	});

  break;
  case "Stage 11" : 
   document.getElementById("imgClickAndChange").src = "images/PROFIL11.png";
     //alert(stageN + " d.Position3");
	 data.forEach(function(d) {
  
    d.PositionZ = d.Position11;
	d.SecBackZ = d.SecBack11;
	d.TimeBackZ = d.TimeBack11;

	});

  break;
  
   case "Stage 12" : 
   document.getElementById("imgClickAndChange").src = "images/PROFIL12.png";
     //alert(stageN + " d.Position3");
	 data.forEach(function(d) {
  
    d.PositionZ = d.Position12;
	d.SecBackZ = d.SecBack12;
	d.TimeBackZ = d.TimeBack12;

	});

  break;
 
   case "Stage 13" : 
   document.getElementById("imgClickAndChange").src = "images/PROFIL13.png";
     //alert(stageN + " d.Position3");
	 data.forEach(function(d) {
  
    d.PositionZ = d.Position13;
	d.SecBackZ = d.SecBack13;
	d.TimeBackZ = d.TimeBack13;

	});

  break;
   case "Stage 14" : 
   document.getElementById("imgClickAndChange").src = "images/PROFIL14.png";
     //alert(stageN + " d.Position3");
	 data.forEach(function(d) {
  
    d.PositionZ = d.Position14;
	d.SecBackZ = d.SecBack14;
	d.TimeBackZ = d.TimeBack14;

	});

  break;
     case "Stage 15" : 
   document.getElementById("imgClickAndChange").src = "images/PROFIL15.png";
     //alert(stageN + " d.Position3");
	 data.forEach(function(d) {
  
    d.PositionZ = d.Position15;
	d.SecBackZ = d.SecBack15;
	d.TimeBackZ = d.TimeBack15;

	});

  break;
   case "Stage 16" : 
   document.getElementById("imgClickAndChange").src = "images/PROFIL16.png";
     //alert(stageN + " d.Position3");
	 data.forEach(function(d) {
  
    d.PositionZ = d.Position16;
	d.SecBackZ = d.SecBack16;
	d.TimeBackZ = d.TimeBack16;

	});

  break;
  
   case "Stage 17" : 
   document.getElementById("imgClickAndChange").src = "images/PROFIL17.png";
     //alert(stageN + " d.Position3");
	 data.forEach(function(d) {
  
    d.PositionZ = d.Position17;
	d.SecBackZ = d.SecBack17;
	d.TimeBackZ = d.TimeBack17;

	});

  break;
  
    case "Stage 18" : 
   document.getElementById("imgClickAndChange").src = "images/PROFIL18.png";
     //alert(stageN + " d.Position3");
	 data.forEach(function(d) {
  
    d.PositionZ = d.Position18;
	d.SecBackZ = d.SecBack18;
	d.TimeBackZ = d.TimeBack18;

	});

  break;
  
  case "Stage 19" : 
   document.getElementById("imgClickAndChange").src = "images/PROFIL19.png";
     //alert(stageN + " d.Position3");
	 data.forEach(function(d) {
  
    d.PositionZ = d.Position19;
	d.SecBackZ = d.SecBack19;
	d.TimeBackZ = d.TimeBack19;

	});

  break;
  
  case "Stage 20" : 
   document.getElementById("imgClickAndChange").src = "images/PROFIL20.png";
     //alert(stageN + " d.Position3");
	 data.forEach(function(d) {
  
    d.PositionZ = d.Position20;
	d.SecBackZ = d.SecBack20;
	d.TimeBackZ = d.TimeBack20;

	});

  break;
  
  case "Stage 21" : 
   document.getElementById("imgClickAndChange").src = "images/PROFIL21.png";
     //alert(stageN + " d.Position3");
	 data.forEach(function(d) {
  
    d.PositionZ = d.Position21;
	d.SecBackZ = d.SecBack21;
	d.TimeBackZ = d.TimeBack21;

	});

  break;
  
}


		svg.selectAll("circle")
			   .data(data)
			    .transition()
			    .duration(2000)
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


