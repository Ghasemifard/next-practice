
// export default async function Home() {

//  const session = await getServerSession(authOptions)
//   return (
//     <main className="absolute" >
//       <h1 className="font-poppins">سلام {session && <span>{session.user!.name}</span>}</h1>
//       <Link href="/users">Users</Link>
//       <ProductCart/>
//       {/* local image */}
//       <Image src={bmv} alt="bmv 2002" priority />
//       {/* remote image */}
//       <Image src="https://bit.ly/react-cover" alt="bmv 2002"
//       fill
//       className="object-cover"
//       sizes="(max-width:480px) 100vw, (max-width:768px) 50vw, 33vw "
// quality={100}
// priority

// />
// <HeavyComponent/>
//     </main>
//   );
// }
//  export const metadata:Metadata={
//   title:'...'
//  }
//  dynamic metadata:
// export async function generateMetadata():Promise<Metadata> {
//   const product = await fetch('');
// here we can use prisma
//   return {
//     title: "product.title",
//     description: "..."
//   }
// }

"use client";
// import HeavyComponent from "./components/HeavyComponent";
// import dynamic from "next/dynamic";
// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"),
// {
  //   ssr:false,
  //   loading: ()=><p>Loading...</p>}); 
  

  
  
  // import _ from 'lodash';


  export default function Home() {
  // const [isVisible, setIsVisible] = useState(false); 
  return (
    <main>
      <h1>Hello World</h1>
      {/* <button onClick={() => {setIsVisible(true)}}>Show</button> */}
      {/* {isVisible && <HeavyComponent />} */}

      <button onClick={async() => {

        const _ = (await import('lodash')).default;
        const users = [
          {name:'c'},
          {name:'b'},
          {name:'a'},
        ]

        const sorted = _.orderBy(users,['name'])
        console.log(sorted);
        
       } }>Show</button>

    </main>
  );
}
