import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AUTH_EID_URL_REQ_PREFIX } from '../../constants';
import { Props } from './typedef';
import { useAuthEidCancel } from '../../graphql/AuthEidCancel/hooks';
import { sessionActions, sessionCreateErrorSelector, sessionCreateLoadingSelector, sessionRequestIdSelector, sessionWaitingForSignatureSelector } from '../../store/Session';
import { useSessionContext } from '../../contexts/Session';


export const withLoginDomain = (Component: FC<Props>) => () => {
  const dispatch = useDispatch();

  const { status, statusLoginModal, controls } = useSessionContext();

  const requestId = useSelector(sessionRequestIdSelector);
  const loadingCreateSession = useSelector(sessionCreateLoadingSelector);
  const waitingForSignature = useSelector(sessionWaitingForSignatureSelector);
  const error = useSelector(sessionCreateErrorSelector);

  const authEidCancel = useAuthEidCancel();

  useEffect(() => {
    if (!statusLoginModal) return;

    dispatch(sessionActions.createSession());
  }, [statusLoginModal]);

  useEffect(() => {
    if (!error) return;

    controls.closeLogin();
  }, [error]);

  useEffect(() => {
    if (!status) return;

    controls.closeLogin();
  }, [status]);

  const handleClose = useCallback(() => {
    controls.closeLogin();
    authEidCancel.cancel(requestId!);
  }, [requestId]);

  const loading = useMemo(() => {
    return waitingForSignature || (loadingCreateSession && !requestId);
  }, [loadingCreateSession, waitingForSignature, requestId]);

  const qrValue = useMemo(() => {
    if (!requestId) return null;

    return `${ AUTH_EID_URL_REQ_PREFIX }${ requestId }`;
  }, [requestId]);

  return (
    <Component
      status={ statusLoginModal }
      handleClose={ handleClose }
      loading={ loading || status }
      qrValue={ qrValue }
    />
  );
};
