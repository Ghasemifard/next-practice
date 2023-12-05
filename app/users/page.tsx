import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }
interface Props {
  searchParams: { sortOrder: string };
}

const userPage = async ({searchParams:{sortOrder}}:Props) => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/users"); // data cache
  // const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  //   cache: "no-store",
  // }); //data no cache
  //const res = await fetch('https://jsonplaceholder.typicode.com/users',{next:{revalidate: 10}}); run fetch every 10 second and get fresh data
  // cache behavior only implemented in fetch function : Axios not have it

  // const users: User[] = await res.json();
// console.log(sortOrder);

  return (
    <>
      <h1>Users </h1>
      <Link href='/users/new' className="btn">New User</Link>
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      <Suspense fallback={<p>Loading...</p>}>
      <UserTable sortOrder={sortOrder}/>
      </Suspense>
    </>
  );
};

export default userPage;
