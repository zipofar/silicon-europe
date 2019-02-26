import axios from 'axios';
import { createAction } from 'redux-actions';

export const showLegalEntity = createAction('LEGALENTITY_SHOW');
export const fetchLegalEntitySuccess = createAction('LEGALENTITY_FETCH_SUCCESS');
export const selectLegalEntity = createAction('LEGALENTITY_SELECT');
export const fetchLegalEntity = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:9000/legal_entities');
    console.log('action fetchLegalEntity', res.data)
    dispatch(fetchLegalEntitySuccess({ legalEntity: res.data }));
  } catch (e) {
  
  }
};

export const showPharmacy = createAction('PHARMACY_SHOW');
export const fetchPharmacySuccess = createAction('PHARMACY_FETCH_SUCCESS');
export const selectPharmacy = createAction('PHARMACY_SELECT');
export const unSelectPharmacy = createAction('PHARMACY_UNSELECT');
export const fetchPharmacy = id => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:9000/legal_entities/${id}/pharmacies`);
    console.log('action fetchPharmacy', res.data)
    dispatch(fetchPharmacySuccess({ pharmacies: res.data }));
  } catch (e) {
  
  }
};

export const showContractTerms = createAction('CONTRACT-TERMS_SHOW');
export const showResults = createAction('RESULTS_SHOW');
