import createTabItems from './utils/createTabItems';
import { useEffect } from 'react';
import { getUser } from '@apis/user';
import { useLocation, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { editModeState } from './states/editMode';
import { ProfileInfoContainer, ProfilePage } from './Profile.style';
import { ProfileInfo } from './components/ProfileInfo';
import { ProfileCover } from './components/ProfileCover';
import { ProfileMain } from './components/ProfileMain';
import { ProfileEdit } from './components/ProfileEdit';
import { SettingSideBar } from './components/setting';

const Profile = () => {
  const { userId } = useParams<{ userId: string }>();
  const location = useLocation();
  const [editMode, setEditMode] = useRecoilState(editModeState);
  useEffect(() => {
    setEditMode(location.hash === '#edit');
  }, [location.hash, setEditMode]);

  const { data, isLoading, refetch } = useQuery(
    ['userData', userId],
    () => getUser(userId),
    { enabled: !!userId }
  );

  const tabItems = createTabItems(data, isLoading);

  return (
    <ProfilePage>
      {editMode && <SettingSideBar />}
      <ProfileCover
        refetch={() => refetch()}
        src={isLoading ? '' : data.coverImage}
      />
      <ProfileInfoContainer>
        <ProfileInfo
          email={isLoading ? '' : data.email}
          fullName={isLoading ? '' : data.fullName}
          avatarImgSrc={isLoading ? '' : data.image}
          meditationStack={50}
          refetch={() => refetch()}
        />
        {editMode ? (
          <ProfileEdit refetch={() => refetch()} />
        ) : (
          <ProfileMain tabItems={tabItems} />
        )}
      </ProfileInfoContainer>
    </ProfilePage>
  );
};

export default Profile;
