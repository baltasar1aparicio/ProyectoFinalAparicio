import React, { useEffect, useState } from 'react';
import '../styles/ImagenAnime.css'

const CategoriaImage = ({ categoria }) => {
  const [imagenUrl, setImagenUrl] = useState('');

  useEffect(() => {
    switch (categoria) {
      case 'naruto':
        setImagenUrl('https://i.ibb.co/ggD8bKZ/naruto.png');
        break;
      case 'jujutsukaisen':
        setImagenUrl('https://i.ibb.co/sRghDG8/jujutsu.png');
        break;
      case 'shingekinokyojin':
        setImagenUrl('https://i.ibb.co/9Z47t2S/shingeki.png');
        break;
      case 'kimetsunoyaiba':
        setImagenUrl('https://i.ibb.co/b7zXDSt/kimetsu3.png');
        break;
      default:
        setImagenUrl('https://i.ibb.co/n8NDDBK/all-animes.png');
    }
  }, [categoria]);

  return (
    <div className={`logo-anime-container ${imagenUrl === 'https://i.ibb.co/n8NDDBK/all-animes.png' ? 'default-image' : ''}`}>
      {imagenUrl && <img className='logo-anime' src={imagenUrl} alt={`Imagen de ${categoria}`} />}
    </div>
    
  );
};

export default CategoriaImage;
