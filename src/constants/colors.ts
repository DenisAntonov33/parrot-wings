export default {
  white: '#ffffff',
  black: '#000000',
  error: 'red',
  primary: '#3b5cda',
  secondary: '#e459a5',
  disabled: 'grey',
  disabledText: 'rgba(256,256,256, 0.35)',
  textPrimary: '#040415',
  textSecondary: '#818189',
  bg: '#8D86A9',
  bg1: '',
};

export const shadeColor = (color: string, percent: number) => {
  let rstr = parseInt(color.substring(1, 3), 16);
  let gstr = parseInt(color.substring(3, 5), 16);
  let bstr = parseInt(color.substring(5, 7), 16);

  rstr = Math.floor((rstr * (100 + percent)) / 100);
  gstr = Math.floor((rstr * (100 + percent)) / 100);
  bstr = Math.floor((rstr * (100 + percent)) / 100);

  rstr = rstr < 255 ? rstr : 255;
  gstr = gstr < 255 ? gstr : 255;
  bstr = bstr < 255 ? bstr : 255;

  const rstrRes =
    rstr.toString(16).length == 1 ? '0' + rstr.toString(16) : rstr.toString(16);
  const gstrRes =
    gstr.toString(16).length == 1 ? '0' + gstr.toString(16) : gstr.toString(16);
  const bstrRes =
    bstr.toString(16).length == 1 ? '0' + bstr.toString(16) : bstr.toString(16);

  return '#' + rstrRes + gstrRes + bstrRes;
};
