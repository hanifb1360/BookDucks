module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1f1f32d7090c6d5bf0b38d62afbfbe64'),
  },
});
