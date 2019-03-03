const host = 'https://morning-atoll-29670.herokuapp.com/';
export const routeLegalEntity = () => (host + '/legal_entities');
export const routePharmacy = id => (host + '/legal_entities/' + id + '/pharmacies');
