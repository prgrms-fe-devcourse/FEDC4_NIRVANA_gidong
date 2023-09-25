import styled from '@emotion/styled';

export const CommentInputSection = styled.section`
  ${({ theme }) => theme.style.flexCenter}
  border-top: 1px solid ${({ theme }) => theme.color.white800};
  border-bottom: 1px solid ${({ theme }) => theme.color.white800};
  background-color: ${({ theme }) => theme.color.white};
  padding: 20px 0;
  width: 100%;
  height: 100px;
`;

export const CommentAvatarContainer = styled.div`
  ${({ theme }) => theme.style.flexCenter}
  width: 40px;
  height: 100%;
`;

export const CommentInputForm = styled.form`
  display: flex;
  height: 100%;
  flex: 1;
`;

export const CommentInputContainer = styled.div`
  ${({ theme }) => theme.style.flexCenter}
  flex: 1;
  height: 100%;
  padding: 0 10px;
`;

export const CommentButtonContainer = styled.div`
  ${({ theme }) => theme.style.flexCenter}
  width: 50px;
  height: 100%;
`;

export const CommentInput = styled.input`
  padding: 0px;
  width: 100%;
  height: 100%;
  flex: 1;
  font-size: 16px;
  border: none;
  :focus {
    outline: none;
  }
`;
