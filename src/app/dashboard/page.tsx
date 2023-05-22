import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export const revalidate = 1200;

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return <div>TBD</div>;
}
