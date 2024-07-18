export default function PaymentMethod({ img, name, icon }) {
  return (
    <div className="mt-4 flex justify-between bg-putih rounded-2xl p-5 shadow-2xl shadow-background">
      <div className="flex">
        <img src={img} alt="ilustrasi login" className="mr-4 h-6" />
        <p className="font-semibold">{name}</p>
      </div>
      <div>{icon}</div>
    </div>
  );
}
