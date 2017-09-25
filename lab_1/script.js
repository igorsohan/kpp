      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: {lat: -33.865427, lng: 151.196123},
          mapTypeId: 'terrain'
        });
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Vinnytsia&appid=1b5ee5a1a74d624a74750350327ea372')
          .then(function(response) {
            return response.json()
          })
          .then(function(data) {
            var icon = data.weather[0].icon;
            var marker = new google.maps.Marker({
              position: {lat: 49.232887, lng: 28.485741},
              map: map,
              title: data.weather[0].description, 
              icon: 'http://openweathermap.org/img/w/' + icon + '.png'
            });
          })
          .catch(function(error) {
            console.log(error);
          })

          fetch('https://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=1b5ee5a1a74d624a74750350327ea372')
        .then(function(response) {
        response.json().then(function(data) {
        var icon = data.weather[0].icon;
        var marker = new google.maps.Marker({
        position: {lat: 49.83, lng: 24.014167},
        map: map,
       title: data.weather[0].description, 
         icon: 'http://openweathermap.org/img/w/' + icon + '.png'
        });
         });
          });
           fetch('https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=1b5ee5a1a74d624a74750350327ea372')
        .then(function(response) {
        response.json().then(function(data) {
        var icon = data.weather[0].icon;
        var marker = new google.maps.Marker({
        position: {lat: 50.4438, lng: 30.5784},
        map: map,
       title: data.weather[0].description, 
         icon: 'http://openweathermap.org/img/w/' + icon + '.png'
        });
         });
          });
              fetch('https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=1b5ee5a1a74d624a74750350327ea372')
        .then(function(response) {
        response.json().then(function(data) {
        var icon = data.weather[0].icon;
        var marker = new google.maps.Marker({
        position: {lat: 50.4438, lng: 30.5784},
        map: map,
       title: data.weather[0].description, 
         icon: 'http://openweathermap.org/img/w/' + icon + '.png'
        });
         });
          });
          fetch('https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=1b5ee5a1a74d624a74750350327ea372')
        .then(function(response) {
        response.json().then(function(data) {
        var icon = data.weather[0].icon;
        var marker = new google.maps.Marker({
        position: {lat: 52.2107, lng: 21.0883},
        map: map,
       title: data.weather[0].description, 
         icon: 'http://openweathermap.org/img/w/' + icon + '.png'
        });
         });
          });
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=1b5ee5a1a74d624a74750350327ea372')
        .then(function(response) {
        response.json().then(function(data) {
        var icon = data.weather[0].icon;
        var marker = new google.maps.Marker({
        position: {lat: 52.5107, lng:13.4383},
        map: map,
       title: data.weather[0].description, 
         icon: 'http://openweathermap.org/img/w/' + icon + '.png'
        });
         });
          });
         

        var script = document.createElement('script');

    
        script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
        document.getElementsByTagName('head')[0].appendChild(script);

        map.data.setStyle(function(feature) {
          var magnitude = feature.getProperty('mag');
          return {
            icon: getCircle(magnitude)
          };
        });
      }

      function getCircle(magnitude) {
        return {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: 'red',
          fillOpacity: .2,
          scale: Math.pow(2, magnitude) / 2,
          strokeColor: 'white',
          strokeWeight: .5
        };
      }
      
      function eqfeed_callback(results) {
          
        var heatmapData = [];
        for (var i = 0; i < results.features.length; i++) {
          var coords = results.features[i].geometry.coordinates;
          var latLng = new google.maps.LatLng(coords[1], coords[0]);
          heatmapData.push(latLng);
        }
        var heatmap = new google.maps.visualization.HeatmapLayer({
          data: heatmapData,
          dissipating: false,
          map: map
        });
        map.data.addGeoJson(results)
      }
