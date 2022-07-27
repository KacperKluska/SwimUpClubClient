import axios from 'axios';
import { useEffect, useState } from 'react';
import { ChangePassword } from '../../components/ChangePassword/ChangePassword.component';
import { OneColumnLayout } from '../../components/OneColumnLayout/OneColumnLayout.component';
import { UserData } from '../../components/UserData/UserData.component';
import { UserDetails } from '../../components/UserDetails/UserDetails.component';
import { CenteredPaper } from '../CenteredPaper/CenteredPaper.component';

export interface Data {
  name: string;
  surname: string;
  email: string;
  photo: string | null;
}

export interface Details {
  age?: number;
  phoneNumber?: string;
  weight?: number;
  height?: number;
  gender: 'Man' | 'Woman' | 'Not binary';
}

export interface UpdatedData {
  name: string;
  surname: string;
  email: string;
  originalEmail?: string;
}

export interface UpdatedDetails {
  age?: number | null;
  weight?: number | null;
  height?: number | null;
  phoneNumber: string;
}

export const SettingsPage = () => {
  const [data, setData] = useState<Data | null>(null);
  const [details, setDetails] = useState<Details | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getUserData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3001/users/user', {
        withCredentials: true,
      });
      if (response.status !== 200) {
        setLoading(false);
        return;
      }
      const userData = {
        name: response.data.name,
        surname: response.data.surname,
        email: response.data.email,
        photo: response.data.photo,
      };
      const userDetails = {
        age: response.data.age,
        phoneNumber: response.data.phoneNumber,
        weight: response.data.weight,
        height: response.data.height,
        gender: response.data.gender || 'Not binary',
      };
      setData(userData);
      setDetails(userDetails);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const removeImage = async () => {
    await axios.delete('http://localhost:3001/uploads/file', {
      withCredentials: true,
    });
    window.location.reload();
  };

  const handleDataUpdate = async (updatedData: UpdatedData) => {
    const { name, surname, email, originalEmail } = updatedData;
    await axios.patch(
      'http://localhost:3001/users/user',
      {
        newName: name,
        newSurname: surname,
        newEmail: email,
      },
      { withCredentials: true },
    );
    if (email !== originalEmail) {
      await axios.delete('http://localhost:3001/auth/logout', {
        withCredentials: true,
      });
    }
    window.location.reload();
  };

  const handleDetailsUpdate = async (updatedDetails: UpdatedDetails) => {
    const { age, weight, height, phoneNumber } = updatedDetails;
    await axios.patch(
      'http://localhost:3001/users/user/details',
      {
        newAge: age,
        newWeight: weight,
        newHeight: height,
        newPhoneNumber: phoneNumber,
      },
      { withCredentials: true },
    );
    window.location.reload();
  };

  const handleImageUpload = async (event: any) => {
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

  const handlePasswordChange = async (newPassword: string) => {
    console.log('password', newPassword);
    try {
      const result = await axios.patch(
        'http://localhost:3001/auth/change-password',
        { password: newPassword },
        { withCredentials: true },
      );
      console.log('result', result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <CenteredPaper>
      <OneColumnLayout>
        {!loading && (
          <>
            <UserData
              data={data}
              handleUpdateCallback={handleDataUpdate}
              removeImageCallback={removeImage}
              handleImageUpload={handleImageUpload}
            />
            <UserDetails
              details={details}
              handleUpdateCallback={handleDetailsUpdate}
            />
            <ChangePassword
              handlePasswordChangeCallback={handlePasswordChange}
            />
          </>
        )}
      </OneColumnLayout>
    </CenteredPaper>
  );
};
