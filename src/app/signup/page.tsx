"use client";

import SignUpForm from "@/app/components/signUp-form";
import { withoutAuth } from "@/app/hoc/withAuth";

function SignUpPage() {
  return (
    <main className="flex items-center justify-center mt-32 md:mt-0 md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col p-4 md:-mt-32">
        <SignUpForm />
      </div>
    </main>
  );
}
export default withoutAuth(SignUpPage);
