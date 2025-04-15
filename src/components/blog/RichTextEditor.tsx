
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bold, Italic, List, ListOrdered, Quote, Heading1, Heading2, Link, Code, Image
} from "lucide-react";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const RichTextEditor = ({ value, onChange }: RichTextEditorProps) => {
  const [tab, setTab] = useState<"write" | "preview">("write");
  
  const insertMarkdown = (markdownStart: string, markdownEnd = "") => {
    const textarea = document.querySelector("textarea");
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    const newText = 
      value.substring(0, start) + 
      markdownStart + 
      selectedText + 
      markdownEnd + 
      value.substring(end);
    
    onChange(newText);
    
    // Set selection after the operation
    setTimeout(() => {
      textarea.focus();
      textarea.selectionStart = start + markdownStart.length;
      textarea.selectionEnd = start + markdownStart.length + selectedText.length;
    }, 0);
  };
  
  const formatters = [
    { icon: <Bold size={16} />, action: () => insertMarkdown("**", "**"), title: "Bold" },
    { icon: <Italic size={16} />, action: () => insertMarkdown("*", "*"), title: "Italic" },
    { icon: <Heading1 size={16} />, action: () => insertMarkdown("# "), title: "Heading 1" },
    { icon: <Heading2 size={16} />, action: () => insertMarkdown("## "), title: "Heading 2" },
    { icon: <List size={16} />, action: () => insertMarkdown("- "), title: "Bullet List" },
    { icon: <ListOrdered size={16} />, action: () => insertMarkdown("1. "), title: "Numbered List" },
    { icon: <Quote size={16} />, action: () => insertMarkdown("> "), title: "Quote" },
    { icon: <Code size={16} />, action: () => insertMarkdown("```\n", "\n```"), title: "Code Block" },
    { icon: <Link size={16} />, action: () => insertMarkdown("[", "](url)"), title: "Link" },
    { icon: <Image size={16} />, action: () => insertMarkdown("![alt text](", ")"), title: "Image" },
  ];
  
  const renderMarkdown = (markdown: string) => {
    // This is a simple markdown renderer for preview purposes
    // In a production app, you would use a proper markdown parser
    let html = markdown
      // Headers
      .replace(/^# (.*$)/gm, '<h1>$1</h1>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      // Bold and Italic
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Lists
      .replace(/^\- (.*$)/gm, '<li>$1</li>')
      .replace(/<\/li>\n<li>/g, '</li><li>')
      .replace(/<\/li>\n/g, '</li></ul>\n')
      .replace(/^\<li\>/gm, '<ul><li>')
      // Numbered lists
      .replace(/^\d+\. (.*$)/gm, '<li>$1</li>')
      // Links
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>')
      // Images
      .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" />')
      // Code blocks
      .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
      // Block quotes
      .replace(/^\> (.*$)/gm, '<blockquote>$1</blockquote>')
      // Line breaks
      .replace(/\n/g, '<br />');
    
    return html;
  };
  
  return (
    <div className="bg-white dark:bg-stargaze-900 overflow-hidden">
      <Tabs value={tab} onValueChange={(value) => setTab(value as "write" | "preview")}>
        <div className="flex items-center justify-between border-b p-2">
          <div className="flex space-x-1">
            {formatters.map((formatter, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={formatter.action}
                title={formatter.title}
                className="h-8 w-8 p-0"
                type="button"
              >
                {formatter.icon}
              </Button>
            ))}
          </div>
          
          <TabsList>
            <TabsTrigger value="write">Write</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="write" className="mt-0">
          <Textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="min-h-[400px] border-0 focus-visible:ring-0 rounded-none"
            placeholder="Write your content here... (Markdown is supported)"
          />
        </TabsContent>
        
        <TabsContent value="preview" className="mt-0">
          <div
            className="min-h-[400px] p-4 prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(value) }}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};
