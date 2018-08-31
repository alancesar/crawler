import './config/database';
import app from './config/app';
import initializeRoutes from './config/initializeRoutes';
import logger from './config/logger';

const port = process.env.PORT || 3000;

initializeRoutes(app);

app.listen(port, () => {
  logger.info(`Server running in ${port}`);
});
