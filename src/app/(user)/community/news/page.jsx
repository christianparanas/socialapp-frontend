"use client";

import React from "react";

import { HashtagIcon } from "@heroicons/react/24/outline";
import { Tabs, Tab } from "@nextui-org/react";

export default function Page() {
  return (
    <div>
      <div className="grid grid-cols-[1fr_400px]">
        <div className="">
          <div>
            <div className="p-6">
              <h2 className="font-bold text-4xl mb-6">News</h2>
              <div>
                <div>
                  <input
                    type="text"
                    placeholder="Search News"
                    className="w-full border border-slate-200 outline-none p-2 px-6 rounded-full"
                  />
                </div>
                <div className="flex gap-2 mt-4 px-2">
                  <div className="flex gap-1 border border-slate-200 px-3 py-1 rounded-full w-fit text-[12px] cursor-pointer hover:bg-slate-200">
                    <HashtagIcon className="w-3" />
                    <div>Health</div>
                  </div>
                  <div className="flex gap-1 border border-slate-200 px-3 py-1 rounded-full w-fit text-[12px] cursor-pointer hover:bg-slate-200">
                    <HashtagIcon className="w-3" />
                    <div>Health</div>
                  </div>
                  <div className="flex gap-1 border border-slate-200 px-3 py-1 rounded-full w-fit text-[12px] cursor-pointer hover:bg-slate-200">
                    <HashtagIcon className="w-3" />
                    <div>Health</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Tabs
                key="underlined"
                aria-label="Tabs variants"
                variant="underlined"
                className="border-b border-slate-200 mt-4 w-full "
              >
                <Tab key="photos" title="For You" className="mx-6">
                  erwer
                </Tab>
                <Tab key="music" title="Traindeng" className="mx-6">
                  www
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
        <div className="p-6 border-l-1 border-slate-200">
          <h2 className="font-bold text-2xl mb-6">News</h2>
        </div>
      </div>
    </div>
  );
}
