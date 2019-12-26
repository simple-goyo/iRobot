export enum Host {
  Ros = '192.168.1.116:5000',
  // Ros = '127.0.0.1:5000',
}

export enum RosService {
  arm1 = 'arm1',
  arm2 = 'arm2',
  arm3 = 'arm3',
  arm4 = 'arm4',
  arm5 = 'arm5',
  go = 'go',
  turn = 'turn'
}

export function getRosUrl(service) {
  const serviceURL = 'http://' + Host.Ros + '/' + RosService[service];
  return serviceURL;
}
