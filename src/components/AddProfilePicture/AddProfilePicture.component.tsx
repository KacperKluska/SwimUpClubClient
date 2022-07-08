import axios from 'axios';
import { useTranslations } from '../../translations/src';
import {
  StyledAddProfilePicture,
  StyledInput,
} from './AddProfilePicture.styles';

export const AddProfilePicture = () => {
  const translate = useTranslations();
  const handleUpload = async (event: any) => {
    try {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('photo', file);

      await axios.post('http://localhost:3001/uploads/file', formData, {
        withCredentials: true,
      });
    } catch (error) {
      console.error(error);
    }
    window.location.reload();
  };

  return (
    <StyledAddProfilePicture>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="upload-photo">
        {translate('settingsPage.uploadImage')}
      </label>
      <StyledInput type="file" name="photo" onChange={handleUpload} />
    </StyledAddProfilePicture>
  );
};
