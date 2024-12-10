import MillionLint from "@million/lint";

const nextConfig = {
    compiler: {
        reactRemoveProperties: true,
    },
};

export default MillionLint.next({ rsc: true })(nextConfig);
