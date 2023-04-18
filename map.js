var map = new maplibregl.Map({
    container: 'map',
    style: {
        'version': 8,
        'sources': {
            'raster-tiles': {
                'type': 'raster',
                'tiles': ['https://basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png'],
                'tileSize': 256,
                'attribution': '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            }
        },
        'layers': [
            {
                'id': 'simple-tiles',
                'type': 'raster',
                'source': 'raster-tiles',
                'minzoom': 0,
                'maxzoom': 22
            }
        ]
    },
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});


