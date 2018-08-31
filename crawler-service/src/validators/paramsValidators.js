export default (req) => {
  const { url, findExternalUrls } = req.body;

  if (!url) {
    return { error: 'Parameter required: url', statusCode: 401 };
  }

  if (!url.match(/^http[s]?/)) {
    return { error: 'Invalid parameter: url', statusCode: 401 };
  }

  if (findExternalUrls !== undefined && typeof findExternalUrls !== 'boolean') {
    return { error: 'Invalid parameter: findExternalUrls', statusCode: 401 };
  }

  return {};
};
