/* eslint-disable max-len */
import { SocketEndpoint } from '../../typedef';
import { SocketHandler } from './typedef';
import { sessionActions } from '../Session/actions';
import { addressesActions } from '../Addresses';
import { rfqActions } from '../Rfq';

export const socketExternalHandlers: SocketHandler = {
  [SocketEndpoint.AUTHORIZE]: [sessionActions.authorizeSuccess, sessionActions.authorizeFailure],

  [SocketEndpoint.VALIDATE_ADDRESS]: [addressesActions.validateAddressSuccess, addressesActions.validateAddressFailure],
  [SocketEndpoint.WHITELIST_ADDRESS]: [addressesActions.whitelistAddressSuccess, addressesActions.whitelistAddressFailure],
  [SocketEndpoint.GET_ACCOUNTS]: [addressesActions.getAddressesSuccess, addressesActions.getAddressesFailure],

  [SocketEndpoint.CREATE_BANK_ACCOUNT]: [null, null],

  [SocketEndpoint.RFQ_SELL]: [rfqActions.sellSuccess, rfqActions.sellFailure],
  [SocketEndpoint.RFQ_BUY]: [rfqActions.buySuccess, rfqActions.buyFailure],
  [SocketEndpoint.CONFIRM_RFQ]: [rfqActions.confirmSuccess, rfqActions.confirmFailure],
  [SocketEndpoint.RFQ_STATUS]: [rfqActions.updateRfqStatus, null],
};
