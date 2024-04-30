type User = {
  username?: string;
  fid: number;
  custodyAddress: string;
  verifiedAddresses?: string[];
};

type Channel = {
  /** the unique short name of the channel */
  id: string;
};

type Cast = {
  hash: string;
  /** author fid */
  fid: string;
  /** author username */
  username: string;
};

type ComposeCast = {
  text: string;
  embeds?: string[];
  channelid?: string;
};

type RegistryEntry = {
  /** an svg logo of the app, intended for large screen sizes */
  logo: string;
  /** an svg logo of the app, intended for small sizes (below 64px) */
  icon: string;
  /** a short description of the app */
  description: string;
  /** the homepage of the app */
  url: string;
  /** the fids of the creators or authors of the app */
  authorFids: number[];
  /** get a user's profile page on the app  */
  user?: (u: User) => string | null;
  /** get a channels's page on the app  */
  channel?: (c: Channel) => string | null;
  /** get a casts's page on the app  */
  cast?: (c: Cast) => string | null;
  /** get a compose cast page on the app  */
  compose?: (c: ComposeCast) => string | null;
};

export const farapps: Record<string, RegistryEntry> = {
  warpcast: {
    logo: "",
    icon: "",
    description: "",
    authorFids: [2, 3],
    url: "https://warpcast.com",
    user: ({ username, fid }) =>
      username
        ? `https://warpcast.com/${username}`
        : `https://warpcast.com/!${fid}`,
    channel: ({ id }) => `https://warpcast.com/~/channel/${id}`,
    cast: ({ username, hash }) => `https://warpcast.com/${username}/${hash}`,
    // compose: ({ text, embeds }) =>
    // `https://warpcast.com/~/compose?text=${text}&embeds[]=${FIXME}`,
  },
  supercast: {
    logo: "",
    icon: "",
    description: "",
    authorFids: [],
    url: "",
    user: ({ username }) => null,
    channel: ({ id }) => null,
    cast: () => "",
    compose: () => "",
  },
  nook: {
    logo: "",
    icon: "",
    description: "",
    authorFids: [],
    url: "https://nook.social",
    user: ({ username }) => null,
    channel: ({ id }) => null,
    cast: () => "",
    compose: () => "",
  },
  herocast: {
    logo: "",
    icon: "",
    description: "",
    authorFids: [],
    url: "https://herocast.xyz",
    user: ({ username }) => null,
    channel: ({ id }) => `https://warpcast.com/~/channel/${id}`,
    cast: () => "",
    compose: () => "",
  },
  firefly: {
    logo: "",
    icon: "",
    description: "",
    authorFids: [],
    url: "https://firefly.mask.social",
    user: ({ username }) => null,
    channel: ({ id }) => null,
    cast: () => "",
    compose: () => "",
  },
  yup: {
    logo: "",
    icon: "",
    description: "",
    authorFids: [],
    url: "https://yup.io",
    user: ({ username }) => null,
    channel: ({ id }) => null,
    cast: () => "",
    compose: () => "",
  },
  opencast: {
    logo: "",
    icon: "",
    description: "",
    authorFids: [],
    url: "https://opencast.stephancill.co.za/",
    user: ({ username }) => null,
    channel: ({ id }) => null,
    cast: () => "",
    compose: () => "",
  },
  u3: {
    logo: "",
    icon: "",
    description: "",
    authorFids: [],
    url: "",
    user: ({ username }) => null,
    channel: ({ id }) => null,
    cast: () => "",
    compose: () => "",
  },
  farcord: {
    logo: "",
    icon: "",
    description: "",
    authorFids: [],
    url: "",
    user: ({ username }) => null,
    channel: ({ id }) => null,
    cast: () => "",
    compose: () => "",
  },
};
