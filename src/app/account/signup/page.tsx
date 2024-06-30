import SignUpForm from '@/app/components/signUp-form';
 
export default function SignUpPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col p-4 md:-mt-32">
        <SignUpForm />
      </div>
    </main>
  );
}