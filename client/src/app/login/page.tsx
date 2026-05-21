import { GalleryVerticalEnd } from "lucide-react"
import { LoginForm } from "@/components/login-form"
export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
    <div className="hidden lg:flex items-center justify-center bg-zinc-900 text-white p-15">
      <h5 className="max-w-2xl text-xl font-bold leading-[1.2]  whitespace-pre-line ">
        {`“Welcome back.
    Your journey, your work, your progress —
    it all continues here.

    Sign in and keep building
    the future you started.”`}
      </h5>
    </div>
        </div>
  )
}
