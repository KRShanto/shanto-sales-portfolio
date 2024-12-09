import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import LabelInputContainer from "@/components/LabelInputContainer";
import FormError from "./FormError";
import ExperienceSlider from "./ExperienceSlider";

type TProps = {
  professionalExperience: {
    softwareTesting: number;
    ReactTesting: number;
    ReactNative: number;
    testingFrameWorks: string;
    workOnMobileApplication: string;
  };
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onSliderChange: ({ name, value }: { name: string; value: number[] }) => void;
  errors: any;
};

export default function ProfessionalExperienceForm({
  professionalExperience,
  errors,
  onChange,
  onSliderChange,
}: TProps) {
  const {
    ReactNative,
    ReactTesting,
    softwareTesting,
    testingFrameWorks,
    workOnMobileApplication,
  } = professionalExperience;
  return (
    <div className="w-[350px] md:w-[900px]">
      <h1 className="mb-10 text-center text-4xl">Professional Experience</h1>

      <LabelInputContainer className="mb-4">
        <Label htmlFor="softwareTesting">
          Years of experience in Software Testing
        </Label>
        <ExperienceSlider
          max={5}
          plusInputValue={softwareTesting < 2 ? "Year" : "Years"}
          step={1}
          defaultValue={[0]}
          value={softwareTesting}
          onValueChange={(value) =>
            onSliderChange({ name: "softwareTesting", value })
          }
        />
        {errors?.softwareTesting && (
          <FormError errorMessage={errors.softwareTesting} />
        )}
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="ReactTesting">
          Years of experience in React Testing Library
        </Label>
        <ExperienceSlider
          max={5}
          step={1}
          plusInputValue={ReactTesting < 2 ? "Year" : "Years"}
          defaultValue={[0]}
          value={ReactTesting}
          onValueChange={(value) =>
            onSliderChange({ name: "ReactTesting", value })
          }
        />
        {errors?.ReactTesting && (
          <FormError errorMessage={errors.ReactTesting} />
        )}
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="ReactNative">Years of experience in React Native</Label>
        <ExperienceSlider
          plusInputValue={ReactNative < 2 ? "Year" : "Years"}
          max={5}
          step={1}
          defaultValue={[0]}
          value={ReactNative}
          onValueChange={(value) =>
            onSliderChange({ name: "ReactNative", value })
          }
        />
        {errors?.ReactNative && <FormError errorMessage={errors.ReactNative} />}
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="testingFrameWorks">
          Are you familiar with testing frameworks (e.g. Jest, Cypress)? If yes,
          list them.
        </Label>
        <Input
          value={testingFrameWorks}
          onChange={onChange}
          name="testingFrameWorks"
          id="testingFrameWorks"
          placeholder="Jest, Cypress"
          type="text"
        />
        {errors?.testingFrameWorks && (
          <FormError errorMessage={errors.testingFrameWorks} />
        )}
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="workOnMobileApplication">
          Have you wroked on cross-platform mobile applications (IOS and
          Android)?
        </Label>
        <Input
          value={workOnMobileApplication}
          onChange={onChange}
          name="workOnMobileApplication"
          id="workOnMobileApplication"
          placeholder="IOS, Android"
          type="text"
        />
        {errors?.workOnMobileApplication && (
          <FormError errorMessage={errors.workOnMobileApplication} />
        )}
      </LabelInputContainer>
    </div>
  );
}
