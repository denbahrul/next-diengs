"use client";
import { useRouter } from "next/router";
import Description from "@/app/ui/detail/description";
import Destination from "@/app/ui/detail/destination";
import Facility from "@/app/ui/detail/facility";
import HotelImageHeader from "@/app/ui/detail/hotel-image-header";
import ImageCard from "@/app/ui/detail/image-card";
import Location from "@/app/ui/detail/location";
import Navigation from "@/app/ui/detail/top-navigation/navigation";
import ReviewList from "@/app/ui/detail/review/review-list";
import RoomList from "@/app/ui/detail/room/room-list";
import Rules from "@/app/ui/detail/rules";
import Share from "@/app/ui/detail/top-navigation/share";
import SelectRoomNav from "@/app/ui/detail/select-room-nav";

export default function Page() {
  return (
    <div>
      <div className="contine mx-auto max-w-[420px]">
        <Navigation />
        <Share />
        <ImageCard />
        <HotelImageHeader />
        <Description />
        <SelectRoomNav />
        <Facility />
        <Location />
        <Destination />
        <Rules />
        <RoomList />
        <ReviewList />
      </div>
    </div>
  );
}
