import { FcGoogle } from "react-icons/fc";
import { signIn } from "@/auth";

export default function GoogleAuth() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", {
          redirectTo: "/profile",
        });
      }}
    >
      <button
        type="submit"
        className="flex w-full justify-center rounded-xl p-3 text-sm ring-1 ring-abu transition-all hover:shadow-sm hover:shadow-abu"
      >
        <FcGoogle size={24} />
        <span className="my-auto ml-2">Lanjutkan Dengan Google</span>
      </button>
    </form>
  );
}
