import axios from 'axios';
import { createAction } from 'redux-actions';

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

export const selectPharmacy = createAction('PHARMACY_SELECT');
export const fetchPharmacy = id => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:9000/legal_entities/${id}/pharmacies`);
    console.log('action fetchPharmacy', res.data)
    dispatch(fetchLegalEntitySuccess({ pharmacies: res.data }));
  } catch (e) {
  
  }
};

export const showPharmacy = createAction('SHOW_PHARMACY');
export const showLegalEntity = createAction('SHOW_LEGALENTITY');

