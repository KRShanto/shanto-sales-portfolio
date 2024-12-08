import { CircleAlert } from "lucide-react";
export default function FormError({ errorMessage }: { errorMessage: string }) {
  return (
    <p className="flex items-center gap-x-2 text-sm text-red-400">
      <CircleAlert size={16} /> {errorMessage}
    </p>
  );
}
