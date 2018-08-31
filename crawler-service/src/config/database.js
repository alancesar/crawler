import mongoose from 'mongoose';
import logger from './logger';

mongoose.Promise = global.Promise;
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/crawler';

export default (
  mongoose.connect(uri)
    .then(() => logger.info(`Connected in database ${uri}`))
    .catch(() => logger.error(`Error on connect database ${uri}`))
);
