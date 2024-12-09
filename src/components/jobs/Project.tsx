import React from "react";
import { OctagonX, Edit, Github } from "lucide-react";
import { Modal, useModal } from "../ui/animated-modal";
import ProjectExperienceFormModal from "./ProjectExperienceFormModal";
import { defaultFormData } from "@/app/jobs/frontend-tester/apply/page";
import { Button } from "../ui/button";
import Link from "next/link";

type TProps = {
  project: {
    projectTitle: string;
    projectDescription: string;
    liveLink: string;
    githubLink: string;
    partOfTestedInProject: string;
    testToFindBug: string;
  };
  index: number;
  setFormData: React.Dispatch<React.SetStateAction<typeof defaultFormData>>;
};

const ModalTrigger = () => {
  const { setOpen } = useModal();
  return <Edit onClick={() => setOpen(true)} className="cursor-pointer" />;
};

const colors = ["#1434A4", "#0096FF", "#4169E1", "#CD7F32", "#954535"];

export default function Project({ project, index, setFormData }: TProps) {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const handleDeleteProject = () => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        projectExperience: prevFormData.projectExperience.filter(
          (project, i) => i !== index,
        ),
      };
    });
  };
  console.log(randomColor);
  return (
    <div className="relative flex w-[350px] select-none items-start rounded-md border bg-stone-600 p-5 md:w-[600px]">
      <div
        className={`absolute -left-[18px] -top-[30px] flex size-[60px] items-center justify-center rounded-full border-8 shadow-lg md:-left-[30px] md:-top-[30px] md:size-[70px]`}
        style={{
          borderColor: randomColor,
        }}
      >
        <p className={`text-4xl`} style={{ color: randomColor }}>
          {index + 1}
        </p>
      </div>
      <div className="w-full space-y-2 p-2">
        <h1 className="line-clamp-1 text-4xl">{project.projectTitle}</h1>
        <p className="line-clamp-3 text-sm">{project.projectDescription}</p>
      </div>
      <div className="flex w-[40px] flex-col items-center justify-center space-y-2 border-l p-2">
        <OctagonX onClick={handleDeleteProject} className="cursor-pointer" />
        <Modal>
          <ProjectExperienceFormModal
            setFormData={setFormData}
            fromEdit
            projectExperience={project}
            index={index}
          />
          <ModalTrigger />
        </Modal>
        <Link href={project.githubLink} target="__blank" passHref>
          <Github className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}
