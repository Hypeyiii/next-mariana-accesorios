import { useState, useCallback, FormEvent } from "react";
import { useUsers } from "@/app/hooks/useUser";

type ActionFunction<T> = (formData: T) => Promise<any>;

export function useActionState<T extends FormData>(action: ActionFunction<T>) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [logged, setLogged] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { setUser } = useUsers();

  const formAction = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsPending(true);
      setErrorMessage(null);
      setLoading(true);

      const formData = new FormData(event.target as HTMLFormElement);

      try {
        const result = await action(formData as unknown as T);
        if (result.error) {
          console.log("No se pudo validar el usuario", result.error);
          setErrorMessage(result.error);
          setLogged(false);
          setLoading(false);
        } else {
          console.log("Usuario validado", result.user);
          setLogged(true);
          setUser(result.user);
          setLoading(false);
        }
      } catch (error) {
        setErrorMessage("Algo salió mal.");
        setLogged(false);
      } finally {
        setIsPending(false);
        setLoading(false);
      }
    },
    [action, setUser]
  );

  return [errorMessage, formAction, isPending, logged, loading] as const;
}
