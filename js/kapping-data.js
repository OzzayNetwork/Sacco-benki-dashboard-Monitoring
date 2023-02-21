
    $('.main-map-container .ma-backdrop').on('click',function(){
        $('.main-map-container aside').addClass('left-100');
        $(this).addClass('d-none');
    });
    function initMap(){

         //incident icon
         var warning = {
            url: "images/map-assets/warning.svg", // url
            scaledSize: new google.maps.Size(50, 50), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        };

         //service point
         var servicePoint= {
            url: "images/map-assets/flag.svg", // url
            scaledSize: new google.maps.Size(50, 50), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        };

        //active agent icon
        var activeAgent = {
            url: "images/map-assets/active-agent.svg", // url
            scaledSize: new google.maps.Size(50, 50), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        };

        //inactive agent icon
        var inactiveAgent = {
            url: "images/map-assets/inactive-agent.svg", // url
            scaledSize: new google.maps.Size(50, 50), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        };



         //off street parking
         var street_parking = {
            url: "images/map-assets/pin.svg", // url
            scaledSize: new google.maps.Size(50, 50), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        };

         //bus park
         var bus = {
            url: "images/map-assets/bus.svg", // url
            scaledSize: new google.maps.Size(50, 50), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        };

        //street  icon
        var offStreet = {
            url: "images/map-assets/street-parking.svg", // url
            scaledSize: new google.maps.Size(55, 55), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        };

        //city hall marker size styling
        var hall_icon = {
            url: "images/map-assets/parliament.svg", // url
            scaledSize: new google.maps.Size(45, 45), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        };

        //compliant cars icon
        var compliantCar={
            url: "images/map-assets/compliant-a.svg", // url
            scaledSize: new google.maps.Size(45, 45), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        }

         //to be clamped  cars icon
         var toClamp={
            url: "images/map-assets/tobe-clamped-a.svg", // url
            scaledSize: new google.maps.Size(45, 45), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        }

        //to be unclamped
        var toUnClamp={
            url: "images/map-assets/to-unclamp.svg", // url
            scaledSize: new google.maps.Size(45, 45), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        }

        //clamped cars
        var clamped={
            url: "images/map-assets/clamped-a.svg", // url
            scaledSize: new google.maps.Size(45, 45), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        }


        //the map options
        var options={
            zoom:12,
            center:{lat:-1.2921,lng:36.8219}
        }

        //new map
        var map=new google.maps.Map(document.getElementById('map'), options);

        /*

        //add marker
        var marker=new google.maps.Marker({
            position:{lat:-1.2925606, lng:36.7809636},
            map: map,
            icon: hall_icon
        });

        var infowindow=new google.maps.InfoWindow({
            content:'<h1>City Hall</h1>'
        });

        marker.addListener('click', function(){
            infowindow.open(map,marker);
        });
        */

        //listen for click on  map

        google.maps.event.addListener(map, 'dblclick',function(event){
            //add marker
            addMarker({coords:event.latLng});

            //get value of clicked coodinates

            //stores coodinates of selected area
            var newCoords=event.latLng;

            // return clicked area coods
            console.log( event.latLng);
            // alert(event.latLng);

            //get latitude
            // var theStreet=newCoords.results[0];
            // alert(theStreet);
            
            
            
          

            //opens the side bar form
            $('#newPoint').removeClass('left-100').siblings().addClass('left-100');
            $('.main-map-container .ma-backdrop').removeClass('d-none');
        });

        


         //street coodinates
         addMarker({
            coords:{lat:-1.284319, lng:36.8238173},
            iconImage:street_parking,
            content:'<p class="d-none">street|unique identifer</p><h6>Tom Mboya Street</h6> <P><strong>20 parking slots available</strong> Out of <strong>27 parking slots</strong></p>'
        });

        //compliant car
        addMarker({
            coords:{lat:-1.29889, lng:36.8186003},
            iconImage:compliantCar,
            content:'<p class="d-none">car|plate num</p><h6 class="text-uppercase d-flex align-items-center"><span class="active-agent mr-2"></span>KAT 211Z<span></h6>'
        });

        //inactive agent
        addMarker({
            coords:{lat:-1.29889, lng:36.8386003},
            iconImage:inactiveAgent,
            content:'<p class="d-none">agent|plate num</p><h6 class="text-capitalize d-flex align-items-center"><span class="offline-agent mr-2"></span> <span>Alex Wanjala <small><strong>(INACTIVE)</strong></small></span></h6> <p class="pb-0 mb-0">Last seen at <strong>Tom Mboya Street</strong> at 2:06 PM </strong></p><p>Most recent activity: <strong>Queried Car plate Number KBW 2589T at 11:41PM</strong><div class="listview text-align-left text-capitalize pl-0">  <div class="listview__header text-align-left text-capitalize text-left"><strong>23MB data (70%)</strong> Consumed in the <strong>last 13 Days</strong></div> <div class="progress"> <div class="progress-bar progress-bar-warning" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div> </div></div></p> '
        });

        //inactive agent
        addMarker({
            coords:{lat:-1.29789, lng:36.8486003},
            iconImage:inactiveAgent,
            content:'<p class="d-none">agent|agent num</p><h6 class="text-capitalize d-flex align-items-center"><span class="offline-agent mr-2"></span> <span>Alex Wanjala <small><strong>(INACTIVE)</strong></small></span></h6> <p class="pb-0 mb-0">Last seen at <strong>Tom Mboya Street</strong> at 2:06 PM </strong></p><p>Most recent activity: <strong>Queried Car plate Number KBW 2589T at 11:41PM</strong></p> <div class="listview text-align-left text-capitalize pl-0">  <div class="listview__header text-align-left text-capitalize text-left"><strong>2MB data (25%)</strong> Consumed in the <strong>last 21 Days</strong></div> <div class="progress"> <div class="progress-bar progress-bar-success" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> </div></div>'
        });

         //active agent
         addMarker({
            coords:{lat:-1.3289, lng:36.8452003},
            iconImage:activeAgent,
            content:'<p class="d-none">agent|plate num</p><h6 class="text-capitalize d-flex align-items-center"><span class="offline-agent mr-2"></span> <span>Alex Wanjala <small><strong>(INACTIVE)</strong></small></span></h6> <p class="pb-0 mb-0">Last seen at <strong>Tom Mboya Street</strong> at 2:06 PM </strong></p><p>Most recent activity: <strong>Queried Car plate Number KBW 2589T at 11:41PM</strong><div class="listview text-align-left text-capitalize pl-0">  <div class="listview__header text-align-left text-capitalize text-left"><strong>23MB data (70%)</strong> Consumed in the <strong>last 13 Days</strong></div> <div class="progress"> <div class="progress-bar progress-bar-warning" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div> </div></div></p> '
        });

        //to clamp car
        addMarker({
            coords:{lat:-1.2974586, lng:36.8087993},
            iconImage:toClamp,
            content:'<p class="d-none">car|plate num</p><h6 class="text-uppercase d-flex align-items-center"><span class=" mr-2 offline-agent"></span><span>KCV 252Y</span></h6>'
        });

        //to unclamp car
        addMarker({
            coords:{lat:-1.29948, lng:36.8151453},
            iconImage:toUnClamp,
            content:'<p class="d-none">car|plate num</p><h6 class="text-uppercase d-flex align-items-center"><span class="unclump-car mr-2"></span><span>KBZ 2T2M</span></h6>'
        });

        //incidents

        addMarker({
            coords:{lat:-1.29948, lng:36.8751453},
            iconImage:warning,
            content:'<p class="d-none">incident|identifiret</p><img class="mb-3" src="demo/img/widgets/note.png" alt=""> <h6> Violent Nairobian</h6> <p class="mb-0 pb-0">Reported By Tonny Jumba</p><strong class="text-info">20 Min Ago</strong>'
        });

         //clamped
         addMarker({
            coords:{lat:-1.294219, lng:36.806824},
            iconImage:clamped,
            content:'<p class="d-none">car|plate num</p><h6  class="text-uppercase d-flex align-items-center"><span class="clamped-car mr-2"></span><span>KBY 252P</span></h6>'
        });

        //city hall
        addMarker({
            coords:{lat:-1.2925606, lng:36.7809636},
            iconImage:hall_icon,
            content:'<p class="d-none">collectionPoint|identifier</p><h4>city_hall</h4><P><strong>KES 5,230,600</strong> already collected</p>',
            
        });

        //sunken
        addMarker({
            coords:{lat:-1.2924789,lng:36.8243687},
            iconImage:offStreet,
            content:'<p class="d-none">offstreetParking|identifier</p><h6>Sunken (Offstereet Parking)</h6> <P><strong>KES 5,230,600</strong> already collected</p>'
        });

         //buss park
         addMarker({
            coords:{lat:-1.2867576,lng:36.8344851},
            iconImage:bus,
            content: '<p class="d-none">offstreetParking|identifier</p><h6>Bus Park (Offstreet Parking)</h6> <P><strong>KES 3,256,230</strong> already collected</p>'
        });

        //service point or collection point
        addMarker({
            coords:{lat:-1.27576,lng:36.834851},
            iconImage:servicePoint,
            content: '<p class="d-none">collectionPoint|identifier</p><h6>RevenueSure Agent</h6> <P><strong>KES 5,230,600</strong> already collected</p>'
        });

        //add marker function
        function addMarker(props){
            //add marker
        var marker=new google.maps.Marker({
            position:props.coords,
            map: map,  
            // icon:props.iconImage             
        });

            if(props.iconImage){
                //set icon image if its there
                marker.setIcon(props.iconImage);
               
            }

            // check if there is content
            if(props.content){
                //set icon image if its there

                var infowindow=new google.maps.InfoWindow({
                    content:props.content
                });

                marker.addListener('mouseover', function(){
                    infowindow.open(map,marker);                        

                });

                marker.addListener('click', function(e){
                   
                    // alert(iconImage); 
                    // alert( e.latLng);

                    //position of the clicked marker . the longitude and latitude
                    var pointPosition=e.latLng;

                    var theContent=infowindow.content.substr(18);
                    var theContent=theContent.substring(0, theContent.indexOf('<'));

                    //the group of markers eg car,incident,collection points etc
                    var theGroup=theContent.substring(0, theContent.indexOf('|'));

                    //the unique identifier of the clicked item eg number plate
                    var uniqueIdentifier=theContent.substring(theContent.lastIndexOf("|") + 1)

                    // alert(theGroup);

                    //if else statements to bring out the correct side details depending on the groups category

                    if(theGroup=="car"){
                        //functions related to cars goes here
                        $('#car-info').removeClass('left-100').siblings().addClass('left-100');
                        $('.main-map-container .ma-backdrop').removeClass('d-none');

                    }

                    if(theGroup=="incident"){
                        //functions for incidents
                        
                        $('#incident-info').removeClass('left-100').siblings().addClass('left-100');
                        $('.main-map-container .ma-backdrop').removeClass('d-none');

                    }

                    if(theGroup=="collectionPoint"){
                        //functions for collection points
                        $('#collectionPoint-info').removeClass('left-100').siblings().addClass('left-100');
                        $('.main-map-container .ma-backdrop').removeClass('d-none');
                    }

                    if(theGroup=="agent"){
                        //function for agents
                        $('#agents-info').removeClass('left-100').siblings().addClass('left-100');
                        $('.main-map-container .ma-backdrop').removeClass('d-none');
                    }

                    if(theGroup=="offstreetParking"){
                        //function for off street parking
                        $('#offstreet-info').removeClass('left-100').siblings().addClass('left-100');
                        $('.main-map-container .ma-backdrop').removeClass('d-none');
                    }

                    if(theGroup=="street"){
                        //function for on street parking
                        $('#street-info').removeClass('left-100').siblings().addClass('left-100');
                        $('.main-map-container .ma-backdrop').removeClass('d-none');
                    }

                      

                                       

                });

               // close content when mouse exits
                marker.addListener('mouseout', function(){
                    infowindow.close(map,marker);                        

                });
                
            }
        }
    }
