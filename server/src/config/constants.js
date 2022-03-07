module.exports = {
  // Admin Emails
  ADMIN_EMAILS: [''],
  WHITELIST: {
    user: {
      register: ['name', 'email', 'mobile', 'password', 'user_type'],
      updateProfile: ['name', 'mobile'],
      updateEmail: ['email'],
      updatePassword: ['new_password'],
    },

    student: {
      update: ['name', 'linkedin', 'country', 'state', 'city', 'gender', 'about']
    },

    employer : {
      update: ['name', 'description', 'address', 'city', 'state', 'zip_code', 'mobile', 'email', 'website', 'linkedin', 'logo']
    },
    
    internship: {
      create: ['employer', 'title', 'description', 'category', 'is_paid', 'salary', 'no_of_openings', 'duration', 'last_date', 'status'],
    },

    contact: {
      create: ['name', 'email', 'subject', 'message'],
    },

    category: {
      create: ['title', 'description'],
    }
  },
  DEFAULT_USER_ROLES: ['super_admin', 'admin', 'shop_admin', 'shop_user', 'end_user'],
  USER_ROLE_TYPES: Object.freeze({
    SUPER_ADMIN: 'super_admin',
    ADMIN: 'admin',
    SHOP_ADMIN: 'shop_admin',
    SHOP_USER: 'shop_user',
    END_USER: 'end_user',
  }),
};
