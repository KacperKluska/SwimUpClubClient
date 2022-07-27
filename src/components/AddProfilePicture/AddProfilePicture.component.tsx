import { useTranslations } from '../../translations/src';
import {
  StyledAddProfilePicture,
  StyledInput,
} from './AddProfilePicture.styles';

interface Props {
  handleImageUpload?: (event: any) => void;
}

export const AddProfilePicture = ({ handleImageUpload }: Props) => {
  const translate = useTranslations();

  return (
    <StyledAddProfilePicture>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="upload-photo">
        {translate('settingsPage.uploadImage')}
      </label>
      <StyledInput
        type="file"
        name="photo"
        onChange={handleImageUpload}
        disabled={!handleImageUpload}
      />
    </StyledAddProfilePicture>
  );
};
