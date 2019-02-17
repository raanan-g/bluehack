mapboxgl.accessToken = 'pk.eyJ1IjoicmFhbmFuLWciLCJhIjoiY2pyMWF5YzM4MDBseTQzcXEyZ3gxN2xvOSJ9.Jm_gHZ3zcJh2xygKeOdr5w';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/raanan-g/cjs3vdafw04bb1fmtnqdivns0',
center: [-79.990100, 40.441700],
zoom: 10.0






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
