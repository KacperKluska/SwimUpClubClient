import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChangePassword } from '../../../components/ChangePassword/ChangePassword.component';
import { OneColumnLayout } from '../../../components/OneColumnLayout/OneColumnLayout.component';
import { UserData } from '../../../components/UserData/UserData.component';
import { UserDetails } from '../../../components/UserDetails/UserDetails.component';
import { CenteredPaper } from '../../CenteredPaper/CenteredPaper.component';
import {
  Data,
  Details,
  UpdatedData,
  UpdatedDetails,
} from '../../SettingsPage/SettingsPage.component';

export const UserPage = () => {
  const [data, setData] = useState<Data | null>(null);
  const [details, setDetails] = useState<Details | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { userEmail } = useParams();

  const getUserData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        'http://localhost:3001/users/other-user',
        {
          params: {
            email: userEmail,
          },
          withCredentials: true,
        },
      );
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

  const handleUpdate = async (updatedData: UpdatedData) => {
    const { name, surname, email, originalEmail } = updatedData;
    await axios.patch(
      'http://localhost:3001/users/other-user',
      {
        email: userEmail,
        newName: name,
        newSurname: surname,
        newEmail: email,
      },
      {
        withCredentials: true,
      },
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
      'http://localhost:3001/users/other-user/details',
      {
        email: userEmail,
        newAge: age,
        newWeight: weight,
        newHeight: height,
        newPhoneNumber: phoneNumber,
      },
      {
        withCredentials: true,
      },
    );
    window.location.reload();
  };

  const handlePasswordChange = async (newPassword: string) => {
    try {
      await axios.patch(
        'http://localhost:3001/auth/change-other-password',
        { password: newPassword, email: userEmail },
        { withCredentials: true },
      );
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
            <UserData data={data} handleUpdateCallback={handleUpdate} />
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
