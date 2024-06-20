import CanceledCard from "./cards/canceled-card";
import CompletedCard from "./cards/completed-card";
import OngoingCard from "./cards/ongoing-card";

export default function All() {
  return (
    <>
      <OngoingCard />
      <CompletedCard />
      <CanceledCard />
    </>
  );
}
