// ArtistCard component to display artist info and navigate to artist details
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ trackInfo }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => navigate(`/artists/${trackInfo?.artists[0].adamid}`)}
      title={`Go to ${trackInfo?.subtitle}'s artist page`}
    >
      <img alt="artist" src={trackInfo?.images?.coverart} className="w-full h-56 rounded-lg" />
      <p className="mt-4 font-semibold text-lg text-white truncate">
        {trackInfo?.subtitle}
      </p>
    </div>
  );
};

export default ArtistCard;
