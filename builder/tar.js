const tar = require('tar');
const {
    createWriteStream
} = require('fs');

tar.c({
    gzip: true,
    prefix: 'gongbushang.nuxt',
}, [
    'package.json',
    'package-lock.json',
    'dist',
    'public',
    'server',
]).pipe(createWriteStream('bundle.tgz'));