import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import LabelInputContainer from "@/components/LabelInputContainer";
import { Textarea } from "../ui/textarea";
export default function ProjectExperience() {
  return (
    <div className="w-[350px] md:w-[900px]">
      <h1 className="mb-10 text-center text-4xl">Project Experience</h1>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="projectTitle">Project title</Label>
        <Input id="projectTitle" placeholder="Title" type="text" />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="ProjectDescription">Project description</Label>
        <Textarea id="ProjectDescription" placeholder="Description" />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="liveLink">Live link</Label>
        <Input id="liveLink" placeholder="live link" type="text" />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="githubLink">Github Link</Label>
        <Input id="NextjsRate" placeholder="1 to 10" type="text" />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="partOfTestedInProject">
          Which parts of the project did you tested?
        </Label>
        <Textarea
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
          id="testToFindBug"
          placeholder="Explain How did you resolve it?"
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="endToEndTesting">
          Have you written end-to-end tests? If yes, briefly describe your
          approach.
        </Label>
        <Textarea id="endToEndTesting" placeholder="Describe your approach" />
      </LabelInputContainer>
    </div>
  );
}
