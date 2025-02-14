"use client";
// import dynamic from "next/dynamic";

import JoditEditor from "jodit-react";

// Dynamically import TinyMCE to prevent SSR rendering issues
// const Editor = dynamic(() => import("@tinymce/tinymce-react").then((mod) => mod.default), {
//   ssr: false,
// });

interface IProps {
  description: string;
  setDescription: (value: string) => void;
}

const TextEditor = ({ description, setDescription }: IProps) => {
  return (
    <div className="p-4 bg-gray-900 text-white rounded-md shadow-md">
      <JoditEditor
        className="text-black"
        value={description}
        onChange={setDescription}
      />
      {/* <div>
        <h3>Editor Content:</h3>
        <div>{description}</div>
      </div> */}
    </div>
  );
};

export default TextEditor;
