const host = process.env.REACT_APP_HOST || 'http://localhost:9000;
export const routeLegalEntity = () => (host + '/legal_entities');
export const routePharmacy = id => (host + '/legal_entities/' + id + '/pharmacies');
