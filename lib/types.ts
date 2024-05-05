import { Json } from "./db";

export interface SerializedChannels {
  created_at: number | null;
  description: string | null;
  follower_count: number | null;
  hosts: Json | null;
  id: string | null;
  image_url: string | null;
  lead: Json | null;
  name: string | null;
  object: string | null;
  parent_url: string | null;
  url: string;
}
