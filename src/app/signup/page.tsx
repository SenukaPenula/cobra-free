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
    <div className="flex min-h-[calc(100dvh-8rem)] items-center justify-center p-4 relative bg-grid-small">
       <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <Card className="w-full max-w-md border-primary/30 shadow-xl shadow-primary/10 rounded-2xl bg-background/80 backdrop-blur-sm z-10">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold tracking-tight text-primary">Sign Up</CardTitle>
          <CardDescription className="pt-2">
            Create an account to join the network.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 p-8">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-primary/80">Name</Label>
            <Input id="name" placeholder="Cobra Commander" required className="py-6 bg-secondary/30 border-primary/30 focus:border-primary" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-primary/80">Email</Label>
            <Input id="email" type="email" placeholder="user@domain.net" required className="py-6 bg-secondary/30 border-primary/30 focus:border-primary"/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password" className="text-primary/80">Password</Label>
            <Input id="password" type="password" required className="py-6 bg-secondary/30 border-primary/30 focus:border-primary" />
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
