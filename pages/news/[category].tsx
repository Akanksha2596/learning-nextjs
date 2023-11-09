export default function NewsByCategory({ articles, category }: any) {
  return (
    <>
      <h1>
        News based on category <i>{category}</i>
      </h1>
      {articles.map((article: any) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} {article.title}
            </h2>
            <p>{article.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps(context: any) {
  let { params, req, res, query } = context;
  //req res query from context and more objects available in context
  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["name= Akanksha"]);
  console.log(query); //useful when access client-side and url can be shared with others eg:amazon products url after applying some filter.
  const { category } = params;

  const response = await fetch(
    `http://localhost:3001/news?category=${category}`
  );
  const data = await response.json();
  console.log(`pre-rendering data for category:${category}`);
  return {
    props: {
      articles: data,
      category,
    },
  };
}
