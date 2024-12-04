"use client";

import { products } from "./blog";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useModal,
} from "../ui/animated-modal";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Book, PartyPopper, Save, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { useToast } from "@/hooks/use-toast";
import isEmail from "is-email";
import { subscribe } from "@/actions/subscribe";

export default function NewsletterModal() {
  const [isExploding, setIsExploding] = useState(true);

  return (
    <div className="flex items-center justify-center">
      <Modal>
        {/* Use the ModalTrigger component */}
        <ModalTrigger />
        <ModalBody>
          <ModalContent>
            <h4 className="mb-8 text-center text-lg font-bold text-neutral-600 dark:text-neutral-100 md:text-2xl">
              Learn more about{" "}
              <span className="text-blue-500">Landing pages</span> and{" "}
              <span className="text-blue-500">AI</span> <br /> by subscribing to{" "}
              <span className="rounded-md border border-gray-200 bg-gray-100 px-1 py-0.5 text-emerald-500 dark:border-neutral-700 dark:bg-neutral-800">
                KR Blog
              </span>{" "}
            </h4>
            <div className="flex items-center justify-center">
              {products.slice(0, 5).map((product, index) => (
                <motion.div
                  key={index}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="-mr-4 mt-4 flex-shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
                >
                  <Image
                    src={product.thumbnail}
                    alt="bali images"
                    width={500}
                    height={500}
                    className="h-20 w-20 flex-shrink-0 rounded-lg object-cover md:h-40 md:w-40"
                  />
                </motion.div>
              ))}
            </div>
            <div className="mx-auto flex max-w-sm flex-col items-start justify-start gap-x-4 gap-y-2 py-5 pt-10">
              <div className="flex items-center justify-center">
                <Book className="mr-1 h-4 w-4 text-neutral-700 dark:text-neutral-300" />
                <span className="text-base text-neutral-700 dark:text-neutral-300">
                  Learn the latest technologies
                </span>
              </div>
              <div className="flex items-center justify-center">
                <Save className="mr-1 h-4 w-4 text-neutral-700 dark:text-neutral-300" />
                <span className="text-base text-neutral-700 dark:text-neutral-300">
                  Save and bookmark your favorite articles
                </span>
              </div>
              <div className="flex items-center justify-center">
                <User className="mr-1 h-4 w-4 text-neutral-700 dark:text-neutral-300" />
                <span className="text-base text-neutral-700 dark:text-neutral-300">
                  Interact with the community
                </span>
              </div>
              <div className="flex items-center justify-center">
                <PartyPopper className="mr-1 h-4 w-4 text-neutral-700 dark:text-neutral-300" />
                <span className="text-base text-neutral-700 dark:text-neutral-300">
                  Free forever
                </span>
              </div>
            </div>

            <form>
              <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First name</Label>
                  <Input
                    id="firstname"
                    placeholder="Tyler"
                    type="text"
                    name="firstname"
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last name</Label>
                  <Input
                    id="lastname"
                    placeholder="Durden"
                    type="text"
                    name="lastname"
                  />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  placeholder="projectmayhem@fc.com"
                  type="email"
                  name="email"
                />
              </LabelInputContainer>

              <Submit />
            </form>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}

function ModalTrigger() {
  const { setOpen } = useModal();

  useEffect(() => {
    // Function to handle intersection
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Check in the local storage when the modal was last opened
          const lastOpened = localStorage.getItem("modal-last-opened");
          // If the modal was never opened or last opened more than 1 day ago
          if (
            !lastOpened ||
            Date.now() - Number(lastOpened) > 1000 * 60 * 60 * 24
          ) {
            // Set the current time in the local storage
            localStorage.setItem("modal-last-opened", String(Date.now()));
            // Open the modal
            setOpen(true);
          }

          // disconnect observer after opening the modal once
          if (observer) observer.disconnect();
        }
      });
    };

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Adjust this value as needed
    });

    // Select the target element by ID
    const target = document.getElementById("friends");
    if (target) {
      observer.observe(target);
    } else {
      console.warn('Element with id "friends" not found.');
    }

    // Cleanup function to unobserve the target
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return null; // No UI needed for ModalTrigger in this case
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

function Submit() {
  const { toast } = useToast();
  const { setOpen } = useModal();

  async function handleSubmit(data: FormData) {
    const firstName = data.get("firstname");
    const lastName = data.get("lastname");
    const email = data.get("email");

    if (!firstName || !lastName || !email) {
      toast({
        title: "All fields are required",
        description: "Please fill in all fields to subscribe",
        variant: "success",
      });
      return;
    }

    if (!isEmail(email as string)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
      });
      return;
    }

    const res = await subscribe({
      firstName: firstName as string,
      lastName: lastName as string,
      email: email as string,
    });

    if (res.success) {
      toast({
        title: "Subscribed",
        description: `Welcome ${firstName} ${lastName}, you have successfully subscribed to KR Blog`,
      });

      // Close the modal
      setOpen(false);
    } else {
      toast({
        title: "Failed to subscribe",
        description: "Please try again later",
        variant: "destructive",
      });
    }
  }

  return (
    <button
      formAction={handleSubmit}
      className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
      type="submit"
    >
      Subscribe &rarr;
      <BottomGradient />
    </button>
  );
}
