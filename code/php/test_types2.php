<?php
class Doi {
    public function __construct(public readonly string $doi) {
        if (!str_contains($this->doi, "/")) {
            throw new InvalidArgumentException("{$this->doi} does not look like a DOI");
        }
    }

    public function __toString() { return $this->doi; }
}

class ArticleXml {
    public function __construct(public readonly string $xml) { }

    public function __toString() { return $this->xml; }
}
class ArticleHtml {
    public function __construct(public readonly string $html) { }

    public function __toString() { return $this->html; }
}
class ArticleJson {
    public function __construct(public readonly string $json) { }

    public function __toString() { return $this->json; }
}


class Article {
    public function __construct(
        public readonly Doi $doi,
        public readonly ArticleXml $xml,
        public readonly ArticleHtml $html,
        public readonly ArticleJson $json,
    ) { }
}

$doi = '11.111/abcdefg1';
$xml = '<article><article-title>Test article</article-title></article>';
$html = '<article><h1>Test article</h1></article>';
$json = '{"title":"Test article"}';

$article = new Article(
    new Doi($doi),
    new ArticleXml($xml),
    new ArticleHtml($html),
    new ArticleJson($json),
);

var_dump((string)$article->doi); //expect "11.111/abcdefg1"

function getPublisherIdFromDoi(Doi $doi)
{
    return explode("/", $doi, 2)[0];
}

var_dump(getPublisherIdFromDoi($article->doi)); //expect "11.111"
