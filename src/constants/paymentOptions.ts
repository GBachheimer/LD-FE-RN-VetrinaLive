export const paymentOptions = [
  {
    name: 'Cash',
    src: require('src/assets/images/cash.png'),
    action: 'Disable',
    style: {
      width: '30%',
      height: '100%',
      marginLeft: 10,
    },
  },
  {
    name: 'Wire transfer',
    src: require('src/assets/images/wire_transfer.png'),
    action: 'Disable',
    style: {
      width: '30%',
      height: 100,
      transform: [{ scale: 0.8 }],
    },
  },
  {
    name: 'Stripe',
    src: require('src/assets/images/logos_stripe.png'),
    action: 'Disable',
    style: {
      width: 120,
      height: '100%',
      marginLeft: 10,
    },
  },
  {
    name: 'Paypall',
    src: require('src/assets/images/paypall.png'),
    action: 'Disable',
    style: {
      width: '27%',
      height: 100,
      transform: [{ scale: 0.8 }],
    },
  },
  {
    name: 'Razoplay',
    src: require('src/assets/images/razoplay.png'),
    action: 'Disable',
    style: {
      width: '30%',
      height: 120,
      transform: [{ scale: 0.8 }],
    },
  },
  {
    name: 'AlyPay',
    src: require('src/assets/images/alipay.png'),
    action: 'Coming soon',
    style: {
      width: '29%',
      height: 100,
      transform: [{ scale: 0.8 }],
    },
  },
  {
    name: 'Paystack',
    src: require('src/assets/images/paystack.png'),
    action: 'Coming soon',
    style: {
      width: '28%',
      height: 100,
      transform: [{ scale: 0.7 }],
    },
  },
];
