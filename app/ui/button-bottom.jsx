export default function ButtonBottom({ name }) {
  return (
    <div className="fixed inset-x-0 bottom-0 mx-auto mb-4 mt-2 max-w-[412px] px-4">
      <div className="rounded-full bg-hijau px-10 py-3 shadow-sm shadow-hijau">
        <p className="text-center text-sm text-putih">{name}</p>
      </div>
    </div>
  );
}
