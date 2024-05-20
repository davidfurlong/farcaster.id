import { Frame } from "@/components/frame";

async function fetchPinnedFrames(username: string) {
  const options = {
    method: "GET",
    headers: { accept: "application/json", api_key: process.env.NEYNAR_API! },
  };

  const all = await fetch(
    `https://api.neynar.com/v2/farcaster/cast/conversation?identifier=${encodeURIComponent(
      "https://warpcast.com/df/0x6694c97e"
    )}&type=url&reply_depth=2&include_chronological_parent_casts=false&viewer_fid=3`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  const frameRepliesByUser = all.conversation.cast.direct_replies
    .filter(
      (reply: any) => reply.author.username === username && reply.frames?.length
    )
    .map((reply: any) => reply.frames[0]);

  return frameRepliesByUser;
}

export async function PinnedFrames({ username }: { username: string }) {
  const frameRepliesByUser = await fetchPinnedFrames(username);
  if (!frameRepliesByUser.length) return null;

  return (
    <div className="flex gap-2 flex-col">
      {frameRepliesByUser.map((frame: any, i: number) => (
        <Frame homeframeUrl={frame.frames_url} key={i} />
      ))}
    </div>
  );
}
