
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SEO } from "@/components/SEO";
import { FileUp, Check, X, Image, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/Button"; // Using the custom Button component

const FileUploadGuide = () => {
  const [activeTab, setActiveTab] = useState<'intro' | 'howto' | 'formats'>('intro');
  
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="File Upload Guide" 
        description="Learn how to use the file upload feature in Elevate X messaging to share documents with mentors."
        keywords="file upload, document sharing, mentor communication, startup mentorship"
      />
      <Navbar />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-stargaze-900 dark:text-white mb-4">
              File Sharing & Upload Guide
            </h1>
            <p className="text-xl text-stargaze-600 dark:text-stargaze-400">
              Share documents, presentations, and images directly with your mentors
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={100} className="mb-8">
            <div className="bg-white dark:bg-stargaze-900 p-6 rounded-xl shadow-sm border border-stargaze-100 dark:border-stargaze-800">
              <div className="flex space-x-4 border-b border-stargaze-100 dark:border-stargaze-800 mb-6">
                <button 
                  onClick={() => setActiveTab('intro')}
                  className={`pb-4 px-1 font-medium text-sm sm:text-base ${activeTab === 'intro' 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-stargaze-500 hover:text-stargaze-900 dark:hover:text-white'}`}
                >
                  Introduction
                </button>
                <button 
                  onClick={() => setActiveTab('howto')}
                  className={`pb-4 px-1 font-medium text-sm sm:text-base ${activeTab === 'howto' 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-stargaze-500 hover:text-stargaze-900 dark:hover:text-white'}`}
                >
                  How To Use
                </button>
                <button 
                  onClick={() => setActiveTab('formats')}
                  className={`pb-4 px-1 font-medium text-sm sm:text-base ${activeTab === 'formats' 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-stargaze-500 hover:text-stargaze-900 dark:hover:text-white'}`}
                >
                  Supported Formats
                </button>
              </div>
              
              {activeTab === 'intro' && (
                <div>
                  <div className="flex items-center justify-center mb-8">
                    <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <FileUp className="h-10 w-10" />
                    </div>
                  </div>
                  
                  <p className="text-stargaze-600 dark:text-stargaze-400 mb-6">
                    Our file upload feature allows you to easily share documents, presentations, spreadsheets, and images 
                    directly within your messaging conversations with mentors. This makes it simple to collaborate on 
                    business plans, review financial models, or share design mockups during your mentorship sessions.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-lg mb-6">
                    <h3 className="font-medium text-stargaze-900 dark:text-white mb-2">Key Benefits:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-stargaze-600 dark:text-stargaze-400">Share files directly in conversation contexts</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-stargaze-600 dark:text-stargaze-400">Preview images and documents without downloading</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-stargaze-600 dark:text-stargaze-400">Access shared files at any time from your message history</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-stargaze-50 dark:bg-stargaze-800/50 p-4 rounded-lg">
                    <h3 className="font-medium text-stargaze-900 dark:text-white mb-2">Getting Started:</h3>
                    <p className="text-stargaze-600 dark:text-stargaze-400 mb-4">
                      To start using the file upload feature, simply navigate to any messaging conversation with your mentor 
                      and click the upload button in the message composer.
                    </p>
                    <Link to="/messaging">
                      <Button className="gap-2" rightIcon={<ArrowRight className="h-4 w-4" />}>
                        Try it now
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
              
              {activeTab === 'howto' && (
                <div>
                  <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-4">How to Upload Files</h3>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mx-auto md:mx-0">
                        <span className="text-xl font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-stargaze-900 dark:text-white mb-2 text-center md:text-left">Open your messaging conversation</h4>
                        <p className="text-stargaze-600 dark:text-stargaze-400">
                          Navigate to the messaging section and select the conversation where you want to share files.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mx-auto md:mx-0">
                        <span className="text-xl font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-stargaze-900 dark:text-white mb-2 text-center md:text-left">Click the upload button</h4>
                        <p className="text-stargaze-600 dark:text-stargaze-400">
                          Look for the paperclip or upload icon in the message composer at the bottom of the chat window.
                        </p>
                        <div className="mt-2 bg-stargaze-50 dark:bg-stargaze-800/50 p-3 rounded-lg flex items-center">
                          <FileUp className="h-5 w-5 text-primary mr-3" />
                          <span className="text-stargaze-600 dark:text-stargaze-400">Click this icon to open the file selector</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mx-auto md:mx-0">
                        <span className="text-xl font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-stargaze-900 dark:text-white mb-2 text-center md:text-left">Select your file(s)</h4>
                        <p className="text-stargaze-600 dark:text-stargaze-400">
                          Choose the file(s) you want to upload from your device. You can select multiple files at once.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mx-auto md:mx-0">
                        <span className="text-xl font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-stargaze-900 dark:text-white mb-2 text-center md:text-left">Add a message (optional)</h4>
                        <p className="text-stargaze-600 dark:text-stargaze-400">
                          You can add a text message along with your files to provide context about what you're sharing.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mx-auto md:mx-0">
                        <span className="text-xl font-bold">5</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-stargaze-900 dark:text-white mb-2 text-center md:text-left">Send your files</h4>
                        <p className="text-stargaze-600 dark:text-stargaze-400">
                          Click the send button to upload your files and share them in the conversation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'formats' && (
                <div>
                  <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-4">Supported File Formats</h3>
                  
                  <p className="text-stargaze-600 dark:text-stargaze-400 mb-6">
                    Our platform supports a wide range of file types to accommodate various collaboration needs:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-white dark:bg-stargaze-800 p-4 rounded-lg border border-stargaze-100 dark:border-stargaze-700">
                      <div className="flex items-center mb-3">
                        <Image className="h-5 w-5 text-primary mr-3" />
                        <h4 className="font-medium text-stargaze-900 dark:text-white">Images</h4>
                      </div>
                      <ul className="space-y-1 text-sm text-stargaze-600 dark:text-stargaze-400">
                        <li>JPG / JPEG</li>
                        <li>PNG</li>
                        <li>GIF</li>
                        <li>SVG</li>
                        <li>WebP</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-stargaze-800 p-4 rounded-lg border border-stargaze-100 dark:border-stargaze-700">
                      <div className="flex items-center mb-3">
                        <FileText className="h-5 w-5 text-primary mr-3" />
                        <h4 className="font-medium text-stargaze-900 dark:text-white">Documents</h4>
                      </div>
                      <ul className="space-y-1 text-sm text-stargaze-600 dark:text-stargaze-400">
                        <li>PDF</li>
                        <li>DOC / DOCX (Microsoft Word)</li>
                        <li>XLS / XLSX (Microsoft Excel)</li>
                        <li>PPT / PPTX (Microsoft PowerPoint)</li>
                        <li>TXT</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-stargaze-800 p-4 rounded-lg border border-stargaze-100 dark:border-stargaze-700">
                      <div className="flex items-center mb-3">
                        <FileText className="h-5 w-5 text-primary mr-3" />
                        <h4 className="font-medium text-stargaze-900 dark:text-white">Other Files</h4>
                      </div>
                      <ul className="space-y-1 text-sm text-stargaze-600 dark:text-stargaze-400">
                        <li>CSV</li>
                        <li>JSON</li>
                        <li>ZIP (compressed archives)</li>
                        <li>Markdown files</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-stargaze-800 p-4 rounded-lg border border-stargaze-100 dark:border-stargaze-700">
                      <div className="flex items-center mb-3">
                        <X className="h-5 w-5 text-red-500 mr-3" />
                        <h4 className="font-medium text-stargaze-900 dark:text-white">Restrictions</h4>
                      </div>
                      <ul className="space-y-1 text-sm text-stargaze-600 dark:text-stargaze-400">
                        <li>Maximum file size: 10MB per file</li>
                        <li>Maximum 5 files per message</li>
                        <li>Executable files not permitted (.exe, .bat, etc.)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-stargaze-50 dark:bg-stargaze-800/50 p-4 rounded-lg">
                    <h3 className="font-medium text-stargaze-900 dark:text-white mb-2">Need to share a larger file?</h3>
                    <p className="text-stargaze-600 dark:text-stargaze-400">
                      For files exceeding the size limit, we recommend using external file sharing services like Google Drive, 
                      Dropbox, or OneDrive and sharing the link in your message.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200} className="text-center">
            <Link to="/messaging">
              <Button className="gap-2" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Try file sharing now
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  )
};

export default FileUploadGuide;
