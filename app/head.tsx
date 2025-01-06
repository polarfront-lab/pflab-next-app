const title = 'title';
const description = 'description';

export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta httpEquiv="content-type" content="text/html" />
      <meta name="author" content="Polarfront Lab" />
      <meta name="designer" content="state303" />
      <meta name="publisher" content="state303" />

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist"
      />
      <meta name="robots" content="index,follow" />
      <meta name="distribution" content="web" />
    </>
  );
}
