import axios from 'axios';
import { createAction } from 'redux-actions';
import { routeLegalEntity, routePharmacy } from '../reducers/routes';

export const showLegalEntity = createAction('LEGALENTITY_SHOW');
export const fetchLegalEntitySuccess = createAction('LEGALENTITY_FETCH_SUCCESS');
export const fetchLegalEntityRequest = createAction('LEGALENTITY_FETCH_REQUEST');
export const fetchLegalEntityFailure = createAction('LEGALENTITY_FETCH_FAILURE');
export const selectLegalEntity = createAction('LEGALENTITY_SELECT');
export const fetchLegalEntity = () => async (dispatch) => {
  dispatch(fetchLegalEntityRequest());
  try {
    const res = await axios.get(routeLegalEntity());
    dispatch(fetchLegalEntitySuccess({ data: res.data }));
  } catch (e) {
    dispatch(fetchLegalEntityFailure());
  }
};

export const showPharmacy = createAction('PHARMACY_SHOW');
export const fetchPharmacySuccess = createAction('PHARMACY_FETCH_SUCCESS');
export const fetchPharmacyRequest = createAction('PHARMACY_FETCH_REEQUEST');
export const fetchPharmacyFailure = createAction('PHARMACY_FETCH_FAILURE');
export const selectPharmacy = createAction('PHARMACY_SELECT');
export const unSelectPharmacy = createAction('PHARMACY_UNSELECT');
export const fetchPharmacy = id => async (dispatch) => {
  dispatch(fetchPharmacyRequest());
  try {
    const res = await axios.get(routePharmacy(id));
    dispatch(fetchPharmacySuccess({ data: res.data }));
  } catch (e) {
    dispatch(fetchPharmacyFailure());
  }
};

export const addContractTerms = createAction('CONTRACT-TERMS_ADD');
export const showContractTerms = createAction('CONTRACT-TERMS_SHOW');
export const showResults = createAction('RESULTS_SHOW');
