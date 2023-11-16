export const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = ('0' + (timeInSeconds % 60)).slice(-2);
  return `${minutes}:${seconds}`;
};

export const getSortList = (title, state) => {
  const getTypeOfSort = (title) => {
    switch (title) {
      case 'году выпуска':
        return 'release_date';
      case 'жанру':
        return 'genre';
      default:
        return 'author';
    }
  };

  const typeOfSort = getTypeOfSort(title);
  let sortList = [];

  if (typeOfSort === 'release_date') {
    sortList = Array.from(
      new Set(
        state.map((track) =>
          track[typeOfSort] ? track[typeOfSort].slice(0, 4) : 'Неизвестно'
        )
      )
    ).sort();
  } else {
    sortList = Array.from(
      new Set(state.map((track) => track[typeOfSort]))
    ).sort();
  }

  return sortList;
};

export const getUserFromLS = () => {
  const userJSON = localStorage.getItem('user');
  if (userJSON === null) return null;

  try {
    return JSON.parse(userJSON);
  } catch (e) {
    localStorage.removeItem('user');

    return null;
  }
};

const shuffle = (sourceArr) => {
  const arr = [...sourceArr];

  for (let i = arr.length - 1; i > 0; i--) {
    const newIndex = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[newIndex]] = [arr[newIndex], arr[i]];
  }
  return arr;
};

export const getShuffledIndices = (arr) => {
  const indicesArr = Array.from({ length: arr.length }, (_, i) => i);
  return shuffle(indicesArr);
};
