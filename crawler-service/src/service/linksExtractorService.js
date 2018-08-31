import rp from 'request-promise';
import cheerio from 'cheerio';
import { fullUrlHelper } from '../helpers/urlHelper';
import logger from '../config/logger';

export default function (url) {
  return rp.get(url).then((response) => {
    logger.debug(`Getting links in ${url}`);

    const $ = cheerio.load(response);
    const links = $('body a');
    const array = $(links)
      .map((i, link) => $(link).attr('href'))
      .toArray()
      .map(href => fullUrlHelper({ href, source: url }));

    // Remove duplicated entries
    return Array.from(new Set(array));
  }).catch(() => logger.error(`Error on get ${url}`));
}
