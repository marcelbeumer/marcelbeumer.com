// @flow
const createSimpleAction = type => (payload: any) => ({type, payload});
export const setUrl = createSimpleAction('SERVICE_SET_URL');
export const setNamedUrl = createSimpleAction('SERVICE_SET_NAMED_URL');
export const setScreen = createSimpleAction('SET_SCREEN');
