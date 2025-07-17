
import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, Sparkles, Image as ImageIcon, Send } from "lucide-react";
import { PlatformSelectionDialog } from "@/components/PlatformSelectionDialog";
import { useToast } from "@/hooks/use-toast";

export default function Products() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [summary, setSummary] = useState("");
  const [tags, setTags] = useState("");
  const [showPlatformDialog, setShowPlatformDialog] = useState(false);
  const { toast } = useToast();

  const suggestedTags = [
    "AI-powered", "Content Management", "SEO Optimization", 
    "Digital Marketing", "Automation", "Analytics"
  ];

  const handlePublish = (selectedPlatforms: string[]) => {
    // Here you would implement the actual publishing logic
    console.log("Publishing to platforms:", selectedPlatforms);
    console.log("Product data:", {
      productName,
      description,
      summary,
      tags
    });
    
    toast({
      title: "Publishing Started!",
      description: `Your content is being published to ${selectedPlatforms.length} platform(s).`,
    });
  };

  const isFormValid = productName.trim() && description.trim() && summary.trim();

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
                <Label htmlFor="productName" className="text-foreground">
                  Product Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="productName"
                  placeholder="Enter product name..."
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="mt-1 bg-background border-border text-foreground"
                />
              </div>

              <div>
                <Label htmlFor="description" className="text-foreground">
                  Description <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe your product in detail..."
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 bg-background border-border text-foreground"
                />
              </div>

              <div>
                <Label htmlFor="summary" className="text-foreground">
                  Summary <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="summary"
                  placeholder="Brief summary for social media posts..."
                  rows={3}
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
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
                  <Label htmlFor="tags" className="text-foreground">
                    SEO Tags <span className="text-sm text-muted-foreground">(Optional)</span>
                  </Label>
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

              <Button 
                className="w-full bg-psi-green hover:bg-psi-green/90 text-black"
                onClick={() => setShowPlatformDialog(true)}
                disabled={!isFormValid}
              >
                <Send className="mr-2 h-4 w-4" />
                Publish to Platforms
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
                    {summary || description || "Discover our innovative product that revolutionizes your workflow with AI-powered features..."} 
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-foreground mb-2">Publishing Strategy</h4>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>• Multi-platform distribution</p>
                  <p>• Estimated reach: 50K+ impressions</p>
                  <p>• Optimized for each platform</p>
                  <p>• Real-time analytics tracking</p>
                </div>
              </div>

              {!isFormValid && (
                <div className="bg-yellow-500/10 border border-yellow-500/50 rounded-lg p-3">
                  <p className="text-sm text-yellow-400">
                    Please fill in all required fields to enable publishing.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <PlatformSelectionDialog
        open={showPlatformDialog}
        onOpenChange={setShowPlatformDialog}
        onPublish={handlePublish}
      />
    </div>
  );
}
