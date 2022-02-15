const authRoutes = require('./auth.route');
const internshipRoutes = require('./internship.route');
const contactusRoutes = require('./contactus.route');
const categoryRoutes = require('./category.route');

/**
 * Init All routes here
 */
module.exports = (app) => {
  app.use('/api/auth', authRoutes);
  app.use('/api/internships', internshipRoutes);
  app.use('/api/contactus', contactusRoutes);
  app.use('/api/category', categoryRoutes);
};


// ---------- For Refernce (Delete After Everthing Works Fine)

// const userRoutes = require('../components/user/user.route');
// const authRoutes = require('../components/auth/auth.route');
// const businessRoutes = require('../components/business/business.route');
// const mediaRoutes = require('../components/media/media.route');
// const spreeRoutes = require('../components/spree/spree.route');
// const shopRoutes = require('../components/shop/shop.route');
// const qrCodeRoutes = require('../components/qr-code/qr-code.route');



// /**
//  * Init All routes here
//  */
// module.exports = (app) => {
//   app.use('/api/auth', authRoutes);
//   app.use('/api/user', userRoutes);
//   app.use('/api/business', businessRoutes);
//   app.use('/api/media', mediaRoutes);
//   app.use('/api/spree', spreeRoutes);
//   app.use('/api/shop', shopRoutes);
//   app.use('/api/qrcode', qrCodeRoutes);
// };
