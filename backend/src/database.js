import mongoose from 'mongoose';
import config from './config.js';

(async () => {
    try {
        const db = await mongoose.connect(config.mongodbURL);
        console.log('DB connected to', db.connection.name);
    } catch (err) {
        console.log(err);
    }
})();