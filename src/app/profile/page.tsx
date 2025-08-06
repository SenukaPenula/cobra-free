"use client";

import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, HardDrive, User as UserIcon, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { logOut } from "@/services/auth";
import { useToast } from "@/hooks/use-toast";

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);
  
  const handleLogout = async () => {
    try {
      await logOut();
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
      });
      router.push("/");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Logout Failed",
        description: error.message,
      });
    }
  };

  if (loading || !user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  const downloadHistory = [
      {name: "Spotify Premium", date: "2024-07-20"},
      {name: "Cyberpunk 2077", date: "2024-07-18"},
      {name: "Adobe Photoshop 2024", date: "2024-07-15"},
  ]

  return (
    <div className="w-full py-20 md:py-28 bg-background bg-grid">
         <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container max-w-4xl mx-auto px-4 md:px-6 relative z-10">
            <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5 }}
            >
                <Card className="w-full border-primary/30 shadow-xl shadow-primary/10 rounded-2xl bg-background/80 backdrop-blur-sm z-10 p-4">
                    <CardHeader className="flex flex-col items-center text-center gap-4 border-b border-border/50 pb-6">
                        <Avatar className="h-24 w-24 border-4 border-primary">
                        <AvatarImage src={user.photoURL ?? ''} alt={user.displayName ?? "User"} />
                        <AvatarFallback className="bg-primary/10">
                            <UserIcon className="h-12 w-12 text-primary" />
                        </AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle className="text-3xl font-bold tracking-tight text-primary">{user.displayName}</CardTitle>
                            <CardDescription className="text-muted-foreground">{user.email}</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2"><Download className="h-5 w-5"/> Download History</h3>
                                <div className="space-y-3">
                                    {downloadHistory.map(item => (
                                        <div key={item.name} className="flex justify-between items-center bg-secondary/30 p-3 rounded-md">
                                            <p className="text-foreground">{item.name}</p>
                                            <p className="text-muted-foreground text-sm">{item.date}</p>
                                        </div>
                                    ))}
                                    <p className="text-xs text-center text-muted-foreground pt-2">This is a demo. Download history is not yet tracked.</p>
                                </div>
                            </div>
                             <div>
                                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2"><ShieldCheck className="h-5 w-5"/> Account Settings</h3>
                                <div className="space-y-3">
                                   <Button variant="outline" className="w-full justify-start border-primary/50 text-primary hover:bg-primary/10 hover:text-primary">Change Password</Button>
                                   <Button variant="outline" className="w-full justify-start border-primary/50 text-primary hover:bg-primary/10 hover:text-primary">Manage Subscription</Button>
                                   <Button variant="destructive" className="w-full justify-start" onClick={handleLogout}>Log Out</Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    </div>
  );
}
