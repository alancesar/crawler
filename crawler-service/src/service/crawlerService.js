// import mongoose from 'mongoose';
import linksExtractor from './linksExtractorService';
import logger from '../config/logger';
import Entry from '../models/entry';
import { isExternalUrl } from '../helpers/urlHelper';

function save({ source = '', links = [], origin = source }) {
  new Entry({ source, links, origin }).save();
}

function crawlerService(source, { findExternalUrls = false, previousUrls = [], origin = source }) {
  previousUrls.push(source);
  linksExtractor(source).then((links = []) => {
    logger.debug(`Founded ${links.length} links in ${source}: [${links.join(', ')}]`);

    // Store response in database
    save({ source, links, origin });

    // Avoid infinite loop
    links.filter(link => previousUrls.indexOf(link) === -1)
      .forEach((link) => {
        if (findExternalUrls || !isExternalUrl({ source, dest: link })) {
          crawlerService(link, { findExternalUrls, previousUrls, origin });
        }
      });
  });
}

export default crawlerService;
