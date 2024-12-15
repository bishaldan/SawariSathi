export type RootStackParamList = {
  Home: undefined;
  TransportDetails: { transport: Transport };
};

export type Transport = {
  name: string;
  buses: string;
  price: string;
  distance: string;
  time: string;
};
