import { RfqAction, RfqConstants, RfqState } from './typedef';
import { serializeEstimation, serializeRfq } from './serializer';


export const initialState: RfqState = {
  rfqData: null,
  txData: null,
  confirmation: null,
  estimation: null,
  loading: {
    sell: false,
    buy: false,
    confirm: false,
    estimation: false
  },
  error: {
    sell: null,
    buy: null,
    confirm: null,
    estimation: null
  }
};


export const rfqReducer = (state = initialState, action: RfqAction): RfqState => {
  switch (action.type) {

    case RfqConstants.GET_ESTIMATION_REQUEST:
      return {
        ...state,
        loading: { ...state.loading, estimation: true },
        error: { ...state.error, estimation: null }
      };
    case RfqConstants.GET_ESTIMATION_SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, estimation: true },
        error: { ...state.error, estimation: null },
        estimation: serializeEstimation(action.payload)
      };
    case RfqConstants.GET_ESTIMATION_FAILURE:
      return {
        ...state,
        loading: { ...state.loading, estimation: false },
        error: { ...state.error, estimation: action.error }
      };

    case RfqConstants.SELL_REQUEST:
      return {
        ...state,
        loading: { ...state.loading, sell: true },
        error: { ...state.error, sell: null },
        rfqData: null,
        txData: null,
        confirmation: null
      };
    case RfqConstants.SELL_FAILURE:
      return {
        ...state,
        loading: { ...state.loading, sell: false },
        error: { ...state.error, sell: action.error }
      };

    case RfqConstants.BUY_REQUEST:
      return {
        ...state,
        loading: { ...state.loading, buy: true },
        error: { ...state.error, buy: null },
        rfqData: null,
        txData: null,
        confirmation: null
      };
    case RfqConstants.BUY_FAILURE:
      return {
        ...state,
        loading: { ...state.loading, buy: false },
        error: { ...state.error, buy: action.error }
      };

    case RfqConstants.CONFIRM_REQUEST:
      return {
        ...state,
        loading: { ...state.loading, confirm: true },
        error: { ...state.error, confirm: null }
      };
    case RfqConstants.CONFIRM_SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, confirm: false, sell: false, buy: false },
        confirmation: action.payload
      };
    case RfqConstants.CONFIRM_FAILURE:
      return {
        ...state,
        loading: { ...state.loading, confirm: false, sell: false, buy: false },
        error: { ...state.error, confirm: action.error }
      };

    case RfqConstants.UPDATE_RFQ_DATA:
      return { ...state, rfqData: serializeRfq(action.payload) };

    case RfqConstants.UPDATE_TX_DATA:
      return { ...state, txData: action.payload };

    case RfqConstants.RESET_ESTIMATION:
      return { ...state, estimation: initialState.estimation };

    case RfqConstants.RESET_DATA:
      return { ...initialState, estimation: state.estimation };

    default:
      return state;
  }
};
