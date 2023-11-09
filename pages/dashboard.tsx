import React, { useState, useEffect } from "react";

interface DashboardData {
  posts: number;
  likes: number;
  followers: number;
}

export default function DashboartData() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch("http://localhost:3001/dashboard");
      const data = await response.json();
      setDashboardData(data);
      setIsLoading(false);
    }

    fetchDashboardData();
  }, []);

  if (isLoading || !dashboardData) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>Dashboard Data</h2>
      <h2>Posts - {dashboardData.posts}</h2>
      <h2>Likes - {dashboardData.likes}</h2>
      <h2>Followers - {dashboardData.followers}</h2>
    </>
  );
}
