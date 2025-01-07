import MillionLint from '@million/lint';

const nextConfig = {
  compiler: {
    reactRemoveProperties: true,
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: '/event-planning',
        permanent: true,
      },
    ]
  },
};

export default MillionLint.next({ rsc: true })(nextConfig);
