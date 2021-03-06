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
      update: ['name', 'education', 'linkedin', 'country', 'state', 'city', 'gender', 'about', 'github', 'twitter', 'website', 'address' ]
    },

    employer : {
      update: ['name', 'description', 'address', 'city', 'state', 'zip_code', 'mobile', 'email', 'website', 'linkedin', 'logo']
    },
    
    internship: {
      create: ['employer', 'title', 'description', 'category', 'stipend', 'salary', 'no_of_openings', 'duration', 'last_date', 'status', 'perks', 'skills', 'qualification'],
    },

    contact: {
      create: ['name', 'email', 'subject', 'message'],
    },

    category: {
      create: ['title', 'description'],
    }
  },
  DEFAULT_USER_ROLES: ['super_admin', 'admin', 'student', 'employer'],

  USER_ROLE_TYPES: Object.freeze({
    SUPER_ADMIN: 'super_admin',
    ADMIN: 'admin',
    STUDENT: 'student',
    EMPLOYER: 'employer',
  }),
};
