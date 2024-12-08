import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import LabelInputContainer from "@/components/LabelInputContainer";
import { Textarea } from "../ui/textarea";

export default function TechnicalSkillsForm() {
  return (
    <div className="w-[350px] md:w-[900px]">
      <h1 className="mb-10 text-center text-4xl">Technical Skills</h1>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="javascriptRate">
          Rate your proficiency in Javascript
        </Label>
        <Input id="javascriptRate" placeholder="1 to 10" type="text" />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="typescriptRate">
          Rate your proficiency in Typescript
        </Label>
        <Input id="typescriptRate" placeholder="1 to 10" type="text" />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="ReactRate">Rate your proficiency in React</Label>
        <Input id="ReactRate" placeholder="1 to 10" type="text" />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor=" NextjsRate">Rate your proficiency in Next.js</Label>
        <Input id="NextjsRate" placeholder="1 to 10" type="text" />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="testingToolForApplication">
          List down the tools you have used for testing
        </Label>
        <Input
          id="testingToolForApplication"
          placeholder="Git, Jetkins, Selenium"
          type="text"
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="automatedTestingExperience">
          Are your familiar with CI/CD pipelines for automated testing? If yes,
          explain your experience.
        </Label>
        <Textarea
          id="automatedTestingExperience"
          placeholder="Explain your experience"
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
