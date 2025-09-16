// // UploadFile.tsx
// import React, { useState, type ChangeEvent } from "react";

// interface UploadFileProps {
//   accept?: string; // allowed file types, e.g., "image/*,application/pdf"
//   maxSize?: number; // max size in bytes
//   onFileUpload?: (file: File, base64: string) => void;
// }

// interface FileInfo {
//   name: string;
//   size: number;
//   type: string;
//   lastModified: number;
//   base64?: string;
// }

// const UploadFile: React.FC<UploadFileProps> = ({ accept, maxSize, onFileUpload }) => {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [fileInfo, setFileInfo] = useState<FileInfo | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     // Validation
//     if (accept && !accept.split(",").some((type) => file.type.match(type))) {
//       setError("Invalid file type");
//       setSelectedFile(null);
//       return;
//     }

//     if (maxSize && file.size > maxSize) {
//       setError(`File is too large (max ${maxSize} bytes)`);
//       setSelectedFile(null);
//       return;
//     }

//     setError(null);
//     setSelectedFile(file);

//     // Read file as Base64
//     const base64 = await fileToBase64(file);

//     // Save info
//     const info: FileInfo = {
//       name: file.name,
//       size: file.size,
//       type: file.type,
//       lastModified: file.lastModified,
//       base64,
//     };
//     setFileInfo(info);

//     if (onFileUpload) onFileUpload(file, base64);
//   };

//   // Convert file to Base64
//   const fileToBase64 = (file: File): Promise<string> => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = () => resolve(reader.result as string);
//       reader.onerror = (err) => reject(err);
//       reader.readAsDataURL(file);
//     });
//   };

//   // Slice file (first N bytes) as Blob
//   const sliceFile = (file: File, start = 0, end = 10) => {
//     return file.slice(start, end);
//   };

//   return (
//     <div className="upload-file">
//       <input type="file" accept={accept} onChange={handleChange} />
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {fileInfo && (
//         <div className="file-info">
//           <p><strong>Name:</strong> {fileInfo.name}</p>
//           <p><strong>Size:</strong> {fileInfo.size} bytes</p>
//           <p><strong>Type:</strong> {fileInfo.type}</p>
//           <p><strong>Last Modified:</strong> {new Date(fileInfo.lastModified).toLocaleString()}</p>
//           {fileInfo.base64 && (
//             <div>
//               <strong>Preview / Base64:</strong>
//               <textarea
//                 readOnly
//                 value={fileInfo.base64}
//                 rows={5}
//                 style={{ width: "100%" }}
//               />
//             </div>
//           )}
//         </div>
//       )}
//       {selectedFile && (
//         <div>
//           <strong>Sliced First 10 Bytes:</strong>
//           <pre>{sliceFile(selectedFile).size} bytes</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UploadFile;


import { useDropzone } from "react-dropzone";

export default function DropzoneUpload() {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: async (acceptedFiles) => {
      const formData = new FormData();
      formData.append("image", acceptedFiles[0]);

      await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });
    },
  });

  return (
    <div {...getRootProps()} style={{ border: "2px dashed gray", padding: "20px" }}>
      <input {...getInputProps()} />
      <p>Drag & drop a file here, or click to select</p>
    </div>
  );
}
