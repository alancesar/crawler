import rp from 'request-promise';
import { html, fullUrls } from './mocks';
import linksExtractorService from './linksExtractorService';

describe('Links Extractor Service', () => {
  beforeEach(() => {
    rp.get = jest.fn().mockResolvedValue(html);
  });

  it('Extract all URLs from some HTML page', () => {
    // Given
    const target = 'https://www.somesite.org';

    // When
    const promise = linksExtractorService(target);

    // Then
    return promise.then((response) => {
      expect(response).toEqual(fullUrls(target));
    });
  });
});

