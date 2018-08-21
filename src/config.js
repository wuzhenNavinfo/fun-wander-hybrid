const ENV = 'prod';

const localhost = 'http://localhost:8080'; // 本地Web服务

const localService = '/api'; // 本地服务

const remoteService = 'http://fs-road.navinfo.com/dev/trunk/funWander/service';  // 远程服务
  
const serviceUrl = ENV === 'dev' ? localService : remoteService; 

var config = {
    localhost,
    service: {
        serviceUrl
    },
    minedata: {
        serviceUrl: 'http://139.199.20.29/data',
        accessToken: '67f6bfed606941f9a63d26d0ad61de2f',
        solution: 4784
    }
};

export default config;
