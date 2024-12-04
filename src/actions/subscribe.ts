"use server";

import { db } from "@/lib/db";

interface SubscribeData {
  firstName: string;
  lastName: string;
  email: string;
}

export async function subscribe({ firstName, lastName, email }: SubscribeData) {
  // TODO: validate data

  // Create a new subscriber or update an existing one
  const subscriber = await db.newsletter.upsert({
    where: { email },
    update: { firstName, lastName },
    create: { firstName, lastName, email, savedFrom: "PORTFOLIO" },
  });

  return { success: true };
}
