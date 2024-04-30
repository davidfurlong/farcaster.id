import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { fromNow, numberWithCommas } from "@/lib/utils";

export const revalidate = 3600; // revalidate at most every hour

type Props = {
  params: { channelid: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const channel = await fetchChannel(params.channelid);

  if (!channel) return {};

  return {
    title: `${channel.name} (/${params.channelid}) on Farcaster`,
    description: channel.description,
    openGraph: {
      images: [channel.image_url],
    },
  };
}

async function fetchChannel(channelid: string) {
  const options = {
    method: "GET",
    headers: { accept: "application/json", api_key: process.env.NEYNAR_API! },
  };

  const result = await fetch(
    `https://api.neynar.com/v2/farcaster/channel?id=${channelid.toLowerCase()}&viewerFid=3`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return result?.channel;
}

export default async function Page({ searchParams, params }: Props) {
  if (!params.channelid) throw new Error("");

  const channel = await fetchChannel(params.channelid);

  if (!channel) return notFound();

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <Card className="sm:w-[400px] max-w-[400px] w-full p-0 overflow-hidden">
        <CardHeader className="p-4 pt-8 text-center flex flex-col items-center relative">
          <span className="opacity-20 ml-2 absolute left-4 top-5 text-xl">
            {fromNow(new Date(channel.created_at * 1000))}
          </span>
          <span className="opacity-20 ml-2 text-sm absolute right-4 top-3">
            <a
              href={`https://warpcast.com/~/channel/${channel.id}`}
              rel="noopener noreferer"
              target="_blank"
            >
              <ExternalLink />
            </a>
          </span>
          <div className="w-[128px] h-[128px] relative">
            <Image
              className="rounded border"
              fill
              style={{
                objectFit: "cover",
              }}
              sizes="(max-width: 768px) 128px, 128px"
              src={channel.image_url}
              alt={params.channelid}
            />
          </div>
          <div className="px-6 py-4 flex gap-2 flex-col">
            <h1 className="m-0 p-0 flex flex-row items-center justify-center gap-4">
              <div className="font-bold text-xl">
                {channel.name}{" "}
                <span className="font-normal">/{params.channelid}</span>
              </div>
            </h1>
            <div className="text-slate-500">
              {numberWithCommas(channel.follower_count)} Followers
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6 mt-0 border-t border-dashed">
          <CardDescription className="text-lg text-slate-800 mt-0 pt-0">
            {channel.description}
          </CardDescription>
        </CardContent>
        <CardFooter>
          <div className="flex flex-col gap-3 items-start">
            <h3 className="uppercase text-slate-400 text-sm">Hosted by</h3>
            {channel.hosts?.map((host: any) => {
              return (
                <a
                  key={host.username}
                  href={`https://farcaster.id/${host.username}`}
                  target="_blank"
                  rel="noreferer noopener"
                >
                  <div className="cursor-pointer flex flex-row gap-2 items-center">
                    <div
                      className="w-[36px] h-[36px] flex-shrink-0"
                      key={host.fid}
                    >
                      <div className="w-[36px] h-[36px] absolute">
                        <Image
                          className="rounded-full"
                          src={
                            host.pfp_url ||
                            "https://wrpcd.net/cdn-cgi/image/fit=contain,f=auto,w=144/https%3A%2F%2Fwarpcast.com%2Favatar.png"
                          }
                          sizes="(max-width: 768px) 36px, 36px"
                          quality={75}
                          alt={host.fid}
                          fill
                          style={{
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-600 text-sm">
                        <span className="font-bold">{host.display_name}</span> @
                        {host.username}
                      </div>
                      {/* <div className="text-slate-400 text-sm">
                        {numberWithCommas(host.follower_count)} Followers
                      </div> */}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </CardFooter>
      </Card>
      <div className="flex justify-around sm:w-[400px] w-full items-center my-6">
        <a
          href={`https://warpcast.com/~/channel/${params.channelid}`}
          rel="noopener noreferer"
          className="opacity-30 grayscale hover:grayscale-0 hover:scale-110 hover:animate-in hover:opacity-100"
          target="_blank"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 1260 1260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_2)">
              <path
                d="M947.747 1259.61H311.861C139.901 1259.61 0 1119.72 0 947.752V311.871C0 139.907 139.901 0.00541362 311.861 0.00541362H947.747C1119.71 0.00541362 1259.61 139.907 1259.61 311.871V947.752C1259.61 1119.72 1119.71 1259.61 947.747 1259.61Z"
                fill="#472A91"
              ></path>
              <path
                d="M826.513 398.633L764.404 631.889L702.093 398.633H558.697L495.789 633.607L433.087 398.633H269.764L421.528 914.36H562.431L629.807 674.876L697.181 914.36H838.388L989.819 398.633H826.513Z"
                fill="white"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_1_2">
                <rect width="1259.61" height="1259.61" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </a>
        <a
          href={`https://www.supercast.xyz/channel/${params.channelid}`}
          rel="noopener noreferer"
          className="opacity-30 grayscale hover:grayscale-0 hover:scale-110 hover:animate-in hover:opacity-100"
          target="_blank"
        >
          <Image
            src="https://www.supercast.xyz/supercast-logo-black.png"
            width="32"
            height="32"
            alt="supercast"
          />
        </a>
        <a
          href={`https://www.nook.social/channels/${params.channelid}`}
          rel="noopener noreferer"
          className="opacity-30 grayscale hover:grayscale-0 hover:scale-110 hover:animate-in hover:opacity-100"
          target="_blank"
        >
          <Image
            src="https://i.imgur.com/t0kK8LT.jpg"
            width="32"
            className="rounded-lg"
            height="32"
            alt="nook"
          />
        </a>
        {/* <a
            href={`https://www.herocast.xyz/${params.channelid}`}
            rel="noopener noreferer"
            className="opacity-30 grayscale hover:grayscale-0 hover:scale-110 hover:animate-in hover:opacity-100"
            target="_blank"
          >
            <Image
              src="https://app.herocast.xyz/_next/static/media/logo.c3a4589d.png"
              width="32"
              height="32"
              alt="herocast"
            />
          </a> */}
        {/*  */}
        {/* <a
          href={`https://firefly.mask.social/profile/${FIXME}?source=farcaster`}
          rel="noopener noreferer"
          className="opacity-30 grayscale hover:grayscale-0 hover:scale-110 hover:animate-in hover:opacity-100"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            scale="0.2"
            viewBox="5 5 20 46"
            fill="none"
          >
            <g>
              <path
                fill="#d543ed"
                d="M2.67 9.14h2.67v2.63H2.67zm5.35 5.26H5.34v2.63H2.67v10.51H0V40.7h2.67v5.25h2.67v2.63h2.68v2.63h16.03v-2.63h2.67v-2.63h2.68v-2.63h2.67V30.17H29.4v-5.26h-2.68v-5.25h-2.67v-2.63h2.67V14.4h-2.67v2.63h-2.67V14.4H18.7v-2.63h-5.35V9.14H10.7v5.26h2.67v2.63H10.7v5.26H8.02v-2.63H5.34v-2.63h2.68z"
              ></path>
              <path
                fill="#9250ff"
                d="M16.03 17.03h2.68v2.63h2.67v2.63h2.67v5.25h2.67v5.26h2.68v10.51h-2.68v2.63h-2.67v2.63H10.7v-2.63H5.35V40.7H2.67V30.17h2.68v-5.26h8.01V22.3h2.67v-5.26zm-8.01 2.63H5.35v2.63h2.67z"
              ></path>
              <path
                fill="#9787fc"
                d="M16.03 22.29h2.68v2.62h-2.68V22.3zm8.02 13.14v-5.26h-2.67v-5.26H18.7v2.63h-5.35v2.63H10.7v-2.63H8.02v5.26H5.34v13.14h5.35v2.63h13.36v-5.26h2.67v-7.88z"
              ></path>
              <path fill="#fff" d="M18.7 27.54h-2.67v2.63h2.68v-2.63z"></path>
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M10.69 32.8v2.63H8.02v10.51h2.67v2.63h10.69v-2.63h2.67V35.43h-2.67V32.8zm0 5.26h2.67v5.25H10.7v-5.25zm10.69 5.25v-5.25H18.7v5.25h2.67z"
                clipRule="evenodd"
              ></path>
            </g>
          </svg>
        </a> */}
        {/* <a
          href={`https://app.yup.io/account/${FIXME}`}
          rel="noopener noreferer"
          className="opacity-30 grayscale hover:grayscale-0 hover:scale-110 hover:animate-in hover:opacity-100"
          target="_blank"
        >
          <Image
            src="https://avatars.githubusercontent.com/u/57748591?s=200&v=4"
            width="40"
            height="40"
            className="rounded-lg"
            alt="yup"
          />
        </a> */}
      </div>
    </div>
  );
}
