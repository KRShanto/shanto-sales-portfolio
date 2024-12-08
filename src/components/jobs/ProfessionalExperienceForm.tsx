import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import LabelInputContainer from "@/components/LabelInputContainer";

export default function ProfessionalExperienceForm() {
  return (
    <div className="w-[350px] md:w-[900px]">
      <h1 className="mb-10 text-center text-4xl">Professional Experience</h1>

      <LabelInputContainer className="mb-4">
        <Label htmlFor="softwareTesting">
          Years of experience in Software Testing
        </Label>
        <Input id="softwareTesting" placeholder="1 Year" type="text" />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="ReactTesting">
          Years of experience in React Testing Library
        </Label>
        <Input id="ReactTesting" placeholder="1 Year" type="text" />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="ReactNative">Years of experience in React Native</Label>
        <Input id="ReactNative" placeholder="1 Year" type="text" />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="testingFrameWorks">
          Are you familiar with testing frameworks (e.g. Jest, Cypress)? If yes,
          list them.
        </Label>
        <Input id="testingFrameWorks" placeholder="Jest, Cypress" type="text" />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="workOnMobileApplication">
          Have you wroked on cross-platform mobile applications (IOS and
          Android)?
        </Label>
        <Input
          id="workOnMobileApplication"
          placeholder="IOS, Android"
          type="text"
        />
      </LabelInputContainer>
    </div>
  );
}
