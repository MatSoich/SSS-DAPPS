const symbol = require('/node_modules/symbol-sdk')

const address = symbol.Address.createFromRawAddress("TCGMM2XTUTAEAZQJSXKBBO7B2KES5NMNTHLV4UI")
const dom_addr = document.getElementById('wallet-addr')
dom_addr.innerText = address.pretty()
console.log("Hello Symbol")
console.log(`Your Address : ${address.plain()}`)


