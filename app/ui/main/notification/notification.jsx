import NotificationCard from "./notification-card";

export default function Notification() {
  return (
    <>
      <p className="text-sm font-semibold">Today</p>
      <NotificationCard />
      <NotificationCard />
      <p className="text-sm font-semibold">Yesday</p>
      <NotificationCard />
      <NotificationCard />
    </>
  );
}
