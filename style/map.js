    <style>
      #map {
        height: 100%;
      }
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script>
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 42.3467, lng: -71.0972},
          zoom: 10
        });
      }
      
     var map = new
     google.maps.Map(document.getElementByID('map'), options);
      
     var marker = new google.maps.Marker({
        position:{lat: 42.3467, lng: -71.0972}),
        map:map
		});
		
		var inforWindow = new google.maps.InfoWindow({
			content: '<h1>Fenway Park, Boston MA</h1>'
			});
    </script>
