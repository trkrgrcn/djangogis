window.onload = init;

function init(){
    
    const mapElement = document.getElementById('mapid')

    const osmMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });
    
    const bigaMap = L.tileLayer('http://213.159.1.67:8088/geoserver/bigaortofoto/wms?service=WMS&version=1.1.0&request=GetMap&layers=bigaortofoto%3Abiga_ortofoto&bbox=518165.2984017186%2C4452069.904240386%2C525261.7834017187%2C4457729.470240385&width=768&height=612&srs=EPSG%3A5253&format=application/openlayers',{
        maxZoom:17,
        attribution:'test'
    })

    const mymap = L.map(mapElement, {
        center: [50,50],
        zoom: 5,
        minzoom:4,
        layers:[osmMap]
    })

    const baseLayers = {
        'Osm Map': osmMap,
        'Open Topo Map': openTopoMap,
        'Biga Map': bigaMap
    }

    const layerControls = L.control.layers(baseLayers, {}, {
			position:'bottomleft'
    }).addTo(mymap)
}
