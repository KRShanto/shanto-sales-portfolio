import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import LabelInputContainer from "@/components/LabelInputContainer";
import FormError from "./FormError";

type TProps = {
  professionalExperience: {
    softwareTesting: string;
    ReactTesting: string;
    ReactNative: string;
    testingFrameWorks: string;
    workOnMobileApplication: string;
  };
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  errors: any;
};

export default function ProfessionalExperienceForm({
  professionalExperience,
  errors,
  onChange,
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
        <Input
          value={softwareTesting}
          onChange={onChange}
          name="softwareTesting"
          id="softwareTesting"
          placeholder="1 Year"
          type="text"
        />
        {errors?.softwareTesting && (
          <FormError errorMessage={errors.softwareTesting} />
        )}
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="ReactTesting">
          Years of experience in React Testing Library
        </Label>
        <Input
          value={ReactTesting}
          onChange={onChange}
          name="ReactTesting"
          id="ReactTesting"
          placeholder="1 Year"
          type="text"
        />
        {errors?.ReactTesting && (
          <FormError errorMessage={errors.ReactTesting} />
        )}
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="ReactNative">Years of experience in React Native</Label>
        <Input
          value={ReactNative}
          onChange={onChange}
          name="ReactNative"
          id="ReactNative"
          placeholder="1 Year"
          type="text"
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
