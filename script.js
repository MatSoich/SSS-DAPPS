const symbol = require('/node_modules/symbol-sdk')

const address = symbol.Address.createFromRawAddress("TCGMM2XTUTAEAZQJSXKBBO7B2KES5NMNTHLV4UI")
console.log("Hello Symbol")
console.log(`Your Address : ${address.plain()}`)

const dom_addr = document.getElementById('wallet-addr')
dom_addr.innerText = address.pretty()
