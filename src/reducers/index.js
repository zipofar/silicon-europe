import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import _ from 'lodash';
import * as actions from '../actions';

const legalEntity = handleActions({
  [actions.fetchLegalEntitySuccess](state, { payload: { data } }) {
    return _.keyBy(data, 'legalEntityID');
  },
}, {});

const pharmacies = handleActions({
  [actions.fetchPharmacySuccess](state, { payload: { data } }) {
    return _.keyBy(data, 'pharmaID');
  },
}, {});

const contractTerms = handleActions({
  [actions.addContractTerms](state, { payload: { data } }) {
    return data;
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
  [actions.fetchLegalEntityRequest](state) {
    return { ...state, load: 'request' };
  },
  [actions.fetchLegalEntitySuccess](state) {
    return { ...state, load: 'success' };
  },
  [actions.fetchLegalEntityFailure](state) {
    return { ...state, load: 'failure' };
  },
}, { isShow: true, load: '' });

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
  [actions.fetchPharmacyRequest](state) {
    return { ...state, load: 'request' };
  },
  [actions.fetchPharmacySuccess](state) {
    return { ...state, load: 'success' };
  },
  [actions.fetchPharmacyFailure](state) {
    return { ...state, load: 'failure' };
  },
}, { isShow: false, load: '', selectedIds: [] });

const contractTermsUI = handleActions({
  [actions.showContractTerms](state) {
    return { ...state, isShow: true };
  },
  [actions.showPharmacy](state) {
    return { ...state, isShow: false };
  },
  [actions.showResults](state) {
    return { ...state, isShow: false };
  },
}, { isShow: false });

const resultsUI = handleActions({
  [actions.showResults](state) {
    return { ...state, isShow: true };
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
