import * as helper from './urlHelper';

describe('URL Helper', () => {
  it('Get base URL', () => {
    // Given
    const fullUrl = 'https://blog.alancesar.org/nodejs/2017/12/15/testes-em-node-js.html';

    // When
    const baseUrl = helper.getBaseUrl(fullUrl);

    // Then
    expect(baseUrl).toBe('https://blog.alancesar.org');
  });

  it('Get full URL', () => {
    // Given
    const source = 'https://blog.alancesar.org/';
    const href = '/nodejs/2017/07/10/introducao-ao-webpack-2.html';

    // When
    const fullUrl = helper.fullUrlHelper({ href, source });

    // Then
    expect(fullUrl).toBe('https://blog.alancesar.org/nodejs/2017/07/10/introducao-ao-webpack-2.html');
  });

  it('Verify if is an external URL', () => {
    // Given
    const source = 'https://blog.alancesar.org/';
    const urls = [
      'https://blog.alancesar.org/nodejs/2017/12/15/testes-em-node-js.html',
      '/nodejs/2017/07/10/introducao-ao-webpack-2.html',
      'https://github.com/alancesar',
    ];

    // When
    const responses = urls.map(url => helper.isExternalUrl({ dest: url, source }));

    // Then
    expect(responses).toEqual([false, false, true]);
  });
});

