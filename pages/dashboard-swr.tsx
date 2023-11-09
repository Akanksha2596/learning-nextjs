import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:3001/dashboard");
  const data = await response.json();
  return data;
};
export default function DashboardSWR() {
  const { data, error } = useSWR("dashboard", fetcher);
  if (error) {
    return "An error occured";
  }
  if (!data) {
    return "Loading";
  }
  return (
    <>
      <h2>Dashboard Data</h2>
      <h2>Posts - {data.posts}</h2>
      <h2>Likes - {data.likes}</h2>
      <h2>Followers - {data.followers}</h2>
    </>
  );
}
