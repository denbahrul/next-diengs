"use client";
import Link from "next/link";
import GoogleAuth from "../Google/GoogleAuth";
import Email from "../form/Email";
import Password from "../form/Password";
import useInput from "@/hooks/useInput";
import { login } from "@/data/fetch-api";

export default function Login() {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  async function onLoginHandler(event) {
    event.preventDefault();

    try {
      const data = await login(email, password);
      console.log("Login succesfull", data);
    } catch (error) {
      console.error("Login failed", error);
    }
  }

  return (
    <section className="container m-auto w-96 p-6">
      <img
        src="../diengsid.png"
        alt="ilustrasi login"
        className="mx-auto w-[200px]"
      />
      <h2 className="my-12 text-left text-4xl font-semibold text-hitam">
        Login to your Account
      </h2>
      <form onSubmit={onLoginHandler}>
        <Email email={email} onEmailChange={onEmailChange} />
        <Password password={password} onPasswordChange={onPasswordChange} />
        <p className="mb-5 text-end text-xs text-hijau">Lupa Password?</p>
        <Link href="/">
          <button
            className="mb-5 w-full rounded-full bg-hijau p-3 text-putih transition-all hover:shadow-sm hover:shadow-hijau"
            type="submit"
          >
            Masuk
          </button>
        </Link>
      </form>
      <p className="mb-5 text-center text-sm">atau</p>
      <GoogleAuth />
      <p className="mt-8 text-center text-sm">
        Belum punya akun ?
        <Link href="/register">
          <span className="text-hijau hover:text-hitam"> Daftar</span>
        </Link>
      </p>
    </section>
  );
}
