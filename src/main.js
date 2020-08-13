export function convertKey(obj, map, reversed) {
  const result = {};

  Object.keys(obj).forEach(key => {
    const keyIndex = reversed ? 1 : 0;
    const convertedKeyIndex = reversed ? 0 : 1;
    const convertedKey = map.find(val => key === val[keyIndex]);

    if( typeof obj[key] === 'object' && convertedKey.length === 3 ) {
      result[convertedKey[convertedKeyIndex]] = convertKey(obj[key], convertedKey[2], reversed);
    } else if( convertedKey ) {
      result[convertedKey[convertedKeyIndex]] = obj[key];
    } else {
      result[key] = obj[key];
    }
  });

  return result;
}
