export const paymentOptions = [
  {
    name: 'Cash',
    src: require('../assets/images/cash.png'),
    action: 'Disable',
    style: {
      width: '30%',
      height: '100%',
      marginLeft: 10,
    },
  },
  {
    name: 'Wire transfer',
    src: require('../assets/images/wire_transfer.png'),
    action: 'Disable',
    style: {
      width: '30%',
      height: 100,
      transform: [{ scale: 0.8 }],
    },
  },
  {
    name: 'Stripe',
    src: require('../assets/images/logos_stripe.png'),
    action: 'Disable',
    style: {
      width: 120,
      height: '100%',
      marginLeft: 10,
    },
  },
  {
    name: 'Paypall',
    src: require('../assets/images/paypall.png'),
    action: 'Disable',
    style: {
      width: '27%',
      height: 100,
      transform: [{ scale: 0.8 }],
    },
  },
  {
    name: 'Razoplay',
    src: require('../assets/images/razoplay.png'),
    action: 'Disable',
    style: {
      width: '30%',
      height: 120,
      transform: [{ scale: 0.8 }],
    },
  },
  {
    name: 'AlyPay',
    src: require('../assets/images/alipay.png'),
    action: 'Coming soon',
    style: {
      width: '29%',
      height: 100,
      transform: [{ scale: 0.8 }],
    },
  },
  {
    name: 'Paystack',
    src: require('../assets/images/paystack.png'),
    action: 'Coming soon',
    style: {
      width: '28%',
      height: 100,
      transform: [{ scale: 0.7 }],
    },
  },
];
