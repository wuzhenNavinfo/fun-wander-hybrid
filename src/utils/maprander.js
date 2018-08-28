import util from './util';

const getRender = function(res){
    var colos = {
        9203002: '#fd7676',//公共受限区域
        9205000: '#939395',//空置单元
        //99905000:'#ddd',//空置单元（3）

        1103003: '#befe73',//客梯
        1102000: '#befe73',//楼梯
        1103001: '#befe73',//扶梯
        
        1303014: '#f69d70',
        1303004: '#d9ceff',
        1303020: '#f1d35b',//体育
        1303005: '#f69d70',//金
        1303015: '#fe9104',//玛斯威顿
        1303021: '#c6a5a3',//安踏体育
        1303001: '#fb8ec6',//服装
        //00303001:'#fb8ec6',//服装（3）
        //00303000:'#fb8ec6',//恒源祥
        1303002: '#c6a5a3',//鞋
        1304000: '#81effe',//保健
        1303000: '#f69d70',//商铺
        1306004: '#04feef',//中国移动
        1303007: '#f1d35b',//手机
    
        2707000: '#affed1',//医药超市
        2301000: '#d9ceff',//zhiao
        1303009: '#f69d70',//酒
    };
    const feature = res.data.map(it => {
        return {
            type: 'Feature',
            properties: {
                id: it.face_id,
                poiId: it.poi_id,
                poiKind: it.poi_kind
            },
            geometry: util.wktToGeojson(it.geometry)
        }
    });
    const style = {
        style: function(Feature) {
            console.info(Feature);
            return {
            color: '#e2d7de', //店铺边框色彩
            fill: true,
            fillColor: colos[Feature.properties.poiKind] ?  colos[Feature.properties.poiKind] : '#f1d35b',//店铺内部色彩
            fillOpacity: 0.9
        }}
    };     
    return {feature: feature, style: style,}
}
export default getRender
