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

export default function SignupPage() {
  return (
    <div className="flex min-h-[calc(100dvh-8rem)] items-center justify-center p-4">
      <Card className="w-full max-w-md border-primary/30 shadow-xl shadow-primary/10 rounded-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold tracking-tight text-primary">Sign Up</CardTitle>
          <CardDescription className="pt-2">
            Create an account to join the network.
          </d_CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 p-8">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Cobra Commander" required className="py-6" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="user@domain.net" required className="py-6"/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required className="py-6" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-4 p-8 pt-0">
          <Button className="w-full py-6 text-lg font-semibold transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
            Create Account
          </Button>
          <div className="w-full text-center text-sm mt-2">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-primary underline-offset-4 hover:underline">
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}