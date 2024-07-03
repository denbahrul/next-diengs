export default function PaymentMethod({ img, name, icon }) {
  return (
    <div className="mt-4 flex justify-between rounded-lg border-[1px] border-biru3 p-5">
      <div className="flex">
        <img src={img} alt="ilustrasi login" className="mr-4 h-6" />
        <p className="font-semibold">{name}</p>
      </div>
      <div>{icon}</div>
    </div>
  );
}
