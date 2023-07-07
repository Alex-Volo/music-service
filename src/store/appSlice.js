import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    {
      id: 8,
      name: 'Chase',
      author: 'Alexander Nakarada',
      release_date: '2005-06-11',
      genre: 'Классическая музыка',
      duration_in_seconds: 205,
      album: 'Chase',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/Alexander_Nakarada_-_Chase.mp3',
    },
    {
      id: 9,
      name: 'Open Sea epic',
      author: 'Frank Schroter',
      release_date: '2019-06-12',
      genre: 'Классическая музыка',
      duration_in_seconds: 165,
      album: 'Open Sea epic',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/Frank_Schroter_-_Open_Sea_epic.mp3',
    },
    {
      id: 10,
      name: 'Sneaky Snitch',
      author: 'Kevin Macleod',
      release_date: '2022-04-16',
      genre: 'Классическая музыка',
      duration_in_seconds: 305,
      album: 'Sneaky Snitch',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/Kevin_Macleod_-_Sneaky_Snitch.mp3',
    },
    {
      id: 11,
      name: 'Secret Garden',
      author: 'Mixkit',
      release_date: '1972-06-06',
      genre: 'Классическая музыка',
      duration_in_seconds: 324,
      album: 'Secret Garden',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/Mixkit_-_Secret_Garden.mp3',
    },
    {
      id: 12,
      name: 'A journey of successfull winners',
      author: '-',
      release_date: '1985-02-02',
      genre: 'Классическая музыка',
      duration_in_seconds: 255,
      album: '-',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/Musiclfiles_-_A_Journey_For_Successful_Winners.mp3',
    },
    {
      id: 13,
      name: 'Epic Heroic Conquest',
      author: '-',
      release_date: '1962-01-15',
      genre: 'Классическая музыка',
      duration_in_seconds: 200,
      album: 'Epic Heroic Conquest',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/Musiclfiles_-_Epic_Heroic_Conquest.mp3',
    },
    {
      id: 14,
      name: 'The March OF The Final Battle',
      author: '-',
      release_date: '2011-11-02',
      genre: 'Классическая музыка',
      duration_in_seconds: 206,
      album: 'The March OF The Final Battle',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/musiclfiles_-_The_March_Of_The_Final_Battle.mp3',
    },
    {
      id: 15,
      name: 'True Summer',
      author: '-',
      release_date: '2012-06-01',
      genre: 'Классическая музыка',
      duration_in_seconds: 253,
      album: 'True Summer',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/Musiclfiles_-_True_Summer.mp3',
    },
    {
      id: 16,
      name: 'Background Sensible',
      author: 'Waltz Piano',
      release_date: '2003-05-12',
      genre: 'Классическая музыка',
      duration_in_seconds: 135,
      album: 'Background Sensible',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/Waltz_Piano_-_Background_Sensible.mp3',
    },
    {
      id: 17,
      name: 'Cinematic',
      author: 'Winniethemoog',
      release_date: '2004-10-01',
      genre: 'Классическая музыка',
      duration_in_seconds: 206,
      album: 'Cinematic',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/Winniethemoog_-_Cinematic.mp3',
    },
    {
      id: 18,
      name: 'Kerfuffle',
      author: 'AFM',
      release_date: '2013-06-02',
      genre: 'Электронная музыка',
      duration_in_seconds: 235,
      album: 'Kerfuffle',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/AFM_-_Kerfuffle.mp3',
    },
    {
      id: 19,
      name: 'Dropin',
      author: 'Bobby Marleni',
      release_date: '2011-06-04',
      genre: 'Электронная музыка',
      duration_in_seconds: 205,
      album: 'Defected Jamz Vol. 2',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/Bobby_Marleni_-_Dropin.mp3',
    },
    {
      id: 20,
      name: 'Rhythm Beds',
      author: 'Brian Holtz',
      release_date: '2021-10-19',
      genre: 'Электронная музыка',
      duration_in_seconds: 205,
      album: 'Rhythm Beds',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/Brian_Holtz_-_Rhythm_Beds.mp3',
    },
    {
      id: 21,
      name: 'Trumpets in Your Ears',
      author: 'Fanz',
      release_date: '2013-05-10',
      genre: 'Электронная музыка',
      duration_in_seconds: 165,
      album: 'Trumpets in Your Ears',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/Fanz_-_Trumpets_in_Your_Ears.mp3',
    },
    {
      id: 22,
      name: 'Bad Behaviors',
      author: 'Luke',
      release_date: '2019-06-12',
      genre: 'Электронная музыка',
      duration_in_seconds: 324,
      album: 'Bad Behaviors',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/Luke_-_Bad_Behaviors.mp3',
    },
    {
      id: 23,
      name: 'Majesty',
      author: 'Ryan Craig Martin',
      release_date: '2011-12-16',
      genre: 'Электронная музыка',
      duration_in_seconds: 301,
      album: 'Majesty',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/Ryan_Craig_Martin_-_Majesty.mp3',
    },
    {
      id: 24,
      name: 'Bounce',
      author: 'Sascha Ende',
      release_date: '2022-07-12',
      genre: 'Электронная музыка',
      duration_in_seconds: 205,
      album: 'Bounce',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/Sascha_Ende_-_bounce.mp3',
    },
    {
      id: 25,
      name: 'Deadfro5h',
      author: 'Starforsh',
      release_date: '2022-04-05',
      genre: 'Электронная музыка',
      duration_in_seconds: 205,
      album: 'Deadfro5h',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/Starforsh_-_Deadfro5h.mp3',
    },
    {
      id: 26,
      name: 'Insire',
      author: 'Voisin',
      release_date: '2019-06-12',
      genre: 'Электронная музыка',
      duration_in_seconds: 258,
      album: 'Insire',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/Voisin_-_Insire.mp3',
    },
    {
      id: 27,
      name: 'Hangtime',
      author: 'Wova',
      release_date: '1991-09-06',
      genre: 'Электронная музыка',
      duration_in_seconds: 306,
      album: 'Hangtime',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/Wova_-_Hangtime.mp3',
    },
    {
      id: 28,
      name: 'Carol Of The Bells',
      author: 'Alexander Nakarada',
      release_date: '2022-04-16',
      genre: 'Рок музыка',
      duration_in_seconds: 205,
      album: 'Carol Of The Bells',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/Alexander_Nakarada_-_Carol_Of_The_Bells.mp3',
    },
    {
      id: 29,
      name: 'Feel Good Rock',
      author: 'Audionautix',
      release_date: '2020-02-12',
      genre: 'Рок музыка',
      duration_in_seconds: 312,
      album: 'FAST',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/Audionautix_-_Feel_Good_Rock.mp3',
    },
    {
      id: 30,
      name: 'The World Waltz',
      author: 'Kevin Macleodburn',
      release_date: null,
      genre: 'Рок музыка',
      duration_in_seconds: 305,
      album: 'The Waltzer',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/Kevin_Macleodburn_-_The_World_Waltz.mp3',
    },
    {
      id: 31,
      name: '5 cents back',
      author: 'MED',
      release_date: '2005-03-03',
      genre: 'Рок музыка',
      duration_in_seconds: 345,
      album: '5 cents back',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/MED_-_5_Cents_Back.mp3',
    },
    {
      id: 32,
      name: 'Essence2',
      author: 'MED',
      release_date: '1920-05-03',
      genre: 'Электронная музыка',
      duration_in_seconds: 205,
      album: 'Essence2',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/MED_-_Essence2.mp3',
    },
    {
      id: 33,
      name: 'Classical Metal Workout',
      author: '-',
      release_date: '1991-09-06',
      genre: 'Рок музыка',
      duration_in_seconds: 246,
      album: 'Workout',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/Musiclfiles_-_Classical_Metal_Workout.mp3',
    },
    {
      id: 34,
      name: 'Adrenelynne',
      author: 'Tim Kulig',
      release_date: '2007-05-14',
      genre: 'Рок музыка',
      duration_in_seconds: 285,
      album: 'Adrenelynne',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/Tim_Kulig_-_Adrenelynne.mp3',
    },
    {
      id: 35,
      name: 'Hard Metal Intro',
      author: 'Winniethemoog',
      release_date: '1991-09-06',
      genre: 'Рок музыка',
      duration_in_seconds: 255,
      album: 'Hard Metal',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/Winniethemoog__-_Hard_Metal_Intro.mp3',
    },
    {
      id: 36,
      name: 'Action Sport Breakbeat',
      author: 'Winniethemoog',
      release_date: '1991-09-07',
      genre: 'Рок музыка',
      duration_in_seconds: 234,
      album: 'Workout',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/Winniethemoog_-_Action_Sport_Breakbeat.mp3',
    },
  ],
};

export const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    deleteList: (state) => {
      state.list = [
        {
          id: 0,
          name: 'Пусто',
          author: 'Пусто',
          release_date: 'Пусто',
          genre: 'Пусто',
          duration_in_seconds: 0,
          album: 'Пусто',
          logo: null,
          track_file: null,
        },
      ];
    },
    setTracks: (state, action) => {
      state.list = action.payload;
    }
  },
});
export const { deleteList, setTracks } = tracksSlice.actions

export default tracksSlice.reducer