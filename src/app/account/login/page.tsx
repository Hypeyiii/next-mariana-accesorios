import LoginForm from '@/app/components/login-form';
 
export default function SignUpPage() {
  return (
    <main className="flex items-center justify-center mt-32 md:mt-0 md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col p-4 md:-mt-32">
        <LoginForm />
      </div>
    </main>
  );
}