import { URL } from 'url';

export function getBaseUrl(url) {
  return new URL(url).origin;
}

export function fullUrlHelper({ href = '', source = '' }) {
  if (href.match(/^http[s]?:\/\//)) {
    return href;
  }

  return `${getBaseUrl(source)}${href}`;
}

export function isExternalUrl({ source = '', dest = '' }) {
  if (dest.match(/^\//)) {
    return false;
  }

  if (dest.match(/^http[s]?:\/\//)) {
    const baseUrl = getBaseUrl(source);
    const regex = new RegExp(`^${baseUrl}`);

    return dest.match(regex) === null;
  }

  return true;
}
