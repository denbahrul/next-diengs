"use client";
import Link from "next/link";
import GoogleAuth from "../Google/GoogleAuth";
import Email from "../form/Email";
import Password from "../form/Password";
import useInput from "@/hooks/useInput";
import { login } from "@/data/fetch-api";

export default function Login() {
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    
    async function onLoginHandler(event) {
      event.preventDefault();

      try {
        const data = await login(email, password);
        console.log('Login succesfull', data);
      } catch(error) {
        console.error('Login failed', error);
      }
    }

    return (
      <section className="container m-auto w-96 p-6">
        <img src="../diengsid.png" alt="ilustrasi login" className="w-[200px] mx-auto" />
        <h2 className="text-left text-4xl font-semibold text-hitam my-12">Login to your Account</h2>
        <form onSubmit={onLoginHandler}>
          <Email email={email} onEmailChange={onEmailChange}/>
          <Password password={password} onPasswordChange={onPasswordChange}/>
          <p className="text-end text-xs mb-5 text-hijau">Lupa Password?</p>
          {/* <Link href="/"> */}
            <button className="w-full p-3 bg-hijau rounded-full mb-5 text-putih hover:shadow-sm hover:shadow-hijau transition-all" 
            type="submit"
            >Masuk</button>
          {/* </Link> */}
        </form>
        <p className="text-center text-sm mb-5">atau</p>
        <GoogleAuth />
        <p className="mt-8 text-sm text-center">
          Belum punya akun ?
          <Link href="/register">
            <span className="text-hijau hover:text-hitam"> Daftar</span>
          </Link>
        </p>
      </section>
    );
  }