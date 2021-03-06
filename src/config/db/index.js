
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/KMA_Tech', {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('success');
    } catch (error) {
        console.log('/nfailed');
    }
}

module.exports = { connect };
