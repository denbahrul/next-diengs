import Link from "next/link";

export default function RegisterForm() {
    return (
      <section className="container m-auto w-96 mt-32 rounded-md p-6">
        <img src="../diengsid.png" alt="ilustrasi login" className="w-[200px] mx-auto" />
        <h2 className="text-left text-4xl font-semibold text-hitam mt-12 mb-4">Register with email</h2>
        <p className="text-left text-xl font-medium text-abu2 mb-12">diengs@gmail.com</p>
        <form>
        <input className="bg-[#f7f7f7] p-3 w-full rounded-xl mb-5 text-sm focus:bg-[#dfffea] focus:ring-1 focus:ring-hijau" type="text" name="" id="name" placeholder="Name"/>
          <input className="bg-[#f7f7f7] p-3 w-full rounded-xl mb-5 text-sm focus:bg-[#dfffea] focus:ring-1 focus:ring-hijau" type="password" name="" id="password" placeholder="Password"/>
          <Link href="/register/verification-mode">
            <button className="w-full p-3 bg-hijau rounded-xl mb-5 text-putih hover:shadow-sm hover:shadow-hijau transition-all" type="submit">Selesai</button>
          </Link>
        </form>
        <p className="text-center text-sm mt-8">
          Dengan mendaftar, saya menyetujui
          <br />
          <span className="text-hijau">Syarat dan Ketentuan</span>
          {' '}
          serta
          {' '}
          <span className="text-hijau">Kebijakan Privasi</span>
        </p>
      </section>
    );
  }
