"use client"
import { signIn } from "next-auth/react"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Bounce, toast } from "react-toastify"

export default function Page() {

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const onClick = (provider: "github" | "google") => {
    signIn(provider, {
			callbackUrl: '/admin/dashboard'
		}).then(() => {
      console.log("Sign-in success");
      setSuccess(true);
    }).catch(error => {
      console.error("Sign-in error:", error);
      setError(error);
    });
  }

  useEffect(() => {
    if (success) {
      toast.error(success, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    }
  }, [success]);
  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    }
  }, [error]);

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8 ">
      <div className="mx-auto max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Admin Login</h1>
          <p className="text-muted-foreground">Authenticate your GitHub credentials.</p>
        </div>
        <Button variant="outline" className="w-full" onClick={() => onClick('github')} >
          <Icons.github className="mr-2 h-4 w-4 " />
          Login with GitHub
        </Button>
      </div>
    </div>
  )
}
