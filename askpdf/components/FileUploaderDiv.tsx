"use client";
import { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";


const FileUploaderDiv = () => {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <div className="w-full max-w-4xl mx-auto min-h-96 bg-transparent  rounded-lg">
      <FileUpload onChange={handleFileUpload} />
    </div>
  );
};

export default FileUploaderDiv;
