const localhost = 'http://localhost:8080'; // 本地Web服务

const server = 'http://localhost:5757'; // 服务接口服务

const serviceName = 'weapp'; // 服务程序名称

const serviceUrl = server + '/' + serviceName;

var config = {
    localhost,
    service: {
        server,
        serviceUrl
    },
    minedata: {
        serviceUrl: 'http://139.199.20.29/data',
        accessToken: '67f6bfed606941f9a63d26d0ad61de2f',
        solution: 4784
    }
};

export default config;
