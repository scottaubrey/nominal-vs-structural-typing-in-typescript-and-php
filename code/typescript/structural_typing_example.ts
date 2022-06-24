type DoiParts = {
  publisherId: string,
  articleId: string
}
const takesADoiParts = (doiParts: DoiParts) => {
  console.log(doiParts.publisherId);
}

type ArticleId = {
  publisherId: string,
  articleId: string
}
const takesAnArticleId = (articleId: ArticleId) => {
  console.log(articleId.publisherId);
}

const doi = {
  publisherId: "something",
  articleId: "somethingelse"
};

takesADoiParts(doi); // output: something
takesAnArticleId(doi); // output: something
