"use client"
import { useRouter } from "next/router"

export default function Page({ params: { id_homestay} }) {
  return <div>My Post: {id_homestay}</div>
}