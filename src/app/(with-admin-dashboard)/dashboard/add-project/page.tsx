import AddProject from "@/components/Admin/Project/AddProject/AddProject";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Add Project | Suvrodeb",
  description: "You can Add Project",
};

const AddProjectPage = () => {
  return (
    <div>
      <AddProject />
    </div>
  );
};

export default AddProjectPage;
