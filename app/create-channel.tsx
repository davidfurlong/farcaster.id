"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function CreateChannel() {
  const [handle, setHandle] = useState("");
  const router = useRouter();
  return (
    <span className="group rounded-lg border border-transparent px-5 transition-colors bg-white border-slate-200 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      farcaster.id/c/
      <input
        value={handle}
        onChange={(event) => {
          return setHandle(event.target.value);
        }}
        placeholder="your channel handle"
        className="outline-none bg-transparent py-4"
      />
      <Button
        size={"sm"}
        className="ml-auto -mr-2"
        onClick={() => router.push(`/c/${handle.replace("@", "")}`)}
      >
        Go
      </Button>
    </span>
  );
}
