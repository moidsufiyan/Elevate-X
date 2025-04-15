
import React, { useState, useRef } from "react";
import { Button } from "@/components/Button";
import { 
  Card, 
  CardContent, 
  CardDescription,
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  UploadCloud,
  File,
  FileText,
  FilePdf,
  FileImage,
  Trash2,
  AlertTriangle,
  CheckCircle,
  X
} from "lucide-react";
import { toast } from "sonner";
import { EmptyState } from "@/components/ui/empty-state";
import { fileEmptyStates } from "@/shared/utils/empty-state-utils";

// Maximum file size in bytes (5MB)
const MAX_FILE_SIZE = 5 * 1024 * 1024;

// Allowed file types
const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'image/jpeg',
  'image/png',
  'image/gif'
];

interface FileUploadProps {
  sessionId?: string;
  conversationId?: string;
  onFileUploaded?: (fileUrl: string, fileName: string) => void;
  maxFiles?: number;
  showTitle?: boolean;
}

export function FileUpload({ 
  sessionId, 
  conversationId, 
  onFileUploaded,
  maxFiles = 5,
  showTitle = true
}: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const selectedFiles = Array.from(e.target.files);
    
    // Validate file size and type
    const validFiles = selectedFiles.filter(file => {
      // Check file size
      if (file.size > MAX_FILE_SIZE) {
        toast.error(`${file.name} is too large. Maximum file size is 5MB.`);
        return false;
      }
      
      // Check file type
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        toast.error(`${file.name} has an unsupported file format.`);
        return false;
      }
      
      return true;
    });
    
    // Check if adding these files would exceed the max count
    if (files.length + validFiles.length > maxFiles) {
      toast.error(`You can only upload a maximum of ${maxFiles} files.`);
      return;
    }
    
    setFiles(prevFiles => [...prevFiles, ...validFiles]);
    
    // Reset the input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  const removeFile = (index: number) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };
  
  const uploadFiles = async () => {
    if (files.length === 0) return;
    
    setUploading(true);
    
    // In a real implementation, upload each file to your backend/storage
    // This is a simulated upload
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      
      // Create a new progress entry for this file
      setUploadProgress(prev => ({
        ...prev,
        [file.name]: 0
      }));
      
      // Simulate a file upload with progress
      for (let progress = 0; progress <= 100; progress += 10) {
        await new Promise(resolve => setTimeout(resolve, 200));
        
        setUploadProgress(prev => ({
          ...prev,
          [file.name]: progress
        }));
      }
      
      // In a real implementation, you'd get the file URL from your storage service
      const fakeFileUrl = `https://storage.example.com/files/${Date.now()}-${file.name}`;
      
      if (onFileUploaded) {
        onFileUploaded(fakeFileUrl, file.name);
      }
      
      toast.success(`${file.name} uploaded successfully!`);
    }
    
    // Clear the files list after upload
    setFiles([]);
    setUploading(false);
    setUploadProgress({});
  };
  
  const getFileIcon = (file: File) => {
    const type = file.type;
    
    if (type.includes('pdf')) return <FilePdf className="h-5 w-5 text-red-500" />;
    if (type.includes('word')) return <FileText className="h-5 w-5 text-blue-500" />;
    if (type.includes('powerpoint')) return <FileText className="h-5 w-5 text-orange-500" />;
    if (type.includes('image')) return <FileImage className="h-5 w-5 text-green-500" />;
    
    return <File className="h-5 w-5 text-gray-500" />;
  };
  
  return (
    <Card>
      {showTitle && (
        <CardHeader>
          <CardTitle>File Upload</CardTitle>
          <CardDescription>
            Share files with your mentors or founders (max 5MB per file)
          </CardDescription>
        </CardHeader>
      )}
      
      <CardContent>
        <div 
          className="border-2 border-dashed border-primary/20 rounded-lg p-8 text-center hover:bg-primary/5 transition-colors cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            multiple
            onChange={handleFileChange}
            disabled={uploading}
          />
          
          <UploadCloud className="h-10 w-10 text-primary/50 mx-auto mb-4" />
          
          <h3 className="text-lg font-medium mb-1">
            {uploading ? 'Uploading...' : 'Drag files here or click to browse'}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-2">
            Supported formats: PDF, Word, PowerPoint, JPEG, PNG, GIF
          </p>
          
          <p className="text-xs text-muted-foreground">
            Max {maxFiles} files, up to 5MB each
          </p>
        </div>
        
        {files.length > 0 && (
          <div className="mt-6 space-y-3">
            <h4 className="text-sm font-medium mb-2">Selected Files</h4>
            
            {files.map((file, index) => (
              <div key={`${file.name}-${index}`} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center space-x-3">
                  {getFileIcon(file)}
                  <div className="overflow-hidden">
                    <p className="text-sm font-medium truncate max-w-[200px]">{file.name}</p>
                    <p className="text-xs text-muted-foreground">{(file.size / 1024).toFixed(1)} KB</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  {uploading && uploadProgress[file.name] !== undefined ? (
                    <div className="w-24">
                      <Progress value={uploadProgress[file.name]} className="h-2" />
                    </div>
                  ) : (
                    <button 
                      className="text-muted-foreground hover:text-destructive p-1 rounded-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile(index);
                      }}
                      disabled={uploading}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {files.length === 0 && !uploading && (
          <div className="mt-6">
            <EmptyState
              icon={<FileText className="h-6 w-6 text-muted-foreground" />}
              title={fileEmptyStates.noFilesUploaded.title}
              description={fileEmptyStates.noFilesUploaded.description}
              size="sm"
            />
          </div>
        )}
      </CardContent>
      
      {files.length > 0 && (
        <CardFooter className="flex justify-end space-x-2">
          <Button
            variant="outline"
            disabled={uploading}
            onClick={() => setFiles([])}
          >
            Cancel
          </Button>
          <Button
            disabled={uploading || files.length === 0}
            onClick={uploadFiles}
          >
            {uploading ? 'Uploading...' : 'Upload Files'}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
