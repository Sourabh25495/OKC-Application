export const processInputFieldParams = (
  fieldLabels,
  fieldNames,
  staticStatement
) => {
  return fieldLabels.map((e, i) => ({
    label: e,
    fieldType: fieldNames[i],
    staticStatement: staticStatement[i],
  }));
};
