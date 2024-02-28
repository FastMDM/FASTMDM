


export type LegalList = {
    id: string;
    profile: {
      verified: boolean;
      bio: string;
      profile_id: number;
      name: string;
      username: string;
      wallet_address: string;
      wallet_address_nonens: string;
      img_url: string;
    };
    description: string;
    media: {
      width: number;
      height: number;
      length: number;
      urls: {
        direct: string;
        original: string;
        hls_playlist: string;
        thumbnail: string;
        optimized_thumbnail: string;
        preview_animation: string;
        mp4_720: string;
        mp4_480: string;
        mp4_360: string;
        mp4_240: string;
      };
    };
    deleted_at: string;
    created_at: string;
    updated_at: string;
    view_count: number;
    creator_token_id: number;
    creator_token_address: string;
    creator_channel_id: number;
    channel_message_count: null | number;
    viewer_is_in_creator_channel: boolean;
  };
       