import React from "react";
import { Input } from "../ui/input";
import { Slider } from "../ui/slider";
import { cn } from "@/lib/utils";

type TProps = {
  onValueChange: (value: number[]) => void;
  defaultValue: number[];
  min?: number;
  max: number;
  value: number;
  step: number;
  plusInputValue?: string;
  className?: string;
};

export default function ExperienceSlider({
  onValueChange,
  defaultValue,
  min,
  max,
  step,
  value,
  className,
  plusInputValue,
  ...props
}: TProps) {
  return (
    <>
      <Slider
        onValueChange={onValueChange}
        defaultValue={defaultValue}
        value={[value || 0]}
        max={max}
        step={step}
        className={cn("py-2", className)}
        {...props}
      />
      <Input
        value={`${value} ${plusInputValue || ""}`}
        name="javascriptRate"
        id="javascriptRate"
        placeholder="1 to 10"
        type="text"
        disabled
      />
    </>
  );
}
