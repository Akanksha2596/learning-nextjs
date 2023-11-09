export default function NewsArticleList({ articles }: any) {
  return (
    <>
      <h1>List of News</h1>
      {articles.map((article: any) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} {article.title} | {article.category}
            </h2>
            <hr />
          </div>
        );
      })}
    </>
  );
}
export async function getServerSideProps() {
  const response = await fetch("http://localhost:3001/news");
  const data = await response.json();
  console.log("pre-rendering NewsArticleList");
  return {
    props: {
      articles: data,
    },
  };
}
