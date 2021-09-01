const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://booksdatabase:Mehulraj@1626@cluster0.dqw9a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI, {dbName:'myBooksDB'});
require('./books');

mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
    console.log('mongoose connection error: ', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('mongoose disconnected');
});

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
        console.log(`mongoose disconnected through ${msg}`);
        callback();
    });
};

process.once('SIGUSR2', () => {
    gracefulShutdown('nodmon restart', () => {
        process.kill(process.pid, 'SIGNUSR2');
    });
});

process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});

process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
        process.exit(0);
    });
});