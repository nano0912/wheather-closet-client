import styled from 'styled-components';

export const AccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  gap: 1rem;
`;

export const Input = styled.input`
  display: block;
  padding: 0.3125rem 0.75rem;
`;

export const Label = styled.label`
  display: inline-block;
  font-size: 0.875rem;
  font-weight: bold;
  margin-bottom: 0.375rem;
`;

export const SubmitButton = styled.button`
  display: inline-block;
  margin-left: 0.5rem;
  padding: 0.3125rem 0.75rem;
  background-color: #eaeaea;
  border-radius: 20px;
`;

export const Profile = styled.section`
  width: 100%;
  max-width: 60rem;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1.5rem 0;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 70px;

  > div {
    justify-content: flex-start;
  }
`;

export const NickNameWrapper = styled.div`
  display: flex;
`;

export const UserFormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
`;

export const Password = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  margin-top: 2rem;

  > button {
    position: absolute;
    top: 0;
    right: -124px;
    margin-left: 0;
  }
`;

export const PasswordWrapper = styled.div`
  display: flex;

  > span {
    margin-left: 1rem;
  }
`;

export const Message = styled.span`
  align-self: center;
  font-size: 12px;
  color: #90929e;
`;

export const DeleteAccount = styled.section`
  width: 100%;
  max-width: 60rem;
`;

export const DeleteDescription = styled.p`
  padding: 1.5rem 0;
  text-align: center;
`;

export const DeleteButton = styled.div`
  text-align: center;
`;
