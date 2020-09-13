import { Alert } from 'react-native';

export const delay = (
  ms: number,
  func?: (...args: any[]) => any,
  args?: any[]
) => {
  return new Promise<{ value: any; timer: NodeJS.Timeout }>((resolve) => {
    const payload = args || [];
    const timeoutId = setTimeout(async () => {
      let value = func ? func(...payload) : null;
      if (value instanceof Promise) {
        value = await value;
      }
      const response = {
        value,
        timer: timeoutId,
      };
      resolve(response);
    }, ms);
  });
};

export const alertMessage = (msg: string, title = ''): void => {
  console.log(typeof msg);
  Alert.alert(title, msg, [{ text: 'OK' }]);
};
