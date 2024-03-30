document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('mapid').setView([51.0447, -114.0719], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    var drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    var drawControl = new L.Control.Draw({
        edit: { featureGroup: drawnItems },
        draw: {
            polygon: false,
            marker: false,
            circle: false,
            circlemarker: false,
            rectangle: false,
            polyline: true
        }
    });

    map.addControl(drawControl);

    var simplifiedLayer; // Variable to hold the simplified polyline

    map.on('draw:created', function (e) {
        var type = e.layerType, layer = e.layer;
        drawnItems.addLayer(layer);
    });

    document.getElementById('simplify-btn').addEventListener('click', function() {
        drawnItems.eachLayer(function(layer) {
            if (layer instanceof L.Polyline) {
                if (simplifiedLayer) {
                    map.removeLayer(simplifiedLayer); // Remove previous simplified line
                }
                var simplified = turf.simplify(layer.toGeoJSON(), {tolerance: 0.001, highQuality: false});
                simplifiedLayer = L.geoJSON(simplified, {
                    style: function() { return {color: 'red'}; }
                }).addTo(map);
            }
        });
    });

    // Listener for the delete button
    document.getElementById('delete-simplified-btn').addEventListener('click', function() {
        if (simplifiedLayer) {
            map.removeLayer(simplifiedLayer);
            simplifiedLayer = null; // Reset the reference
        }
    });
});
