import crawler from '../routes/crawler';

export default app => [crawler].forEach(route => route(app));
