import { baseUrl } from "@/lib/config";
import { SerializedChannels } from "@/lib/types";
import { numberWithCommas } from "@/lib/utils";
import Image from "next/image";

export async function HostingChannels({ username }: { username: string }) {
  const { channels }: { channels: SerializedChannels[] } = await fetch(
    `${baseUrl}/${username}/hosting`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  if (!channels.length) return null;

  return (
    <div className="flex flex-col gap-1 mt-8 items-start">
      <h3 className="uppercase text-slate-400 text-sm mb-2">
        Hosting {channels.length} channels
      </h3>
      {channels
        .sort((a, b) => (b.follower_count! || 0) - (a.follower_count! || 0))
        .map((channel: any) => {
          return (
            <a
              key={channel.id}
              href={`https://farcaster.id/c/${channel.id}`}
              target="_blank"
              rel="noreferer noopener"
            >
              <div className="cursor-pointer flex flex-row gap-2 items-center">
                <div className="w-[36px] h-[36px] flex-shrink-0">
                  <div className="w-[36px] h-[36px] absolute">
                    <Image
                      className="rounded border"
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                      sizes="(max-width: 768px) 36px, 36px"
                      src={channel.image_url}
                      alt={channel.id}
                    />
                  </div>
                </div>
                <div className="px-2 py-1 flex gap-0 flex-col">
                  <h1 className="m-0 p-0 flex flex-row gap-1">
                    <div className="font-bold text-sm">
                      {channel.name}{" "}
                      <span className="font-normal">/{channel.id}</span>
                    </div>
                  </h1>
                  <div className="text-slate-500 text-sm">
                    {numberWithCommas(channel.follower_count)} Followers
                  </div>
                </div>
              </div>
            </a>
          );
        })}
    </div>
  );
}
