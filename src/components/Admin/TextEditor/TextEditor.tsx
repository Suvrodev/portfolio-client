"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Dynamically import TinyMCE to prevent SSR rendering issues
const Editor = dynamic(
  () => import("@tinymce/tinymce-react").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);
interface IProps {
  description: string;
  setDescription: (value: string) => void;
}
const TextEditor = ({ description, setDescription }: IProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevent SSR mismatch

  return (
    <div className="p-4 bg-gray-900 text-white rounded-md shadow-md">
      <Editor
        apiKey="ef89epehezxltdz8eb912hrjclmst4bqicqkgp7h3szider4"
        value={description}
        onEditorChange={(newContent) => setDescription(newContent)}
        init={{
          plugins: [
            "anchor",
            "autolink",
            "charmap",
            "codesample",
            "emoticons",
            "image",
            "link",
            "lists",
            "media",
            "searchreplace",
            "table",
            "visualblocks",
            "wordcount",
            "checklist",
            "mediaembed",
            "casechange",
            "export",
            "formatpainter",
            "pageembed",
            "a11ychecker",
            "tinymcespellchecker",
            "permanentpen",
            "powerpaste",
            "advtable",
            "advcode",
            "editimage",
            "advtemplate",
            "ai",
            "mentions",
            "tinycomments",
            "tableofcontents",
            "footnotes",
            "mergetags",
            "autocorrect",
            "typography",
            "inlinecss",
            "markdown",
            "importword",
            "exportword",
            "exportpdf",
          ],
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
          tinycomments_mode: "embedded",
          tinycomments_author: "Author name",
          mergetags_list: [
            { value: "First.Name", title: "First Name" },
            { value: "Email", title: "Email" },
          ],
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ai_request: (respondWith: any) =>
            respondWith.string(() =>
              Promise.reject("See docs to implement AI Assistant")
            ),
        }}
        // initialValue="Hi Suvrodeb"
      />
    </div>
  );
};

export default TextEditor;

//urls: https://www.tiny.cloud/docs/tinymce/latest/react-cloud/
