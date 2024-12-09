"use client";
import PersonalInfoForm from "@/components/jobs/PersonalInfoForm";
import Section from "@/components/section";
import React, { useState } from "react";
import SubmitButton from "@/components/SubmitButton";
import ProfessionalExperienceForm from "@/components/jobs/ProfessionalExperienceForm";
import TechnicalSkillsForm from "@/components/jobs/TechnicalSkillsForm";
import ProjectSection from "@/components/jobs/ProjectSection";
import { toast, useToast } from "@/hooks/use-toast";

type TProjectExperience = {
  projectTitle: string;
  projectDescription: string;
  liveLink: string;
  githubLink: string;
  partOfTestedInProject: string;
  testToFindBug: string;
};

export const defaultFormData = {
  personalInfo: {
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    phone: "",
  },
  professionalExperience: {
    softwareTesting: "",
    ReactTesting: "",
    ReactNative: "",
    testingFrameWorks: "",
    workOnMobileApplication: "",
  },
  technicalSkills: {
    javascriptRate: "",
    typescriptRate: "",
    ReactRate: "",
    NextjsRate: "",
    testingToolForApplication: "",
    automatedTestingExperience: "",
    endToEndTesting: "",
  },
  projectExperience: [] as TProjectExperience[],
};

export default function Page() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(defaultFormData);

  const [errors, setErrors] = useState({});

  const { toast } = useToast();

  const steps = [
    {
      title: "Personal Information",
      content: (
        <PersonalInfoForm
          personalInfo={formData.personalInfo}
          onChange={(event) => handleChange(event, "personalInfo")}
          errors={errors}
        />
      ),
      validate: () => {
        const { firstName, lastName, email, location, phone } =
          formData.personalInfo;
        const errors: any = {};
        if (!firstName) {
          errors.firstName = "First Name is required";
        }
        if (!lastName) {
          errors.lastName = "Last Name is required";
        }
        if (!email) {
          errors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
          errors.email = "Invalid email format";
        }
        if (!location) {
          errors.location = "Location is required";
        }
        if (!phone) {
          errors.phone = "Phone number is required";
        }
        // else if (!/^\d{10}$/.test(phone)) {
        //   errors.phone = "Invalid phone number format";
        // }
        setErrors(errors);
        return Object.keys(errors).length === 0;
      },
    },
    {
      title: "Professional Experience",
      content: (
        <ProfessionalExperienceForm
          professionalExperience={formData.professionalExperience}
          onChange={(event) => handleChange(event, "professionalExperience")}
          errors={errors}
        />
      ),
      validate: () => {
        const {
          softwareTesting,
          ReactTesting,
          ReactNative,
          testingFrameWorks,
          workOnMobileApplication,
        } = formData.professionalExperience;
        const errors: any = {};
        if (!softwareTesting) {
          errors.softwareTesting =
            "Years of experience in Software Testing is required";
        }
        if (!ReactTesting) {
          errors.ReactTesting =
            "Years of experience in React Testing is required";
        }
        if (!ReactNative) {
          errors.ReactNative =
            "Years of experience in React Native is required";
        }
        if (!testingFrameWorks) {
          errors.testingFrameWorks =
            "Years of experience in testing frameworks is required";
        }
        if (!workOnMobileApplication) {
          errors.workOnMobileApplication =
            "Experience working on mobile applications is required";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
      },
    },
    {
      title: "Technical Skills",
      content: (
        <TechnicalSkillsForm
          technicalSkills={formData.technicalSkills}
          onChange={(event) => handleChange(event, "technicalSkills")}
          errors={errors}
        />
      ),
      validate: () => {
        const {
          javascriptRate,
          typescriptRate,
          ReactRate,
          NextjsRate,
          testingToolForApplication,
          automatedTestingExperience,
          endToEndTesting,
        } = formData.technicalSkills;
        const errors: any = {};
        if (!javascriptRate) {
          errors.javascriptRate =
            "Rate your proficiency in Javascript is required";
        }
        if (!typescriptRate) {
          errors.typescriptRate =
            "Rate your proficiency in Typescript is required";
        }
        if (!ReactRate) {
          errors.ReactRate = "Rate your proficiency in React is required";
        }
        if (!NextjsRate) {
          errors.NextjsRate = "Rate your proficiency in Nextjs is required";
        }
        if (!testingToolForApplication) {
          errors.testingToolForApplication =
            "Testing tool for your application is required";
        }
        if (!automatedTestingExperience) {
          errors.automatedTestingExperience =
            "Automated testing experience is required";
        }
        if (!endToEndTesting) {
          errors.endToEndTesting = "End-to-end testing experience is required";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
      },
    },
    {
      title: "Project Experience",
      content: (
        <ProjectSection
          projects={formData.projectExperience}
          setFormData={setFormData}
        />
      ),
      validate: () => formData.projectExperience.length >= 3,
    },
  ];

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldKey: keyof typeof formData,
  ) => {
    const value = event.target.value;
    const name = event.target.name;
    if (value) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
    setFormData((prevForm) => ({
      ...prevForm,
      [fieldKey]: { ...prevForm[fieldKey], [name]: value },
    }));
  };

  const handleNextPage = () => {
    //&& steps[currentStep].validate()
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    if (formData.projectExperience.length < 3) {
      toast({
        variant: "destructive",
        title: `Please add at least more ${3 - formData.projectExperience.length} projects`,
      });
      return;
    }
    if (!steps.every((step) => step.validate())) {
      toast({
        variant: "destructive",
        title: `Please fill in all required fields on the current page`,
        description:
          "some fields may be filled incorrectly. Please check and correct them.",
      });
      return;
    }
    console.log(formData);
  };

  return (
    <Section className="flex min-h-[calc(100vh-100px)] flex-col items-center justify-center py-10 md:mt-0">
      <div>
        {steps[currentStep].content}
        <div className="mb-16 mt-5 flex w-[350px] items-center gap-x-10 md:mb-0 md:w-[900px]">
          <SubmitButton onClick={handlePrevPage}>&larr; Prev page</SubmitButton>
          {steps.length - 1 === currentStep ? (
            <SubmitButton type="button" onClick={handleSubmit}>
              Submit
            </SubmitButton>
          ) : (
            <SubmitButton type="button" onClick={handleNextPage}>
              Next page &rarr;
            </SubmitButton>
          )}
        </div>
      </div>
    </Section>
  );
}
