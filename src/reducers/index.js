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

const pharmacies = handleActions({
  [actions.fetchPharmacySuccess](state, { payload: { pharmacies } }) {
    return _.keyBy(pharmacies, 'pharmaID'); 
  },
}, {});

const contractTerms = handleActions({
  [actions.addContractTerms](state, { payload: { contractTerms } }) {
    return contractTerms;
  }
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

const pharmaciesUI = handleActions({
  [actions.selectPharmacy](state, { payload: { selectedId } }) {
    const newSelectedIds = _.concat(state.selectedIds, selectedId);
    return { ...state, selectedIds: newSelectedIds };
  },
  [actions.unSelectPharmacy](state, { payload: { selectedId } }) {
    const filteredIds = _.without(state.selectedIds, selectedId);
    return { ...state, selectedIds: filteredIds };
  },
  [actions.showPharmacy](state) {
    return { ...state, isShow: true };
  },
  [actions.showContractTerms](state) {
    return { ...state, isShow: false };
  },
  [actions.showLegalEntity](state) {
    return { ...state, isShow: false };
  },
}, { isShow: false, selectedIds: [] });

const contractTermsUI = handleActions({
  [actions.showContractTerms](state) {
    return { ...state, isShow: true };
  },
  [actions.showPharmacy](state) {
    return { ...state, isShow: false };
  },
  [actions.showResults](state) {
    return { ...state, isShow: false }
  },
}, { isShow: false });

const resultsUI = handleActions({
  [actions.showResults](state) {
    return { ...state, isShow: true }
  },
  [actions.showContractTerms](state) {
    return { ...state, isShow: false };
  },
}, { isShow: false });

export default combineReducers({
  legalEntity,
  legalEntityUI,
  pharmacies,
  contractTerms,
  pharmaciesUI,
  contractTermsUI,
  resultsUI,
  form: formReducer,
});
