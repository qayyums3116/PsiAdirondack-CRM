
import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, Sparkles, Image as ImageIcon } from "lucide-react";

export default function Products() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const suggestedTags = [
    "AI-powered", "Content Management", "SEO Optimization", 
    "Digital Marketing", "Automation", "Analytics"
  ];

  return (
    <div className="flex-1 p-6">
      <Header title="Products" breadcrumbs={["Products"]} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Product Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">Product Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="productName" className="text-foreground">Product Name</Label>
                <Input
                  id="productName"
                  placeholder="Enter product name..."
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="mt-1 bg-background border-border text-foreground"
                />
              </div>

              <div>
                <Label htmlFor="description" className="text-foreground">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your product..."
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 bg-background border-border text-foreground"
                />
              </div>

              <div>
                <Label className="text-foreground">Product Images</Label>
                <div className="mt-1 border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <ImageIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                  <p className="mt-2 text-sm text-muted-foreground">
                    Drag and drop images here, or click to browse
                  </p>
                  <Button variant="outline" className="mt-2">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Images
                  </Button>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="tags" className="text-foreground">SEO Tags</Label>
                  <Button variant="outline" size="sm" className="text-primary">
                    <Sparkles className="mr-2 h-4 w-4" />
                    AI Suggest
                  </Button>
                </div>
                <Input
                  id="tags"
                  placeholder="Enter tags separated by commas..."
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="mt-1 bg-background border-border text-foreground"
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Generate & Queue Content
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* AI Preview Panel */}
        <div className="space-y-6">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center">
                <Sparkles className="mr-2 h-5 w-5 text-primary" />
                AI Preview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-foreground mb-2">Suggested Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {suggestedTags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-primary border-primary/50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-foreground mb-2">SEO Snippet Preview</h4>
                <div className="bg-background border border-border rounded-lg p-3 space-y-2">
                  <div className="text-blue-400 text-sm hover:underline cursor-pointer">
                    {productName || "Your Product Name"} - Advanced Solution
                  </div>
                  <div className="text-green-600 text-xs">
                    yoursite.com › products › {productName.toLowerCase().replace(/\s+/g, '-') || 'product-name'}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {description || "Discover our innovative product that revolutionizes your workflow with AI-powered features..."} 
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-foreground mb-2">Content Strategy</h4>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>• Target platforms: Wikipedia, Reddit, Quora</p>
                  <p>• Estimated reach: 50K+ impressions</p>
                  <p>• Content schedule: 3-5 posts over 2 weeks</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
