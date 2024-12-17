import React, { useEffect } from 'react'
import { useUser } from '../features/authentication/useUser'
import Spinner from './Spinner';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const FullPage = styled.div`
height:100vh;
background-color: var(--color-grey-50);
display: flex;
align-items: center;
justify-content: center;
`
function ProtectedRoute({children}) {
  const navigate = useNavigate();
  // 1. Load the authenticated user
  const { isAuthenticated, isLoading } = useUser();

  // 2. If ther is NO authenticated user, redirect to the /login
  useEffect(()=>{ 
    if(!isAuthenticated && !isLoading) navigate('/login')
  },[isLoading, isAuthenticated, navigate])



  //3. While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. If there IS a user, render the app
 if(isAuthenticated) return children;
}

export default ProtectedRoute
