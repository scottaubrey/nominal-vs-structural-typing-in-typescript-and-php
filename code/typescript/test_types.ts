type Doi = string;
type ArticleXML = string;
type ArticleHTML = string;
type ArticleJSON = string;

type ArticleContent = {
  doi: Doi
  xml: ArticleXML,
  html: ArticleHTML,
  json: ArticleJSON,
};

const doi = '11.111/abcdefg1';
const xml = '<article><article-title>Test article</article-title></article>';
const html = '<article><h1>Test article</h1></article>';
const json = '{"title":"Test article"}';

const article = {
  doi,
  xml,
  html,
  json
};

console.log(article.doi); //expect "11.111/abcdefg1"

const getPublisherIdFromDoi = (doi: Doi) => {
  return doi.split('/',1)[0];
}

console.log(getPublisherIdFromDoi(article.doi)); //expect "11.111"

console.log(getPublisherIdFromDoi(article.xml)); //expect type error?
