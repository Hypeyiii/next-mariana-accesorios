"use client";

import { teko } from "@/app/ui/fonts";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { useActionState } from "@/app/hooks/useActionState";
import { register } from "@/app/lib/actions";
import styles from "@/app/components/styles/button.module.css";
import line from "@/app/components/styles/home.module.css";
import Link from "next/link";

export default function SignUpForm() {
  const [errorMessage, formAction, isPending] = useActionState(register);

  return (
    <form onSubmit={formAction}>
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${teko.className} uppercase mb-3 text-2xl`}>
          M+ Create an Account
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <button
          className={`${styles.buttonHover} text-xs w-full m-auto flex justify-center items-center mt-6 [&>svg]:hover:text-black transition-all`}
          aria-disabled={isPending}
        >
          Log in{" "}
          <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50 transition-all duration-300" />
        </button>
        <Link href="/account/login">
          <p
            className={`text-xs text-gray-900 mt-3 block text-center w-fit m-auto`}
          >
            Ya tienes cuenta?{" "}
            <span className={`${line.line}`}>Inicia sesión</span>
          </p>
        </Link>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}