import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import LabelInputContainer from "@/components/LabelInputContainer";
import { Textarea } from "../ui/textarea";
import { CircleAlert } from "lucide-react";
import FormError from "./FormError";
import { Slider } from "../ui/slider";
import ExperienceSlider from "./ExperienceSlider";
import { useState } from "react";

type TProps = {
  technicalSkills: {
    javascriptRate: number;
    typescriptRate: number;
    ReactRate: number;
    NextjsRate: number;
    testingToolForApplication: string;
    automatedTestingExperience: string;
    endToEndTesting: string;
  };
  errors: any;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onSliderChange: ({ name, value }: { name: string; value: number[] }) => void;
};

export default function TechnicalSkillsForm({
  technicalSkills,
  errors,
  onChange,
  onSliderChange,
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
        <ExperienceSlider
          max={10}
          step={1}
          defaultValue={[0]}
          value={javascriptRate}
          onValueChange={(value) =>
            onSliderChange({ name: "javascriptRate", value })
          }
        />
        {errors?.javascriptRate && (
          <FormError errorMessage={errors.javascriptRate} />
        )}
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="typescriptRate">
          Rate your proficiency in Typescript
        </Label>
        <ExperienceSlider
          max={10}
          step={1}
          defaultValue={[0]}
          value={typescriptRate}
          onValueChange={(value) =>
            onSliderChange({ name: "typescriptRate", value })
          }
        />
        {errors?.typescriptRate && (
          <FormError errorMessage={errors.typescriptRate} />
        )}
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="ReactRate">Rate your proficiency in React</Label>
        <ExperienceSlider
          max={10}
          step={1}
          defaultValue={[0]}
          value={ReactRate}
          onValueChange={(value) =>
            onSliderChange({ name: "ReactRate", value })
          }
        />
        {errors?.ReactRate && <FormError errorMessage={errors.ReactRate} />}
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor=" NextjsRate">Rate your proficiency in Next.js</Label>
        <ExperienceSlider
          max={10}
          step={1}
          defaultValue={[0]}
          value={NextjsRate}
          onValueChange={(value) =>
            onSliderChange({ name: "NextjsRate", value })
          }
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
