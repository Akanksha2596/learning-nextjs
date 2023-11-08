import { GetStaticPaths, GetStaticProps } from "next";

const Index = ({ songs }: any) => {
  return (
    <div>
      <ul>
        {songs.map((s: any) => (
          <li key={s.id}>{s.songname}</li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  let songs = await fetch(
    "https://654b85805b38a59f28ef3a2b.mockapi.io/songs"
  ).then((res) => res.json());
  return {
    props: {
      songs,
    },
    revalidate: 20,
  };
};

export default Index;
