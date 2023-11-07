import User from "../../components/user";
export default function UsersList({ users }: any) {
  console.log(users, "props");
  return (
    <div>
      <h1>List of users</h1>
      {users.map((u: any) => {
        return (
          <div key={u.id}>
            <User user={u} />
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  //   console.log(data, "data");
  return {
    props: {
      users: data,
    },
  };
}
// To prerender the dynamic data we use getStaticProps in that component and we have to return the object and can have any
// key value pair and that object will have props key which is also an object and there we can pass down the data that we want
// in the component as a prop
// getStaticProps() - this function has to return and object, in that object there should be props object.
// steps for prerendering list of data eg: blogs, articles list, productlist etc:1. define async function 2.getStaticProps fetch within function and return an object with props .finally props will be available to use within component.
// key and the value should be the data we want to pass
// in our component we get the data in props
// name of key in props object is the prop name we get in our component
