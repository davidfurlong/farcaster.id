import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { username: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const user = await fetchUser(params.username);

  return {
    title: `${user.displayName} (@${params.username}) on Farcaster`,
    description: user.profile.bio.text,
    openGraph: {
      images: [user.pfp.url],
    },
  };
}

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

async function fetchUser(username: string) {
  const options = {
    method: "GET",
    headers: { accept: "application/json", api_key: process.env.NEYNAR_API! },
  };

  const {
    result: { user },
  } = await fetch(
    `https://api.neynar.com/v1/farcaster/user-by-username?username=${username}&viewerFid=3`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return user;
}

export default async function Page({ searchParams, params }: Props) {
  if (!params.username) throw new Error("");

  const user = await fetchUser(params.username);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <Card className="w-[350px] p-0 overflow-hidden">
        <CardHeader className="p-0">
          <div className="relative">
            <Image
              className="mb-4"
              src={user.pfp.url}
              alt={params.username}
              width={350}
              height={350}
            />
          </div>
          <div className="px-6 pb-6 flex gap-2 flex-col">
            <CardTitle className="m-0 p-0 flex flex-row items-center gap-2">
              <div className="-ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 1000 1000"
                  fill="none"
                >
                  <path
                    d="M257.778 155.556H742.222V844.445H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.445H257.778V155.556Z"
                    fill="#855DCD"
                  />
                  <path
                    d="M128.889 253.333L157.778 351.111H182.222V746.667C169.949 746.667 160 756.616 160 768.889V795.556H155.556C143.283 795.556 133.333 805.505 133.333 817.778V844.445H382.222V817.778C382.222 805.505 372.273 795.556 360 795.556H355.556V768.889C355.556 756.616 345.606 746.667 333.333 746.667H306.667V253.333H128.889Z"
                    fill="#855DCD"
                  />
                  <path
                    d="M675.556 746.667C663.283 746.667 653.333 756.616 653.333 768.889V795.556H648.889C636.616 795.556 626.667 805.505 626.667 817.778V844.445H875.556V817.778C875.556 805.505 865.606 795.556 853.333 795.556H848.889V768.889C848.889 756.616 838.94 746.667 826.667 746.667V351.111H851.111L880 253.333H702.222V746.667H675.556Z"
                    fill="#855DCD"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                {user.displayName}
                <span className="font-normal">
                  @{params.username}{" "}
                  <span className="opacity-20 ml-2">#{user.fid}</span>
                </span>
              </div>
            </CardTitle>
            <CardDescription>
              {numberWithCommas(user.followerCount)} Followers ·{" "}
              {numberWithCommas(user.followingCount)} Following
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-lg text-slate-800">
            {user.profile.bio.text}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between bg-slate-100 border-t-slate-200 border-t pt-6">
          <a
            href={`https://warpcast.com/${params.username}`}
            rel="noopener noreferer"
            className="opacity-70 hover:opacity-100"
            target="_blank"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 1260 1260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_2)">
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
            href={`https://www.supercast.xyz/${params.username}`}
            rel="noopener noreferer"
            className="opacity-70 hover:opacity-100"
            target="_blank"
          >
            <Image
              src="https://www.supercast.xyz/supercast-logo-black.png"
              width="32"
              height="32"
              alt="supercast"
            />
          </a>
          {/* <a
            href={`https://www.herocast.xyz/${params.username}`}
            rel="noopener noreferer"
            className="opacity-70 hover:opacity-100"
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
          <a
            href={`https://firefly.mask.social/profile/${user.fid}?source=farcaster`}
            rel="noopener noreferer"
            className="opacity-70 hover:opacity-100"
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
                  fill-rule="evenodd"
                  d="M10.69 32.8v2.63H8.02v10.51h2.67v2.63h10.69v-2.63h2.67V35.43h-2.67V32.8zm0 5.26h2.67v5.25H10.7v-5.25zm10.69 5.25v-5.25H18.7v5.25h2.67z"
                  clip-rule="evenodd"
                ></path>
              </g>
            </svg>
          </a>
          {user.verifiedAddresses.eth_addresses.length ? (
            <a
              href={`https://app.yup.io/account/${user.verifiedAddresses.eth_addresses[0]}`}
              rel="noopener noreferer"
              className="opacity-70 hover:opacity-100"
              target="_blank"
            >
              <Image
                src="https://avatars.githubusercontent.com/u/57748591?s=200&v=4"
                width="40"
                height="40"
                alt="yup"
              />
            </a>
          ) : null}
        </CardFooter>
      </Card>
    </div>
  );
}
