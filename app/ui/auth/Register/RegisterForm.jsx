import Link from "next/link";
import GoogleAuth from "../Google/GoogleAuth";
import Email from "../form/Email";

export default function RegisterForm() {
    return (
      <section className="container m-auto w-96 mt-28 rounded-md p-6">
        <img src="../diengsid.png" alt="ilustrasi login" className="w-[200px] mx-auto" />
        <h2 className="text-left text-4xl font-semibold text-hitam my-12">Create your Account</h2>
        <form>
          <Email/>
          <Link href="/register/verification-mode">
            <button className="w-full p-3 bg-hijau rounded-xl mb-5 text-putih hover:shadow-sm hover:shadow-hijau transition-all" type="submit">Daftar</button>
          </Link>
        </form>
        <p className="text-center text-sm mb-5">atau</p>
        <GoogleAuth />
        <p className="mt-8 text-sm text-center">
          Sudah punya akun ?
          <Link href="/login">
            <span className="text-hijau hover:text-hitam"> Masuk</span>
          </Link>
        </p>
      </section>
    );
  }
