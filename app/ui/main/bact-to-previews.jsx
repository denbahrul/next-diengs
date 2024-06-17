"use client";
import { useRouter } from "next/navigation";
import { HiArrowNarrowLeft } from "react-icons/hi";
export default function BackToPreviewsPage() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()}>
      <HiArrowNarrowLeft size={24} className="my-auto mr-4" />
    </button>
  );
}
