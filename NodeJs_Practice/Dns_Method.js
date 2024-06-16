// const dns=require('dns')
// console.log(dns.getServers())

// const dns=require('dns')
// const x=dns.lookup('instagram.com',function(err,address,family){ 
//     console.log(family)
// })

// console.log('Process id: ',process.pid)
// console.log('Process Architecture: ',process.arch)
// //console.log('Process Enviroment: ',process.env)
// console.log('Process Platform: ',process.platform)
// console.log('Process Version: ',process.version)
// console.log('Process Version: ',process.release)

//function
// console.log('Process directory: ',process.cwd())
// console.log('Process time: ',process.hrtime())
// console.log('Process memory: ',process.memoryUsage())
// console.log('Process uptime: ',process.uptime())

//Stat
// const fs=require('fs')
// fs.stat('abc.txt',(err,stats)=>{ 
//     if(err) throw err
//     console.log("State: ",stats.isFile())
// })

 //buffer
// var buff=Buffer.from('abc')
// console.log(buff)

// var buf=Buffer.alloc(15)

// console.log(buf)

//Path 
// var path=require('path')
// console.log("Normalization: ",path.normalize())

// var StringDecoder=require('string_decoder').StringDecoder
// var d=new StringDecoder('utf-8')
// var b=Buffer.from('My Name is avishkar');
// var c=new Buffer.from('4d79204e616d652069732061766973686b6172','hex')
// // console.log(b)
// console.log(d.write(c))

// var StringDecoder=require('string_decoder').StringDecoder
// var x=new StringDecoder('utf-8')
// var buff=new Buffer.from('HI HOW ARE YOU?')

// console.log(x.write(buff))

// //Zlib -- compress and decompress the means zip and unzip
// var zlib=require('zlib')
// var fs=require('fs')

// const x=fs.createReadStream('abc.txt')
// const output=fs.createWriteStream('abc.txt.gz')

// x.pipe(zlib.createGzip()).pipe(output)

//assert 
// var assert=require('assert')
// assert(8<2)

//Crypto
// var crypto=require('crypto')
// const cipher=crypto.createCipher('aes192','mypassword')
// var encrypt=cipher.update("Hello JavaTpoint",'utf-8','hex')
// encrypt+=cipher.final('hex')
// console.log(encrypt)

// var crypto=require('crypto')
// const decipher=crypto.createDecipher('aes192','mypassword')
// var encrypted='043e6553eefdf05753cf77fd23d159722990c010b285cfc691389e516b02eaa3'
// var decrypt=decipher.update(encrypted,'hex','utf-8')
// decrypt+=decipher.final('utf-8')
// console.log(decrypt)

// var crypto=require('crypto')
// const cipher=crypto.createDecipher('aes192','Password123')
// //var encrypt=cipher.update('My name is Avishkar','utf-8','hex')
// //encrypt+=cipher.final('hex')
// var encrypted='a615f99f94fd0c62020062705d479e64b26d8a50f3f312b70be219d064163164'
// var decrypt=cipher.update(encrypted,'hex','utf-8')
// decrypt+=cipher.final('utf-8')
// console.log(decrypt)


//V8 -get the information about the heap memory
//var v8=require('v8')
//console.log(v8.getHeapStatistics())
//console.log(v8.getHeapSpaceStatistics())

//punycode
// var punycode=require('punycode')
// console.log(punycode.decode('Avishkar'))
