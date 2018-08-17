import Config from '../../config'

const style = {
    'version': 8,
    'sprite': `${Config.localhost}/res/mapbox/sprite/sprite`,
    'glyphs': `${Config.localhost}/res/mapbox/glyphs/{fontstack}/{range}.pbf`,
    'sources': {
        'raster-tiles': {
            'type': 'raster',
            'tiles': [
                'http://rt0.map.gtimg.com/realtimerender?z={z}&x={x}&y={y}&type=vector&style=0',
                'http://rt1.map.gtimg.com/realtimerender?z={z}&x={x}&y={y}&type=vector&style=0',
                'http://rt2.map.gtimg.com/realtimerender?z={z}&x={x}&y={y}&type=vector&style=0',
                'http://rt3.map.gtimg.com/realtimerender?z={z}&x={x}&y={y}&type=vector&style=0'
            ],
            'scheme': 'tms',
            'tileSize': 256,
            'minZoom': 5,
            'maxZoom': 18
        }
    },
    'layers': [{
        'id': 'simple-tiles',
        'type': 'raster',
        'source': 'raster-tiles'
    }]
}

export default style
