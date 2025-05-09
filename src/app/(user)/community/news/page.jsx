"use client";

import React, { useEffect, useState } from "react";

import { HashtagIcon } from "@heroicons/react/24/outline";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export default function Page() {
  const [topNews, setTopNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [localNews, setLocalNews] = useState([]);
  const [foreignNews, setForeignNews] = useState([]);

  useEffect(() => {
    const fetchTopNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=philippines&from=2025-05-08&to=2025-05-08&sortBy=popularity&apiKey=8710e108d64149a482f4d3efc3adafcb"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log(data);

        // Add two news for topNews
        const topTwoNews = data.articles.slice(0, 2);
        setTopNews(topTwoNews);

        // Separate local and foreign news
        const local = data.articles.filter((article) =>
          article.source.name.toLowerCase().includes("philippines")
        );
        const foreign = data.articles.filter(
          (article) =>
            !article.source.name.toLowerCase().includes("philippines")
        );

        setLocalNews(local);
        setForeignNews(foreign);
      } catch (error) {
        console.error("Error fetching top news:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopNews();
  }, []);

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
                className="border-b border-slate-200 mt-4 w-full px-4"
              >
                <Tab key="foryou" title="For You">
                  <div className="p-2 px-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      {loading && <p>Loading...</p>}
                      <Card className="w-full relative">
                        <img
                          src={topNews[0]?.urlToImage}
                          alt="Top News"
                          className="w-full h-auto rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
                          <h3 className="font-bold text-xl text-white mb-2">
                            {topNews[0]?.title}
                          </h3>
                          <p className="text-white">{topNews[0]?.description}</p>
                        </div>
                      </Card>
                      <Card className="w-full relative">
                        <img
                          src={topNews[1]?.urlToImage}
                          alt="Top News"
                          className="w-full h-auto rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
                          <h3 className="font-bold text-xl text-white mb-2">
                            {topNews[1]?.title}
                          </h3>
                          <p className="text-white">{topNews[1]?.description}</p>
                        </div>
                      </Card>
                    </div>
                  </div>
                </Tab>
                <Tab key="trending" title="Trending"></Tab>
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
