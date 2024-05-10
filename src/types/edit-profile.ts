export interface avatars {
  avatar1: boolean;
  avatar2: boolean;
  avatar3: boolean;
  avatar4: boolean;
  avatar5: boolean;
  avatar6: boolean;
  avatar7: boolean;
  avatar8: boolean;
  avatar9: boolean;
  avatar10: boolean;
}
export interface profileData {
  avatar: string;
  name: string;
  lastName: string;
  place: string;
  age: number | null;
  favFestivals: string[];
  favArtist: string[];
  favGender: string[];
}

export interface CustomEvent {
    target: {
      name: string;
      value: any;
    };
    _reactName: string;
    key: string;
  }
