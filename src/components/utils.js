export const processInputFieldParams = (fieldLabels, fieldNames) => {
  return fieldLabels.map((e, i) => ({ label: e, fieldType: fieldNames[i] }));
};
