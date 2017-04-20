//import logger from '/imports/lib/logger';

let start = null

const perfStart = () => (start = (new Date()).valueOf())

const perfStop = message => console.log(message, 'in', (new Date()).valueOf() - start, 'ms')

export { perfStart, perfStop }
