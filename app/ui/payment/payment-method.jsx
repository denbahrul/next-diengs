export default function PaymentMethod({img, name, icon}) {
    return (
    <div className="flex p-5 mt-4 border-[1px] border-biru3 rounded-lg justify-between">
        <div className="flex">
          <img  src={img} alt="ilustrasi login" className="h-6 mr-4"/>
          <p className="font-semibold">{name}</p>
        </div>
        <div>{icon}</div>
    </div>
    )
}