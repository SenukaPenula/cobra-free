"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Bot, Download, Loader2, Send, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { recommendSoftware, SoftwareRecommendation } from '@/ai/flows/recommend-software-flow';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';

export default function AssistantPage() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<SoftwareRecommendation[]>([]);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt) return;

    setLoading(true);
    setRecommendations([]);
    try {
      const result = await recommendSoftware(prompt);
      setRecommendations(result);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to get recommendations. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadClick = (itemName: string) => {
    toast({
      title: "Download Started",
      description: `Your download of ${itemName} has begun.`,
    });
  };

  return (
    <section className="w-full py-20 md:py-28 lg:py-32 bg-background bg-grid">
         <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container max-w-4xl mx-auto px-4 md:px-6 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-4 mb-12"
            >
                <div className="inline-block rounded-full bg-primary/10 p-4 border border-primary/20">
                    <Bot className="h-10 w-10 text-primary" />
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl animate-pulse-glow">
                Cobra Assistant
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Describe what you want to do, and I'll recommend the perfect software for you from our library.
                </p>
            </motion.div>
            
            <Card className="border-primary/30 shadow-xl shadow-primary/10 rounded-2xl bg-background/80 backdrop-blur-sm z-10">
                <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <Textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="e.g., 'I want to edit a video for my YouTube channel' or 'I need a good game to play with friends'"
                            className="bg-secondary/30 border-primary/30 focus:border-primary min-h-[120px] text-base"
                            disabled={loading}
                        />
                        <Button type="submit" disabled={loading || !prompt} className="w-full py-6 text-lg font-semibold transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                                    Thinking...
                                </>
                            ) : (
                                <>
                                    Get Recommendations <Send className="ml-2 h-5 w-5" />
                                </>
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>


            {recommendations.length > 0 && (
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-center mb-8 text-primary">Here are my recommendations:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {recommendations.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-secondary/30 border border-border/50 rounded-lg p-6 flex flex-col transition-all duration-300 hover:border-primary/70 hover:bg-primary/5 hover:shadow-2xl hover:shadow-primary/10"
                            >
                                 <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-bold text-primary/90">{item.name}</h3>
                                    <div className="flex items-center gap-1 text-primary">
                                    <Star className="w-4 h-4 fill-primary" />
                                    <span className="font-semibold">{item.rating}</span>
                                    </div>
                                </div>
                                <p className="text-muted-foreground mt-2 flex-grow">{item.description}</p>
                                <div className="flex gap-2 mt-4">
                                    {item.tags.map((tag: string) => (
                                    <Badge key={tag} variant="outline" className="border-primary/30 text-primary/80">
                                        {tag}
                                    </Badge>
                                    ))}
                                </div>
                                <p className="text-sm text-accent/80 mt-4 pt-4 border-t border-accent/20">
                                    <span className="font-bold text-accent">Reason:</span> {item.reason}
                                </p>
                                <Button 
                                    variant="ghost" 
                                    className="w-full mt-6 bg-primary/10 hover:bg-primary/20 text-primary group transition-all"
                                    onClick={() => handleDownloadClick(item.name)}
                                >
                                    Download Now <Download className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    </section>
  );
}
