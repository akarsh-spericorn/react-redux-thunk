import { useEffect } from 'react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import useThunk from '../hooks/useThunk';

import { getAlbumsById } from '../store';

import PanelLineItem from '../components/PanelLineItem';

const AlbumsList = ({ userID }) => {
  const [getAlbums, loading] = useThunk(getAlbumsById);
  const albums = useSelector(({ albums }) => {
    return albums.data;
  });
  const filteredAlbums = useMemo(() => {
    return albums.filter(({ userId: id }) => id === userID);
  }, [albums, userID]);
  useEffect(() => {
    getAlbums(userID);
  }, [getAlbums, userID]);

  const renderAlbums = () => {
    return filteredAlbums.map((album) => (
      <div className="mt-6 pl-6" key={album.id}>
        <PanelLineItem {...album}>
          <div className="mt-6 pl-6"></div>
        </PanelLineItem>
      </div>
    ));
  };
  return <>{renderAlbums()}</>;
};

export default AlbumsList;
