// converts 'www.mum.edu' domain name to the equivalent IP address. 

var dns = require('dns');
var dnsLooks = dns.resolve4('www.mum.edu', function (err, addresses, family) {
  console.log(addresses);
});

// using promise object

const { promisify } = require('util');
const dns = require('dns');
const dnsLooks = promisify(dns.resolve4);

dnsLooks('www.mum.edu')
 .then((data)=> { console.log(data) })
 .catch((error) => { console.log(error) });

// using async-await

const { promisify } = require('util');
const dns = require('dns');
const dnsLooksPromise = promisify(dns.resolve4);

async function dnsLooks(){
  try{
    const resolvedDNS = await dnsLooksPromise('www.mum.edu');
    console.log(resolvedDNS)
  }
  catch(err){
    console.log(err)

  }
}

dnsLooks();

