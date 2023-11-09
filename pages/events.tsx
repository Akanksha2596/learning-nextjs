import { useState } from "react";
import { useRouter } from "next/router";

export default function EventList({ eventList }: any) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();
  const fetchSportsEvents = async () => {
    const response = await fetch(
      "http://localhost:3001/events?category=sports"
    );
    const data = await response.json();
    setEvents(data);
    router.push("/events?category=sports", undefined, { shallow: true });
  };
  return (
    <>
      <button onClick={fetchSportsEvents}>Sports Event</button>
      <h1>List of events</h1>
      {events.map((event: any) => {
        return (
          <div key={event.id}>
            <h2>
              {event.id} {event.date} | {event.category}
            </h2>
            <p>{event.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category = sports" : "";
  const response = await fetch(`http://localhost:3001/events${queryString}`);
  const data = await response.json();
  console.log(data);
  return {
    props: {
      eventList: data,
    },
  };
}
//pre-rendering data with client-side data fetching
//shallow -> use to filter data 
//array.filter cant be used for filtering large amount of data . 