"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { useAppSelector } from "@/redux/hooks";
import { useLogoutMutation } from "@/redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { clearUser } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const user = useAppSelector((state) => state.auth.user);
  //take user first 2 letter for alternative image
  const altUSerImg = user?.name.slice(0, 2).toUpperCase();
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const result = await logout().unwrap();
      dispatch(clearUser());
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <nav>
      <div className="flex justify-between max-w-7xl mx-auto">
        <h3 className="font-bold text-2xl">BookNest</h3>
        {user ? (
          <div className="flex items-center gap-8">
            <span className="p-2 tracking-widest rounded-full bg-blue-400 text-white font-bold flex justify-center items-center">
              {altUSerImg}
            </span>
              <Button onClick={handleLogout}>Logout</Button>
          </div>
        ) : (
          <div className="flex items-center gap-8">
            <Link href={"/login"}>
              <Button type="button">Login</Button>
            </Link>
            <Link href={"/register"}>
              <Button type="button">Register</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
