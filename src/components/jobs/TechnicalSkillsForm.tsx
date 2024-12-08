import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import LabelInputContainer from "@/components/LabelInputContainer";
import { Textarea } from "../ui/textarea";
import { CircleAlert } from "lucide-react";
import FormError from "./FormError";

type TProps = {
  technicalSkills: {
    javascriptRate: string;
    typescriptRate: string;
    ReactRate: string;
    NextjsRate: string;
    testingToolForApplication: string;
    automatedTestingExperience: string;
    endToEndTesting: string;
  };
  errors: any;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

export default function TechnicalSkillsForm({
  technicalSkills,
  errors,
  onChange,
}: TProps) {
  const {
    NextjsRate,
    ReactRate,
    automatedTestingExperience,
    endToEndTesting,
    javascriptRate,
    testingToolForApplication,
    typescriptRate,
  } = technicalSkills;
  return (
    <div className="w-[350px] md:w-[900px]">
      <h1 className="mb-10 text-center text-4xl">Technical Skills</h1>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="javascriptRate">
          Rate your proficiency in Javascript
        </Label>
        <Input
          value={javascriptRate}
          onChange={onChange}
          name="javascriptRate"
          id="javascriptRate"
          placeholder="1 to 10"
          type="text"
        />
        {errors?.javascriptRate && (
          <FormError errorMessage={errors.javascriptRate} />
        )}
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="typescriptRate">
          Rate your proficiency in Typescript
        </Label>
        <Input
          value={typescriptRate}
          onChange={onChange}
          name="typescriptRate"
          id="typescriptRate"
          placeholder="1 to 10"
          type="text"
        />
        {errors?.typescriptRate && (
          <FormError errorMessage={errors.typescriptRate} />
        )}
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="ReactRate">Rate your proficiency in React</Label>
        <Input
          value={ReactRate}
          onChange={onChange}
          name="ReactRate"
          id="ReactRate"
          placeholder="1 to 10"
          type="text"
        />
        {errors?.ReactRate && <FormError errorMessage={errors.ReactRate} />}
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor=" NextjsRate">Rate your proficiency in Next.js</Label>
        <Input
          value={NextjsRate}
          onChange={onChange}
          name="NextjsRate"
          id="NextjsRate"
          placeholder="1 to 10"
          type="text"
        />
        {errors?.NextjsRate && <FormError errorMessage={errors.NextjsRate} />}
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="testingToolForApplication">
          List down the tools you have used for testing
        </Label>
        <Input
          value={testingToolForApplication}
          onChange={onChange}
          name="testingToolForApplication"
          id="testingToolForApplication"
          placeholder="Git, Jetkins, Selenium"
          type="text"
        />
        {errors?.testingToolForApplication && (
          <FormError errorMessage={errors.testingToolForApplication} />
        )}
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="automatedTestingExperience">
          Are your familiar with CI/CD pipelines for automated testing? If yes,
          explain your experience.
        </Label>
        <Textarea
          value={automatedTestingExperience}
          onChange={onChange}
          name="automatedTestingExperience"
          id="automatedTestingExperience"
          placeholder="Explain your experience"
        />
        {errors?.automatedTestingExperience && (
          <FormError errorMessage={errors.automatedTestingExperience} />
        )}
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="endToEndTesting">
          Have you written end-to-end tests? If yes, briefly describe your
          approach.
        </Label>
        <Textarea
          value={endToEndTesting}
          onChange={onChange}
          name="endToEndTesting"
          id="endToEndTesting"
          placeholder="Describe your approach"
        />
        {errors?.endToEndTesting && (
          <FormError errorMessage={errors.endToEndTesting} />
        )}
      </LabelInputContainer>
    </div>
  );
}
