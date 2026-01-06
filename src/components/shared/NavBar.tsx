import { Button } from "../ui/button";

export default function NavBar() {
  return (
    <nav>
      <div className="flex justify-between max-w-7xl mx-auto">
        <h3 className="font-bold text-2xl">BookNest</h3>
        <div className="flex items-center gap-8">
          <Button>Login</Button>
          <Button>Register</Button>
        </div>
      </div>
    </nav>
  );
}
