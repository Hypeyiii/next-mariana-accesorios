import { useState, useCallback, FormEvent } from "react";

type ActionFunction<T> = (formData: T) => Promise<string | null>;

export function useActionState<T extends FormData>(action: ActionFunction<T>) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);

  const formAction = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsPending(true);
      setErrorMessage(null);

      const formData = new FormData(event.target as HTMLFormElement);

      try {
        const result = await action(formData as unknown as T);
        if (result) {
          setErrorMessage(result);
        }
      } catch (error) {
        setErrorMessage("Something went wrong.");
      } finally {
        setIsPending(false);
      }
    },
    [action]
  );

  return [errorMessage, formAction, isPending] as const;
}
