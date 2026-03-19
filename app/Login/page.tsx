import { LoginForm } from "@/components/login-form"
import LoginImage from "@/public/computer-security-with-login-password-padlock.jpg"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <LoginForm />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden lg:flex items-center justify-center bg-white p-10">
        <img
          src={LoginImage.src}
          alt="Login"
          className="max-w-full max-h-full object-contain"
        />
      </div>

    </div>
  )
}