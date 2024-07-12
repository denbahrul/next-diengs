"use client";
import { useState, useEffect } from "react";
import clsx from "clsx";
import BackToPreviewsPage from "@/app/ui/main/bact-to-previews";
import ListView from "@/app/ui/main/bookmark/list-view";
import { HiOutlineViewGrid, HiViewGrid } from "react-icons/hi";
import { HiOutlineQueueList, HiQueueList } from "react-icons/hi2";
import GridView from "@/app/ui/main/bookmark/grid-view";
export default function Favorite() {
  const [view, setView] = useState("");

  useEffect(() => {
    const view = JSON.parse(localStorage.getItem("view"));
    if (view) {
      setView(view);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("view", JSON.stringify(view));
  }, [view]);

  const changeGridViewHandler = () => setView("grid");
  const changeListViewHandler = () => setView("list");

  return (
    <>
      <nav className="m-6 flex flex-row justify-between">
        <div className="flex">
          <BackToPreviewsPage />
          <h2 className="my-auto font-bold">My Bookmark</h2>
        </div>
        <div className="flex text-abu2">
          {(view === "list" && (
            <HiQueueList
              onClick={changeListViewHandler}
              size={24}
              className={clsx("my-auto mr-4 text-abu2", {
                "text-hijau": view === "list",
              })}
            />
          )) || (
            <HiOutlineQueueList
              onClick={changeListViewHandler}
              size={24}
              className={clsx("my-auto mr-4 text-abu2", {
                "text-hijau": view === "list",
              })}
            />
          )}
          {/* <HiOutlineQueueList
            onClick={changeListViewHandler}
            size={24}
            className={clsx("my-auto mr-4 text-abu2", {
              "text-hijau": view === "list",
            })}
          /> */}
          {(view === "grid" && (
            <HiViewGrid
              onClick={changeGridViewHandler}
              size={24}
              className={clsx("my-auto text-abu2", {
                "text-hijau": view === "grid",
              })}
            />
          )) || (
            <HiOutlineViewGrid
              onClick={changeGridViewHandler}
              size={24}
              className={clsx("my-auto text-abu2", {
                "text-hijau": view === "grid",
              })}
            />
          )}
          {/* <HiOutlineViewGrid
            onClick={changeGridViewHandler}
            size={24}
            className={clsx("my-auto text-abu2", {
              "text-hijau": view === "grid",
            })}
          /> */}
        </div>
      </nav>
      <section className="mx-6">
        {view === "grid" ? <GridView /> : <ListView />}
      </section>
    </>
  );
}
