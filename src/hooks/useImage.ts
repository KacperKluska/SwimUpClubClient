import { useEffect, useState } from 'react';

export const useServerImage = (name: string) => {
  const [img, setImg] = useState<string>();

  const getImage = async () => {
    const response = await fetch(
      `http://localhost:3001/uploads/server-file?imgName=${name}`,
      {
        credentials: 'include',
        method: 'GET',
      },
    );
    const blob = await response.blob();
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      if (typeof base64data === 'string') setImg(base64data);
    };
  };

  useEffect(() => {
    getImage();
  }, []);

  return img;
};
