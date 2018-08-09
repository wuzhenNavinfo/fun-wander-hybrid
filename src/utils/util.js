import wk from 'wellknown'

const wktToGeojson = function (wkt) {
    return wk.parse(wkt)
}

const geoJsonToWkt = function (geojson) {
    return wk.stringify(geojson)
}

export default {
	wktToGeojson,
	geoJsonToWkt
}