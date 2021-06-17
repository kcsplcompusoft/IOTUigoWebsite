
function convert(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
}
  function bindMarker(marker,marker_details){

// TESt

                                                  data_list=marker_details

                                                  var HTML='<div  id="div_table" class="animated fadeIn">'


                                                                                 +'<div class="card">'
                                                                                    +'<div class="card-header">'
                                                                                         +'<h3 class="card-title">Industry:'+data_list[0].industry_name +' , Site:'+data_list[0].site_name+'</h3>'
                                                                                            +'<a href="fact?industry='+data_list[0].industry_id+'&site='+data_list[0].site_id+'">View All</a></div>'
                                                                                    +'</div>'
                                                                                    +'<div class="card-body"  style="overflow:scroll;">'
                                                                                        +'<table id="bootstrap-data-table" class="table table-striped table-bordered">'
                                                                                            +'<thead>'
                                                                                            +'<tr>'

                                                                                                 +'<th>Gateway Name</th>'
                                                                                                 +'<th>Device Name</th>'
                                                                                                 +'<th>Parameter Name</th>'
                                                                                                 +'<th>Parameter Value</th>'

                                                                                                 +'<th>Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>'
                                                                                                 +'<th>Time</th>'

//                                                                                                 +'<th>View</th>'
                                                                                            +'</tr>'
                                                                                            +'</thead>'
                                                                                            +'<tbody>'

                  //                                var link = "<a class="nav-link" href= "{% url 'index' %}">click here </a>"

                                                   for(count = 0; count < data_list.length; count++){
                                                           var id =data_list[count]["id"].toString();
                                                           var gateway_id=data_list[count]["gateway_name"].toString();
                                                           var device_id=data_list[count]["device_name"].toString();
                                                           var parameter_name=data_list[count]["parameter_name"].toString()
                                                           var parameter_value=data_list[count]["parameter_value"].toString();
                                                          HTML += "<tr>";

                                                          HTML += "<td>"+gateway_id+"</td>";
                                                          HTML += "<td>"+device_id+"</td>";

                                                         HTML += "<td >"+parameter_name+"</td>";
                                                         HTML += "<td >"+parameter_value+"</td>";
                                                         HTML += "<td >"+data_list[count]["date"]+"</td>";

                                                         HTML += "<td >"+data_list[count]["time"]+"</td>";




                                                          HTML += "</tr>";
                  //
                                                   }



                                                  HTML += " </tbody></table>";
                                                  HTML += "</div></div></div>";
                console.log(HTML)
                return HTML
            }

      $(document).ready(function() {
      // Creating map options
      var mapOptions = {
          center: [22.2587, 71.1924],
          zoom: 7.3
      }
      // Creating a map object
      var map = new L.map('map', mapOptions);

      // Creating a Layer object
      googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
      }).addTo(map);
      setInterval(function () {
        $.ajax({
            method: "GET",
            url: 'api/location_data',
            success: function(data) {
                //        //        debugger;
                var obj = JSON.parse(data);
var markerHashMap = new Map();

                list_location = obj.data

                for (count = 0; count < list_location.length; count++) {

                    var marker=list_location[count]['marker']
                    var marker_detail=list_location[count]['marker_details']
                    var latitude = parseFloat(marker["zip_latitude"]).toFixed(4);

                    var longitude = parseFloat(marker["zip_longitude"]).toFixed(4);
                    markerHashMap.set(latitude.toString()+","+longitude.toString(), marker_detail);


//                      var htmlContent= bindMarker(marker,marker_detail)
//                     L.marker([latitude,longitude]).bindPopup(htmlContent, {
//    maxWidth : 850
//}).addTo(map);
      var greenIcon = L.icon({
        iconUrl: '/static/images/149059.png',
        iconSize:     [20, 50], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      });
     L.marker([latitude,longitude],{icon: greenIcon}).addTo(map).on('mouseover',onClick);

                }
 function onClick(e){
          var value = this.getLatLng()
           var fLatitude = parseFloat(value["lat"]).toFixed(4).toString();

                    var fLongitude = parseFloat(value["lng"]).toFixed(4).toString();
                    var findLatLng=fLatitude+","+fLongitude

                    markerdata=markerHashMap.get(findLatLng)


                    var htmlContent= bindMarker(marker,markerdata);



                     var popup =L.popup({maxWidth :550,
                     maxHeight:400})
                              .setLatLng([value["lat"],value["lng"]])
                              .setContent(htmlContent)
                              .openOn(map)
          }
            },
            error: function(error_data) {
                console.log("error")
                console.log(error_data)
            }
        });
     }, 15000);

          


      });