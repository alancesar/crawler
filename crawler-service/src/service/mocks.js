export const html = `
<html>
  <head>
    <title>Crawler test</title>
  </head>
  <body>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
    <div>
      <h1>Title</h1>
      <a href="/article/1">See more...</a>
    </div>
    <a href="/">Home</a>
    <a href="https://www.ibm.com/br-pt/"></a>
  </body>
</html>
`;

export function fullUrls(baseUrl) {
  return [
    `${baseUrl}/`,
    `${baseUrl}/about`,
    `${baseUrl}/article/1`,
    'https://www.ibm.com/br-pt/',
  ];
}
