"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function CreatePage() {
  const [handle, setHandle] = useState("");
  const router = useRouter();
  return (
    <span className="group rounded-lg border border-transparent mt-4 px-5 transition-colors bg-white border-slate-200 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      https://farcaster.id/
      <input
        value={handle}
        onChange={(event) => {
          return setHandle(event.target.value);
        }}
        placeholder="your farcaster handle"
        className="outline-none bg-transparent py-4"
      />
      <Button
        size={"sm"}
        className="ml-auto -mr-2"
        onClick={() => router.push(`/${handle.replace("@", "")}`)}
      >
        Go
      </Button>
    </span>
  );
}
