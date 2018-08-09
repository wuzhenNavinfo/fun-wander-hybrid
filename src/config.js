const host = 'http://localhost:5757';

const serviceName = 'weapp';

const serviceUrl = host + '/' + serviceName;

var config = {
  service: {
    host,
    serviceUrl
  }
};

export default config;
