import crawler from '../service/crawlerService';
import paramsValidators from '../validators/paramsValidators';
import entry from '../models/entry';

export default (app) => {
  app.post('/crawler', (req, res) => {
    const validation = paramsValidators(req);
    if (validation.error) {
      res.status(validation.statusCode).send(validation.error);
      return;
    }

    const { url, findExternalUrls = false } = req.body;

    crawler(url, { findExternalUrls });
    res.sendStatus(200);
  });

  app.get('/crawler', (req, res) => {
    entry.find().sort({ date: -1 }).then((entries) => {
      res.json(entries);
    });
  });

  app.get('/crawler/:id', (req, res) => {
    const { id } = req.params;

    entry.findById(id).then(response => res.json(response))
      .catch(() => res.sendStatus(404));
  });
};
