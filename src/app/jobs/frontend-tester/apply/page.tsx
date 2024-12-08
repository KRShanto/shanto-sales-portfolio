import PersonalInfoForm from "@/components/jobs/PersonalInfoForm";
import Section from "@/components/section";
import React from "react";
import SubmitButton from "@/components/SubmitButton";
import ProfessionalExperienceForm from "@/components/jobs/ProfessionalExperienceForm";
import TechnicalSkillsForm from "@/components/jobs/TechnicalSkillsForm";
import ProjectExperience from "@/components/jobs/ProjectExperience";

export default function Page() {
  return (
    <Section className="flex min-h-screen flex-col items-center justify-center py-10 md:mt-0">
      <PersonalInfoForm />
      <ProfessionalExperienceForm />
      <TechnicalSkillsForm />
      <ProjectExperience />
      <div className="mt-5 flex w-[900px] items-center gap-x-10">
        <SubmitButton>&larr; Prev page</SubmitButton>
        <SubmitButton>Next page &rarr;</SubmitButton>
      </div>
    </Section>
  );
}
