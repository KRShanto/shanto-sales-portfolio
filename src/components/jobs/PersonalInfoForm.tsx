import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import LabelInputContainer from "@/components/LabelInputContainer";
import { memo } from "react";
import FormError from "./FormError";

type TProps = {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location: string;
  };
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  errors: any;
};

export default memo(function PersonalInfoForm({
  personalInfo,
  errors,
  onChange,
}: TProps) {
  return (
    <div className="w-[350px] md:w-[900px]">
      <h1 className="mb-10 text-center text-4xl">Personal Information</h1>
      <div className="mb-4 flex w-full flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        <LabelInputContainer>
          <Label htmlFor="firstName">First name</Label>
          <Input
            value={personalInfo.firstName}
            onChange={onChange}
            id="firstName"
            name="firstName"
            placeholder="Tyler"
            type="text"
            required
          />
          {errors?.firstName && <FormError errorMessage={errors.firstName} />}
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="lastName">Last name</Label>
          <Input
            value={personalInfo.lastName}
            onChange={onChange}
            id="lastName"
            name="lastName"
            placeholder="Durden"
            type="text"
            required
          />
          {errors?.lastName && <FormError errorMessage={errors.lastName} />}
        </LabelInputContainer>
      </div>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Email Address</Label>
        <Input
          value={personalInfo.email}
          onChange={onChange}
          id="email"
          name="email"
          placeholder="projectmayhem@fc.com"
          type="email"
          required
        />
        {errors?.email && <FormError errorMessage={errors.email} />}
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="phone">Phone no</Label>
        <Input
          value={personalInfo.phone}
          onChange={onChange}
          id="phone"
          name="phone"
          placeholder="+8801411111111"
          type="tel"
          required
        />
        {errors?.phone && <FormError errorMessage={errors.phone} />}
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="location">Location</Label>
        <Input
          value={personalInfo.location}
          onChange={onChange}
          id="location"
          name="location"
          placeholder="Dhaka"
          type="text"
          required
        />
        {errors?.location && <FormError errorMessage={errors.location} />}
      </LabelInputContainer>
    </div>
  );
});
