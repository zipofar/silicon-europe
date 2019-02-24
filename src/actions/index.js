import axios from 'axios';
import { createAction } from 'redux-actions';

export const fetchLegalEntitySuccess = createAction('LEGALENTITY_FETCH_SUCCESS');
export const selectLegalEntity = createAction('LEGALENTITY_SELECT');

export const fetchLegalEntity = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:9000/legalentity');
    console.log('action fetchLegalEntity', res.data)
    dispatch(fetchLegalEntitySuccess({ legalEntity: res.data }));
  } catch (e) {
  
  }
};

export const showPharmacy = createAction('SHOW_PHARMACY');
export const showLegalEntity = createAction('SHOW_LEGALENTITY');

