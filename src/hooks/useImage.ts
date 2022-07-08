import { useEffect, useState } from 'react';

export const useServerImage = (name: string) => {
  const [img, setImg] = useState<string | null>();

  const getImage = async () => {
    try {
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
    } catch (error) {
      setImg(null);
    }
  };

  useEffect(() => {
    getImage();
  }, []);

  return img;
};

export const useUserImage = (name: string) => {
  const [img, setImg] = useState<string | null>();

  const getImage = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/uploads/file?imgName=${name}`,
        {
          credentials: 'include',
          method: 'GET',
        },
      );
      if (response.status !== 200) {
        setImg(null);
        return;
      }
      const blob = await response.blob();
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        if (typeof base64data === 'string') setImg(base64data);
      };
    } catch (error) {
      setImg(null);
    }
  };

  useEffect(() => {
    getImage();
  }, []);

  return img;
};
