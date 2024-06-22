import RoomCardGrid from "../room-card-grid";

export default function GridView() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <RoomCardGrid />
        <RoomCardGrid />
        <RoomCardGrid />
      </div>
    </>
  );
}
