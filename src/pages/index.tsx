import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (!session) {
      router.push("/auth/signin");
    } else {
      // Redirect based on user role
      const role = (session.user as any).role;
      if (role === "ADMIN") router.push("/admin/dashboard");
      else if (role === "INSTRUCTOR") router.push("/instructor/dashboard");
      else if (role === "STUDENT") router.push("/student/dashboard");
      else router.push("/auth/signin");
    }
  }, [session, status, router]);

  return <div>Loading...</div>;
}
