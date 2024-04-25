import { auth } from "@clerk/nextjs";

const adminIds = [
  "user_2djbuVU9DPkhHZpC4sKbTwD9Q1I",
]

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
}