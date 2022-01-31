export const SELECT_BREAD = 'SELECT_BREAD';
export const FILTERED_BREAD = 'FILTERED_BREAD';

export const selectBread = id => ({
  type: SELECT_BREAD,
  breadId: id,
});

export const filteredBread = id => ({
  type: FILTERED_BREAD,
  categoryId: id,
});
