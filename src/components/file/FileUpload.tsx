
import { useState, useRef, useCallback } from 'react';
import { Button } from "@/components/Button";
import { toast } from "sonner";
import { 
  Upload, 
  File, 
  FileText, 
  Image as ImageIcon, 
  X, 
  CheckCircle,
  AlertCircle
} from "lucide-react";

type FileUploadProps = {
  onFileUpload?: (file: File) => Promise<void>;
  acceptedTypes?: string[];
  maxSizeMB?: number;
  multiple?: boolean;
  className?: string;
  buttonLabel?: string;
};

const FileUpload = ({
  onFileUpload,
  acceptedTypes = ['.pdf', '.doc', '.docx', '.ppt', '.pptx', '.jpg', '.jpeg', '.png'],
  maxSizeMB = 10,
  multiple = false,
  className = '',
  buttonLabel = 'Upload File'
}: FileUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const maxSizeBytes = maxSizeMB * 1024 * 1024;

  const getAcceptString = () => {
    return acceptedTypes.join(',');
  };

  const getFileIcon = (type: string) => {
    if (type.includes('image')) {
      return <ImageIcon className="h-5 w-5 text-primary" />;
    } else if (type.includes('pdf')) {
      return <FileText className="h-5 w-5 text-red-500" />;
    } else if (type.includes('word') || type.includes('doc')) {
      return <FileText className="h-5 w-5 text-blue-500" />;
    } else if (type.includes('presentation') || type.includes('powerpoint') || type.includes('ppt')) {
      return <FileText className="h-5 w-5 text-orange-500" />;
    } else {
      return <File className="h-5 w-5 text-gray-500" />;
    }
  };

  const handleFileChange = useCallback(
    async (selectedFiles: FileList | null) => {
      if (!selectedFiles) return;
      
      const newFiles: File[] = [];
      let hasErrors = false;
      
      Array.from(selectedFiles).forEach(file => {
        // Check file type
        const fileExtension = `.${file.name.split('.').pop()?.toLowerCase()}`;
        const isAcceptedType = acceptedTypes.some(type => {
          if (type.startsWith('.')) {
            return fileExtension === type.toLowerCase();
          }
          return file.type.includes(type);
        });
        
        if (!isAcceptedType) {
          toast.error(`File type not allowed: ${file.name}`);
          hasErrors = true;
          return;
        }
        
        // Check file size
        if (file.size > maxSizeBytes) {
          toast.error(`File too large: ${file.name}. Max size is ${maxSizeMB}MB`);
          hasErrors = true;
          return;
        }
        
        newFiles.push(file);
      });
      
      if (hasErrors) return;
      
      if (multiple) {
        setFiles(prev => [...prev, ...newFiles]);
      } else {
        setFiles(newFiles.slice(0, 1));
      }
      
      if (onFileUpload && newFiles.length > 0) {
        setIsUploading(true);
        try {
          // In a real app, you would upload to your server or a service like Firebase/Cloudinary
          await onFileUpload(newFiles[0]);
          toast.success('File uploaded successfully!');
        } catch (error) {
          console.error('Error uploading file:', error);
          toast.error('Error uploading file. Please try again.');
        } finally {
          setIsUploading(false);
        }
      }
    },
    [acceptedTypes, maxSizeBytes, maxSizeMB, multiple, onFileUpload]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      handleFileChange(e.dataTransfer.files);
    },
    [handleFileChange]
  );

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className={`w-full ${className}`}>
      <div
        className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          isDragging
            ? 'border-primary bg-primary/5'
            : 'border-gray-300 dark:border-gray-700 hover:border-primary/70'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept={getAcceptString()}
          multiple={multiple}
          onChange={(e) => handleFileChange(e.target.files)}
        />
        
        <div className="space-y-3 py-2">
          <div className="flex justify-center">
            <Upload className="h-10 w-10 text-gray-400 dark:text-gray-500" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {isDragging ? 'Drop files here' : 'Drag files here or click to upload'}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {acceptedTypes.join(', ')} (Max {maxSizeMB}MB)
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            disabled={isUploading}
            onClick={() => fileInputRef.current?.click()}
          >
            {isUploading ? 'Uploading...' : buttonLabel}
          </Button>
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className="flex items-center justify-between p-3 rounded-md bg-gray-50 dark:bg-gray-800"
            >
              <div className="flex items-center space-x-3">
                {getFileIcon(file.type)}
                <div className="truncate">
                  <p className="text-sm font-medium truncate">{file.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {isUploading ? (
                  <div className="w-5 h-5 border-t-2 border-primary rounded-full animate-spin" />
                ) : (
                  <X
                    className="h-5 w-5 text-gray-500 hover:text-red-500 cursor-pointer"
                    onClick={() => removeFile(index)}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
