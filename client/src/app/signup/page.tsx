"use client"

import { SignupForm } from "@/components/signup-form"
import Image from "next/image"

export default function SignupPage() {

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>
    <div className="hidden lg:flex items-center justify-center bg-zinc-900 text-white p-15">
      <h5 className="max-w-2xl text-xl font-bold leading-[1.2]  whitespace-pre-line ">
        {`“Build. Create. Innovate.
Your account is more than just access — it’s the beginning of your digital journey. 
Sign up today and turn ideas into reality.”`}
      </h5>
    </div>
    </div>
  )
}
//authetication system with MERN stack, Next.js, Tailwind CSS, and Sonner for notifications. The signup page includes a form for users to create an account, and upon successful signup, they are redirected to the dashboard. The login page allows users to log in with their credentials, and upon successful login, they are also redirected to the dashboard. Both pages include a welcoming message on larger screens.
