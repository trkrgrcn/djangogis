window.onload = init;

function init(){
    
    const mapElement = document.getElementById('mapid')

    const osmMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });



    var mywms = L.tileLayer.wms("http://djangogis.com/geoserver/Biga/wms", {
        layers: 'Biga:biga_ortofoto',
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    maxZoom:20,
    attribution: "Biga"
});

const mymap = L.map(mapElement,{
    center :[40.22597792078384, 27.242369076604472],
    zoom: 16,
    layers:[mywms]
    
})
    const baseLayers = {
        'Biga': mywms,
        'Osm Map': osmMap
    }

    const layerControls = L.control.layers(baseLayers, {}, {
			position:'topright'
    }).addTo(mymap)
    var latlng = L.latLng(40.2272884942239, 27.242798634928832)
var popup = L.popup(latlng, {content: '<p>Hello world!<br />This is a nice popup.</p>'})
    .openOn(mymap);
}
