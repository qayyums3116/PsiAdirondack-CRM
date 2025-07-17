
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Users, 
  Globe,
  Code,
  BookOpen
} from "lucide-react";

interface Platform {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  description: string;
}

const platforms: Platform[] = [
  {
    id: "wikipedia",
    name: "Wikipedia",
    icon: Globe,
    color: "text-gray-600",
    description: "Knowledge contribution"
  },
  {
    id: "quora",
    name: "Quora",
    icon: Users,
    color: "text-red-500",
    description: "Answer questions & share knowledge"
  },
  {
    id: "reddit",
    name: "Reddit",
    icon: MessageCircle,
    color: "text-orange-500",
    description: "Share in relevant subreddits"
  },
  {
    id: "open-blogs",
    name: "Open Blogs",
    icon: BookOpen,
    color: "text-blue-500",
    description: "Publish on open blogging platforms"
  },
  {
    id: "stack-overflow",
    name: "Stack Overflow",
    icon: Code,
    color: "text-orange-600",
    description: "Technical Q&A community"
  }
];

interface PlatformSelectionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onPublish: (selectedPlatforms: string[]) => void;
}

export function PlatformSelectionDialog({ 
  open, 
  onOpenChange, 
  onPublish 
}: PlatformSelectionDialogProps) {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const handlePlatformToggle = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    );
  };

  const handleSelectAll = () => {
    if (selectedPlatforms.length === platforms.length) {
      setSelectedPlatforms([]);
    } else {
      setSelectedPlatforms(platforms.map(p => p.id));
    }
  };

  const handlePublish = () => {
    if (selectedPlatforms.length > 0) {
      onPublish(selectedPlatforms);
      onOpenChange(false);
      setSelectedPlatforms([]);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span className="text-psi-green">📡</span>
            Select Publishing Platforms
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Choose where to publish your content
            </p>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleSelectAll}
              className="text-psi-green border-psi-purple hover:bg-psi-purple/10"
            >
              {selectedPlatforms.length === platforms.length ? "Deselect All" : "Select All"}
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              const isSelected = selectedPlatforms.includes(platform.id);
              
              return (
                <div
                  key={platform.id}
                  className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    isSelected 
                      ? 'border-psi-green bg-psi-green/5' 
                      : 'border-psi-purple/30 hover:border-psi-purple hover:bg-psi-purple/5'
                  }`}
                  onClick={() => handlePlatformToggle(platform.id)}
                >
                  <div className="flex items-start gap-3">
                    <Checkbox
                      checked={isSelected}
                      onChange={() => handlePlatformToggle(platform.id)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className={`w-5 h-5 ${platform.color}`} />
                        <span className="font-medium text-psi-text">{platform.name}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {platform.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {selectedPlatforms.length > 0 && (
            <div className="pt-4 border-t border-psi-purple/30">
              <p className="text-sm text-psi-text mb-2">Selected platforms:</p>
              <div className="flex flex-wrap gap-2">
                {selectedPlatforms.map(id => {
                  const platform = platforms.find(p => p.id === id);
                  return platform ? (
                    <Badge 
                      key={id} 
                      variant="outline" 
                      className="text-psi-green border-psi-green/50"
                    >
                      {platform.name}
                    </Badge>
                  ) : null;
                })}
              </div>
            </div>
          )}

          <div className="flex justify-end gap-2 pt-4">
            <Button 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              className="border-psi-purple/50 hover:bg-psi-purple/10"
            >
              Cancel
            </Button>
            <Button 
              onClick={handlePublish}
              disabled={selectedPlatforms.length === 0}
              className="bg-psi-green hover:bg-psi-green/90 text-black"
            >
              Publish to {selectedPlatforms.length} Platform{selectedPlatforms.length !== 1 ? 's' : ''}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
