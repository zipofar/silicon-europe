import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';
import _ from 'lodash';

const legalEntity = handleActions({
  [actions.fetchLegalEntitySuccess](state, { payload: { legalEntity } }) {
    return _.keyBy(legalEntity, 'legalEntityID'); 
  },
}, {});

const legalEntityUI = handleActions({
  [actions.selectLegalEntity](state, { payload: { selectedId } }) {
    return { ...state, selectedId };
  },
  [actions.showPharmacy](state) {
    return { ...state, isShow: false };
  },
  [actions.showLegalEntity](state) {
    return { ...state, isShow: true };
  },
}, { isShow: true });

export default combineReducers({
  legalEntity,
  legalEntityUI,
  form: formReducer,
});
