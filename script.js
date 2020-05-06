  mapboxgl.accessToken = 'pk.eyJ1Ijoia2VuZHJhd2lsbGlhbXMxNCIsImEiOiJjazl2aGZrYzkwNzVkM21wazVpNHJ5MHNpIn0.QyVRBiV7ZbqAIOJmZF5ZZg';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v9',
    center: [-89.96309280395508, 29.943779130679097],
    zoom: 13
  });

  // Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

var marker = new mapboxgl.Marker()
.setLngLat([-89.96309280395508, 29.943779130679097])
.addTo(map);