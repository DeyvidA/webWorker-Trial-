import { alertActions } from './../Alert/actions';
import { takeLatest, put } from 'redux-saga/effects';

import { RfqStatus, SocketEndpoint, StatusModalType } from '../../typedef';
import { Sell, Buy, SellSuccess, BuySuccess, Confirm, RfqConstants, GetEstimation, UpdateRfqData } from './typedef';
import { socketActions } from '../Socket';
import { rfqActions } from './actions';


const RFQ_API = 'rfq' as const;

function *getEstimation({ payload }: GetEstimation) {
  try {
    yield put(socketActions.send({
      method: SocketEndpoint.GET_RFQ_ESTIMATION,
      api: RFQ_API,
      messageId: `${Date.now()}`,
      args: payload
    }));
  } catch {
    yield put(rfqActions.getEstimationFailure('Socket not connected'))
  }
}

function *sell({ payload }: Sell) {
  const { iban, ...restArgs } = payload;

  try {
    yield put(socketActions.send({
      method: SocketEndpoint.RFQ_SELL,
      api: RFQ_API,
      messageId: `${Date.now()}`,
      args: { ...restArgs, payoutAccount: iban }
    }));
  } catch {
    yield put(rfqActions.sellFailure('Socket not connected'))
  }
}

function *buy({ payload }: Buy) {
  const { label, ...restArgs } = payload;

  try {
    yield put(socketActions.send({
      method: SocketEndpoint.RFQ_BUY,
      api: RFQ_API,
      messageId: `${Date.now()}`,
      args: { ...restArgs, payoutAccount: label }
    }));
  } catch {
    yield put(rfqActions.buyFailure('Socket not connected'))
  }
}

function *confirm({ payload }: Confirm) {
  yield put(socketActions.send({
    method: SocketEndpoint.CONFIRM_RFQ,
    api: RFQ_API,
    messageId: `${Date.now()}`,
    args: { ...payload, confirm: true }
  }));
}

function *updateRfqData({ payload }: UpdateRfqData) {
  if (payload.status === RfqStatus.PENDING_REVIEW) {
    yield put(alertActions.show({
      type: StatusModalType.WARNING,
      message: 'Lorem ipsum (PENDING_REVIEW)'
    }));
  }

  if (payload.status === RfqStatus.PENDING_IN_QUE) {
    yield put(alertActions.show({
      type: StatusModalType.WARNING,
      message: 'Lorem ipsum (PENDING_IN_QUE)'
    }));
  }
}

function *sellSuccess({ payload }: SellSuccess) {
  yield put(rfqActions.confirm({ rfqId: payload.rfqId }));
}

function *buySuccess({ payload }: BuySuccess) {
  yield put(rfqActions.confirm({ rfqId: payload.rfqId }));
}


export function *rfqSaga() {
  yield takeLatest(RfqConstants.GET_ESTIMATION_REQUEST, getEstimation);
  yield takeLatest(RfqConstants.SELL_REQUEST, sell);
  yield takeLatest(RfqConstants.BUY_REQUEST, buy);
  yield takeLatest(RfqConstants.CONFIRM_REQUEST, confirm);

  yield takeLatest(RfqConstants.UPDATE_RFQ_DATA, updateRfqData);

  yield takeLatest(RfqConstants.SELL_SUCCESS, sellSuccess);
  yield takeLatest(RfqConstants.BUY_SUCCESS, buySuccess);
}
