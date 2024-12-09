import React from "react";
import { Button } from "../ui/button";
import { PlusCircleIcon } from "lucide-react";
import Project from "./Project";
import { Modal, useModal } from "../ui/animated-modal";
import ProjectExperienceFormModal from "./ProjectExperienceFormModal";
import { defaultFormData } from "@/app/jobs/frontend-tester/apply/page";

const ModalTrigger = () => {
  const { setOpen } = useModal();
  return (
    <Button
      type="button"
      className="mt-7"
      onClick={() => {
        setOpen(true);
      }}
    >
      <PlusCircleIcon /> Add Project
    </Button>
  );
};

type TProps = {
  projects: {
    projectTitle: string;
    projectDescription: string;
    liveLink: string;
    githubLink: string;
    partOfTestedInProject: string;
    testToFindBug: string;
  }[];
  setFormData: React.Dispatch<React.SetStateAction<typeof defaultFormData>>;
};

export default function ProjectSection({ projects, setFormData }: TProps) {
  return (
    <div className="flex w-[350px] flex-col items-center justify-center md:w-[900px]">
      <h1 className="mb-10 text-center text-4xl">Project Section</h1>
      {projects && projects.length > 0 ? (
        <div className="flex flex-col gap-y-10">
          {projects.map((project, index) => (
            <Project
              key={index}
              project={project}
              index={index}
              setFormData={setFormData}
            />
          ))}
        </div>
      ) : (
        <div>
          <p className="text-gray-500">No Project Added</p>
        </div>
      )}
      <Modal>
        <ProjectExperienceFormModal setFormData={setFormData} />
        <ModalTrigger />
      </Modal>
    </div>
  );
}
