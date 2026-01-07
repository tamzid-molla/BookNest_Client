import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";


export default async function Home() {
  const allBook = await axios.get('http://localhost:3100/api/books');
  return (
    <div className="max-w-7xl mx-auto">
      {
        allBook?.data?.books? 
        <div className="mx-auto mt-20 text-center">
        <p className="text-xl font-bold text-center">No book available , Please add book</p>
        <Link href={'/add_book'} className="">
        <Button className="mt-7">Add Book</Button>
        </Link>
          </div> :
          <div className="">
            all book here
          </div>
      }
      
      
    </div>
  );
}
