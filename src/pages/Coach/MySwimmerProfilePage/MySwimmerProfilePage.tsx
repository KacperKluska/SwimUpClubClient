import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AddEvent } from '../../../components/AddEvent/AddEvent.component';
import { OneColumnLayout } from '../../../components/OneColumnLayout/OneColumnLayout.component';
import { UserData } from '../../../components/UserData/UserData.component';
import { UserDetails } from '../../../components/UserDetails/UserDetails.component';
import { CenteredPaper } from '../../CenteredPaper/CenteredPaper.component';
import { Data, Details } from '../../SettingsPage/SettingsPage.component';

export const MySwimmerProfilePage = () => {
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

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <CenteredPaper>
      <OneColumnLayout>
        {!loading && (
          <>
            <AddEvent swimmerEmail={data?.email} />
            <UserData data={data} />
            <UserDetails details={details} />
          </>
        )}
      </OneColumnLayout>
    </CenteredPaper>
  );
};
