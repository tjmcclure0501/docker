var ftpd = require('ftp-server')
// Path to your FTP root
ftpd.fsOptions.root = '/path/to/ftp-root'
// Start listening on port 21 (you need to be root for ports < 1024)
ftpd.listen(21)

