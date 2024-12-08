import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import LabelInputContainer from "@/components/LabelInputContainer";
import { Textarea } from "../ui/textarea";

type TProps = {
  projectExperience: {
    projectTitle: string;
    projectDescription: string;
    liveLink: string;
    githubLink: string;
    partOfTestedInProject: string;
    testToFindBug: string;
  };
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};
export default function ProjectExperience({
  onChange,
  projectExperience,
}: TProps) {
  const {
    projectTitle,
    projectDescription,
    liveLink,
    githubLink,
    partOfTestedInProject,
    testToFindBug,
  } = projectExperience;
  return (
    <div className="w-[350px] md:w-[900px]">
      <h1 className="mb-10 text-center text-4xl">Project Experience</h1>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="projectTitle">Project title</Label>
        <Input
          value={projectTitle}
          onChange={onChange}
          name="projectTitle"
          id="projectTitle"
          placeholder="Title"
          type="text"
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="ProjectDescription">Project description</Label>
        <Textarea
          value={projectDescription}
          onChange={onChange}
          name="projectDescription"
          id="projectDescription"
          placeholder="Description"
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="liveLink">Live link</Label>
        <Input
          value={liveLink}
          onChange={onChange}
          name="liveLink"
          id="liveLink"
          placeholder="live link"
          type="text"
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="githubLink">Github Link</Label>
        <Input
          value={githubLink}
          onChange={onChange}
          name="githubLink"
          id="githubLink"
          placeholder="1 to 10"
          type="text"
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="partOfTestedInProject">
          Which parts of the project did you tested?
        </Label>
        <Textarea
          value={partOfTestedInProject}
          onChange={onChange}
          name="partOfTestedInProject"
          id="partOfTestedInProject"
          placeholder="Which parts of the project did you tested?"
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="testToFindBug">
          What was the most challenging bug or issue you encountered during
          testing or development? How did you resolve it?
        </Label>
        <Textarea
          value={testToFindBug}
          onChange={onChange}
          name="testToFindBug"
          id="testToFindBug"
          placeholder="Explain How did you resolve it?"
        />
      </LabelInputContainer>
    </div>
  );
}
