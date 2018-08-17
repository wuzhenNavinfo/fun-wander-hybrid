import Config from '../../config'

const getUrl = function (url) {
    return `${Config.minedata.serviceUrl}${url}/{z}/{x}/{y}?token=${Config.minedata.accessToken}&solu=${Config.minedata.solution}`
}

const style = {
    'sources': {
        'Landuse': {
            'tiles': [getUrl('/Landuse')],
            'type': 'vector'
        },
        'Ptline': {
            'tiles': [getUrl('/Ptline')],
            'type': 'vector'
        },
        'Buildingmore': {
            'tiles': [getUrl('/Buildingmore')],
            'type': 'vector'
        },
        'Railway': {
            'tiles': [getUrl('/Railway')],
            'type': 'vector'
        },
        'Waterface': {
            'tiles': [getUrl('/Waterface')],
            'type': 'vector'
        },
        'Villtown': {
            'tiles': [getUrl('/Villtown')],
            'type': 'vector'
        },
        'Road': {
            'tiles': [getUrl('/Road')],
            'type': 'vector'
        },
        'Worldannotation': {
            'tiles': [getUrl('/Worldannotation')],
            'type': 'vector'
        },
        'Poi': {
            'tiles': [getUrl('/Poi')],
            'type': 'vector'
        },
        'Greenface': {
            'tiles': [getUrl('/Greenface')],
            'type': 'vector'
        },
        'Subwaypolygon': {
            'tiles': [getUrl('/Subwaypolygon')],
            'type': 'vector'
        },
        'Annotation': {
            'tiles': [getUrl('/Annotation')],
            'type': 'vector'
        },
        'Adminbound': {
            'tiles': [getUrl('/Adminbound')],
            'type': 'vector'
        },
        'Waterline': {
            'tiles': [getUrl('/Waterline')],
            'type': 'vector'
        },
        'Worldcountries': {
            'tiles': [getUrl('/Worldcountries')],
            'type': 'vector'
        },
        'Ptexit': {
            'tiles': [getUrl('/Ptexit')],
            'type': 'vector'
        },
        'ResidentialPolygon': {
            'tiles': [getUrl('/ResidentialPolygon')],
            'maxzoom': 17,
            'odevity': 1,
            'type': 'vector'
        },
        'Worldwaterface': {
            'tiles': [getUrl('/Worldwaterface')],
            'type': 'vector'
        },
        'Ptstop': {
            'tiles': [getUrl('/Ptstop')],
            'type': 'vector'
        },
        'Adminflag': {
            'tiles': [getUrl('/Adminflag')],
            'type': 'vector'
        },
        'Zlevel': {
            'tiles': [getUrl('/Zlevel')],
            'type': 'vector'
        }
    },
    'sprite': `${Config.localhost}/res/mapbox/sprite/sprite`,
    'layers': [{
        'layout': {
            'visibility': 'visible'
        },
        'maxzoom': 18.0,
        'paint': {
            'background-color': '#f2f2f2'
        },
        'source': '',
        'source-layer': '',
        'id': '24742bfe9bb845dabe55c8da8e380e6a',
        'type': 'background',
        'minzoom': 3.0
    }, {
        'layout': {
            'visibility': 'visible'
        },
        'maxzoom': 5.0,
        'paint': {
            'fill-color': '#3ec7c9'
        },
        'source': 'Worldwaterface',
        'source-layer': 'Worldwaterface',
        'id': 'ae1bef35ae1a4704a7de66e63b9956cb',
        'type': 'fill',
        'minzoom': 3
    }, {
        'layout': {
            'visibility': 'visible'
        },
        'maxzoom': 8.5,
        'paint': {
            'fill-color': '#f2f2f2'
        },
        'source': 'Worldcountries',
        'source-layer': 'Worldcountries',
        'id': '069b4057950f4efd8f1728eabba9d5ca',
        'type': 'fill',
        'minzoom': 3
    }, {
        'layout': {
            'visibility': 'visible'
        },
        'filter': ['all', ['==', 'kind', 1]],
        'maxzoom': 17.5,
        'paint': {
            'fill-color': '#3ec7c9'
        },
        'source': 'Waterface',
        'source-layer': 'Waterface',
        'id': '0f59815c3fc84729acdd404b014beabc',
        'type': 'fill',
        'minzoom': 5.0
    }, {
        'layout': {
            'visibility': 'none'
        },
        'filter': ['all', ['in', 'kind', 31, 38]],
        'maxzoom': 17.5,
        'paint': {
            'fill-color': '#c9f3b1'
        },
        'source': 'Landuse',
        'source-layer': 'Landuse',
        'id': '054cee193a864e45880b5c97d03bd9eb',
        'type': 'fill',
        'minzoom': 12
    }, {
        'layout': {
            'visibility': 'visible'
        },
        'maxzoom': 17.5,
        'paint': {
            'fill-color': '#f0f0ee'
        },
        'source': 'ResidentialPolygon',
        'source-layer': 'ResidentialPolygon',
        'id': 'de65bceb642b4bb78ebabdf4f6c115d4',
        'type': 'fill',
        'minzoom': 12
    }, {
        'layout': {
            'visibility': 'none'
        },
        'filter': ['all', ['==', 'kind', 11]],
        'maxzoom': 17.5,
        'paint': {
            'fill-color': '#c6d8e8'
        },
        'source': 'Landuse',
        'source-layer': 'Landuse',
        'id': '8188a1f779694ee5b68b6365f5948582',
        'type': 'fill',
        'minzoom': 12
    }, {
        'layout': {
            'visibility': 'none'
        },
        'filter': ['all', ['==', 'kind', 12]],
        'maxzoom': 17.5,
        'paint': {
            'fill-color': '#c9cdce'
        },
        'source': 'Landuse',
        'source-layer': 'Landuse',
        'id': 'c0457e6e78bb49dda0a42cc8638e4d35',
        'type': 'fill',
        'minzoom': 12
    }, {
        'layout': {
            'visibility': 'none'
        },
        'filter': ['all', ['==', 'kind', 7]],
        'maxzoom': 17.5,
        'paint': {
            'fill-color': '#e9e6df'
        },
        'source': 'Landuse',
        'source-layer': 'Landuse',
        'id': '6b66da16cbaa49eb8aea0c96c8deb023',
        'type': 'fill',
        'minzoom': 12
    }, {
        'layout': {
            'visibility': 'none'
        },
        'filter': ['all', ['in', 'kind', 30, 36, 35, 2]],
        'maxzoom': 17.5,
        'paint': {
            'fill-color': '#e9e0ed'
        },
        'source': 'Landuse',
        'source-layer': 'Landuse',
        'id': '27a30b97498c4f3fabc355e8c2cce360',
        'type': 'fill',
        'minzoom': 12
    }, {
        'layout': {
            'visibility': 'none'
        },
        'filter': ['all', ['in', 'kind', 32, 34, 33, 39]],
        'maxzoom': 17.5,
        'paint': {
            'fill-color': '#eee6de'
        },
        'source': 'Landuse',
        'source-layer': 'Landuse',
        'id': 'd24563bf3bcb44298d2f971a9f4ea1d9',
        'type': 'fill',
        'minzoom': 12
    }, {
        'layout': {
            'visibility': 'none'
        },
        'filter': ['all', ['==', 'kind', 3]],
        'maxzoom': 17.5,
        'paint': {
            'fill-color': '#e9cfe2'
        },
        'source': 'Landuse',
        'source-layer': 'Landuse',
        'id': '8aa0a76ba3904b8381626d3465498874',
        'type': 'fill',
        'minzoom': 12
    }, {
        'layout': {
            'visibility': 'none'
        },
        'filter': ['all', ['==', 'kind', 1]],
        'maxzoom': 17.5,
        'paint': {
            'fill-color': '#daf0f7'
        },
        'source': 'Landuse',
        'source-layer': 'Landuse',
        'id': 'aad8341a4c8a458d9a6f1b37f1e999b8',
        'type': 'fill',
        'minzoom': 12
    }, {
        'layout': {
            'visibility': 'none'
        },
        'filter': ['all', ['in', 'kind', 6, 40]],
        'maxzoom': 17.5,
        'paint': {
            'fill-color': '#cbcbef',
            'fill-opacity': 0.25
        },
        'source': 'Landuse',
        'source-layer': 'Landuse',
        'id': '085b39b0098c46db9a21e0767a9badc1',
        'type': 'fill',
        'minzoom': 12
    }, {
        'layout': {
            'visibility': 'visible'
        },
        'filter': ['all', ['==', 'kind', '1']],
        'maxzoom': 17.5,
        'paint': {
            'fill-color': '#f2f2f2'
        },
        'source': 'Greenface',
        'source-layer': 'Greenface',
        'id': '82deddd178574a69948bd1fd363633a5',
        'type': 'fill',
        'minzoom': 8.0
    }, {
        'layout': {
            'visibility': 'visible'
        },
        'filter': ['all', ['>=', 'area_level', 75],
            ['==', 'kind', '1']
        ],
        'maxzoom': 8.0,
        'paint': {
            'fill-color': '#f2f2f2'
        },
        'source': 'Greenface',
        'source-layer': 'Greenface',
        'id': '0ddecdbf23ab4e5ca9b9ecf1e97efa6a',
        'type': 'fill',
        'minzoom': 5.0
    }, {
        'layout': {
            'visibility': 'none'
        },
        'filter': ['all', ['in', 'kind', '7', '9', '6', '8'],
            ['>=', 'area_level', 98]
        ],
        'maxzoom': 9.0,
        'paint': {
            'fill-color': '#bbe9a0'
        },
        'source': 'Greenface',
        'source-layer': 'Greenface',
        'id': '4113a889005441588c7dfd3c3e73cc44',
        'type': 'fill',
        'minzoom': 8.0
    }, {
        'layout': {
            'visibility': 'none'
        },
        'filter': ['all', ['in', 'kind', '7', '9', '6', '8'],
            ['>=', 'area_level', 97]
        ],
        'maxzoom': 10.0,
        'paint': {
            'fill-color': '#b6e79c'
        },
        'source': 'Greenface',
        'source-layer': 'Greenface',
        'id': '45d162a9a80349f1846b864a9f02fc58',
        'type': 'fill',
        'minzoom': 9.0
    }, {
        'layout': {
            'visibility': 'none'
        },
        'filter': ['all', ['in', 'kind', '7', '9', '6', '8'],
            ['>=', 'area_level', 90]
        ],
        'maxzoom': 12.0,
        'paint': {
            'fill-color': '#bbe9a0'
        },
        'source': 'Greenface',
        'source-layer': 'Greenface',
        'id': '16f01f57711f45eab2bca0249dff1b07',
        'type': 'fill',
        'minzoom': 10.0
    }, {
        'layout': {
            'visibility': 'none'
        },
        'filter': ['all', ['in', 'kind', '7', '9', '6', '8'],
            ['>=', 'area_level', 75]
        ],
        'maxzoom': 14.0,
        'paint': {
            'fill-color': '#bbe9a0'
        },
        'source': 'Greenface',
        'source-layer': 'Greenface',
        'id': 'e046738c1a9a49ee9d415775c8d8a105',
        'type': 'fill',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'none'
        },
        'filter': ['all', ['in', 'kind', '7', '9', '6', '8']],
        'maxzoom': 17.5,
        'paint': {
            'fill-color': '#bbe9a0'
        },
        'source': 'Greenface',
        'source-layer': 'Greenface',
        'id': '83c460c7be2647299bb15966fd733bf3',
        'type': 'fill',
        'minzoom': 14.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'maxzoom': 7.0,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.7],
                    [6, 0.8],
                    [7, 1.6],
                    [9, 1.6],
                    [20, 10]
                ],
                'base': 1
            },
            'line-color': '#3ec7c9'
        },
        'source': 'Waterline',
        'source-layer': 'Waterline',
        'id': '3eb176578e1740acb87a54be088a4e33',
        'type': 'line',
        'minzoom': 4.0
    }, {
        'layout': {
            'visibility': 'visible'
        },
        'filter': ['all', ['==', 'kind', 5],
            ['==', 'display_class', 8]
        ],
        'maxzoom': 17.5,
        'paint': {
            'fill-color': '#3ec7c9'
        },
        'source': 'Waterface',
        'source-layer': 'Waterface',
        'id': '9481582ee3704d26b1530683d5ae1740',
        'type': 'fill',
        'minzoom': 3.0
    }, {
        'layout': {
            'visibility': 'visible'
        },
        'filter': ['all', ['==', 'kind', 3]],
        'maxzoom': 17.5,
        'paint': {
            'fill-color': '#3ec7c9'
        },
        'source': 'Waterface',
        'source-layer': 'Waterface',
        'id': '12ec66419dde4c3eaf13261aff38f78d',
        'type': 'fill',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'visible'
        },
        'filter': ['all', ['>=', 'display_class', 1],
            ['>=', 'area_level', 72],
            ['==', 'kind', 3]
        ],
        'maxzoom': 13.0,
        'paint': {
            'fill-color': '#3ec7c9'
        },
        'source': 'Waterface',
        'source-layer': 'Waterface',
        'id': 'cb4f1354c5e34c4f8dc6fb07355455d3',
        'type': 'fill',
        'minzoom': 10.0
    }, {
        'layout': {
            'visibility': 'visible'
        },
        'filter': ['all', ['>=', 'display_class', 2],
            ['==', 'kind', 3]
        ],
        'maxzoom': 14.0,
        'paint': {
            'fill-color': '#3ec7c9'
        },
        'source': 'Waterface',
        'source-layer': 'Waterface',
        'id': 'e170d3d06a9e487ea3e0aed01c7d2a26',
        'type': 'fill',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'visible'
        },
        'filter': ['all', ['>=', 'display_class', 3],
            ['==', 'kind', 3]
        ],
        'maxzoom': 12.0,
        'paint': {
            'fill-color': '#3ec7c9'
        },
        'source': 'Waterface',
        'source-layer': 'Waterface',
        'id': '6a5f68373f174997be0d1a7983587ec6',
        'type': 'fill',
        'minzoom': 10.0
    }, {
        'layout': {
            'visibility': 'visible'
        },
        'filter': ['all', ['>=', 'display_class', 5],
            ['==', 'kind', 3]
        ],
        'maxzoom': 10.0,
        'paint': {
            'fill-color': '#3ec7c9'
        },
        'source': 'Waterface',
        'source-layer': 'Waterface',
        'id': '2e0b24ed464a46de834fa8573357ef02',
        'type': 'fill',
        'minzoom': 9.0
    }, {
        'layout': {
            'visibility': 'visible'
        },
        'filter': ['all', ['>=', 'display_class', 7],
            ['==', 'kind', 3]
        ],
        'maxzoom': 10.0,
        'paint': {
            'fill-color': '#3ec7c9'
        },
        'source': 'Waterface',
        'source-layer': 'Waterface',
        'id': 'c08634bbdb7747fa8022323a26f45315',
        'type': 'fill',
        'minzoom': 7.0
    }, {
        'layout': {
            'visibility': 'visible'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['==', 'display_class', 8]
        ],
        'maxzoom': 7.0,
        'paint': {
            'fill-color': '#3ec7c9'
        },
        'source': 'Waterface',
        'source-layer': 'Waterface',
        'id': '9f5342c4f1cd42869cf411c6bd8ebd71',
        'type': 'fill',
        'minzoom': 3.0
    }, {
        'layout': {
            'visibility': 'visible'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['==', 'display_class', -2]
        ],
        'maxzoom': 10.0,
        'paint': {
            'fill-color': '#3ec7c9'
        },
        'source': 'Waterface',
        'source-layer': 'Waterface',
        'id': '88f66f8bfa844c73b4915c5d377c95a7',
        'type': 'fill',
        'minzoom': 7.0
    }, {
        'layout': {
            'visibility': 'visible'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['>=', 'display_class', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'fill-color': '#3ec7c9'
        },
        'source': 'Waterface',
        'source-layer': 'Waterface',
        'id': '5a411769c55047dd93a8ed81508c73d2',
        'type': 'fill',
        'minzoom': 14.0
    }, {
        'layout': {
            'visibility': 'visible'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['>=', 'display_class', 1],
            ['>=', 'area_level', 10]
        ],
        'maxzoom': 14.0,
        'paint': {
            'fill-color': '#3ec7c9'
        },
        'source': 'Waterface',
        'source-layer': 'Waterface',
        'id': '0979daa851754ee7891296dd4c995693',
        'type': 'fill',
        'minzoom': 11.0
    }, {
        'layout': {
            'visibility': 'visible'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['>=', 'display_class', 1],
            ['>=', 'area_level', 20]
        ],
        'maxzoom': 11.0,
        'paint': {
            'fill-color': '#3ec7c9'
        },
        'source': 'Waterface',
        'source-layer': 'Waterface',
        'id': '1cac01cc21984500b020fd2611e0fe05',
        'type': 'fill',
        'minzoom': 10.0
    }, {
        'layout': {
            'visibility': 'visible'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['>=', 'display_class', 1],
            ['>=', 'area_level', 40]
        ],
        'maxzoom': 10.0,
        'paint': {
            'fill-color': '#3ec7c9'
        },
        'source': 'Waterface',
        'source-layer': 'Waterface',
        'id': '536f7f45c6d44073a98cd4202b7638b4',
        'type': 'fill',
        'minzoom': 9.0
    }, {
        'layout': {
            'visibility': 'visible'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['>=', 'display_class', 1],
            ['>=', 'area_level', 85]
        ],
        'maxzoom': 9.0,
        'paint': {
            'fill-color': '#3ec7c9'
        },
        'source': 'Waterface',
        'source-layer': 'Waterface',
        'id': 'bdacc389e86547c98bff92074fc84316',
        'type': 'fill',
        'minzoom': 8.0
    }, {
        'layout': {
            'visibility': 'visible'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['>=', 'display_class', 4],
            ['>=', 'area_level', 50]
        ],
        'maxzoom': 8.0,
        'paint': {
            'fill-color': '#3ec7c9'
        },
        'source': 'Waterface',
        'source-layer': 'Waterface',
        'id': '5e71a056378940829ed992c30964191b',
        'type': 'fill',
        'minzoom': 6.0
    }, {
        'layout': {
            'visibility': 'visible'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['>=', 'display_class', 7]
        ],
        'maxzoom': 6.0,
        'paint': {
            'fill-color': '#3ec7c9'
        },
        'source': 'Waterface',
        'source-layer': 'Waterface',
        'id': 'dcfbced6fef94973abd95788685796bf',
        'type': 'fill',
        'minzoom': 5.0
    }, {
        'layout': {
            'visibility': 'visible'
        },
        'filter': ['all', ['==', 'display_class', -1]],
        'maxzoom': 17.5,
        'paint': {
            'fill-color': '#3ec7c9'
        },
        'source': 'Waterface',
        'source-layer': 'Waterface',
        'id': '33150b956eb04a1ebcc3b1e224fe8bc2',
        'type': 'fill',
        'minzoom': 7.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [6, 1.5],
                    [20, 10]
                ],
                'base': 1.2
            },
            'line-color': '#d0ccc9'
        },
        'source': 'Railway',
        'source-layer': 'Railway',
        'id': 'e106d6f75a5a42e68d16f87c34040887',
        'type': 'line',
        'minzoom': 6
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [6, 0.5],
                    [20, 8]
                ],
                'base': 1.2
            },
            'line-dasharray': [8, 8],
            'line-color': '#ffffff'
        },
        'source': 'Railway',
        'source-layer': 'Railway',
        'id': '9ac7bc82cf4a4417af51d46b98a0d83e',
        'type': 'line',
        'minzoom': 6
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 6]],
        'maxzoom': 8.5,
        'paint': {
            'line-width': 1.0,
            'line-opacity': 1.0,
            'line-dasharray': [6, 3, 3, 4],
            'line-color': '#aaaaaa'
        },
        'source': 'Adminbound',
        'source-layer': 'Adminbound',
        'id': 'ac15f8f643664abb854274bab288a7e4',
        'type': 'line',
        'minzoom': 3
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 5]],
        'maxzoom': 8.5,
        'paint': {
            'line-width': 1.0,
            'line-opacity': 1.0,
            'line-dasharray': [5, 3],
            'line-color': '#aaaaaa'
        },
        'source': 'Adminbound',
        'source-layer': 'Adminbound',
        'id': '369e31d569644a809f0aeb58d9c4e5a7',
        'type': 'line',
        'minzoom': 3
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 2]],
        'maxzoom': 7.0,
        'paint': {
            'line-width': {
                'stops': [
                    [3, 1],
                    [8, 2]
                ],
                'base': 1.2
            },
            'line-dasharray': [3, 3, 5, 5],
            'line-color': '#999999'
        },
        'source': 'Adminbound',
        'source-layer': 'Adminbound',
        'id': 'dd2bb5f854684ff7a5ba7273369e56b0',
        'type': 'line',
        'minzoom': 3
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['in', 'kind', 3, 1]],
        'maxzoom': 7.0,
        'paint': {
            'line-width': {
                'stops': [
                    [3, 1],
                    [8, 2]
                ],
                'base': 1.2
            },
            'line-color': '#999999'
        },
        'source': 'Adminbound',
        'source-layer': 'Adminbound',
        'id': '4fefbc13cc58489a95654c3347b26ac2',
        'type': 'line',
        'minzoom': 3
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'functionclass', 5],
            ['in', 'kind', 13, 10, 8, 9],
            ['in', 'const_st', 3, 4]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [6, 0.6],
                    [20, 0.8]
                ],
                'base': 1
            },
            'line-dasharray': [3, 3],
            'line-color': '#9b9b9b'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'b516d8f288ba41c5b120f3b056ae55f1',
        'type': 'line',
        'minzoom': 14.0
    }, {
        'layout': {
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-size': 14,
            'symbol-placement': 'line'
        },
        'filter': ['all', ['in', 'functionclass', 5],
            ['in', 'const_st', 3, 4],
            ['in', 'kind', 2, 1, 3, 4]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#a0a0a0',
            'text-halo-width': 1
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'cd6854ec739348f89f59a7faccd93a0c',
        'type': 'symbol',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'functionclass', 5],
            ['in', 'kind', 2, 1, 3, 4],
            ['in', 'const_st', 3, 4]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-dasharray': [3, 3],
            'line-color': '#9b9b9b'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'e9dc185caf174e14a8c91bcb9c048145',
        'type': 'line',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-size': 14.0,
            'symbol-placement': 'line'
        },
        'filter': ['all', ['in', 'functionclass', 1, 4, 2, 3],
            ['in', 'const_st', 3, 4]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#a0a0a0',
            'text-halo-width': 1
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '8626e61ff92240f1924c4f8f0b9effcc',
        'type': 'symbol',
        'minzoom': 11.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['in', 'functionclass', 1, 4, 2, 3],
            ['in', 'const_st', 3, 4]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-dasharray': [3, 3],
            'line-color': '#9b9b9b'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '568973006f1a4a358311d92d0ea18beb',
        'type': 'line',
        'minzoom': 11.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['==', 'functionclass', 5],
            ['in', 'form', '34', '39']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 12]
                ],
                'base': 1.2
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'b7672b9ed20f40cf81ae4481d079952f',
        'type': 'line',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 5],
            ['in', 'form', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 32]
                ],
                'base': 1.5
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'c2be6e60b6754a91b52ecbdd14e7aa5f',
        'type': 'line',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 5],
            ['in', 'form', '13', '36', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 32]
                ],
                'base': 1.5
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '25b37dc643bb47dfa76a213199e3dfce',
        'type': 'line',
        'minzoom': 12
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['==', 'functionclass', 4],
            ['in', 'form', '34', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 32]
                ],
                'base': 1.5
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '67436056473242989706a55c3e28c48d',
        'type': 'line',
        'minzoom': 9
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['==', 'functionclass', 4],
            ['in', 'form', '50', '34', '37', '39', '38']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 32]
                ],
                'base': 1.5
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '839e82a14fff4f3889f185904c0a2dbd',
        'type': 'line',
        'minzoom': 9
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 4],
            ['in', 'form', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 32]
                ],
                'base': 1.5
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '4dc056db23464e1796d36e8b5da0632d',
        'type': 'line',
        'minzoom': 9.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 4],
            ['in', 'form', '39', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 32]
                ],
                'base': 1.5
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'e84912fef50f462e95c0f33375df3002',
        'type': 'line',
        'minzoom': 9.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['==', 'functionclass', 3],
            ['in', 'form', '34', '37', '38']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 12]
                ],
                'base': 1.2
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '9e3722319d8747f9a1c916dfd8c73f69',
        'type': 'line',
        'minzoom': 10
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['==', 'functionclass', 3],
            ['in', 'form', '50', '37', '38', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '762a199953604feaae4982b492461bdc',
        'type': 'line',
        'minzoom': 8
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['==', 'functionclass', 3],
            ['in', 'form', '39']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'f1b6252e3d174009bc13cac9b201b1a0',
        'type': 'line',
        'minzoom': 8.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 3],
            ['in', 'form', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'a85e00b1cbee4aaf99ffcf93aa3fcb41',
        'type': 'line',
        'minzoom': 8
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 3],
            ['in', 'form', '39', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'a1a41fa576bb4d9c8c8fedd6c2065c2e',
        'type': 'line',
        'minzoom': 8
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['==', 'functionclass', 2],
            ['==', 'const_st', 1],
            ['in', 'form', '50', '34', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'bf4f36cd35a44633a05af5a54c9a2b0e',
        'type': 'line',
        'minzoom': 7
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['==', 'functionclass', 2],
            ['in', 'form', '34', '39']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '177476c1fc5a412ba03f8b28c93fabbd',
        'type': 'line',
        'minzoom': 7
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 2],
            ['in', 'form', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'e4187e369ff347ae9667ef51069e35bc',
        'type': 'line',
        'minzoom': 7
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 2],
            ['in', 'form', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '9577cae57a6a41a28cc57c4586a9e661',
        'type': 'line',
        'minzoom': 7
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 1],
            ['in', 'form', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '8a59e7ec82e74cf690ffd1e891148914',
        'type': 'line',
        'minzoom': 7.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 1],
            ['in', 'form', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 3]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '90dc417f3daf4ee69f39032043d8a583',
        'type': 'line',
        'minzoom': 7
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['==', 'functionclass', 5],
            ['in', 'form', '34', '39']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'aa5737a2fac74a9489805caab353d7ee',
        'type': 'line',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 5],
            ['in', 'form', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '565fbe744e874b6d91032fc47c74f828',
        'type': 'line',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 5],
            ['in', 'form', '13', '36', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '5d5ff307840849099fcc5de2d8369d77',
        'type': 'line',
        'minzoom': 12
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['==', 'functionclass', 4],
            ['in', 'form', '34', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'e4f5c81f05be4176bec22c505dc3c333',
        'type': 'line',
        'minzoom': 9
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['==', 'functionclass', 4],
            ['in', 'form', '50', '34', '37', '39', '38']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '0c5e12fd9c3d4cf1a38abbeeb9a9128c',
        'type': 'line',
        'minzoom': 9
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 4],
            ['in', 'form', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '48a56aff0a434b30a4e20d03980e7855',
        'type': 'line',
        'minzoom': 9.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 4],
            ['in', 'form', '39', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'fed27c6fdc7d4018b00018d5aee6d752',
        'type': 'line',
        'minzoom': 9.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['==', 'functionclass', 3],
            ['in', 'form', '34', '37', '38']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'd6e4348d901549ccaf0d9b3da13437df',
        'type': 'line',
        'minzoom': 8
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['==', 'functionclass', 3],
            ['in', 'form', '50', '37', '38', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '80eb9c6136fa4251aac7cfa6c6c6e2bb',
        'type': 'line',
        'minzoom': 8
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['==', 'functionclass', 3],
            ['in', 'form', '39']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '3e4748092be24a6aa0fbbe9e810d403b',
        'type': 'line',
        'minzoom': 8.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 3],
            ['in', 'form', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '32e6894cf1524528af341eb5bb1f7fbf',
        'type': 'line',
        'minzoom': 8
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 3],
            ['in', 'form', '39', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '17d84e102fc944a0a4fa995f5d66fb4d',
        'type': 'line',
        'minzoom': 8
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['==', 'functionclass', 2],
            ['==', 'const_st', 1],
            ['in', 'form', '50', '34', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.6]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '600cce2c44e34864b5357d74e938ccb1',
        'type': 'line',
        'minzoom': 5
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['==', 'functionclass', 2],
            ['in', 'form', '34', '39']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'cc2b29ac2f6f4551b59cd7072ac08720',
        'type': 'line',
        'minzoom': 5
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 2],
            ['in', 'form', '10']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'ec9bcdcd465a42dda1c6bffa1c0bde77',
        'type': 'line',
        'minzoom': 5
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 2],
            ['in', 'form', '10']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'bdd730b7135545c584195c372c366054',
        'type': 'line',
        'minzoom': 5
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 1],
            ['in', 'form', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '34e4eeaf9d2f4ceda9c434736b815fab',
        'type': 'line',
        'minzoom': 5
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'square'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 1],
            ['in', 'form', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'b0b88a65ee4649d793d2856130f83708',
        'type': 'line',
        'minzoom': 5
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 13],
            ['==', 'functionclass', 5]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 1],
                    [18, 4]
                ],
                'base': 1.2
            },
            'line-dasharray': [3, 3],
            'line-color': '#75acd2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '88ab0567443748459c0051ebf7193245',
        'type': 'line',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 13],
            ['==', 'functionclass', 4],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 1],
                    [18, 4]
                ],
                'base': 1.2
            },
            'line-dasharray': [3, 3],
            'line-color': '#75acd2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '7c1e309c3d134f989cfa0dde71e4a4fa',
        'type': 'line',
        'minzoom': 9
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 13],
            ['==', 'functionclass', 3],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 1],
                    [18, 4]
                ],
                'base': 1.2
            },
            'line-dasharray': [3, 3],
            'line-color': '#75acd2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '22376fcb2cde452190a5c065261c2f31',
        'type': 'line',
        'minzoom': 9
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 13],
            ['==', 'functionclass', 2],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 1],
                    [18, 4]
                ],
                'base': 1.2
            },
            'line-dasharray': [3, 3],
            'line-color': '#75acd2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '19d22462abbe4de698c1e2cc16805b49',
        'type': 'line',
        'minzoom': 9
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 13],
            ['==', 'functionclass', 1],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 1],
                    [18, 4]
                ],
                'base': 1.2
            },
            'line-dasharray': [3, 3],
            'line-color': '#75acd2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '75218cded47b4fcf91e60d191d3a81d2',
        'type': 'line',
        'minzoom': 9.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 10]],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [12, 0.5],
                    [14, 0.8],
                    [18, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [14, 1],
                    [18, 4]
                ],
                'base': 1.2
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '30bdde98d25d4596a413be98e113cda1',
        'type': 'line',
        'minzoom': 14.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 10]],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'f94f62fba7664e8081b7ad3d1250e3a7',
        'type': 'line',
        'minzoom': 14.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 9]],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 8]
                ],
                'base': 1.2
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '1d0ba2f634b945b49ecc93a3c6ce929e',
        'type': 'line',
        'minzoom': 14.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 9]],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '0b0e4b1a7098477193b2a754bc689c44',
        'type': 'line',
        'minzoom': 14.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 8],
            ['==', 'functionclass', 5]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 4]
                ],
                'base': 1.2
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '290dee3ffe03436dafe6acb57dbc796b',
        'type': 'line',
        'minzoom': 14.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 8],
            ['==', 'functionclass', 4]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 4]
                ],
                'base': 1.2
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'c1b5caee35844bc785ca5af9979753b8',
        'type': 'line',
        'minzoom': 9.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 8],
            ['==', 'functionclass', 3]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 4]
                ],
                'base': 1.2
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'e8ed9bfe84f64eccabeb0dc8b1e4bbbb',
        'type': 'line',
        'minzoom': 8.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 8],
            ['==', 'functionclass', 2]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 4]
                ],
                'base': 1.2
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'd9c569d0a0d044a0899ec880be0b562e',
        'type': 'line',
        'minzoom': 7.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 8],
            ['==', 'functionclass', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 4]
                ],
                'base': 1.2
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '906054ca04cc4f67afd545cc923a7556',
        'type': 'line',
        'minzoom': 7.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 8],
            ['==', 'functionclass', 5]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '8a0c164840354ade99256d8fe8c18e97',
        'type': 'line',
        'minzoom': 14.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 8],
            ['==', 'functionclass', 4]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '625d44f8903c4c4ea93039d50c3f1a8f',
        'type': 'line',
        'minzoom': 9.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 8],
            ['==', 'functionclass', 3]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'c7d62807718d4ed79ea2d8570aa07e47',
        'type': 'line',
        'minzoom': 8.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 8],
            ['==', 'functionclass', 2]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '1e1c19acdb3d4a7dbfa6a40fb693d01f',
        'type': 'line',
        'minzoom': 5
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 8],
            ['==', 'functionclass', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'd66aaf9190a94eb88d453e2b73ffc9f7',
        'type': 'line',
        'minzoom': 5.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 7],
            ['==', 'functionclass', 5],
            ['!in', 'form', '31']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [12, 1],
                    [13, 4],
                    [18, 12]
                ],
                'base': 1.5
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '3486dcccb25b4bb5bd80358b1cbd6341',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 7],
            ['==', 'functionclass', 4],
            ['!in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [12, 0.2],
                    [18, 1.2]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [9, 1],
                    [12, 4],
                    [18, 12]
                ],
                'base': 1.2
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '02ae3c58dd684b40a41c90a63685e131',
        'type': 'line',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 7],
            ['==', 'functionclass', 3],
            ['!in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [9, 1],
                    [18, 12]
                ],
                'base': 1.2
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'd22889cefb984cb58181e74be90d5c1a',
        'type': 'line',
        'minzoom': 11.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 7],
            ['==', 'functionclass', 2],
            ['!in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [9, 1],
                    [18, 12]
                ],
                'base': 1.2
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '3471bffc8f1b44a3bc1f98b528d03dab',
        'type': 'line',
        'minzoom': 7
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 7],
            ['==', 'functionclass', 1],
            ['!in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [9, 1],
                    [18, 12]
                ],
                'base': 1.2
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '0e0234c0d728468f943400eb7f4b88cb',
        'type': 'line',
        'minzoom': 7
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 7],
            ['==', 'functionclass', 5],
            ['in', 'form', '31']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [12, 1],
                    [13, 4],
                    [18, 12]
                ],
                'base': 1.5
            },
            'line-dasharray': [3, 3],
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '6373f7af0ac4405da3290c154f5f2283',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 7],
            ['==', 'functionclass', 4],
            ['in', 'form', '31']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [12, 1],
                    [13, 4],
                    [18, 12]
                ],
                'base': 1.2
            },
            'line-dasharray': [3, 3],
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '4e8470681d8c4a44b1388a4025662b13',
        'type': 'line',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 7],
            ['==', 'functionclass', 3],
            ['in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [9, 1],
                    [18, 12]
                ],
                'base': 1.2
            },
            'line-dasharray': [3, 3],
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '7f89b2505c65477ab0b914a76c6fa16a',
        'type': 'line',
        'minzoom': 11
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 7],
            ['==', 'functionclass', 2],
            ['in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [9, 1],
                    [18, 12]
                ],
                'base': 1.2
            },
            'line-dasharray': [3, 3],
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '28eaad0ba6dd44af9d392e9181eed5eb',
        'type': 'line',
        'minzoom': 7
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 7],
            ['==', 'functionclass', 1],
            ['in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [9, 1],
                    [18, 12]
                ],
                'base': 1.2
            },
            'line-dasharray': [3, 3],
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '6a6c5f57387446c38a761aacc2823354',
        'type': 'line',
        'minzoom': 7
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 7],
            ['==', 'functionclass', 5]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [5, 0.6],
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '533db724d2e046e18d721d28802ad89d',
        'type': 'line',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 7],
            ['==', 'functionclass', 4],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [5, 0.6],
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '32c7e064c6684a4782328487ddd096f3',
        'type': 'line',
        'minzoom': 9.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 7],
            ['==', 'functionclass', 3],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '71d6d3dae7a7452cae03abd7fd1e309a',
        'type': 'line',
        'minzoom': 8.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 7],
            ['==', 'functionclass', 2],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '72919393c2e04fae818a7a806fccddcf',
        'type': 'line',
        'minzoom': 5
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 7],
            ['==', 'functionclass', 1],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '21ce0756721747c7ba92d0b634bcfb7b',
        'type': 'line',
        'minzoom': 5
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['==', 'functionclass', 5],
            ['!in', 'form', '31', '34', '39']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [11, 1],
                    [13, 4],
                    [18, 12]
                ],
                'base': 1.2
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'c3305499a78a425b9b6effab856abcf2',
        'type': 'line',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['==', 'functionclass', 4],
            ['!in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [12, 1],
                    [13, 4],
                    [18, 12]
                ],
                'base': 1.2
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '851157203c164f46961f2403b1e1b3b1',
        'type': 'line',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['==', 'functionclass', 3],
            ['!in', 'form', '31', '34', '37', '38'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [12, 1],
                    [13, 4],
                    [18, 12]
                ],
                'base': 1.2
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'e76e9d3c617243dc8f7fd453eb2abd07',
        'type': 'line',
        'minzoom': 10.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['==', 'functionclass', 2],
            ['!in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 32]
                ],
                'base': 1.5
            },
            'line-color': '#e6cca1'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'a307e153b7454a2e936eadc41a23be05',
        'type': 'line',
        'minzoom': 7
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['==', 'functionclass', 1],
            ['!in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 32]
                ],
                'base': 1.5
            },
            'line-color': '#e6cca1'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '0c81e74e4d4d42bc9a2b9aaced451872',
        'type': 'line',
        'minzoom': 7
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['==', 'functionclass', 5],
            ['in', 'form', '31']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [18, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [12, 1],
                    [13, 4],
                    [18, 12]
                ],
                'base': 1.2
            },
            'line-dasharray': [3, 3],
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'cecc10ca4e064a56875fff84d0665962',
        'type': 'line',
        'minzoom': 12
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['==', 'functionclass', 4],
            ['in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [12, 1],
                    [13, 4],
                    [18, 12]
                ],
                'base': 1.2
            },
            'line-dasharray': [3, 3],
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'ed033eb3302847f580e972c3674c1336',
        'type': 'line',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['==', 'functionclass', 3],
            ['in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [12, 1],
                    [13, 4],
                    [18, 12]
                ],
                'base': 1.2
            },
            'line-dasharray': [3, 3],
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'e3b806065bc54802bb042dcf1f6a0a84',
        'type': 'line',
        'minzoom': 11.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['==', 'functionclass', 2],
            ['in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 32]
                ],
                'base': 1.5
            },
            'line-dasharray': [3, 3],
            'line-color': '#e6cca1'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '0e81f1ca19074f15abf62a74cd35f014',
        'type': 'line',
        'minzoom': 7
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['==', 'functionclass', 1],
            ['in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 32]
                ],
                'base': 1.5
            },
            'line-dasharray': [3, 3],
            'line-color': '#e6cca1'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'db557594fb8c4bb398fbfe1e8f7ecd0f',
        'type': 'line',
        'minzoom': 7
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['==', 'functionclass', 5],
            ['!in', 'form', '34', '39']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [5, 0.6],
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '80d69f9c71f141ddb1a1568c851d7d6e',
        'type': 'line',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['==', 'functionclass', 4],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [5, 0.6],
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '793f3b578036458083f6c349beb7b974',
        'type': 'line',
        'minzoom': 9.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['==', 'functionclass', 3],
            ['!in', 'form', '34', '37', '38'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [5, 0.6],
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'da4e985b6095450092964180e66657d7',
        'type': 'line',
        'minzoom': 8.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['==', 'functionclass', 2],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'e539a1139d77472982ef7bce94bd8bca',
        'type': 'line',
        'minzoom': 5
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['==', 'functionclass', 1],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '9e96cd722f954965858d41a7e9c734a0',
        'type': 'line',
        'minzoom': 5
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['==', 'functionclass', 5],
            ['!in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '2e6218d4f0e74f15a7201d12cb296688',
        'type': 'line',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['==', 'functionclass', 5],
            ['in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-dasharray': [3, 3],
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '1fb758fb11694de3934146a037190242',
        'type': 'line',
        'minzoom': 12
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['==', 'functionclass', 4],
            ['!in', 'form', '31', '34'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '804eb345168246ab9d5d7efb45014eb1',
        'type': 'line',
        'minzoom': 9.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['==', 'functionclass', 4],
            ['in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-dasharray': [3, 3],
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '344fef730bc44a0c9e7fe79d57155e81',
        'type': 'line',
        'minzoom': 9
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['==', 'functionclass', 3],
            ['!in', 'form', '31', '50', '37', '38', '15'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '7f625635752549f498000af929527688',
        'type': 'line',
        'minzoom': 9.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['==', 'functionclass', 3],
            ['in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-dasharray': [3, 3],
            'line-color': '#e6e6e6'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '4103d79c740546aeba799df05c2403e2',
        'type': 'line',
        'minzoom': 9.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['==', 'functionclass', 2],
            ['!in', 'form', '31', '34', '10', '15'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#f3c200'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '32186f0f4fa34d5aa0fbeebad4254ab1',
        'type': 'line',
        'minzoom': 7
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['==', 'functionclass', 2],
            ['in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-dasharray': [3, 3],
            'line-color': '#f3c200'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '1f79a203d19a4deeaf9934303b4b5a45',
        'type': 'line',
        'minzoom': 7
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['==', 'functionclass', 1],
            ['!in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#f3c200'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '61301d28ff34467aaf9efa17ba474a23',
        'type': 'line',
        'minzoom': 7
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['==', 'functionclass', 1],
            ['in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-dasharray': [3, 3],
            'line-color': '#f3c200'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'f844c5c4be524d448f5747b76a165050',
        'type': 'line',
        'minzoom': 7
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['==', 'functionclass', 5],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '129e2f218c4e4f12a37750cfe2734404',
        'type': 'line',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['==', 'functionclass', 4],
            ['!in', 'form', '34'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '19c95b60b338436886fa8dba5f7f4a99',
        'type': 'line',
        'minzoom': 9.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['==', 'functionclass', 3],
            ['!in', 'form', '50', '37', '38', '15'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '5d71cdc52aa548e992c5f2b554b628d2',
        'type': 'line',
        'minzoom': 8.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['==', 'functionclass', 2],
            ['==', 'const_st', 1],
            ['!in', 'form', '34', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '2bdab22e8049458f889faebdcfd0e6c0',
        'type': 'line',
        'minzoom': 5
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['==', 'functionclass', 1],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'd08f5e31f81443c69c83de931be60f95',
        'type': 'line',
        'minzoom': 5
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['==', 'functionclass', 5],
            ['!in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 32]
                ],
                'base': 1.5
            },
            'line-color': '#f5a623'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'bbf454098360435fba7cb473f5dce08a',
        'type': 'line',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['==', 'functionclass', 5],
            ['in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 32]
                ],
                'base': 1.5
            },
            'line-dasharray': [3, 3],
            'line-color': '#f5a623'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '09197ac911be4ba1aed541404a748e0e',
        'type': 'line',
        'minzoom': 12
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['==', 'functionclass', 4],
            ['!in', 'form', '31', '50', '34', '37', '39', '38'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 32]
                ],
                'base': 1.5
            },
            'line-color': '#f5a623'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '5c5983ecced04d2183ca7d04cc928061',
        'type': 'line',
        'minzoom': 9.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['==', 'functionclass', 4],
            ['in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 32]
                ],
                'base': 1.5
            },
            'line-dasharray': [3, 3],
            'line-color': '#f5a623'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '2974becc7bdb46ce962a0f082b4598c6',
        'type': 'line',
        'minzoom': 9
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['==', 'functionclass', 3],
            ['in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 32]
                ],
                'base': 1.5
            },
            'line-dasharray': [3, 3],
            'line-color': '#f3c200'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'd6c9fb619d124f8da1c33a9984d3b10d',
        'type': 'line',
        'minzoom': 8
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['==', 'functionclass', 3],
            ['!in', 'form', '31', '39'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 32]
                ],
                'base': 1.5
            },
            'line-color': '#f3c200'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'cb5cc69078ed46d2a703aa9d5802b29f',
        'type': 'line',
        'minzoom': 8.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['==', 'functionclass', 2],
            ['!in', 'form', '31', '34', '39'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 32]
                ],
                'base': 1.5
            },
            'line-color': '#f3c200'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '7c7ac3800ad7446193016c0ab921b44a',
        'type': 'line',
        'minzoom': 7
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['==', 'functionclass', 2],
            ['in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 32]
                ],
                'base': 1.5
            },
            'line-dasharray': [3, 3],
            'line-color': '#f3c200'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '9e50846750704e38b152374afa93a64d',
        'type': 'line',
        'minzoom': 7
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['==', 'functionclass', 1],
            ['!in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 32]
                ],
                'base': 1.5
            },
            'line-color': '#f3c200'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '30e7471a109b4c8eae41d414f41d9d81',
        'type': 'line',
        'minzoom': 7
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['==', 'functionclass', 1],
            ['in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 32]
                ],
                'base': 1.5
            },
            'line-dasharray': [3, 3],
            'line-color': '#f3c200'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '24d3c086cc80473091e4599f5d40c4ea',
        'type': 'line',
        'minzoom': 7
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['==', 'functionclass', 5],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '589dc5acd2e94fff9727b41c65842b6e',
        'type': 'line',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['==', 'functionclass', 4],
            ['!in', 'form', '50', '34', '37', '39', '38'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'a3af781a0f1f4a53a4ebbd65c54d3aa0',
        'type': 'line',
        'minzoom': 9.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['==', 'functionclass', 3],
            ['==', 'const_st', 1],
            ['!in', 'form', '39']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'd1a3e94dba7043abbbed896ff8f6a193',
        'type': 'line',
        'minzoom': 8.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['==', 'functionclass', 2],
            ['!in', 'form', '34', '39'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '9308b344e4de4a1d83ee8d7f0e11cfee',
        'type': 'line',
        'minzoom': 5
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['==', 'functionclass', 1],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.6]
                ],
                'base': 0.6
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'a6dbdba6935746f4b8a55e635eebdcd9',
        'type': 'line',
        'minzoom': 5
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 5],
            ['==', 'const_st', 1],
            ['in', 'form', '11']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [17, 1]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'c90d720cfa5c41eeb96a4ead736a06df',
        'type': 'line',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 4],
            ['==', 'const_st', 1],
            ['in', 'form', '11']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 2]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '71b7fe0db3fb4dbba7010d352859dad4',
        'type': 'line',
        'minzoom': 9.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 5],
            ['in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 2]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-dasharray': [3, 3],
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '450824272a144c28863495b83c87d62c',
        'type': 'line',
        'minzoom': 12
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 5],
            ['!in', 'form', '31', '15'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 2]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '4461738c45414e3390ce2fe42d8826a8',
        'type': 'line',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 4],
            ['!in', 'form', '31', '15'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 2]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'a19e0649ebe84043a9d796975f1d5e4f',
        'type': 'line',
        'minzoom': 9.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 3],
            ['==', 'const_st', 1],
            ['in', 'form', '11']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 2]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'dafa9f2f0389451a9b754af712ee4651',
        'type': 'line',
        'minzoom': 8.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 4],
            ['in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 2]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-dasharray': [3, 3],
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '9e211ed7979a4e53be3eef1040e30467',
        'type': 'line',
        'minzoom': 9
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 3],
            ['!in', 'form', '31', '15'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 2]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '19b1190dcaaf43078dc6c7b0097a3828',
        'type': 'line',
        'minzoom': 8.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 3],
            ['in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 2]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-dasharray': [3, 3],
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '120209b0d9324c8aa89960aeb7d1a6e2',
        'type': 'line',
        'minzoom': 8
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 2],
            ['!in', 'form', '31', '15'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'bd70eb8e74d44d2188bf18f1f3c63af4',
        'type': 'line',
        'minzoom': 7.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 2],
            ['==', 'const_st', 1],
            ['in', 'form', '11']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'b70864046fb748d8942bd70df84318c6',
        'type': 'line',
        'minzoom': 7.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 2],
            ['in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 2]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-dasharray': [3, 3],
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '6d7f792c87d04988ab0626519aad385f',
        'type': 'line',
        'minzoom': 7
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 1],
            ['!in', 'form', '31', '15'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 2]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '16273b3b5fa64e91974023f23671b188',
        'type': 'line',
        'minzoom': 7.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 1],
            ['==', 'const_st', 1],
            ['in', 'form', '11']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 2]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '2ae1e699011e4abb85c370f846076f12',
        'type': 'line',
        'minzoom': 7.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 1],
            ['in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 2]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-dasharray': [3, 3],
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'dc624a20d0644dd0b1f67f8ddd4a8de3',
        'type': 'line',
        'minzoom': 7
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 5],
            ['!in', 'form', '10', '15'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'fed5dc7a66424bdcad9551dc5e41eb36',
        'type': 'line',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 4],
            ['!in', 'form', '15'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'bf3a082cd84f4677a4d66964dba7bc6f',
        'type': 'line',
        'minzoom': 9.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 3],
            ['!in', 'form', '15'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'c18bd72fb58948e7a43a12d406014089',
        'type': 'line',
        'minzoom': 8.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 2],
            ['!in', 'form', '15'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '77b2a1fc239a47e2bae3ddc41f8aee32',
        'type': 'line',
        'minzoom': 5
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 1],
            ['!in', 'form', '15'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '6d0c4053371341ec9b19d59fcc3c96b1',
        'type': 'line',
        'minzoom': 5
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 5],
            ['==', 'const_st', 1],
            ['in', 'form', '11']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '3f6728a25eef435d9cd295d2c0a2a6f5',
        'type': 'line',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 4],
            ['==', 'const_st', 1],
            ['in', 'form', '11']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '5456052ce07c4deaa884bd85ff64e905',
        'type': 'line',
        'minzoom': 9.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 3],
            ['==', 'const_st', 1],
            ['in', 'form', '11']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '2ae4a021b9674b0db018f9dc41be7791',
        'type': 'line',
        'minzoom': 8.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 2],
            ['==', 'const_st', 1],
            ['in', 'form', '11']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '9018399c71fd4f2eaa4860c84926dd54',
        'type': 'line',
        'minzoom': 5
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'functionclass', 1],
            ['==', 'const_st', 1],
            ['in', 'form', '11']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'dd12330625114d6da753b687cdf4471e',
        'type': 'line',
        'minzoom': 5
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 5],
            ['!in', 'form', '31', '10', '15'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 2]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '88583862ce954cbfb9a780a6f2712f1f',
        'type': 'line',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 5],
            ['in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 2]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-dasharray': [3, 3],
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'f7bc4afeac634657958c5264b70b8a91',
        'type': 'line',
        'minzoom': 12
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 4],
            ['!in', 'form', '31', '10', '15'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 2]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '5e107cd5b90d42d98630872f6b8c83b7',
        'type': 'line',
        'minzoom': 9.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 4],
            ['in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 2]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-dasharray': [3, 3],
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '56a75b16a234436880ba488bbc5dc6e9',
        'type': 'line',
        'minzoom': 9
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 3],
            ['!in', 'form', '31', '10', '15'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 2]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'b43c0a544077467aaab509ff69022c93',
        'type': 'line',
        'minzoom': 8.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 3],
            ['in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 2]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-dasharray': [3, 3],
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '3fd3c8a529374ed298658e86926f20bc',
        'type': 'line',
        'minzoom': 8
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 2],
            ['!in', 'form', '31', '10', '15'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 2]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'f53acc50d2524d03ad2a8d363c3d004c',
        'type': 'line',
        'minzoom': 7
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 2],
            ['in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 2]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-dasharray': [3, 3],
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'f2916fd62080441a91077e475b4c2681',
        'type': 'line',
        'minzoom': 7
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 1],
            ['!in', 'form', '31', '10', '15'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 2]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'e7089a472017485ab585cc8560d3afae',
        'type': 'line',
        'minzoom': 7
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 1],
            ['in', 'form', '31'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 2]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-dasharray': [3, 3],
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'c7ddc88d47234f68bec3adaed1456023',
        'type': 'line',
        'minzoom': 7
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 5],
            ['!in', 'form', '10', '15'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'a9d35a0a88874323b0907435d6241d3e',
        'type': 'line',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 4],
            ['!in', 'form', '10', '15'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '3fe753d7943242c2aac07b6040f22fca',
        'type': 'line',
        'minzoom': 9.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 3],
            ['!in', 'form', '10', '15'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'b24a21d09dd74c4f894db33817ef5f22',
        'type': 'line',
        'minzoom': 8.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 2],
            ['!in', 'form', '10', '15'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '2bb1bcfc7b72448ebfa453d850e71473',
        'type': 'line',
        'minzoom': 5
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 1],
            ['!in', 'form', '10', '15'],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.6]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '8d46e5a5297b4bc5bd8fa4f39dc36f97',
        'type': 'line',
        'minzoom': 5
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 5],
            ['in', 'form', '11']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [18, 1]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '25b438d83c7544c6b8c5eb857e3b5218',
        'type': 'line',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 4],
            ['in', 'form', '11']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [18, 1]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'abdd63457cf0477fbe3fb446d7d26a6d',
        'type': 'line',
        'minzoom': 9.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 3],
            ['in', 'form', '11']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [18, 1]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '94902c75609c4e30915e0d7175602f69',
        'type': 'line',
        'minzoom': 8.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 2],
            ['in', 'form', '11']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [18, 1]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'c9c3f5db75e74a51b76865b60e37d46a',
        'type': 'line',
        'minzoom': 7.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 1],
            ['in', 'form', '11']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [18, 1]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '9c613b95e91d47faa0fcdc9b5fe1553d',
        'type': 'line',
        'minzoom': 7.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 5],
            ['in', 'form', '11']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '58b10c0b816f4d518bbffe60ac179a7f',
        'type': 'line',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 4],
            ['in', 'form', '11']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '5b9ea6444b41421ea437b521e84fe057',
        'type': 'line',
        'minzoom': 9.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 3],
            ['in', 'form', '11']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'd465fa13f4ac418dace92946cd11d6a7',
        'type': 'line',
        'minzoom': 8.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 2],
            ['in', 'form', '11']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '7e5efd0b1f2c4194bb4167fefb13c99c',
        'type': 'line',
        'minzoom': 5
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'functionclass', 1],
            ['in', 'form', '11']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '4d464ef537fc44d5892fb4be2f8b4350',
        'type': 'line',
        'minzoom': 5
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 8],
            ['>=', 'zvalue', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 1],
                    [18, 4]
                ],
                'base': 1.2
            },
            'line-color': '#ffffff'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '1f69ded314184830a53aa15c55bbdf45',
        'type': 'line',
        'minzoom': 14
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 8],
            ['>=', 'zvalue', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': 'cac5cded5365442cae04e8599c76abf4',
        'type': 'line',
        'minzoom': 14.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 7],
            ['>=', 'zvalue', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [12, 1],
                    [13, 4],
                    [18, 12]
                ],
                'base': 1.2
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '74c46db1dd414821a04f14afa0550086',
        'type': 'line',
        'minzoom': 14.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 7],
            ['>=', 'zvalue', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [5, 0.6],
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '0df52a75fbf140769c19e63730c031e9',
        'type': 'line',
        'minzoom': 14.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 5]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [12, 1],
                    [13, 4],
                    [18, 12]
                ],
                'base': 1.2
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '9f914d43593e4a0592a8a9c415c28207',
        'type': 'line',
        'minzoom': 13
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 4]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [12, 1],
                    [13, 4],
                    [18, 12]
                ],
                'base': 1.2
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '76d23512dd93400cbb51e106ca019760',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 3],
            ['!in', 'form', '34', '37', '38']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1.2]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [12, 1],
                    [13, 4],
                    [18, 12]
                ],
                'base': 1.2
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': 'bd5b1d6917f74fc28fd2caf495622d35',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 2]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 0.5]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [12, 1],
                    [13, 4],
                    [18, 12]
                ],
                'base': 1.2
            },
            'line-color': '#e6cca1'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '7eaf9b3b4a214dd688b7a64d0819bc01',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 0.5]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [12, 1],
                    [13, 4],
                    [18, 12]
                ],
                'base': 1.2
            },
            'line-color': '#e6cca1'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '4cc6f3bdfcd34f5ebff097d79d30110a',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 5]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '5970296775b3471da973370caa244e10',
        'type': 'line',
        'minzoom': 13
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 4]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '4dda902f20f84dd180bc62d841e7e4b7',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 3],
            ['!in', 'form', '34', '37', '38']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': 'd6699553d8d846b3914c11465ab6c0aa',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 2]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '1510d5a391af4b59afc520a4f0a70632',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 6],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '42fa506ccd014fe88fc6e1fb1bb7fc33',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 5],
            ['!in', 'form', '34', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '25f2bbb0cd9749bc9653199f62f03408',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 4],
            ['!in', 'form', '34', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [14, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': 'f8a64f4120914571a738c1778e616a39',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 3],
            ['!in', 'form', '50', '34', '37', '38', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [14, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#e6e6e6'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': 'eb6e707f440c435498d7b2ad27239f07',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 2],
            ['!in', 'form', '50', '34', '10', '1', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#f3c200'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '0cc497c3919b449c9e31ea471b1beb97',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#f3c200'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': 'f5ccfcb4a3de4f5dbe7767c301bfcab6',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 5],
            ['!in', 'form', '34', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '4e3e086a871d42f1acef8310fdea3e11',
        'type': 'line',
        'minzoom': 13
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 4],
            ['!in', 'form', '34', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '9eafd9178463450dbea8f6bffb1cd5ae',
        'type': 'line',
        'minzoom': 13
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 3],
            ['!in', 'form', '50', '34', '37', '38', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': 'be7e0be2d9dc4cae926c1bb88bbfb70e',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 2],
            ['!in', 'form', '50', '34', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '5a918cd92ea44394988ed1d0606fca13',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '44c1981e92524d9da29546858e4d3f56',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 5],
            ['!in', 'form', '50', '34', '37', '39', '38']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 0.5]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 32]
                ],
                'base': 1.5
            },
            'line-color': '#f5a623'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '7bb8894e866b45ea9546f6986e36e126',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 4],
            ['!in', 'form', '50', '34', '37', '39', '38']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 0.5]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 32]
                ],
                'base': 1.5
            },
            'line-color': '#f5a623'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '90ad0f20d9ea43008a4d8483e42d2f91',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 3],
            ['!in', 'form', '39']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 0.5]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 32]
                ],
                'base': 1.5
            },
            'line-color': '#f3c200'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': 'bec2f399e3294613afebf657c0d8e0e5',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 2],
            ['!in', 'form', '34', '39']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 0.5]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 32]
                ],
                'base': 1.5
            },
            'line-color': '#f3c200'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '150b8d10b627499c82a98fdeb9512386',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 0.5]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 32]
                ],
                'base': 1.5
            },
            'line-color': '#f3c200'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '5e290e67a4eb4700a3d275821a6fb830',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 5],
            ['!in', 'form', '50', '34', '37', '39', '38']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': 'efabeb31c2b64c0d8ee121b85f9e2aa5',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 4],
            ['!in', 'form', '50', '34', '37', '39', '38']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '0626d8f05a724671a77e25c5bb4c75ef',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 3],
            ['!in', 'form', '39']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '66c1e96ae2fa41e0b153a385033ca138',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 2],
            ['!in', 'form', '34', '39']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '6a0bd164e1874931a3511ab01db2d078',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '0e17ab503c6249c490fbdba1ddf9686e',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 5],
            ['!in', 'form', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': 'd6b2b295cca04ef183afcd7721feb941',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 4],
            ['!in', 'form', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '667d7b443cfd4f86b8231df00da8b986',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 3],
            ['!in', 'form', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': 'c4c778a8bb35488eb90e62ec629be659',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 2],
            ['!in', 'form', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': 'd42401aa278c49cfa86082981e4e55b4',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 1],
            ['!in', 'form', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': 'e2a07a0cd48840cb9611629fd324931e',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['>=', 'zvalue', 1],
            ['in', 'form', '11']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '62d1954f3bab4df3b5442a4f41dd80b0',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 5],
            ['!in', 'form', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': 'a64259e09abe4559bcb5d096c9e9e437',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 4],
            ['!in', 'form', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '6398d9c2a880427da8dd9f2d9fcfd8e6',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 3],
            ['!in', 'form', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '856760e94960401eae1b095229cd4499',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 2],
            ['!in', 'form', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '0a26ac4c009f4f53b050d923f241828a',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['>=', 'zvalue', 1],
            ['==', 'functionclass', 1],
            ['!in', 'form', '10', '15']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '4375431bee5149129f90dff43f32be00',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 2],
            ['>=', 'zvalue', 1],
            ['in', 'form', '11']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': 'e90149e0055349b0898333534e4cc872',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['>=', 'zvalue', 1],
            ['!in', 'form', '39', '10', '15'],
            ['==', 'functionclass', 5]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '1384c031ab5b4232ae68c396fa393659',
        'type': 'line',
        'minzoom': 13
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['>=', 'zvalue', 1],
            ['!in', 'form', '39', '10', '15'],
            ['==', 'functionclass', 4]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': 'b7d6922c6a4f4d2bb5c97cebb5365385',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['>=', 'zvalue', 1],
            ['!in', 'form', '39', '10', '15'],
            ['==', 'functionclass', 3]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '0a7c414f25944c7ea519bd7d7726b139',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['>=', 'zvalue', 1],
            ['!in', 'form', '14', '52', '15'],
            ['==', 'functionclass', 2]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': 'f2bc20352909412b843c3f223dba8d1e',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['>=', 'zvalue', 1],
            ['!in', 'form', '15'],
            ['==', 'functionclass', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.1],
                    [18, 1]
                ],
                'base': 1.2
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '16350a6460df4ef0a5a040767066c87e',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['>=', 'zvalue', 1],
            ['in', 'form', '11']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.5],
                    [18, 1]
                ],
                'base': 1
            },
            'line-gap-width': {
                'stops': [
                    [5, 1],
                    [18, 24]
                ],
                'base': 1.5
            },
            'line-color': '#fa8619'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '3237c76ef48043b194bbf916c9cf1466',
        'type': 'line',
        'minzoom': 13
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['>=', 'zvalue', 1],
            ['!in', 'form', '39', '10', '15'],
            ['==', 'functionclass', 5]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': 'b252a17fab364470ab6c0f088c8fcdf7',
        'type': 'line',
        'minzoom': 13
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['>=', 'zvalue', 1],
            ['!in', 'form', '39', '10', '15'],
            ['==', 'functionclass', 4]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '73be850ce21f4f37a9e2679e4f74e34b',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['>=', 'zvalue', 1],
            ['!in', 'form', '39', '10', '15'],
            ['==', 'functionclass', 3]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '54fc23caa37a4eb7bdb5061f25bb07cb',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['>=', 'zvalue', 1],
            ['!in', 'form', '52', '15'],
            ['==', 'functionclass', 2]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': '5efb252b70f94d3394db3c6f3d75ecaa',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['>=', 'zvalue', 1],
            ['!in', 'form', '15'],
            ['==', 'functionclass', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': 'a3fccbc9fded4aff90636c9f5697e2b4',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['>=', 'zvalue', 1],
            ['in', 'form', '11']
        ],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [5, 0.6],
                    [18, 0.8]
                ],
                'base': 1
            },
            'line-color': '#b2b2b2'
        },
        'source': 'Zlevel',
        'source-layer': 'Zlevel',
        'id': 'e17b79546c0f4f5d93508cda0ef1f9dd',
        'type': 'line',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'visible'
        },
        'maxzoom': 16.0,
        'paint': {
            'fill-color': '#edeeee',
            'fill-opacity': 1.0
        },
        'source': 'Buildingmore',
        'source-layer': 'Buildingmore',
        'id': '0dbbe9863c3f4d3e843eae9213927a8a',
        'type': 'fill',
        'minzoom': 14.0
    }, 
    // {
    //     'layout': {
    //         'visibility': 'visible'
    //     },
    //     'maxzoom': 17.5,
    //     'paint': {
    //         'extrusion-height': {
    //             'property': 'levels',
    //             'type': 'identity'
    //         },
    //         'extrusion-color': '#dadddd',
    //         'extrusion-base': 0,
    //         'extrusion-translate-anchor': 'map',
    //         'extrusion-opacity': 0.3,
    //         'extrusion-translate': [0, 0]
    //     },
    //     'source': 'Buildingmore',
    //     'source-layer': 'Buildingmore',
    //     'id': '25c4e6011c254745b968e51cf72be7b3',
    //     'type': 'extrusion',
    //     'minzoom': 16.0
    // }, 
    {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'status', 0]],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [10, 2],
                    [20, 6]
                ],
                'base': 1.2
            },
            'line-color': '#ffffff'
        },
        'source': 'Ptline',
        'source-layer': 'Ptline',
        'id': '366e14e33100467d8bad82f4b1ce9fb2',
        'type': 'line',
        'minzoom': 10
    }, {
        'layout': {
            'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'filter': ['all', ['==', 'status', 0]],
        'maxzoom': 17.5,
        'paint': {
            'line-width': {
                'stops': [
                    [10, 1.8],
                    [20, 4]
                ],
                'base': 1.2
            },
            'line-opacity': 0.65,
            'line-color': {
                'property': 'color',
                'type': 'identity'
            }
        },
        'source': 'Ptline',
        'source-layer': 'Ptline',
        'id': '1ca5453333cb4546ac337264988105db',
        'type': 'line',
        'minzoom': 10
    }, {
        'layout': {
            'visibility': 'none'
        },
        'maxzoom': 17.5,
        'paint': {
            'fill-outline-color': '#ffffff',
            'fill-color': {
                'property': 'color',
                'type': 'identity'
            },
            'fill-opacity': 0.6,
            'fill-antialias': true
        },
        'source': 'Subwaypolygon',
        'source-layer': 'Subwaypolygon',
        'id': 'e974a46fb69d4d0590e33ef15b5f2e45',
        'type': 'fill',
        'minzoom': 16.0
    }, {
        'layout': {
            'visibility': 'none',
            'text-size': 12.0,
            'text-anchor': 'center',
            'icon-image': 'metro-station'
        },
        'filter': ['all', ['==', 'status', 0],
            ['==', 'stationtype', 1],
            ['==', 'istransfer', 0]
        ],
        'maxzoom': 12.0,
        'paint': {
            'icon-color': '#cccccc',
            'text-translate': [0, 10]
        },
        'source': 'Ptstop',
        'source-layer': 'Ptstop',
        'id': '233ef904179d4535822e82d2d19cca93',
        'type': 'symbol',
        'minzoom': 11.0
    }, {
        'layout': {
            'visibility': 'none',
            'text-offset': [0, 1],
            'text-size': 12,
            'text-anchor': 'center',
            'icon-size': 0.78,
            'symbol-placement': 'point',
            'icon-image': 'metro-{istransfer}-{city_code}-18',
            'text-font': ['NORMAL'],
            'icon-optional': false
        },
        'filter': ['all', ['==', 'status', 0],
            ['==', 'stationtype', 1]
        ],
        'maxzoom': 13.0,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#171bf0',
            'text-halo-width': 1.5,
            'text-translate': [0, 10]
        },
        'source': 'Ptstop',
        'source-layer': 'Ptstop',
        'id': 'e3f835ab331e478798a75d5bef85cceb',
        'type': 'symbol',
        'minzoom': 12.0
    }, {
        'layout': {
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [0, 1],
            'text-size': 12,
            'text-anchor': 'center',
            'icon-size': 0.89,
            'symbol-placement': 'point',
            'icon-image': 'metro-{istransfer}-{city_code}-18',
            'text-font': ['NORMAL'],
            'icon-optional': false
        },
        'filter': ['all', ['==', 'status', 0],
            ['==', 'stationtype', 1]
        ],
        'maxzoom': 14.0,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#171bf0',
            'text-halo-width': 1.2,
            'text-translate': [0, 10]
        },
        'source': 'Ptstop',
        'source-layer': 'Ptstop',
        'id': 'e454928a39784ae8bcfd9167cd1410f4',
        'type': 'symbol',
        'minzoom': 13.0
    }, {
        'layout': {
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [0, 1],
            'text-size': 12,
            'text-anchor': 'center',
            'symbol-placement': 'point',
            'icon-image': 'metro-{istransfer}-{city_code}-18',
            'text-font': ['NORMAL'],
            'icon-optional': false
        },
        'filter': ['all', ['==', 'status', 0],
            ['==', 'stationtype', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#171bf0',
            'text-halo-width': 1.2,
            'text-translate': [0, 10]
        },
        'source': 'Ptstop',
        'source-layer': 'Ptstop',
        'id': '721e03e8a27747e5b398d89dfe630c82',
        'type': 'symbol',
        'minzoom': 14.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-size': 11.0,
            'symbol-placement': 'line',
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'kind', 13]],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#9e9e9e',
            'text-halo-width': 1
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '5f9514da44f14404a3f48d6391a48c2a',
        'type': 'symbol',
        'minzoom': 10.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-size': 11.0,
            'symbol-placement': 'line',
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'kind', 10]],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#aaaaaa',
            'text-halo-width': 1
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'd3c0662bd0764a80875b8aa61a545f42',
        'type': 'symbol',
        'minzoom': 15.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-size': 11.0,
            'symbol-placement': 'line',
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'kind', 9]],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#aaaaaa',
            'text-halo-width': 1
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '92d5663e63e5472091b2d506c587ec9c',
        'type': 'symbol',
        'minzoom': 15.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-size': 11.0,
            'symbol-placement': 'line',
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'kind', 8]],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#aaaaaa',
            'text-halo-width': 1
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '1543852918de466f927620b7511c5e20',
        'type': 'symbol',
        'minzoom': 15.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-size': 11.0,
            'symbol-placement': 'line',
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'kind', 7]],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#8f8f8f',
            'text-halo-width': 1
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '6f54a54c4cb54a86a0445086a204949a',
        'type': 'symbol',
        'minzoom': 14.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-size': 11.0,
            'symbol-placement': 'line',
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'kind', 6]],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#8f8f8f',
            'text-halo-width': 1
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '145d1d0ea8964e0a864502e4621ba5e0',
        'type': 'symbol',
        'minzoom': 10.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-size': {
                'stops': [
                    [10, 10],
                    [18, 14]
                ],
                'base': 1
            },
            'symbol-placement': 'line',
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'kind', 4],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#888888',
            'text-halo-width': 1
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '83ef588e1a5043cfa53927802be8f501',
        'type': 'symbol',
        'minzoom': 11.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-size': {
                'stops': [
                    [10, 10],
                    [18, 14]
                ],
                'base': 1
            },
            'symbol-placement': 'line',
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'kind', 3],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#888888',
            'text-halo-width': 1.0
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'ba893e3dc63f40449dcb297d10ece271',
        'type': 'symbol',
        'minzoom': 11.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-size': {
                'stops': [
                    [10, 10],
                    [18, 14]
                ],
                'base': 1
            },
            'text-ignore-placement': false,
            'text-allow-overlap': false,
            'symbol-placement': 'line',
            'text-font': ['BOLD']
        },
        'filter': ['all', ['==', 'kind', 2],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#9f9f9f',
            'text-halo-width': 1.0
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'dc9c00142cb146ee818c81a68570bd0a',
        'type': 'symbol',
        'minzoom': 10.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-size': {
                'stops': [
                    [10, 10],
                    [18, 14]
                ],
                'base': 1
            },
            'text-ignore-placement': false,
            'symbol-placement': 'line',
            'text-font': ['BOLD']
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#a0a0a0',
            'text-halo-width': 1.0
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '96f67f82f73d462baa54c4155b467ad8',
        'type': 'symbol',
        'minzoom': 11.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['in', 'kindcode', '225018', '220400']],
        'maxzoom': 17.0,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '08a9b1ba5d5c4da79b6d59c0132ab7ab',
        'type': 'symbol',
        'minzoom': 16.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['==', 'kindcode', '180306'],
            ['!in', 'name_zh', '和平广场', '华盛玫瑰广场']
        ],
        'maxzoom': 16.0,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '1ca94d1acd24443b912fdf86d72f2b4e',
        'type': 'symbol',
        'minzoom': 14
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_230125_16'
        },
        'filter': ['all', ['in', 'kindcode', '235021', '235022'],
            ['>', 'rank', 3]
        ],
        'maxzoom': 15.0,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': 'b953de36dfd94b36a9476da82861f7ac',
        'type': 'symbol',
        'minzoom': 12.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['in', 'kindcode', '160207', '160206'],
            ['==', 'rank', 3]
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': 'b9a61125a90d40ac9aaed1f8b3b0bdcc',
        'type': 'symbol',
        'minzoom': 14
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_230125_16'
        },
        'filter': ['all', ['in', 'kindcode', '235021', '235022'],
            ['==', 'rank', 2]
        ],
        'maxzoom': 15,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '7b597056c32d414ead9d41bb0282b238',
        'type': 'symbol',
        'minzoom': 14.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['==', 'kindcode', '130703']],
        'maxzoom': 16.0,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '2a778938516646278ba9c882a80f2acc',
        'type': 'symbol',
        'minzoom': 14.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['==', 'kindcode', '160105'],
            ['==', 'rank', 1]
        ],
        'maxzoom': 15,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': 'b436e292c192481fafa8c0ee19c6a06c',
        'type': 'symbol',
        'minzoom': 13.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['==', 'kindcode', '160105'],
            ['==', 'rank', 2],
            ['!in', 'name_zh', '辽宁地质工程职业学院']
        ],
        'maxzoom': 15.0,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '2398150aba04469880e1d06b8ccbdcee',
        'type': 'symbol',
        'minzoom': 12.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['==', 'kindcode', '160105'],
            ['==', 'rank', 3]
        ],
        'maxzoom': 15,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': 'eef3a55e8fd44a61aea079bf53d9f8e8',
        'type': 'symbol',
        'minzoom': 11.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_170100_16'
        },
        'filter': ['all', ['==', 'kindcode', '175115']],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '7983435464884a098561f8dfc6818080',
        'type': 'symbol',
        'minzoom': 14.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['==', 'kindcode', '120201'],
            ['==', 'rank', 1]
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': 'ca49b5f777344798af09ddc0aa5b2f20',
        'type': 'symbol',
        'minzoom': 15.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['==', 'kindcode', '120201'],
            ['==', 'rank', 3]
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '308c065d9bd048578e407efbd1236b06',
        'type': 'symbol',
        'minzoom': 14
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_160102_16'
        },
        'filter': ['all', ['==', 'kindcode', '160103'],
            ['==', 'rank', 1]
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': 'b3792f8680184197aa6c9de6acc7c78c',
        'type': 'symbol',
        'minzoom': 14.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_160102_16'
        },
        'filter': ['all', ['==', 'kindcode', '160103'],
            ['>=', 'rank', 2]
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '9d47f4ad740449de87cf3f77b09c3eca',
        'type': 'symbol',
        'minzoom': 12.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-size': 12.0
        },
        'filter': ['all', ['==', 'kindcode', '230201'],
            ['>=', 'rank', 3]
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#914604',
            'text-halo-width': 2.0
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '39e052aeaf604c6caf2f0f023654cd03',
        'type': 'symbol',
        'minzoom': 14.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-size': 12.0
        },
        'filter': ['all', ['==', 'kindcode', '230201'],
            ['<=', 'rank', 2]
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#914604',
            'text-halo-width': 2.0
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '1941e8dac2164086be591d2b217870c9',
        'type': 'symbol',
        'minzoom': 15.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-size': {
                'stops': [
                    [11, 12],
                    [18, 16]
                ],
                'base': 1
            }
        },
        'filter': ['all', ['==', 'kindcode', '230202'],
            ['<=', 'rank', 2]
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#914604',
            'text-halo-width': 1.0
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '7cd57c60b5a345fbaded789397a85013',
        'type': 'symbol',
        'minzoom': 14.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-size': {
                'stops': [
                    [11, 12],
                    [18, 16]
                ],
                'base': 1
            }
        },
        'filter': ['all', ['==', 'kindcode', '230202'],
            ['==', 'rank', 3]
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#914604',
            'text-halo-width': 1.0
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': 'a748385ae1134558af69af11feca70e9',
        'type': 'symbol',
        'minzoom': 13.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [0, 0],
            'text-size': {
                'stops': [
                    [11, 12],
                    [18, 16]
                ],
                'base': 1
            },
            'text-anchor': 'center',
            'symbol-placement': 'point'
        },
        'filter': ['all', ['==', 'kindcode', '230202'],
            ['>=', 'rank', 4]
        ],
        'maxzoom': 16.0,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#914604',
            'text-halo-width': 1.0
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '1d40ad5c649e49a1844f26c37ac5f7af',
        'type': 'symbol',
        'minzoom': 11.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['==', 'rank', 2],
            ['==', 'kindcode', '180309']
        ],
        'maxzoom': 15,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#417505',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': 'f9d8452ebcc141a388f37cee60a3096a',
        'type': 'symbol',
        'minzoom': 11.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_180307_16'
        },
        'filter': ['all', ['==', 'rank', 2],
            ['in', 'kindcode', '180308', '185119']
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': 'aa88dee6f9164e86888e31dd1f993f7d',
        'type': 'symbol',
        'minzoom': 11.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['==', 'rank', 1],
            ['==', 'kindcode', '180309']
        ],
        'maxzoom': 15.0,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#417505',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': 'a08ecdb92a1944fbbf0bd429146d0599',
        'type': 'symbol',
        'minzoom': 13.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_180307_16'
        },
        'filter': ['all', ['==', 'rank', 1],
            ['in', 'kindcode', '180308', '185119'],
            ['!in', 'name_zh', '鸭绿江第一漂']
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': 'c694abccbe984291a89bd1e75ee7d6a7',
        'type': 'symbol',
        'minzoom': 13.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_180105_16'
        },
        'filter': ['all', ['==', 'rank', 1],
            ['in', 'kindcode', '180105', '180106']
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': 'f8f73d51197c4b89aacb44a557081409',
        'type': 'symbol',
        'minzoom': 15.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_180105_16'
        },
        'filter': ['all', ['==', 'rank', 2],
            ['in', 'kindcode', '180105', '180106']
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '22d7e046afcd42b8af5f834f0b3e76e4',
        'type': 'symbol',
        'minzoom': 14.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_180105_16'
        },
        'filter': ['all', ['==', 'rank', 3],
            ['in', 'kindcode', '180105', '180106']
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '60a4ea81218749219323c339af70f2b6',
        'type': 'symbol',
        'minzoom': 13.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_180100_16'
        },
        'filter': ['all', ['==', 'kindcode', '185122'],
            ['==', 'rank', 1]
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': 'dd5318c5c47547e5ad253ce5a0676a92',
        'type': 'symbol',
        'minzoom': 15.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_180100_16'
        },
        'filter': ['all', ['==', 'kindcode', '185122'],
            ['>=', 'rank', 2]
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '185a470b8b114ece91893895a77a083d',
        'type': 'symbol',
        'minzoom': 12.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_130102_16'
        },
        'filter': ['all', ['in', 'kindcode', '130102', '130103']],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '29760f32ec5e4419a3913aa1dbc1bdc8',
        'type': 'symbol',
        'minzoom': 14.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_120101_16'
        },
        'filter': ['all', ['in', 'kindcode', '125134', '125136', '125137', '125138', '125139', '125140'],
            ['==', 'rank', 2]
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '8703d3cc8b3049e6b01dc85c0ce17b2e',
        'type': 'symbol',
        'minzoom': 15.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_120101_16'
        },
        'filter': ['all', ['in', 'kindcode', '125134', '125136', '125137', '125138', '125139', '125140'],
            ['==', 'rank', 3]
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '290f1d984baf478e893ce5b4e3b1e90f',
        'type': 'symbol',
        'minzoom': 14.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'bottom',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['==', 'kindcode', '200104']],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '22dd52a3afe245889a165c7585221a17',
        'type': 'symbol',
        'minzoom': 15
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_200103_16'
        },
        'filter': ['all', ['==', 'kindcode', '215032'],
            ['==', 'rank', 1]
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '95da9507513644daafdfd0e60fb3c99a',
        'type': 'symbol',
        'minzoom': 15.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_200103_16'
        },
        'filter': ['all', ['==', 'kindcode', '215032'],
            ['==', 'rank', 2]
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': 'c2060282f3d44802bb82eac7a5d95f80',
        'type': 'symbol',
        'minzoom': 13.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_200103_16'
        },
        'filter': ['all', ['==', 'kindcode', '215032'],
            ['==', 'rank', 3]
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '190cf3e8607c41b1914f112712b2dcff',
        'type': 'symbol',
        'minzoom': 12.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['==', 'kindcode', '200101'],
            ['<=', 'rank', 2]
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': 'df4c972109204d34b6cb6466c069d7f7',
        'type': 'symbol',
        'minzoom': 14.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['==', 'kindcode', '200101'],
            ['>=', 'rank', 3]
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '6d0182f5e17b43479a7cf5f2890c798e',
        'type': 'symbol',
        'minzoom': 12.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_180304_16'
        },
        'filter': ['all', ['==', 'kindcode', '185120'],
            ['==', 'rank', 1]
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#417505',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': 'b946707a763a48499e5b2af1a308a2cd',
        'type': 'symbol',
        'minzoom': 14.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_180304_16'
        },
        'filter': ['all', ['==', 'kindcode', '185120'],
            ['>=', 'rank', 2]
        ],
        'maxzoom': 16.0,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#417505',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': 'c242e00e5149402dab77364f6fbce2f5',
        'type': 'symbol',
        'minzoom': 12.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_180304_16'
        },
        'filter': ['all', ['==', 'kindcode', '185120'],
            ['==', 'rank', 4]
        ],
        'maxzoom': 12.0,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#417505',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '4b0e7d2e350a4dd793dfd73465f4d16b',
        'type': 'symbol',
        'minzoom': 10.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['==', 'kindcode', '160205'],
            ['==', 'rank', 1]
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '2413a77577c94f4fac8eeb5d5b9378dd',
        'type': 'symbol',
        'minzoom': 13.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['==', 'kindcode', '160205'],
            ['==', 'rank', 2],
            ['!in', 'name_zh', '抗美援朝纪念馆']
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': 'd87410552d3f43dc94a61bf105ab83f7',
        'type': 'symbol',
        'minzoom': 11.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_180400_16'
        },
        'filter': ['all', ['==', 'kindcode', '185116'],
            ['==', 'rank', 1],
            ['!=', 'name_zh', '天安门']
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '3c020d23b0954f828cf073d0f76dcf2d',
        'type': 'symbol',
        'minzoom': 14.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_180400_16'
        },
        'filter': ['all', ['==', 'kindcode', '185116'],
            ['==', 'rank', 2],
            ['!in', 'name_zh', '洞沟古墓群']
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '877fc762ebb24acb81ff9019ae1cf0f4',
        'type': 'symbol',
        'minzoom': 12.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_180400_16'
        },
        'filter': ['all', ['==', 'kindcode', '185116'],
            ['==', 'rank', 3],
            ['!in', 'name_zh', '火山地质公园南景区', '岳桦双瀑']
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '1428699b2b834e508739392248169e7d',
        'type': 'symbol',
        'minzoom': 11.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_180400_16'
        },
        'filter': ['all', ['>=', 'rank', 4],
            ['==', 'kindcode', '185116'],
            ['!=', 'name_zh', '高山苔原带']
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '29eadfefd99d4406a85b985cd4c1af25',
        'type': 'symbol',
        'minzoom': 10
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['in', 'kindcode', '230103', ''],
            ['>=', 'rank', 3],
            ['!=', 'name_zh', '临江站']
        ],
        'maxzoom': 16.0,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '03cc727b77974e889d6ea861c9657ccf',
        'type': 'symbol',
        'minzoom': 10.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['in', 'kindcode', '230103', ''],
            ['==', 'name_zh', '临江站']
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '977fbbd8becd4f4db4fa074474ab3394',
        'type': 'symbol',
        'minzoom': 12.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'icon-image': 'poi_door_16'
        },
        'filter': ['all', ['in', 'accessflag', 2, 1]],
        'maxzoom': 17.5,
        'paint': {
            'icon-color': '#ff0000'
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '3ccb34bb30e8437fad2e7d1d39e283c5',
        'type': 'symbol',
        'minzoom': 16.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['in', 'kindcode', '260000', '260100'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '237c2f884d8b449faff46bfa9b95002e',
        'type': 'symbol',
        'minzoom': 11.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['in', 'kindcode', '250100', '250200'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '4f93490e1d3e4f278166eef2db437413',
        'type': 'symbol',
        'minzoom': 14.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['==', 'kindcode', '240100'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': 'cc27c7a52bbd40468dab588190e7a7ab',
        'type': 'symbol',
        'minzoom': 16.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['in', 'kindcode', '230125', '230206', '230207', '230209', ''],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '15a550eefbcf4ed9b2de0cc84510cc25',
        'type': 'symbol',
        'minzoom': 15.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-offset': [1, 0],
            'text-size': 11,
            'text-anchor': 'left',
            'icon-size': 1,
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['==', 'accessflag', 0],
            ['in', 'kindcode', '230203', '230204']
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#000000',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '777785bcbeed44c385f18d36a9d9c86f',
        'type': 'symbol',
        'minzoom': 16
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['in', 'kindcode', '230100', '230108', '230226'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '4a79a1fe333046aea258211b9883b2da',
        'type': 'symbol',
        'minzoom': 14.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-offset': [1, 0],
            'text-size': 11,
            'text-anchor': 'left',
            'icon-size': 1.0,
            'icon-image': 'poi_code_230207_16'
        },
        'filter': ['all', ['in', 'kindcode', '230211', '230212', '230214', '230223', '230224', '230225', '230213'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#000000',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '2e7d462361d54bbc8de76b3c021ac745',
        'type': 'symbol',
        'minzoom': 16.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['==', 'kindcode', '230126'],
            ['==', 'generation', 1],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '50c12daba2aa4424a36a848b0bb583c1',
        'type': 'symbol',
        'minzoom': 11.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': {
                'stops': [
                    [11, 12],
                    [18, 16]
                ],
                'base': 1
            },
            'text-anchor': 'left',
            'icon-size': 1
        },
        'filter': ['all', ['==', 'accessflag', 0],
            ['in', 'kindcode', '230201', '230202'],
            ['!=', 'name_zh', '珍珠桥']
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#914604',
            'text-halo-width': 1.0
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '1c4d9c37017541baacd92396e5c5c6e1',
        'type': 'symbol',
        'minzoom': 16.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['in', 'kindcode', '230127', '230128', '230129', ''],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '515fbc25b3754d59a9e395ad46145a2f',
        'type': 'symbol',
        'minzoom': 15.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['in', 'kindcode', '230103', '230105', '230107', '230215', '230216', '230217', '230218'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '3077f6511f0b4b28b1cd9b1397143086',
        'type': 'symbol',
        'minzoom': 16.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['in', 'kindcode', '230130', '230219', '230220', '230221', '230228', '230229'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '1d481e4e3009477bb13be5d319d77f8c',
        'type': 'symbol',
        'minzoom': 17.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['==', 'kindcode', '230126'],
            ['==', 'generation', 2],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': 'd1a14235570d46f8b4a8eaf34cc5b7f5',
        'type': 'symbol',
        'minzoom': 12.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['==', 'kindcode', '220300'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': 'd9c516e1245f48d4b5ba067506883ab6',
        'type': 'symbol',
        'minzoom': 14.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['in', 'kindcode', '220100', '220400'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': 'e958fdd256d34414a8be86c5653e8fe4',
        'type': 'symbol',
        'minzoom': 17.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['==', 'kindcode', '220200'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '96e29d155c244d548505a7bbe2b0b91a',
        'type': 'symbol',
        'minzoom': 17.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['in', 'kindcode', '210211', '210304'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '3b553a2ae0a64adf8b71e744cce43841',
        'type': 'symbol',
        'minzoom': 15.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12,
            'text-anchor': 'left',
            'icon-image': 'poi_code_170100_16'
        },
        'filter': ['all', ['==', 'accessflag', 0],
            ['==', 'kindcode', '210105']
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '8ad5fcbed1f44eaf82ed10248082f795',
        'type': 'symbol',
        'minzoom': 17
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['in', 'kindcode', '210101', '210102', '210103', '210104', '210201', '210202', '210203', '210204', '210206', '210207', '210209', '210210', '210213', '210214', '210216', '210217', '210218', '210219', '210301', '210302', '210303', '210400'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '8a8f11951afb464f98a1ff53d5c9ad13',
        'type': 'symbol',
        'minzoom': 17.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-offset': [1, 0],
            'text-size': 11,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['==', 'kindcode', '210215'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#000000',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': 'e29de543680b4c3f8885bab9c9ae1099',
        'type': 'symbol',
        'minzoom': 16.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['==', 'kindcode', '200105'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '2000568f054b4e9c9b3932199c4c6b37',
        'type': 'symbol',
        'minzoom': 14.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['in', 'kindcode', '200200', '200300', '200400', '200404', '200405'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '4de419f247fd4416bded0915146d6852',
        'type': 'symbol',
        'minzoom': 17.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['in', 'kindcode', '200101', '200104'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '01561f12eb0046fcb8adad04402589e6',
        'type': 'symbol',
        'minzoom': 16.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12,
            'text-anchor': 'left',
            'icon-image': 'poi_code_200103_16'
        },
        'filter': ['all', ['==', 'accessflag', 0],
            ['==', 'kindcode', '200103']
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': 'b13f7e3d7c9e4e8fb816aacc0e3c2592',
        'type': 'symbol',
        'minzoom': 16
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['in', 'kindcode', '200102', '200201'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '5b57a18eda8c4dc4bbde5cb60294862b',
        'type': 'symbol',
        'minzoom': 15.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_190101_16'
        },
        'filter': ['all', ['in', 'kindcode', '190107', '190108'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': 'fc0265ea8528419f99111ca838c25050',
        'type': 'symbol',
        'minzoom': 13.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_190200_16'
        },
        'filter': ['all', ['==', 'accessflag', 0],
            ['==', 'kindcode', '190204']
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '2106899728e54b889f0c056d0f92b2dc',
        'type': 'symbol',
        'minzoom': 17.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12,
            'text-anchor': 'left',
            'icon-image': 'poi_code_190100_16'
        },
        'filter': ['all', ['==', 'accessflag', 0],
            ['in', 'kindcode', '190500', '190501']
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': 'd11f8187ce744abb84e766fd6eb4447e',
        'type': 'symbol',
        'minzoom': 17
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_190101_16'
        },
        'filter': ['all', ['==', 'accessflag', 0],
            ['==', 'kindcode', '190110']
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '6a85b80bbe0649b889e6064267b90b99',
        'type': 'symbol',
        'minzoom': 15.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_190100_16'
        },
        'filter': ['all', ['==', 'kindcode', '190102'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '319de4936e2d4b6daba5a0d947f7cede',
        'type': 'symbol',
        'minzoom': 14.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['in', 'kindcode', '190111', '190112', '190113', '190114', '190301', '190502'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '7c9f2981663b4f83b14707ff9665d223',
        'type': 'symbol',
        'minzoom': 17.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_190200_16'
        },
        'filter': ['all', ['in', 'kindcode', '190200', '190201'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '04129d11ec10459d94200090dcc8ee3a',
        'type': 'symbol',
        'minzoom': 16.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['in', 'kindcode', '190401', '190402', '190403', '190404'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#8b572a',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '5938cd08ebf04d55848a9d40e14a2507',
        'type': 'symbol',
        'minzoom': 15
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['==', 'accessflag', 0],
            ['==', 'kindcode', '190400']
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#8b572a',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '57870c9edc184722b15cb480c576e9e5',
        'type': 'symbol',
        'minzoom': 15
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_190100_16'
        },
        'filter': ['all', ['in', 'kindcode', '190100', '190101', '190103', '190104', '190105', '190106'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '598854d44a0d4316b9b76affab6cb5d7',
        'type': 'symbol',
        'minzoom': 15.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['==', 'kindcode', '180310'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': 'd9600f90de054422b9471dfe7a8c9ee3',
        'type': 'symbol',
        'minzoom': 13.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['==', 'kindcode', '180109'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': 'b485180206d34e16a6c2eb7cf2ff3d2b',
        'type': 'symbol',
        'minzoom': 14.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_180304_16'
        },
        'filter': ['all', ['==', 'accessflag', 0],
            ['==', 'kindcode', '180305']
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '4b1fed50a5864552954af00e4ee1166d',
        'type': 'symbol',
        'minzoom': 15.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['in', 'kindcode', '180209', '180210', '180211'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '81db595f13c840cf85ae909278fdb1c5',
        'type': 'symbol',
        'minzoom': 17.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['==', 'accessflag', 0],
            ['in', 'kindcode', '180206', '180207', '180208', '180301', '180302', '180303']
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '1bdaa998b67c425782a7a81ffa142808',
        'type': 'symbol',
        'minzoom': 17.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12,
            'text-anchor': 'left',
            'icon-image': 'poi_code_180201_16'
        },
        'filter': ['all', ['in', 'kindcode', '180201', '180202', '180203', '180204', '180205'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '15fce416f1664575b42b20833477e12d',
        'type': 'symbol',
        'minzoom': 17
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['==', 'kindcode', '180304'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#417505',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '2c27830003f84817a31d2ad62a02795b',
        'type': 'symbol',
        'minzoom': 16.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['in', 'kindcode', '180100', '180101', '180102', '180103', '180104', '180105', '180106', '180306', '180400'],
            ['==', 'accessflag', 0],
            ['!=', 'name_zh', '澳門總督府']
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '14129448ab7b4b5f93e559765af6caa3',
        'type': 'symbol',
        'minzoom': 16.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['==', 'accessflag', 0],
            ['in', 'kindcode', '180107', '180110']
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '6ee9bcc8ab9d48989c26fc470922e4f9',
        'type': 'symbol',
        'minzoom': 16
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['in', 'kindcode', '180307', '180308'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '3cc8d788055b47c881ccfa0383633a7b',
        'type': 'symbol',
        'minzoom': 15.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['==', 'kindcode', '180309'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#417505',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '77f0099560a941daafa2526a1631293b',
        'type': 'symbol',
        'minzoom': 15.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_170100_16'
        },
        'filter': ['all', ['in', 'kindcode', '170100', '170101', '170102'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '2023a44e51e846feaf57f316b800ab26',
        'type': 'symbol',
        'minzoom': 15.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['==', 'accessflag', 0],
            ['==', 'kindcode', '170105']
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': 'bff299297be64265b58689b15cf4fd29',
        'type': 'symbol',
        'minzoom': 16.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_170100_16'
        },
        'filter': ['all', ['in', 'kindcode', '170103', '170104', '170105'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '68d9b8239df349ab883ac1d66c74e9e1',
        'type': 'symbol',
        'minzoom': 16.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['==', 'accessflag', 0],
            ['==', 'kindcode', '170107']
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '9e913f9bee9d41c89170f90617d04a56',
        'type': 'symbol',
        'minzoom': 17.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['in', 'kindcode', '170106', '170108', '170109', '170110', '170201'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '5cbeff9e6503476890a13b08e53c6715',
        'type': 'symbol',
        'minzoom': 17.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['in', 'kindcode', '160201', '160202'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': 'c91a0c40cc7c4578a826e7ff932562b8',
        'type': 'symbol',
        'minzoom': 17.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['in', 'kindcode', '160105', '160203', '160106', '160107'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '6116b30b1f1d4334ae344292048d323c',
        'type': 'symbol',
        'minzoom': 15.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['in', 'kindcode', '', '160109'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '1d09cfe435214e26890892e84b397fbf',
        'type': 'symbol',
        'minzoom': 15.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['in', 'kindcode', '160108', '160110', '160209'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '05a9a83b1252451eab8d1d071d1d9c92',
        'type': 'symbol',
        'minzoom': 17.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['in', 'kindcode', '160101', '160102', '', '160104', '160204', '160205', '160206'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '0367ebb4fa5e4fe681cdcc03df69abef',
        'type': 'symbol',
        'minzoom': 16
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12,
            'text-anchor': 'left',
            'icon-image': 'poi_code_160102_16'
        },
        'filter': ['all', ['==', 'accessflag', 0],
            ['==', 'kindcode', '160103']
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '92b0971054fa4587971db2e5d0e8e42a',
        'type': 'symbol',
        'minzoom': 16
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['in', 'kindcode', '160100', '160207', '160208'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': 'f88618f1bc5a46bd9f2c67501ae1912b',
        'type': 'symbol',
        'minzoom': 16
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['==', 'kindcode', '150102'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '395f89ad426c4c97bd37c55ee0e03446',
        'type': 'symbol',
        'minzoom': 17.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['in', 'kindcode', '150101', '150102'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '6b7346ce1a4a4d5285a511e14f5aaa0d',
        'type': 'symbol',
        'minzoom': 17
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['in', 'kindcode', '150103', '150104'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '0f5597c3d738453c9da5d27e7d78eff0',
        'type': 'symbol',
        'minzoom': 17
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['==', 'kindcode', '150200'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '806855eea1ac44aaa8f696415eeceab1',
        'type': 'symbol',
        'minzoom': 16.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['==', 'kindcode', '140202'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '5e89f31a7ad64878ad775e1a79db3d61',
        'type': 'symbol',
        'minzoom': 17.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['in', 'kindcode', '140101', '140104', '140201', '140301', '140302', '140303', '140304'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '35571ce91cca443cae8f81f185f9d609',
        'type': 'symbol',
        'minzoom': 15.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['in', 'kindcode', '130101', '130200', '130201', '130202', '130303', '130304', '130501', '130502'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '9270b7c353944edbbbe4f7ff4ab31251',
        'type': 'symbol',
        'minzoom': 17.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['in', 'kindcode', '130104', '130105', '130203', '130204', '130205', '130206', '130207', '130302', '130401', '130403', '130404', '130405', '130406', '130407', '130408', '130409', '130410', '130411', '130800', '130801', '130803', '130804', '130805', '130806', '130807'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '7573221330e945909e6ba8a228de8f46',
        'type': 'symbol',
        'minzoom': 17.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['in', 'kindcode', '130102', '130106', '130301'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '32ea0675437d40eb93eb53159a87c9df',
        'type': 'symbol',
        'minzoom': 16
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['in', 'kindcode', '130402', '130601', '130602', '130603', '130700', '130701', '130702', '130703', '130704', '130705'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '7808c755e1004ef9a0ef628b133dea3e',
        'type': 'symbol',
        'minzoom': 16
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['==', 'kindcode', '120201'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': 'ee77216859724c5c81117faff899aa33',
        'type': 'symbol',
        'minzoom': 16.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['in', 'kindcode', '120101', '120102', '120103', '120201'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '8389f73b2ffd42408253f9ab9d42f62a',
        'type': 'symbol',
        'minzoom': 16.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12,
            'text-anchor': 'left',
            'icon-image': 'point-11'
        },
        'filter': ['all', ['==', 'accessflag', 0],
            ['==', 'kindcode', '120104']
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '3d8c0757527f40b497a054d446edf8eb',
        'type': 'symbol',
        'minzoom': 16
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16'
        },
        'filter': ['all', ['==', 'kindcode', '120201'],
            ['==', 'generation', 2],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '72adf6175bd94ac88fb0f3222f473140',
        'type': 'symbol',
        'minzoom': 16.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16',
            'text-font': ['NORMAL']
        },
        'filter': ['all', ['in', 'kindcode', '110101', '110102', '110103', '110200', '110301', '110302', '110303', '110304'],
            ['==', 'accessflag', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#c87f01',
            'text-halo-width': 1.5
        },
        'source': 'Poi',
        'source-layer': 'Poi',
        'id': '0e29eb82b6a04575b89a650ff3ca4ad8',
        'type': 'symbol',
        'minzoom': 17.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'visible',
            'icon-image': 'poi_code_230100_16'
        },
        'filter': ['all', ['==', 'stationtype', 0],
            ['==', 'status', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'icon-color': '#e67a7f'
        },
        'source': 'Ptstop',
        'source-layer': 'Ptstop',
        'id': 'e6f14e9162f543bfa1803106a469ec0a',
        'type': 'symbol',
        'minzoom': 16.0
    }, {
        'layout': {
            'symbol-avoid-edges': false,
            'icon-rotation-alignment': 'viewport',
            'visibility': 'visible',
            'text-field': '{name_brief}',
            'text-rotation-alignment': 'viewport',
            'text-size': 9,
            'symbol-placement': 'line',
            'icon-image': 'Provincial-15-{brief_cnt}'
        },
        'filter': ['all', ['==', 'kind', 4],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 11.0,
        'paint': {
            'icon-color': '#ff0000',
            'text-color': '#ffffff'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': 'c6307d1ffb6d4a3a9499823cc5f9e7f0',
        'type': 'symbol',
        'minzoom': 6.0
    }, {
        'layout': {
            'symbol-avoid-edges': false,
            'icon-rotation-alignment': 'viewport',
            'visibility': 'visible',
            'text-field': '{name_brief}',
            'text-rotation-alignment': 'viewport',
            'text-size': 9.0,
            'symbol-placement': 'line',
            'icon-image': 'expressway-15-{brief_cnt}'
        },
        'filter': ['all', ['==', 'kind', 1],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 11.0,
        'paint': {
            'icon-color': '#ff0000',
            'text-color': '#ffffff'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '3eb3c2ef707b4563901eb3b6a7df2933',
        'type': 'symbol',
        'minzoom': 6.0
    }, {
        'layout': {
            'symbol-avoid-edges': false,
            'icon-rotation-alignment': 'viewport',
            'visibility': 'visible',
            'text-field': '{name_brief}',
            'text-rotation-alignment': 'viewport',
            'text-size': 9,
            'symbol-placement': 'line',
            'icon-image': 'state-15-{brief_cnt}'
        },
        'filter': ['all', ['==', 'kind', 3],
            ['==', 'const_st', 1]
        ],
        'maxzoom': 11.0,
        'paint': {
            'icon-color': '#ff0000',
            'text-color': '#ffffff'
        },
        'source': 'Road',
        'source-layer': 'Road',
        'id': '40cba2e58b01481fbd170b9d33eebcec',
        'type': 'symbol',
        'minzoom': 6.0
    }, {
        'layout': {
            'text-pitch-alignment': 'viewport',
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [-1, -1.3],
            'text-rotation-alignment': 'viewport',
            'text-size': 12.0,
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'kindcode', '275007'],
            ['==', 'name_zh', '钓鱼岛']
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#292929',
            'text-halo-width': 0.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': 'aa22ef07d67d4ef382836e3d7a03bb49',
        'type': 'symbol',
        'minzoom': 4
    }, {
        'layout': {
            'text-pitch-alignment': 'viewport',
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, -1],
            'text-rotation-alignment': 'viewport',
            'text-size': 12.0,
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'kindcode', '275007'],
            ['==', 'name_zh', '东沙群岛']
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#292929',
            'text-halo-width': 0.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': 'da683110c6614079b430b56f75868561',
        'type': 'symbol',
        'minzoom': 4
    }, {
        'layout': {
            'text-pitch-alignment': 'viewport',
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [-1, -1],
            'text-rotation-alignment': 'viewport',
            'text-size': 12.0,
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'kindcode', '275007'],
            ['==', 'name_zh', '西沙群岛']
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#292929',
            'text-halo-width': 0.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': 'ca40b30e0fa6484fbd2f8e49b3b4ea44',
        'type': 'symbol',
        'minzoom': 4
    }, {
        'layout': {
            'text-pitch-alignment': 'viewport',
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [-1, -1],
            'text-rotation-alignment': 'viewport',
            'text-size': 12.0,
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'kindcode', '275007'],
            ['==', 'name_zh', '中沙群岛']
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#292929',
            'text-halo-width': 0.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '32c11d51e610429f8492eb2d29ab28ee',
        'type': 'symbol',
        'minzoom': 4
    }, {
        'layout': {
            'text-pitch-alignment': 'viewport',
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [0, -3],
            'text-rotation-alignment': 'viewport',
            'text-size': 12.0,
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'kindcode', '275007'],
            ['==', 'name_zh', '南沙群岛']
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#292929',
            'text-halo-width': 0.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': 'babeda2d3bb74a1a96a4b02f374a3ad0',
        'type': 'symbol',
        'minzoom': 4
    }, {
        'layout': {
            'text-pitch-alignment': 'viewport',
            'visibility': 'visible',
            'text-max-width': 4.0,
            'text-field': '{name_zh}',
            'text-offset': [0, 2],
            'text-rotation-alignment': 'viewport',
            'text-size': 12.0,
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'kindcode', '275007'],
            ['==', 'name_zh', '黄岩岛（民主礁）']
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#292929',
            'text-halo-width': 0.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': 'eba36140299c4659b4b2914d68efd743',
        'type': 'symbol',
        'minzoom': 4
    }, {
        'layout': {
            'text-pitch-alignment': 'viewport',
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [2, 0],
            'text-rotation-alignment': 'viewport',
            'text-size': 12.0,
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'kindcode', '275007'],
            ['==', 'name_zh', '赤尾屿']
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#292929',
            'text-halo-width': 0.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '249c22668d8745efa0ed5fde77c80b16',
        'type': 'symbol',
        'minzoom': 4
    }, {
        'layout': {
            'text-pitch-alignment': 'viewport',
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [2, 0],
            'text-rotation-alignment': 'viewport',
            'text-size': 12.0,
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'kindcode', '275006'],
            ['==', 'name_zh', '黄尾屿']
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#292929',
            'text-halo-width': 0.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '4ec6bb541051457c9b8a431cd727d1f0',
        'type': 'symbol',
        'minzoom': 7.0
    }, {
        'layout': {
            'text-pitch-alignment': 'viewport',
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [0, -1],
            'text-rotation-alignment': 'viewport',
            'text-size': 12.0,
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'kindcode', '275007'],
            ['==', 'name_zh', '曾母暗沙']
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#292929',
            'text-halo-width': 0.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '6c61566a0128446799f1feac1ca79bcc',
        'type': 'symbol',
        'minzoom': 4.0
    }, {
        'layout': {
            'text-pitch-alignment': 'viewport',
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [0, 0],
            'text-rotation-alignment': 'viewport',
            'text-size': 10.0,
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'kindcode', '275007'],
            ['==', 'name_zh', '（台湾省详细资料暂缺）']
        ],
        'maxzoom': 6.0,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#292929',
            'text-halo-width': 0.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '8bd562b75f294a08971f50a9b39d9d8b',
        'type': 'symbol',
        'minzoom': 5.0
    }, {
        'layout': {
            'text-pitch-alignment': 'viewport',
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [0, 0],
            'text-rotation-alignment': 'viewport',
            'text-size': 20.0,
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'kindcode', '275007'],
            ['==', 'name_zh', '（台湾省详细资料暂缺）']
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#292929',
            'text-halo-width': 0.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '1af5fedfaa88449087e768f25eb5b5da',
        'type': 'symbol',
        'minzoom': 6.0
    }, {
        'layout': {
            'text-pitch-alignment': 'viewport',
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-rotation-alignment': 'viewport',
            'text-size': 12,
            'text-anchor': 'right',
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'kind', '260100'],
            ['==', 'special', 0],
            ['!in', 'name_zh', '北代岛', '万代岛', '青阳岛']
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#2c2c2c',
            'text-halo-width': 1
        },
        'source': 'Villtown',
        'source-layer': 'Villtown',
        'id': 'd6170e26f3134309a6d5fc1bcd3cfcaa',
        'type': 'symbol',
        'minzoom': 13.0
    }, {
        'layout': {
            'symbol-avoid-edges': false,
            'text-pitch-alignment': 'viewport',
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-rotation-alignment': 'viewport',
            'text-size': 11.0,
            'text-anchor': 'right',
            'symbol-placement': 'point',
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'kind', '260000'],
            ['in', 'name_tag', 2, 0, 1],
            ['==', 'special', 0]
        ],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#2c2c2c',
            'text-halo-width': 1
        },
        'source': 'Villtown',
        'source-layer': 'Villtown',
        'id': '83300efdb814459ea654d5c24e8d9c99',
        'type': 'symbol',
        'minzoom': 10.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'text-pitch-alignment': 'viewport',
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [0, 1],
            'text-rotation-alignment': 'viewport',
            'text-size': 12.0,
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'type', 4],
            ['!in', 'name_zh', '台湾', '元宝区', '东港市', '集安市', '临江市', '长白朝鲜族自治县', '图们市', '饶河县', '振兴区', '振安区', '呼玛县']
        ],
        'maxzoom': 10.0,
        'paint': {
            'text-halo-color': '#ffffff',
            'text-translate-anchor': 'map',
            'icon-color': '#ff0000',
            'text-color': '#393939',
            'text-halo-width': 1.0
        },
        'source': 'Adminflag',
        'source-layer': 'Adminflag',
        'id': '0923c64658314cef96f60bdb7519bd20',
        'type': 'symbol',
        'minzoom': 7.0
    }, {
        'layout': {
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-size': 12,
            'text-anchor': 'bottom',
            'text-allow-overlap': false,
            'icon-size': 0.8,
            'icon-image': 'circle-brown-11',
            'text-font': ['REGULAR'],
            'symbol-avoid-edges': false,
            'text-pitch-alignment': 'viewport',
            'text-offset': [0, 1.7],
            'text-rotation-alignment': 'viewport',
            'text-ignore-placement': false
        },
        'filter': ['all', ['==', 'capital', 3],
            ['==', 'name_zh', '黑河']
        ],
        'maxzoom': 10,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#393939',
            'text-halo-width': 0.5
        },
        'source': 'Adminflag',
        'source-layer': 'Adminflag',
        'id': '5adbb83c338c48e18b4dc08c68276a05',
        'type': 'symbol',
        'minzoom': 9.0
    }, {
        'layout': {
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-size': 12,
            'text-anchor': 'right',
            'text-allow-overlap': false,
            'icon-text-fit': 'none',
            'icon-size': 0.8,
            'icon-image': 'circle-brown-11',
            'text-font': ['REGULAR'],
            'symbol-avoid-edges': false,
            'text-pitch-alignment': 'viewport',
            'text-justify': 'center',
            'text-offset': [-0.8, 0],
            'icon-offset': [-6, 0],
            'text-rotation-alignment': 'viewport',
            'text-ignore-placement': false
        },
        'filter': ['all', ['==', 'capital', 3],
            ['==', 'name_zh', '丹东']
        ],
        'maxzoom': 10,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#393939',
            'text-halo-width': 0.5
        },
        'source': 'Adminflag',
        'source-layer': 'Adminflag',
        'id': 'c200fb5a32ef4a808bd1dd5af627e303',
        'type': 'symbol',
        'minzoom': 5.0
    }, {
        'layout': {
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-size': 12.0,
            'text-anchor': 'bottom',
            'text-allow-overlap': false,
            'icon-size': 0.8,
            'icon-image': 'circle-brown-11',
            'text-font': ['REGULAR'],
            'symbol-avoid-edges': false,
            'text-pitch-alignment': 'viewport',
            'text-offset': [0, -0.3],
            'text-rotation-alignment': 'viewport',
            'text-ignore-placement': false
        },
        'filter': ['all', ['==', 'capital', 3],
            ['!in', 'name_tag', 1, 3, 2],
            ['!in', 'name_zh', '黑河', '丹东']
        ],
        'maxzoom': 10.0,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#393939',
            'text-halo-width': 0.5
        },
        'source': 'Adminflag',
        'source-layer': 'Adminflag',
        'id': '4933388937e1403bb78bde5c19b07e0b',
        'type': 'symbol',
        'minzoom': 5.0
    }, {
        'layout': {
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-size': 12,
            'text-anchor': 'bottom',
            'text-allow-overlap': false,
            'icon-size': 0.8,
            'text-font': ['REGULAR'],
            'symbol-avoid-edges': false,
            'text-pitch-alignment': 'viewport',
            'text-max-width': 6.0,
            'text-offset': [0, -0.3],
            'text-rotation-alignment': 'viewport',
            'text-ignore-placement': false
        },
        'filter': ['all', ['==', 'capital', 3],
            ['in', 'name_tag', 1, 3, 2],
            ['in', 'name_zh', '延边朝鲜族自治州', '德宏傣族景颇族自治州', '西双版纳傣族自治州', '伊犁哈萨克自治州']
        ],
        'maxzoom': 10,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#393939',
            'text-halo-width': 0.5
        },
        'source': 'Adminflag',
        'source-layer': 'Adminflag',
        'id': 'a347af207cfe4c198e30e47a642f38e1',
        'type': 'symbol',
        'minzoom': 5
    }, {
        'layout': {
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-size': 12,
            'text-anchor': 'bottom',
            'text-allow-overlap': false,
            'icon-size': 0.8,
            'text-font': ['REGULAR'],
            'symbol-avoid-edges': false,
            'text-pitch-alignment': 'viewport',
            'text-max-width': 6,
            'text-offset': [1.3, 1],
            'text-rotation-alignment': 'viewport',
            'text-ignore-placement': false
        },
        'filter': ['all', ['==', 'capital', 3],
            ['in', 'name_tag', 1, 3, 2],
            ['==', 'name_zh', '怒江傈僳族自治州']
        ],
        'maxzoom': 10,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#393939',
            'text-halo-width': 0.5
        },
        'source': 'Adminflag',
        'source-layer': 'Adminflag',
        'id': '279fb60626e24a0591093ddc702ba0bd',
        'type': 'symbol',
        'minzoom': 5
    }, {
        'layout': {
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-size': 12,
            'text-anchor': 'bottom',
            'text-allow-overlap': false,
            'icon-size': 0.8,
            'text-font': ['REGULAR'],
            'symbol-avoid-edges': false,
            'text-pitch-alignment': 'viewport',
            'text-max-width': 6,
            'text-offset': [2, 0],
            'text-rotation-alignment': 'viewport',
            'text-ignore-placement': false
        },
        'filter': ['all', ['==', 'capital', 3],
            ['in', 'name_tag', 1, 3, 2],
            ['in', 'name_zh', '塔城地区']
        ],
        'maxzoom': 10,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#393939',
            'text-halo-width': 0.5
        },
        'source': 'Adminflag',
        'source-layer': 'Adminflag',
        'id': '8f2bafbb032f481c8f55e3a9d63d439b',
        'type': 'symbol',
        'minzoom': 5
    }, {
        'layout': {
            'symbol-avoid-edges': false,
            'text-pitch-alignment': 'viewport',
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [0, -0.3],
            'text-rotation-alignment': 'viewport',
            'text-size': 12.0,
            'text-anchor': 'bottom',
            'text-ignore-placement': false,
            'text-allow-overlap': false,
            'icon-size': 0.8,
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'capital', 3],
            ['in', 'name_tag', 1, 3, 2],
            ['!in', 'name_zh', '延边朝鲜族自治州', '塔城地区', '德宏傣族景颇族自治州', '西双版纳傣族自治州', '怒江傈僳族自治州', '伊犁哈萨克自治州']
        ],
        'maxzoom': 10.0,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#393939',
            'text-halo-width': 0.5
        },
        'source': 'Adminflag',
        'source-layer': 'Adminflag',
        'id': '93826b753eed4f7998f381d2793c6b88',
        'type': 'symbol',
        'minzoom': 5.0
    }, {
        'layout': {
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-size': 14,
            'text-anchor': 'right',
            'text-allow-overlap': false,
            'icon-size': 0.8,
            'icon-image': 'circle-red-11',
            'text-font': ['REGULAR'],
            'symbol-avoid-edges': false,
            'text-pitch-alignment': 'viewport',
            'text-offset': [-0.4, 0],
            'text-rotation-alignment': 'viewport',
            'text-ignore-placement': false
        },
        'filter': ['all', ['==', 'name_zh', '澳門']],
        'maxzoom': 10.0,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#323232',
            'text-halo-width': 0.5
        },
        'source': 'Adminflag',
        'source-layer': 'Adminflag',
        'id': 'e0c0185e6586406cb509fd4d466b26c1',
        'type': 'symbol',
        'minzoom': 4
    }, {
        'layout': {
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-size': 14.0,
            'text-anchor': 'left',
            'text-allow-overlap': false,
            'icon-size': 0.8,
            'icon-image': 'circle-red-11',
            'text-font': ['REGULAR'],
            'symbol-avoid-edges': false,
            'text-pitch-alignment': 'viewport',
            'text-justify': 'left',
            'text-offset': [0.4, 0],
            'text-rotation-alignment': 'viewport',
            'text-ignore-placement': false
        },
        'filter': ['all', ['==', 'name_zh', '香港']],
        'maxzoom': 10.0,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#323232',
            'text-halo-width': 0.5
        },
        'source': 'Adminflag',
        'source-layer': 'Adminflag',
        'id': '05fa150731164654bf951083493f35ce',
        'type': 'symbol',
        'minzoom': 4.0
    }, {
        'layout': {
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-size': 14.0,
            'text-anchor': 'bottom',
            'text-allow-overlap': false,
            'icon-size': 0.8,
            'icon-image': 'circle-red-11',
            'text-font': ['REGULAR'],
            'symbol-avoid-edges': false,
            'text-pitch-alignment': 'viewport',
            'text-offset': [0, -0.3],
            'text-rotation-alignment': 'viewport',
            'text-ignore-placement': false
        },
        'filter': ['all', ['in', 'capital', 1, 2],
            ['!in', 'name_zh', '香港', '澳門', '天津']
        ],
        'maxzoom': 10.0,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#323232',
            'text-halo-width': 0.5
        },
        'source': 'Adminflag',
        'source-layer': 'Adminflag',
        'id': '8d9f37e9150549339614fe5d1de93eac',
        'type': 'symbol',
        'minzoom': 4.0
    }, {
        'layout': {
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-size': 14.0,
            'text-anchor': 'left',
            'text-allow-overlap': false,
            'icon-size': 0.8,
            'icon-image': 'circle-red-11',
            'text-font': ['REGULAR'],
            'symbol-avoid-edges': false,
            'text-pitch-alignment': 'viewport',
            'text-offset': [-2.5, 0],
            'text-rotation-alignment': 'viewport',
            'text-ignore-placement': false
        },
        'filter': ['all', ['in', 'capital', 1, 2],
            ['==', 'name_zh', '天津']
        ],
        'maxzoom': 10.0,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#323232',
            'text-halo-width': 0.5
        },
        'source': 'Adminflag',
        'source-layer': 'Adminflag',
        'id': '3920a6fedc714d8b9d2288b2302a7585',
        'type': 'symbol',
        'minzoom': 4.0
    }, {
        'layout': {
            'symbol-avoid-edges': false,
            'text-pitch-alignment': 'viewport',
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [0, -0.3],
            'text-rotation-alignment': 'viewport',
            'text-size': 16.0,
            'text-anchor': 'bottom',
            'icon-size': 1.0,
            'icon-image': 'star-11',
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['in', 'capital', 1]],
        'maxzoom': 4.0,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-halo-width': 10.0,
            'icon-halo-color': '#d0021b',
            'icon-color': '#ff0000',
            'text-color': '#181818',
            'text-halo-width': 1.0
        },
        'source': 'Adminflag',
        'source-layer': 'Adminflag',
        'id': 'ca1567243cee490e9729e6b70bb8b719',
        'type': 'symbol',
        'minzoom': 3
    }, {
        'layout': {
            'text-pitch-alignment': 'viewport',
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-rotation-alignment': 'viewport',
            'text-size': 20.0,
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'name_zh', '中华人民共和国']],
        'maxzoom': 4.0,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#555555',
            'text-halo-width': 2.0
        },
        'source': 'Worldannotation',
        'source-layer': 'Worldannotation',
        'id': '073b74e13dc747629e2acbcd65a10466',
        'type': 'symbol',
        'minzoom': 3
    }, {
        'layout': {
            'symbol-avoid-edges': false,
            'text-pitch-alignment': 'viewport',
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-rotation-alignment': 'viewport',
            'text-size': 14.0,
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'kind', '275008'],
            ['!=', 'name_zh', '台湾海峡']
        ],
        'maxzoom': 8.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#3da698',
            'text-halo-width': 1.0
        },
        'source': 'Worldannotation',
        'source-layer': 'Worldannotation',
        'id': '1019ebb64253455b9a1ca79026e2091f',
        'type': 'symbol',
        'minzoom': 4.0
    }, {
        'layout': {
            'symbol-avoid-edges': false,
            'text-pitch-alignment': 'viewport',
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [-1, 0],
            'text-rotation-alignment': 'viewport',
            'text-size': 14.0,
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'kind', '275008'],
            ['==', 'name_zh', '台湾海峡']
        ],
        'maxzoom': 8.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#42a6a6',
            'text-halo-width': 1.0
        },
        'source': 'Worldannotation',
        'source-layer': 'Worldannotation',
        'id': '29c23c2658f84a65b5d87cde73c0e47c',
        'type': 'symbol',
        'minzoom': 5.0
    }, {
        'layout': {
            'symbol-avoid-edges': false,
            'text-pitch-alignment': 'viewport',
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-rotation-alignment': 'viewport',
            'text-size': 24.0,
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'kind', '405002']],
        'maxzoom': 8.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#8a8a8a',
            'text-halo-width': 1.0
        },
        'source': 'Worldannotation',
        'source-layer': 'Worldannotation',
        'id': '3de4b28c243e4299911eb591a02213c0',
        'type': 'symbol',
        'minzoom': 3
    }, {
        'layout': {
            'symbol-avoid-edges': false,
            'text-pitch-alignment': 'viewport',
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-rotation-alignment': 'viewport',
            'text-size': 20.0,
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'kind', '405003']],
        'maxzoom': 8.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#5ec1c2',
            'text-halo-width': 1.0
        },
        'source': 'Worldannotation',
        'source-layer': 'Worldannotation',
        'id': '37f7fe6ac0c24a07924f91c69f34bbc1',
        'type': 'symbol',
        'minzoom': 3.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-size': {
                'stops': [
                    [10, 9],
                    [18, 14]
                ],
                'base': 1
            },
            'symbol-placement': 'line',
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'status', 0]],
        'maxzoom': 17.5,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': {
                'property': 'color',
                'type': 'identity'
            },
            'text-halo-width': 1.0
        },
        'source': 'Ptline',
        'source-layer': 'Ptline',
        'id': '75f5a0b23cfd47efa8671087845629ca',
        'type': 'symbol',
        'minzoom': 10.0
    }, {
        'layout': {
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [0, 0.15],
            'text-size': 12,
            'icon-image': 'n-point-name-15-{zh_cnt}',
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'type', 4],
            ['!in', 'name_zh', '香洲区（由澳门特别行政区实施管辖）', '台湾', '长白朝鲜族自治县', '集安市', '临江市', '振兴区', '元宝区', '振安区', '爱辉区', '抚远市']
        ],
        'maxzoom': 11.5,
        'paint': {
            'text-halo-color': '#5e94e4',
            'text-translate-anchor': 'map',
            'icon-color': '#82dbcf',
            'text-color': '#ffffff',
            'text-halo-width': 0.0,
            'icon-opacity': 0.9
        },
        'source': 'Adminflag',
        'source-layer': 'Adminflag',
        'id': 'fdc5bd8ae40b422da060f2e970ee5554',
        'type': 'symbol',
        'minzoom': 10.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12.0,
            'text-anchor': 'left',
            'icon-image': 'poi_code_{kindcode}_16',
            'text-font': ['REGULAR']
        },
        'filter': ['all', ['==', 'kindcode', '230126'],
            ['==', 'rank', 4],
            ['!=', 'name_zh', '丹东浪头机场']
        ],
        'maxzoom': 11.0,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#0053bb',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': 'afe7b84bf3de40aa9b8f0d7539caaa01',
        'type': 'symbol',
        'minzoom': 9.0
    }, {
        'layout': {
            'symbol-avoid-edges': true,
            'visibility': 'none',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12,
            'text-anchor': 'left',
            'icon-image': 'poi_code_230103_16'
        },
        'filter': ['all', ['>=', 'rank', 3],
            ['==', 'kindcode', '230107']
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': 'cd3bc30221d747a6a0fbdd35a13c7aab',
        'type': 'symbol',
        'minzoom': 11.0
    }, {
        'layout': {
            'symbol-avoid-edges': false,
            'visibility': 'visible',
            'text-field': '{name_zh}',
            'text-offset': [1, 0],
            'text-size': 12,
            'text-anchor': 'left',
            'icon-image': 'Tiananmen'
        },
        'filter': ['all', ['==', 'kindcode', '185116'],
            ['==', 'name_zh', '天安门']
        ],
        'maxzoom': 16,
        'paint': {
            'text-halo-color': '#ffffff',
            'icon-color': '#ff0000',
            'text-color': '#544946',
            'text-halo-width': 1.5
        },
        'source': 'Annotation',
        'source-layer': 'Annotation',
        'id': '10a9a563d5b34a53a7e97a2eea5e3b64',
        'type': 'symbol',
        'minzoom': 10.0
    }, {
        'layout': {
            'visibility': 'none',
            'text-field': '{code}',
            'text-size': 12.0,
            'icon-image': 'Provincial-15-3',
            'text-font': ['REGULAR']
        },
        'maxzoom': 17.5,
        'paint': {
            'icon-color': '#ff0000',
            'text-color': '#ffffff',
            'text-translate': [0, 1.6]
        },
        'source': 'Ptexit',
        'source-layer': 'Ptexit',
        'id': '1e16f2b0475c40dc8e8daedc0bb20539',
        'type': 'symbol',
        'minzoom': 17.0
    }],
    'glyphs': `${Config.localhost}/res/mapbox/glyphs/{fontstack}/{range}`,
    'version': 8
}

export default style
