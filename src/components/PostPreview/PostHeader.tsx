import type { Post } from '@/types';
import { Icon } from '../Icon';
import { Avatar } from '../Avatar';
import {
  AvatarContainer,
  PostInfoContainer,
  PostDetailInfoContainer,
  UserNameContainer
} from './PostPreview.style';
import { Link } from '@components/Link';

interface PostHeaderProps {
  post: Pick<
    Post,
    '_id' | 'image' | 'title' | 'author' | 'createdAt' | 'meditationTime'
  >;
  totalLikes: number;
  totalComments: number;
  noneProfile: boolean;
}

const PostHeader = ({
  post,
  totalLikes,
  totalComments,
  noneProfile
}: PostHeaderProps) => {
  const { image, author, createdAt, meditationTime } = post;
  const iconDescription = [
    { name: 'favorite', size: 12, total: totalLikes },
    { name: 'chat', size: 12, total: totalComments }
  ];

  return (
    <>
      {!noneProfile && (
        <AvatarContainer>
          <Link
            pageLink={`/profile/:${post.author}`}
            color='black'>
            <Avatar
              alt={'유저 프로필'}
              src={image}
              size={35}
            />
          </Link>
        </AvatarContainer>
      )}
      <PostInfoContainer>
        <Link
          pageLink={`/post-detail/${post._id}`}
          color='black'>
          {!noneProfile && (
            <UserNameContainer>{author.fullName}</UserNameContainer>
          )}
          <PostDetailInfoContainer>
            {createdAt} / {meditationTime}분
            {iconDescription.map((iconInfo, index) => {
              return (
                <div key={index}>
                  <Icon
                    name={iconInfo.name}
                    size={iconInfo.size}
                    color={'greyLight'}
                  />
                  {iconInfo.total}
                </div>
              );
            })}
          </PostDetailInfoContainer>
        </Link>
      </PostInfoContainer>
    </>
  );
};

export default PostHeader;
