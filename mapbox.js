mapboxgl.accessToken = 'pk.eyJ1IjoicmFhbmFuLWciLCJhIjoiY2pyMWF5YzM4MDBseTQzcXEyZ3gxN2xvOSJ9.Jm_gHZ3zcJh2xygKeOdr5w';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/raanan-g/cjs3vdafw04bb1fmtnqdivns0',
center: [-79.990100, 40.441700],
zoom: 14.0
});

var marker = new mapboxgl.Marker() // Initialize a new marker
  .setLngLat([-79.990100, 40.441700])
  .addTo(map); // Add the marker to the map

var geocoder = new MapboxGeocoder({ // Initialize the geocoder
  accessToken: mapboxgl.accessToken, // Set the access token
  placeholder: 'Search your address', // Text prompt
  proximity: {
    longitude: -79.990100,
    latitude: -40.441700
  } // coordinates of layer centroid
});

// Add geocoder to the map
map.addControl(geocoder);

// Add a source layer and default styling for a single point
map.on('load', function() {
  map.addSource('single-point', {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": []
    }
  });
  
  map.addLayer({
    "id": "point",
    "source": "single-point",
    "type": "circle",
    "paint": {
      "circle-radius": 10,
      "circle-color": "448ee4"
    }
  });

  // When user searches and address,  
  // add a marker at the result's coordinates
  geocoder.on('result', function(ev) {
    map.GetSource('single-point').setData(ev.result.geometry);
  });
  
});

/* var layers = ['0-17%', '17-33%', '33-50%', '50-67%', '67-83%', '83-100%'];
var colors = ['#F5F4F', '#FED976', '#FEB24C', '#FD8D3C', '#FC4E2A', '#F10404'];

for (i = 0; i < layers.length; i++) {
  var layer = layers[i];
  var color = colors[i];
  var item = document.createElement('div');
  var key = document.createElement('span');
  key.className = 'legend-key';
  key.style.backgroundColor = color;

  var value = document.createElement('span');
  value.innerHTML = layer;
  item.appendChild(key);
  item.appendChild(value);
  legend.appendChild(item);
}
*/
