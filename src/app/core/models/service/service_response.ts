interface User {
    user_id: string;
    username: string;
    firstname: string;
    lastname: string;
    adress: string;
    phone_number: string;
    instagram_link: string;
    facebook_link: string;
    tiktok_link: string;
    profile_picture: string;
  }
  
  interface Picture {
    picture_id: number;
    link: string;
  }
  
  interface Price {
    price_id: number;
    value: number;
    description: string;
    rate: string;
  }

  export interface ProfessionalServiceResponse {
    service_id: number;
    title: string;
    description: string;
    status: string;
    created_at: string;
    user_id: string;
    subcategory_id: number;
    user: User;
    pictures: Picture[];
    prices: Price[];
  }
  