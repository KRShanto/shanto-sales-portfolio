import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import LabelInputContainer from "@/components/LabelInputContainer";

export default function PersonalInfoForm() {
  return (
    <div className="w-[350px] md:w-[900px]">
      <h1 className="mb-10 text-center text-4xl">Personal Information</h1>
      <div className="mb-4 flex w-full flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        <LabelInputContainer>
          <Label htmlFor="firstname">First name</Label>
          <Input id="firstname" placeholder="Tyler" type="text" />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="lastname">Last name</Label>
          <Input id="lastname" placeholder="Durden" type="text" />
        </LabelInputContainer>
      </div>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="phone">Phone no</Label>
        <Input id="phone" placeholder="+8801411111111" type="tel" />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="location">Location</Label>
        <Input id="location" placeholder="Dhaka" type="text" />
      </LabelInputContainer>
    </div>
  );
}
