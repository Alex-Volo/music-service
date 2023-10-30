import { Route, Routes } from 'react-router-dom';
import { NotFound, Playlist, Favorites, AllTracs } from 'pages';

export const MainPageRoutes = ({setLoadingClass, loadingClass}) => {
  return (
    <Routes>
      <Route path="/" element=
      {<AllTracs 
        setLoadingClass={setLoadingClass}
        loadingClass={loadingClass}
      />} />

      <Route
        path="/favorites"
        element={<Favorites />}
      />

      <Route
        path="/playlist/:id"
        element=
        {<Playlist 
          setLoadingClass={setLoadingClass}
          loadingClass={loadingClass}
        />}
      />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
