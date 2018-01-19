'use strict';
// const fs = require('fs');
const net = require('net');
// const filename = process.argv[2];

// if(!filename) {
    // throw Error('Error: No filename specified.');
// }

const server = net.createServer(connection => {
    // Reporting.
    console.log('Subscriber connected.');

    // Two message chunks that together make a whole message
    const firstChunk = '{ "type": "changed", "timesta';
    const secondChunk = 'mp": "1450694370094" }\n';

    // Send the first chunk immediately.
    connection.write(firstChunk);

    // After a short delay, send the other chunk.
    const timer = setTimeout(() => {
        connection.write(secondChunk);
        connection.end();
    }, 100);

    // Clear timer when the connection ends.
    connection.on('end', () => {
        clearTimeout(timer);
        console.log('Subscriber disconnected.');
    });
});

server.listen(60300, () => console.log('Test server listening for subscribers...'));