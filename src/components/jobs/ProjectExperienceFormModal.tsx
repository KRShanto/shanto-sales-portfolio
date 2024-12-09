import LabelInputContainer from "@/components/LabelInputContainer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModalBody, ModalContent, useModal } from "../ui/animated-modal";
import { Textarea } from "../ui/textarea";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import FormError from "./FormError";
import { defaultFormData } from "@/app/jobs/frontend-tester/apply/page";

type TProps = {
  projectExperience?: {
    projectTitle: string;
    projectDescription: string;
    liveLink: string;
    githubLink: string;
    partOfTestedInProject: string;
    testToFindBug: string;
  };
  // onChange?: (
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ) => void;
  fromEdit?: boolean;
  setFormData: React.Dispatch<React.SetStateAction<typeof defaultFormData>>;
  index?: number;
};

export default function ProjectExperienceFormModal({
  projectExperience,
  fromEdit,
  setFormData,
  index,
}: TProps) {
  const [project, setProject] = useState({
    projectTitle: "",
    projectDescription: "",
    liveLink: "",
    githubLink: "",
    partOfTestedInProject: "",
    testToFindBug: "",
  });

  useEffect(() => {
    if (fromEdit && projectExperience) {
      setProject(projectExperience);
    } else {
      reset();
    }
  }, [fromEdit, projectExperience]);

  const reset = () => {
    setProject({
      projectTitle: "",
      projectDescription: "",
      liveLink: "",
      githubLink: "",
      partOfTestedInProject: "",
      testToFindBug: "",
    });
  };

  const [errors, setErrors] = useState<Record<string, string>>({});

  const { setOpen } = useModal();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const value = event.target.value;
    const name = event.target.name;
    if (value) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
    setProject((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!project.projectTitle) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        projectTitle: "Title must be Required",
      }));
      return;
    }
    if (!project.projectDescription) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        projectDescription: "Description must be Required",
      }));
      return;
    }
    if (!project.githubLink) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        githubLink: "github link must Required",
      }));
      return;
    }
    if (!project.liveLink) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        liveLink: "Live link must be Required",
      }));
      return;
    }
    if (!project.partOfTestedInProject) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        partOfTestedInProject: "Required",
      }));
      return;
    }
    if (!project.testToFindBug) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        testToFindBug: "Required",
      }));
      return;
    }
    if (!fromEdit) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        projectExperience: [...prevFormData.projectExperience, project],
      }));
    } else {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          projectExperience: prevFormData.projectExperience.map((exp, i) => {
            if (i === index) {
              return project;
            }
            return exp;
          }),
        };
      });
    }
    reset();
    setOpen(false);
    console.log(project);
  };
  return (
    <div className="w-[350px] md:w-[900px]">
      {/* Use the ModalTrigger component */}
      {/* <ModalTrigger /> */}

      <ModalBody>
        <ModalContent className="no-visible-scrollbar overflow-y-auto">
          <h1 className="mb-10 text-center text-4xl">Project Experience</h1>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="projectTitle">Project title</Label>
            <Input
              value={project.projectTitle}
              onChange={handleChange}
              name="projectTitle"
              id="projectTitle"
              placeholder="Title"
              type="text"
            />
            {errors?.projectTitle && (
              <FormError errorMessage={errors.projectTitle} />
            )}
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="ProjectDescription">Project description</Label>
            <Textarea
              value={project.projectDescription}
              onChange={handleChange}
              name="projectDescription"
              id="projectDescription"
              placeholder="Description"
            />
            {errors?.projectDescription && (
              <FormError errorMessage={errors.projectDescription} />
            )}
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="liveLink">Live link</Label>
            <Input
              value={project.liveLink}
              onChange={handleChange}
              name="liveLink"
              id="liveLink"
              placeholder="live link"
              type="text"
            />
            {errors?.liveLink && <FormError errorMessage={errors.liveLink} />}
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="githubLink">Github Link</Label>
            <Input
              value={project.githubLink}
              onChange={handleChange}
              name="githubLink"
              id="githubLink"
              placeholder="github link"
              type="text"
            />
            {errors?.githubLink && (
              <FormError errorMessage={errors.githubLink} />
            )}
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="partOfTestedInProject">
              Which parts of the project did you tested?
            </Label>
            <Textarea
              value={project.partOfTestedInProject}
              onChange={handleChange}
              name="partOfTestedInProject"
              id="partOfTestedInProject"
              placeholder="Which parts of the project did you tested?"
            />
            {errors?.partOfTestedInProject && (
              <FormError errorMessage={errors.partOfTestedInProject} />
            )}
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="testToFindBug">
              What was the most challenging bug or issue you encountered during
              testing or development? How did you resolve it?
            </Label>
            <Textarea
              value={project.testToFindBug}
              onChange={handleChange}
              name="testToFindBug"
              id="testToFindBug"
              placeholder="Explain How did you resolve it?"
            />
            {errors?.testToFindBug && (
              <FormError errorMessage={errors.testToFindBug} />
            )}
          </LabelInputContainer>
          <Button onClick={handleSubmit} type="submit">
            {fromEdit ? "Edit" : "Add"}
          </Button>
        </ModalContent>
      </ModalBody>
    </div>
  );
}
