
$("#search").click(function(){
  var value = $("#checklist option:selected").attr("value");

  var year = $("#year_checklist option:selected").attr("value");

  if($('#zoomout').is(':checked')) {
    var zoom = 0;
    $("#zoomed").text("      Zoomed Out");
    show(value , zoom , year)
  }
  else if ($('#zoomin').is(':checked')){
    var zoom = 1;
    show(value , zoom , year);
    $("#zoomed").text("      Zoomed In") ;
  }
  else {
    var zoom = 1;
    show(value , zoom , year);

  }
});



var show = function(value , zoom , year)
{




( function()
{

		var maindiv = document.getElementById("chart");
		while (maindiv.firstChild)
		{
			maindiv.removeChild(maindiv.firstChild);
		}
  var width = 1500;
  var height= 600;




  var tooltip = d3.select("#chart").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);


          // tooltip mouseout event handler
          var tipMouseout = function(d) {

              d3.select("#bubble_line").remove();

              d3.select("#year_text").remove();

              svg.selectAll(".countries")
                .attr("fill-opacity" , 0.8)
                .attr("stroke-width" , 0.3);


            d3.select(this).attr("fill-opacity" , "0.7")
            .attr("fill" , function(d)
            {
              if(d.continent == "Europe")
              {
                return "#ffb3b3";
              }
             if (d.continent == "America")
              {
                return "#b3d9ff";
              }
              if (d.continent == "Africa")
               {
                 return "#b3ffb3";
               }
               if (d.continent == "Australia")
                {
                  return "#ecb3ff";
                }
                if (d.continent == "Asia")
                 {
                   return "#ffffb3";
                 }
            });
              tooltip.transition()
                  .duration(300) // ms
                  .style("opacity", 0); // don't care about position!
          };





//put the circle in the front
  d3.selection.prototype.moveToFront = function() {
    return this.each(function(){
      this.parentNode.appendChild(this);
    });
  };


  var svg = d3.select("#chart")
              .append("svg")
              .attr("height" , height)
              .attr("width" , width)
              .append("g")
              .attr("transform" , "translate(0,0)")
              .append("g")
              .attr("transform", "translate(" + 40 + "," + 10 + ")");

              var year_wave;
              if( (year == 1981) || (year == 1982) || (year == 1983) || (year == 1984))
              {
                year_wave = "file_wave_1.csv";
              }
              if( (year == 1990) || (year == 1991) || (year == 1992) || (year == 1993) || (year == 1994))
              {
                year_wave = "file_wave_2.csv";
              }
              if( (year == 1995) || (year == 1996) || (year == 1997) || (year == 1998) || (year == 1999))
              {
                year_wave = "file_wave_3.csv";
              }
              if( (year == 2000) || (year == 2001) || (year == 2002) || (year == 2003) || (year == 2004))
              {
                year_wave = "file_wave_4.csv";
              }
              if( (year == 2005) || (year == 2006) || (year == 2007) || (year == 2008) || (year == 2009))
              {
                year_wave = "file_wave_5.csv";
              }
              if( (year == 2010) || (year == 2011) || (year == 2012) || (year == 2013) || (year == 2014))
              {
                year_wave = "file_wave_6.csv";
              }


        d3.queue()
        .defer(d3.csv , year_wave)
        .await(ready);




      function ready (error , datapoints)
      {



        if (zoom == 0)
        {
          //set the range of the xAxis
          var x = d3.scaleLinear()
                      .domain(d3.extent(datapoints , function(d){
                        if(year == 1981)
                        {
                          return d.y1981;
                        }
                        if(year == 1982)
                        {
                          return d.y1982;
                        }
                        if(year == 1983)
                        {
                          return d.y1983;
                        }
                        if(year == 1984)
                        {
                          return d.y1984;
                        }
                        if(year == 1990)
                        {
                          return d.y1990;
                        }
                        if(year == 1991)
                        {
                          return d.y1991;
                        }
                        if(year == 1992)
                        {
                          return d.y1992;
                        }
                        if(year == 1993)
                        {
                          return d.y1993;
                        }
                        if(year == 1994)
                        {
                          return d.y1994;
                        }
                        if(year == 1995)
                        {
                          return d.y1995;
                        }
                        if(year == 1996)
                        {
                          return d.y1996;
                        }
                        if(year == 1997)
                        {
                          return d.y1997;
                        }
                        if(year == 1998)
                        {
                          return d.y1998;
                        }
                        if(year == 1999)
                        {
                          return d.y1999;
                        }
                        if(year == 2000)
                        {
                          return d.y2000;
                        }
                        if(year == 2001)
                        {
                          return d.y2001;
                        }
                        if(year == 2002)
                        {
                          return d.y2002;
                        }
                        if(year == 2003)
                        {
                          return d.y2003;
                        }
                        if(year == 2004)
                        {
                          return d.y2004;
                        }
                        if(year == 2005)
                        {
                          return d.y2005;
                        }
                        if(year == 2006)
                        {
                          return d.y2006;
                        }
                        if(year == 2007)
                        {
                          return d.y2007;
                        }
                        if(year == 2008)
                        {
                          return d.y2008;
                        }
                        if(year == 2009)
                        {
                          return d.y2009;
                        }
                        if(year == 2010)
                        {
                          return d.y2010;
                        }
                        if(year == 2011)
                        {
                          return d.y2011;
                        }
                        if(year == 2012)
                        {
                          return d.y2012;
                        }
                        if(year == 2013)
                        {
                          return d.y2013;
                        }
                        if(year == 2014)
                        {
                          return d.y2014;
                        }


                        }))
                      .range([0 , width])
                      .nice();

        }
        else {
          //set the range of the xAxis
          var x = d3.scaleLinear()
                      .domain([0 , d3.mean(datapoints , function(d)
                      {
                        if(year == 1981)
                        {
                          return d.y1981;
                        }
                        if(year == 1982)
                        {
                          return d.y1982;
                        }
                        if(year == 1983)
                        {
                          return d.y1983;
                        }
                        if(year == 1984)
                        {
                          return d.y1984;
                        }
                        if(year == 1990)
                        {
                          return d.y1990;
                        }
                        if(year == 1991)
                        {
                          return d.y1991;
                        }
                        if(year == 1992)
                        {
                          return d.y1992;
                        }
                        if(year == 1993)
                        {
                          return d.y1993;
                        }
                        if(year == 1994)
                        {
                          return d.y1994;
                        }
                        if(year == 1995)
                        {
                          return d.y1995;
                        }
                        if(year == 1996)
                        {
                          return d.y1996;
                        }
                        if(year == 1997)
                        {
                          return d.y1997;
                        }
                        if(year == 1998)
                        {
                          return d.y1998;
                        }
                        if(year == 1999)
                        {
                          return d.y1999;
                        }
                        if(year == 2000)
                        {
                          return d.y2000;
                        }
                        if(year == 2001)
                        {
                          return d.y2001;
                        }
                        if(year == 2002)
                        {
                          return d.y2002;
                        }
                        if(year == 2003)
                        {
                          return d.y2003;
                        }
                        if(year == 2004)
                        {
                          return d.y2004;
                        }
                        if(year == 2005)
                        {
                          return d.y2005;
                        }
                        if(year == 2006)
                        {
                          return d.y2006;
                        }
                        if(year == 2007)
                        {
                          return d.y2007;
                        }
                        if(year == 2008)
                        {
                          return d.y2008;
                        }
                        if(year == 2009)
                        {
                          return d.y2009;
                        }
                        if(year == 2010)
                        {
                          return d.y2010;
                        }
                        if(year == 2011)
                        {
                          return d.y2011;
                        }
                        if(year == 2012)
                        {
                          return d.y2012;
                        }
                        if(year == 2013)
                        {
                          return d.y2013;
                        }
                        if(year == 2014)
                        {
                          return d.y2014;
                        }
                      })])
                      .range([0 , width])
                      .nice();
        }


        // tooltip mouseover event handler
          var tipMouseover = function(d) {


            var sel = d3.select(this);

            if(year == 1981)
            {
              x1 = x(d.y1981) + 40;
              position_x = x(d.y1981) +10;
              deaths= d.y1981;

            }
            if(year == 1982)
            {
              x1 = x(d.y1982) + 40;
              position_x = x(d.y1982) +10;
              deaths= d.y1982;
            }
            if(year == 1983)
            {
              x1 = x(d.y1983) + 40;
              position_x = x(d.y1983) +10;
              deaths= d.y1983;
            }
            if(year == 1984)
            {
              x1 = x(d.y1984) + 40;
              position_x = x(d.y1984) +10;
              deaths= d.y1984;
            }
            if(year == 1990)
            {
              x1 = x(d.y1990) + 40;
              position_x = x(d.y1990) +10;
              deaths= d.y1990;
            }
            if(year == 1991)
            {
              x1 = x(d.y1991) + 40;
              position_x = x(d.y1991) +10;
              deaths= d.y1991;
            }
            if(year == 1992)
            {
              x1 = x(d.y1992) + 40;
              position_x = x(d.y1992) +10;
              deaths= d.y1992;
            }
            if(year == 1993)
            {
              x1 = x(d.y1993) + 40;
              position_x = x(d.y1993) +10;
              deaths= d.y1993;
            }
            if(year == 1994)
            {
              x1 = x(d.y1994) + 40;
              position_x = x(d.y1994) +10;
              deaths= d.y1994;
            }
            if(year == 1995)
            {
              x1 = x(d.y1995)+40;
              position_x = x(d.y1995) +20 ;
              deaths= d.y1995;
            }
            if(year == 1996)
            {
              x1 = x(d.y1996) + 40;
              position_x = x(d.y1996) +10;
              deaths= d.y1996;
            }
            if(year == 1997)
            {
              x1 = x(d.y1997) + 40;
              position_x = x(d.y1997) +10;
              deaths= d.y1997;
            }
            if(year == 1998)
            {
              x1 = x(d.y1998) + 40;
              position_x = x(d.y1998) +10;
              deaths= d.y1998;
            }
            if(year == 1999)
            {
              x1 = x(d.y1999) + 40;
              position_x = x(d.y1999) +10;
              deaths= d.y1999;
            }
            if(year == 2000)
            {
              x1 = x(d.y2000) + 40;
              position_x = x(d.y2000) +10;
              deaths= d.y2000;
            }
            if(year == 2001)
            {
              x1 = x(d.y2001) + 40;
              position_x = x(d.y2001) +10;
              deaths= d.y2001;
            }
            if(year == 2002)
            {
              x1 = x(d.y2002) + 40;
              position_x = x(d.y2002) +10;
              deaths= d.y2002;
            }
            if(year == 2003)
            {
              x1 = x(d.y2003) + 40;
              position_x = x(d.y2003) +10;
              deaths= d.y2003;
            }
            if(year == 2004)
            {
            x1 = x(d.y2004) + 40;
            position_x = x(d.y2004) +10;
            deaths= d.y2004;
            }
            if(year == 2005)
            {
            x1 = x(d.y2005) + 40;
            position_x = x(d.y2005) +10;
            deaths= d.y2005;
            }
            if(year == 2006)
            {
              x1 = x(d.y2006) + 40;
              position_x = x(d.y2006) +10;
              deaths= d.y2006;
            }
            if(year == 2007)
            {
              x1 = x(d.y2007) + 40;
              position_x = x(d.y2007) +10;
              deaths= d.y2007;
            }
            if(year == 2008)
            {
              x1 = x(d.y2008) + 40;
              position_x = x(d.y2008) +10;
              deaths= d.y2008;
            }
            if(year == 2009)
            {
              x1 = x(d.y2009) + 40;
              position_x = x(d.y2009) +10;
              deaths= d.y2009;
            }
            if(year == 2010)
            {
              x1 = x(d.y2010) + 40;
              position_x = x(d.y2010) +10;
              deaths= d.y2010;
            }
            if(year == 2011)
            {
              x1 = x(d.y2011) + 40;
              position_x = x(d.y2011) +10;
              deaths= d.y2011;
            }
            if(year == 2012)
            {
              x1 = x(d.y2012) + 40;
              position_x = x(d.y2012) +10;
              deaths= d.y2012;
            }
            if(year == 2013)
            {
              x1 = x(d.y2013) + 40;
              position_x = x(d.y2013) +10;
              deaths= d.y2013;
            }
            if(year == 2014)
            {
              x1 = x(d.y2014) + 40;
              position_x = x(d.y2014) +10;
              deaths= d.y2014;
            }

            d3.select("#chart svg").append("line")
            .attr("id" , "bubble_line")
            .attr("z-index" , 1)
            .attr("x1", x1)  //<<== change your code here
            .attr("y1",d.y  )
            .attr("x2",x1) //<<== and here
            .attr("y2", height - 20)
            .attr("stroke-width", 2)
            .attr("stroke", function()
            {
              if(d.continent == "Europe")
              {
                return "#ff0000";
              }
             if (d.continent == "America")
              {
                return "#0080ff";
              }
              if (d.continent == "Africa")
               {
                 return "#00ff00";
               }
               if (d.continent == "Australia")
                {
                  return "#bf00ff";
                }
                if (d.continent == "Asia")
                 {
                   return "#ffff00";
                 }
            })
            .attr ("fill", "none")
            .append("text");

            var text = d3.select("#chart svg").append("text")

            var textLabels = text
                              .attr("id" , "year_text")
                              .attr("x" , position_x)
                              .attr("y" , height)
                              .text(function(){return deaths + " deaths"})

            svg.selectAll(".countries")
              .attr("fill-opacity" , 0.3)
              .attr("stroke-width" , 0)
              ;

            //move the circle that hovers in the front
             var sel = d3.select(this)
            //sel.moveToFront();
             d3.select(this).attr("fill-opacity" , 1)
             .attr("fill" , function(d)
             {
               if(d.continent == "Europe")
               {
                 return "#ff4d4d";
               }
              if (d.continent == "America")
               {
                 return "#4da6ff";
               }
               if (d.continent == "Africa")
                {
                  return "#4dff4d";
                }
                if (d.continent == "Australia")
                 {
                   return "#d24dff";
                 }
                 if (d.continent == "Asia")
                  {
                    return "#ffff4d";
                  }
             });



            // sel.moveToFront();


            if(value == "manners")
            {
                var html  = d.Countries + "<br>" + d.manners +  " %";
            }
            if(value == "independence")
            {
                var html  = d.Countries + "<br>" + d.independence  + " %";
            }
            if(value == "work")
            {
                var html  = d.Countries + "<br>" + d.work +  " %";
            }
            if(value == "responsibility")
            {
                var html  = d.Countries + "<br>" + d.responsibility  + " %";
            }
            if(value == "imagination")
            {
                var html  = d.Countries + "<br>" + d.imagination  + " %";
            }
            if(value == "respect")
            {
                var html  = d.Countries + "<br>" + d.respect  + " %";
            }

            if(value == "money")
            {
                var html  = d.Countries + "<br>" + d.money  + " %";
            }
            if(value == "determination")
            {
                var html  = d.Countries + "<br>" + d.determination  + " %";
            }
            if(value == "religious")
            {
                var html  = d.Countries + "<br>" + d.religious  + " %";
            }
            if(value == "unselfishness")
            {
                var html  = d.Countries + "<br>" + d.unselfishness  + " %";
            }
            if(value == "obedience")
            {
                var html  = d.Countries + "<br>" + d.obedience + " %";
            }



          tooltip.html(html)
              .style("left", (d3.event.pageX + 15) + "px")
              .style("top", (d3.event.pageY - 28) + "px")
            .transition()
              .duration(200) // ms
              .style("opacity",.9) // started as 0!

              };

        var radiusScale = d3.scaleSqrt().domain([0,100]).range([5,40]);

        var simulation = d3.forceSimulation()
              .force("x" , d3.forceX(width /2).strength(0.03))
              .force("y" , d3.forceY(height / 2).strength(0.02))
              .force("collide" , d3.forceCollide( function(d){
                switch(value)
                {
                  case "work":
                    return radiusScale(d.work) +1;
                    break;
                  case "manners":
                    return radiusScale(d.manners) +1;
                    break;
                  case "independence":
                      return radiusScale(d.independence) +1;
                      break;
                  case "responsibility":
                      return radiusScale(d.responsibility) +1;
                      break;
                  case "imagination":
                      return radiusScale(d.imagination) +1;
                      break;
                  case "respect":
                      return radiusScale(d.respect) +1;
                      break;
                  case "money":
                      return radiusScale(d.money) +1;
                      break;
                  case "determination":
                      return radiusScale(d.determination) +1;
                      break;
                  case "religious":
                      return radiusScale(d.religious) +1;
                      break;
                  case "unselfishness":
                      return radiusScale(d.unselfishness) +1;
                      break;
                  case "obedience":
                      return radiusScale(d.obedience) +1;
                      break;
                }
              }))


        //create the axis
        var xAxis = d3.axisTop(x).ticks(20);
        //append the axis to the svg element
        svg.append("g").attr("class" , "xaxis").attr("transform" , "translate(0,570)").call(xAxis);


    function sortByDateAscending(a, b) {

      switch(value)
      {
          case "work":
            return d3.ascending(radiusScale(b.work), radiusScale(a.work));
            break;
          case "manners":
            return d3.ascending(radiusScale(b.manners), radiusScale(a.manners));
            break;
          case "independence":
              return d3.ascending(radiusScale(b.independence), radiusScale(a.independence));
              break;
          case "responsibility":
              return d3.ascending(radiusScale(b.responsibility), radiusScale(a.responsibility));
              break;
          case "imagination":
              return d3.ascending(radiusScale(b.imagination), radiusScale(a.imagination));
              break;
          case "respect":
              return d3.ascending(radiusScale(b.respect), radiusScale(a.respect));
              break;
          case "money":
              return d3.ascending(radiusScale(b.money), radiusScale(a.money));
              break;
          case "determination":
            return d3.ascending(radiusScale(b.determination), radiusScale(a.determination));
              break;
          case "religious":
              return d3.ascending(radiusScale(b.religious), radiusScale(a.religious));
              break;
          case "unselfishness":
              return d3.ascending(radiusScale(b.unselfishness), radiusScale(a.unselfishness));
              break;
          case "obedience":
              return d3.ascending(radiusScale(b.obedience), radiusScale(a.obedience));
              break;

      }
      // Dates will be cast to numbers automagically:

        }

        datapoints = datapoints.sort(sortByDateAscending);



        var circles = svg.selectAll(".countries")
                      .data(datapoints)
                      .enter()
                      .append("circle")
                      .attr("z-index" , 100)
                      .attr("class" , "countries")
                      .attr("opacity" , "1")
                      .attr("fill-opacity" , "0.8")
                      .attr("stroke" , "black")
                      .attr("stroke-width" , "0.1")
                      .attr("transform" , "translate(0,0)")
                      .attr("r" , function(d) {

                        switch(value)
                        {
                          case "work":
                            return radiusScale(d.work) ;
                            break;
                          case "manners":
                            return radiusScale(d.manners) ;
                            break;
                          case "independence":
                              return radiusScale(d.independence) ;
                              break;
                          case "responsibility":
                              return radiusScale(d.responsibility) ;
                              break;
                          case "imagination":
                              return radiusScale(d.imagination) ;
                              break;
                          case "respect":
                              return radiusScale(d.respect) ;
                              break;
                          case "money":
                              return radiusScale(d.money) ;
                              break;
                          case "determination":
                              return radiusScale(d.determination);
                              break;
                          case "religious":
                              return radiusScale(d.religious);
                              break;
                          case "unselfishness":
                              return radiusScale(d.unselfishness);
                              break;
                          case "obedience":
                              return radiusScale(d.obedience);
                              break;
                        }
                      })
                      //set the colors for every country
                      .attr("fill" , function(d)
                      {
                        if(d.continent == "Europe")
                        {
                          return "#ffb3b3";
                        }
                       if (d.continent == "America")
                        {
                          return "#b3d9ff";
                        }
                        if (d.continent == "Africa")
                         {
                           return "#b3ffb3";
                         }
                         if (d.continent == "Australia")
                          {
                            return "#ecb3ff";
                          }
                          if (d.continent == "Asia")
                           {
                             return "#ffffb3";
                           }
                      })
                      .on("mouseover", tipMouseover)
                      .on("mouseout", tipMouseout);




            simulation.nodes(datapoints)
            .on("tick" , ticked);

            function ticked()
            {
              circles
                .attr("cx" , function(d) {
                  if(year == 1981)
                  {
                    return x(d.y1981);
                  }
                  if(year == 1982)
                  {
                    return x(d.y1982);
                  }
                  if(year == 1983)
                  {
                    return x(d.y1983);
                  }
                  if(year == 1984)
                  {
                    return x(d.y1984);
                  }
                  if(year == 1990)
                  {
                    return x(d.y1990);
                  }
                  if(year == 1991)
                  {
                    return x(d.y1991);
                  }
                  if(year == 1992)
                  {
                    return x(d.y1992);
                  }
                  if(year == 1993)
                  {
                    return x(d.y1993);
                  }
                  if(year == 1994)
                  {
                    return x(d.y1994);
                  }
                  if(year == 1995)
                  {
                    return x(d.y1995);
                  }
                  if(year == 1996)
                  {
                    return x(d.y1996);
                  }
                  if(year == 1997)
                  {
                    return x(d.y1997);
                  }
                  if(year == 1998)
                  {
                    return x(d.y1998);
                  }
                  if(year == 1999)
                  {
                    return x(d.y1999);
                  }
                  if(year == 2000)
                  {
                    return x(d.y2000);
                  }
                  if(year == 2001)
                  {
                    return x(d.y2001);
                  }
                  if(year == 2002)
                  {
                    return x(d.y2002);
                  }
                  if(year == 2003)
                  {
                    return x(d.y2003);
                  }
                  if(year == 2004)
                  {
                    return x(d.y2004);
                  }
                  if(year == 2005)
                  {
                    return x(d.y2005);
                  }
                  if(year == 2006)
                  {
                    return x(d.y2006);
                  }
                  if(year == 2007)
                  {
                    return x(d.y2007);
                  }
                  if(year == 2008)
                  {
                    return x(d.y2008);
                  }
                  if(year == 2009)
                  {
                    return x(d.y2009);
                  }
                  if(year == 2010)
                  {
                    return x(d.y2010);
                  }
                  if(year == 2011)
                  {
                    return x(d.y2011);
                  }
                  if(year == 2012)
                  {
                    return x(d.y2012);
                  }
                  if(year == 2013)
                  {
                    return x(d.y2013);
                  }
                  if(year == 2014)
                  {
                    return x(d.y2014);
                  }


                 })
                .attr("cy" , function(d) {
                  if(d.y<20)
                  {
                    return d.y + 50;
                  }
                  else {
                    return d.y;
                  }

                })
            }
      }
})();

}
