const data = require('./beacons-jekyll.json').data
const fs = require('fs')

const result = data.map(({ attributes: { floor, room, name }, id }) => ({ id, floor, room, name }))

const jsonResult = JSON.stringify(result, null, 2)

fs.writeFileSync('output.json', jsonResult)

console.log('Data has been written to output.json')
