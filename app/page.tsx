import { CreateChannel } from "./create-channel";
import { CreatePage } from "./create-page";

export default function Home() {
  return (
    <main className="flex flex-row items-center justify-between p-24">
      <div className="flex flex-col gap-4">
        <div className="pb-6 flex flex-row items-center gap-3 w-[400px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 1000 1000"
            fill="none"
          >
            <rect width="1000" height="1000" rx="200" fill="#855DCD" />
            <path
              d="M257.778 155.556H742.222V844.444H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.444H257.778V155.556Z"
              fill="white"
            />
            <path
              d="M128.889 253.333L157.778 351.111H182.222V746.667C169.949 746.667 160 756.616 160 768.889V795.556H155.556C143.283 795.556 133.333 805.505 133.333 817.778V844.444H382.222V817.778C382.222 805.505 372.273 795.556 360 795.556H355.556V768.889C355.556 756.616 345.606 746.667 333.333 746.667H306.667V253.333H128.889Z"
              fill="white"
            />
            <path
              d="M675.556 746.667C663.283 746.667 653.333 756.616 653.333 768.889V795.556H648.889C636.616 795.556 626.667 805.505 626.667 817.778V844.444H875.556V817.778C875.556 805.505 865.606 795.556 853.333 795.556H848.889V768.889C848.889 756.616 838.94 746.667 826.667 746.667V351.111H851.111L880 253.333H702.222V746.667H675.556Z"
              fill="white"
            />
          </svg>
          <span className="font-bold text-xl">farcaster.id</span>
        </div>
        <span className="font-bold">
          Create and share your own Farcaster.id page
        </span>
        <span>Profiles</span>
        <a
          href="https://farcaster.id/dwr"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors bg-white border-slate-200 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          farcaster.id/dwr
        </a>
        <a
          href="https://farcaster.id/vitalik.eth"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors bg-white border-slate-200 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          farcaster.id/vitalik.eth
        </a>
        <a
          href="https://farcaster.id/df"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors bg-white border-slate-200 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          farcaster.id/df
        </a>
        <CreatePage />
        <span>Channels</span>
        <a
          href="https://farcaster.id/c/product"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors bg-white border-slate-200 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          farcaster.id/c/product
        </a>
        <a
          href="https://farcaster.id/c/memes"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors bg-white border-slate-200 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          farcaster.id/c/memes
        </a>
        <a
          href="https://farcaster.id/c/degen"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors bg-white border-slate-200 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          farcaster.id/c/degen
        </a>
        <CreateChannel />
      </div>
    </main>
  );
}
