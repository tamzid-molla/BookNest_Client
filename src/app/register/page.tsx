"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const handleRegister =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    // post form data to backend 
    const user = await axios.post('http://localhost:3100/api/users/register', { name, email, password });
    console.log(user);
    if (user?.data?._id) {
      router.push("/login")
    }
  }
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-70px)]">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Create your account</CardTitle>
          <CardDescription>Enter your email below to create your account</CardDescription>
          <CardAction>
            <Link href={'/login'}>
            <Button variant="link">Sign In</Button>
            </Link>
          </CardAction>
        </CardHeader>
          <form onSubmit={(e)=>handleRegister(e)}>
        <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="name" placeholder="Inter your name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          
        </CardContent>
        <CardFooter className="flex-col gap-2 mt-4">
          <Button type="submit" className="w-full">
            Login
          </Button>
        </CardFooter>
        </form>
      </Card>
    </div>
  );
}
