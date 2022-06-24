type Doi = string & { __brand: "Doi" };
type ArticleXML = string;
type ArticleHTML = string;
type ArticleJSON = string;

type ArticleContent = {
  doi: Doi
  xml: ArticleXML,
  html: ArticleHTML,
  json: ArticleJSON,
};

const createDoiFromString = (doi: string): Doi => {
  if (!doi.includes("/")) {
    throw new Error(`${doi} does not look like a DOI`)
  }
  return doi as Doi;
}

const doi = '11.111/abcdefg1';
const xml = '<article><article-title>Test article</article-title></article>';
const html = '<article><h1>Test article</h1></article>';
const json = '{"title":"Test article"}';

const article = {
  doi: createDoiFromString(doi),
  xml,
  html,
  json
};

console.log(article.doi); //expect "11.111/abcdefg1"

const getPublisherIdFromDoi = (doi: Doi) => {
  return doi.split('/',1)[0];
}

console.log(getPublisherIdFromDoi(article.doi)); //expect "11.111"
console.log(getPublisherIdFromDoi(article.xml)); //Argument of type 'string' is not assignable to parameter of type 'Doi'.
