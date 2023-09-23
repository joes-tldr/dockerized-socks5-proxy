const socks = require('socksv5');

const srv = socks.createServer(function(info, accept, deny) {
  console.log(`${new Date().toISOString()} [${info.cmd}] ${info.srcAddr}:${info.srcPort} => ${info.dstAddr}:${info.dstAddr}`);
  accept();
});

srv.listen(1080, '0.0.0.0', function() {
  console.log('SOCKS5 server listening on port 1080');
});

srv.useAuth(socks.auth.None());
