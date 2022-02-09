// const service = require('../services/companyService');
// const { createError } = require('../utils/helpers');

// const userCompanyAuth = async (req, res, next) => {
//   try {
//     const user = req.user;
//     const { company_id } = req.params;
//     const company = await service.getCompany(user.id, company_id);
//     if (company) return next();
//     else {
//       return createError(res, 'Unauthorized Request: Company not found', {}, 401);
//     }
//   } catch (e) {
//     return createError(res, `Error occured: ${e.message}`, {}, 401);
//   }
// };

// module.exports = userCompanyAuth;
