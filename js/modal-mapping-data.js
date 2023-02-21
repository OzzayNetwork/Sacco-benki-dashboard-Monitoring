
    $('.main-map-container .ma-backdrop').on('click',function(){
        $('.main-map-container aside').addClass('left-100');
        $(this).addClass('d-none');
    });
    const KEY="AIzaSyDvQMZoz8iO5th02I1xZoiZdqd_8HaM-zQ";
    var longOrigin;
    var latOrigin;
    var longDestination;
    var latDestination;
    var destinationName;
    var originName;
    var originInput="pac-input";
    var destinationInput="destination";
    var theMapId="map"; 

    //alert(originName); 
        function initMap(){
        //closing marker details

        $('.close-aside').on('click', function(){
            $(this).parent().parent().addClass('left-100');
            $('.ma-backdrop').addClass('d-none');
            // marker.setAnimation(null);
            removeMarkers();
        });

        //destination icon
        var Destinationicon = {
            url: "images/map-assets/destination3.svg", // url
            // url: place.icon,//adds unique marker depending on search results
            // size: new google.maps.Size(71, 71),
            // origin: new google.maps.Point(0, 0),
            // anchor: new google.maps.Point(17, 34),
            // scaledSize: new google.maps.Size(25, 25),

            scaledSize: new google.maps.Size(50, 50), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        }; 



        //the map options
        var options={
            center:{lat:-1.2921,lng:36.8219},
            mapTypeControl: false,
            //draggable: false,
            scaleControl: false,
            //scrollwheel: false,
            navigationControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
       

        //new map
        var map=new google.maps.Map(document.getElementById(theMapId), options);
        


       var gmarkers = [];

        //listen for click on  map

        // the smooth zoom function not in use
            function smoothZoom (map, max, cnt) {
            if (cnt >= max) {
                return;
            }
            else {
                z = google.maps.event.addListener(map, 'zoom_changed', function(event){
                    google.maps.event.removeListener(z);
                    smoothZoom(map, max, cnt + 1);
                });
                setTimeout(function(){map.setZoom(cnt)}, 80); // 80ms is what I found to work well on my system -- it might not work well on all systems
            }
        }     

        //add marker function
        function addMarker(props){
            //add marker
            var marker=new google.maps.Marker({
            position:props.coords,
            map: map, 
            animation: google.maps.Animation.DROP,
            // icon:props.iconImage             
        });
       //alert(props.coords);
            if(!props.content){
                gmarkers.push(marker);
            // alert("content not set");
            }

            if(props.iconImage){
                //set icon image if its there
                marker.setIcon(props.iconImage);
                //alert("icon setting");
            }

            if(!props.iconImage){
                //set icon image if its there
                marker.setIcon(props.iconImage);
               // alert("icon not set");
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
                    toggleBounce(marker);                  
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
                });
               // close content when mouse exits
                marker.addListener('mouseout', function(){
                    infowindow.close(map,marker)                       
                });
                
            }

        }
       // searchAddress();
        
        // getDestination();
       
        // getOrigin();

        latOrigin=-1.1624385;
        longOrigin=36.8734441;
        latDestination=-1.3207506;
        longDestination=36.8267056;
        distanceMatrixRouting(latOrigin, longOrigin,latDestination,longDestination);


        //make the marker bounce
        function toggleBounce(marker) {
            if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
            } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(function(){
                marker.setAnimation(null);
            },750);
            }
        }

        //remove marker function
        function removeMarkers(){
            for(i=0; i<gmarkers.length; i++){
                gmarkers[i].setMap(null);
            }
        }

        
        function distanceMatrixRouting(latOrigin, longOrigin,latDestination,longDestination){
            // alert(latOrigin);
            // alert(latDestination);
            // alert(originName);
            //initializingMap();
           // reverseGeocoding(latOrigin,longDestination);

            var map;
            var options;
            var options={
                center:{lat:-1.2921,lng:36.8219},         
                zoom: 12,       
                mapTypeControl: false,
                //draggable: false,
                scaleControl: false,
                scrollwheel: false,
                navigationControl: false,
                streetViewControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                fullscreenControl: false,
            }

            map=new google.maps.Map(document.getElementById(theMapId), options)

            //destination icon
            var destinationIcon = {
                url: "images/map-assets/destination3.svg", // url
                scaledSize: new google.maps.Size(25, 25), // scaled size
                origin: new google.maps.Point(0,0), // origin
                anchor: new google.maps.Point(0, 0) // anchor
            };

            //origin icon
            var originIcon = {
                url: "images/map-assets/pickup-icon2.svg", // url
                scaledSize: new google.maps.Size(25, 25), // scaled size
                origin: new google.maps.Point(0,0), // origin
                anchor: new google.maps.Point(0, 0) // anchor
            };

                //add marker function
                function addMarker(props){
                    //add marker
                    var marker=new google.maps.Marker({
                    position:props.coords,
                    map: map, 
                    animation: google.maps.Animation.DROP,
                    // icon:props.iconImage             
                });
            //alert(props.coords);

                if(!props.content){
                    gmarkers.push(marker);
                // alert("content not set");

                }

                    if(props.iconImage){
                        //set icon image if its there
                        marker.setIcon(props.iconImage);
                        //alert("icon setting");
                    
                    }

                    if(!props.iconImage){
                        //set icon image if its there
                        marker.setIcon(props.iconImage);
                    // alert("icon not set");
                    
                    }

                    // check if there is content
                    if(props.content){
                        //set icon image if its there

                        var infowindow=new google.maps.InfoWindow({
                            content:props.content
                        });
                        infowindow.open(map,marker);

                        marker.addListener('click', function(e){
                            toggleBounce(marker);                
                        });                  
                    }
                }

                addMarker({
                    coords:{lat:latOrigin, lng:longOrigin},
                    iconImage:originIcon,
                    //content:'<p class="d-none">street|unique identifer</p><h6>Tom Mboya Street</h6> <P><strong>20 parking slots available</strong> Out of <strong>27 parking slots</strong></p>'
                    content:`<div class="pickup-content"><strong>`+originName+`</strong></div>`
                });


                addMarker({
                    coords:{lat:latDestination, lng:longDestination},
                    iconImage:destinationIcon,
                    //content:'<p class="d-none">street|unique identifer</p><h6>Tom Mboya Street</h6> <P><strong>20 parking slots available</strong> Out of <strong>27 parking slots</strong></p>'
                   content:`<div class="pickup-content"><strong>`+destinationName+`</strong></div>`
                });

            


            var origin=new google.maps.LatLng(latOrigin, longOrigin);
            var destination=new google.maps.LatLng(latDestination, longDestination);
            var display=new google.maps.DirectionsRenderer({
                polylineOptions: {
                    strokeColor: "Black",
                    strokeWeight: 4,
                  }
            });
            var service=new google.maps.DirectionsService();

            display.setMap(map);
            var request={
                origin:origin,
                destination:destination,
                travelMode:'DRIVING',
                avoidHighways: false,
                avoidTolls: false,                                    
                //suppressMarkers: true
                
            };

            service.route(request,function(result,status){
                if(status=='OK'){
                    display.setDirections(result);                    

                    var leg = result.routes[0].legs[0];
                    var endLng=leg.end_location.lng();
                    var endLat=leg.end_location.lat();

                    var startLng=leg.start_location.lng();
                    var startLat=leg.start_location.lat();


                   // alert(destinationLng)
                }
            });

            var matrixService = new google.maps.DistanceMatrixService()


            
            matrixService.getDistanceMatrix(
            {
                origins: [origin],
                destinations: [destination],                
                travelMode: google.maps.TravelMode.DRIVING,
                unitSystem: google.maps.UnitSystem.IMPERAL, //miles and feet
                avoidHighways: false,
                avoidTolls: false,
                suppressMarkers: true
            },callback);
            var travel_mode = 'DRIVING';
            
            var directionsDisplay = new google.maps.DirectionsRenderer({'draggable': false});
            var directionsService = new google.maps.DirectionsService(); 

            directionsDisplay.setMap(null); // clear direction from the map
            directionsDisplay.setPanel(null); // clear directionpanel from the map

            if (directionsDisplay != null) {
                new google.maps.DirectionsRenderer({
                    map: map,
                    directions: null,                   
                });
                directionsDisplay.setPanel(null);

                //alert("we are not empty");
            }
            else{
                //alert("we are empty");
            }

            // $('#clearMap').on('click', function(){
            //     alert('clicked');
                
            // });
            

            
         // displayRoute(travel_mode, origin, destination, directionsService, directionsDisplay)
         }
         

          // get distance results
        function callback(response, status) {
            if (status != google.maps.DistanceMatrixStatus.OK) {
                $('#result').html(err);
            } else {
                var origin = response.originAddresses[0];
                var destination = response.destinationAddresses[0];
                if (response.rows[0].elements[0].status === "ZERO_RESULTS") {
                    $('#result').html("Better get on a plane. There are no roads between "  + origin + " and " + destination);
                } else {
                    var distance = response.rows[0].elements[0].distance;
                    var duration = response.rows[0].elements[0].duration;
                    console.log(response.rows[0].elements[0].distance);
                    var distance_in_kilo = distance.value / 1000; // the kilom
                    var distance_in_mile = distance.value / 1609.34; // the mile
                    var duration_text = duration.text;
                    var duration_value = duration.value;
                    $('#in_mile').text(distance_in_mile.toFixed(2));
                    $('#in_kilo').text(distance_in_kilo.toFixed(2));
                    $('#duration_text').text(duration_text);
                    $('#duration_value').text(duration_value);
                    $('#from').text(origin);
                    $('#to').text(destination);
                    //alert(distance_in_kilo.toFixed(2));

                    var directionsDisplay = new google.maps.DirectionsRenderer({'draggable': false});
                    var directionsService = new google.maps.DirectionsService(); 

                    new google.maps.DirectionsRenderer({
                        map: map,
                        directions: null,
                        directions: response,                       
                        suppressMarkers: true
                    });

                    // directionsDisplay.setDirections(response);
                  //  directionsRenderer.setDirections(response);

                    
                    // alert(duration_value);

                   
                }
            }
        }

        
        // var Makemarker=new google.maps.Marker({
        //     map:map,
        //     title:place.name,
        //     position:place.geometry.location,          
        //     icon:icon,
        //     description:`<div class="pickup-content"><strong>`+place.name+`</strong></div>`
        // });


        // var markers = []
        // // Sets the map on all markers in the array.
        // function setMapOnAll(map) {
        //     for (let i = 0; i < markers.length; i++) {
        //     markers[i].setMap(map);
        //     }
        // }

        // function clearMarkers() {
        //     setMapOnAll(null);
        //   }

        //displaying route
        function displayRoute(travel_mode, origin, destination, directionsService, directionsDisplay) {
            // clearMarkers();
           
            directionsService.route({
                origin: origin,
                destination: destination,
                travelMode: travel_mode,
                avoidTolls: true,
                directions: response,                       
                suppressMarkers: true
            }, function (response, status) {
                
                
                if (status === google.maps.DirectionsStatus.OK) {                  
                    directionsDisplay.set('directions', null);
                    
                    new google.maps.DirectionsRenderer({
                        map: map,
                        directions: null,
                        directions: response,                       
                        suppressMarkers: true,

                    });
                    var leg = response.routes[0].legs[0];
                    var destinationLng=leg.end_location.lng();
                    var destinationLat=leg.end_location.lat();
                    
                     addMarker({
                        coords:{lat:destinationLng, lng:destinationLat},
                        iconImage:Destinationicon,
                        content:'<p class="d-none">street|unique identifer</p><h6>Tom Mboya Street</h6> <P><strong>20 parking slots available</strong> Out of <strong>27 parking slots</strong></p>'
                    });

                    //makeMarker(leg.start_location,Pickupicon, "title", map);
                    //makeMarker(leg.end_location, 'title', map);

                   // directionsDisplay.setDirections(response);
                  //  directionsRenderer.setDirections(response);
                  
                } else {
                    directionsDisplay.setMap(null);
                    directionsDisplay.setDirections(null);
                   // alert('Could not display directions due to: ' + status);
                }
            });
        }

        function makeMarker(position, title, map) {
            new google.maps.Marker({
                position: position,
                map: map,
                icon: Destinationicon,
                title: title
            });
        }

       



    //
    
    }
