import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100dvh-8rem)] items-center justify-center p-4">
      <Card className="w-full max-w-sm border-primary/20 shadow-lg shadow-primary/10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold tracking-wider text-primary">Login</CardTitle>
          <CardDescription>
            Enter your credentials to access the network.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="user@domain.net" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4">
          <Button className="w-full transition-all hover:shadow-[0_0_12px_hsl(var(--primary)/0.5)]">
            Sign In
          </Button>
          <div className="text-center text-sm w-full">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline hover:text-primary">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
