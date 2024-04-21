export default function Home() {
  return (
    <main className="flex flex-row items-center justify-between p-24">
      <div className="flex flex-col">
        <span>Share your own Farcaster.id page. Some example pages below</span>
        <a
          href="https://farcaster.id/dwr"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://farcaster.id/dwr
        </a>
        <a
          href="https://farcaster.id/vitalik.eth"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://farcaster.id/vitalik.eth
        </a>
        <a
          href="https://farcaster.id/df"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://farcaster.id/df
        </a>
      </div>
    </main>
  );
}
