"use client";

import AiButton from "@/components/ui/animata/button/ai-button";
import { useRouter } from "next/navigation";

export default function Apply() {
  const router = useRouter();

  function handleOnClick(): void {
    router.push("/jobs/frontend-tester/apply");
  }

  return (
    <div>
      <AiButton text="Apply Now" onClick={handleOnClick} />
    </div>
  );
}
