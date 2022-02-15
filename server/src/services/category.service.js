const Category = require('../models/category.model.js');
const constants = require('../config/constants');
const filteredBody = require('../utils/filteredBody');

class CategoryService {
  /**
   * @description Get All Category
   */
  async getCategorys() {
    try {
      const result = await Category.find({}).sort({createdAt: -1});
      if(result) return result
      return undefined;
    } catch (e) {
      throw e;
    }
  }

  /**
   * @description Get A Category by Id
   */
  async getCategoryById(id) {
    try {
      const result = await Category.findOne({ _id: id });
      if(result) return result.toJSON();
      return undefined;
    } catch (e) {
      throw e;
    }
  }

  /**
   * @description Get A Category by Url
   */
  async getCategoryByUrl(url) {
    try {
      const result = await Category.findOne({ url: url });
      if(result) return result.toJSON();
      return undefined;
    } catch (e) {
      throw e;
    }
  }

  async getCategoryByEmployer(id) {
    const category = await Category.find({ employer: id });
    if(category) return category.toJSON();
    return undefined;
  }
  
  async getCategoryByApplicants(id) {
    const category = await Category.find({ applicants: id });
    if(category) return category.toJSON();
    return undefined;
  }

  /**
   * @description Add new Category
   * @param {Object} obj
   */
  addNewCategory(obj) {
    return new Promise(async (resolve, reject) => {
      try {
        const body = filteredBody(obj, constants.WHITELIST.category.create);
        body.url = body.title.replace(/ /g, '-').toLowerCase();
        Category.findOne(
          {
            $or: [
              {
                url: body.url,
              },
            ],
          },
          (err, existingCategory) => {
            if (err) {
              reject(err);
              return;
            }

            // If category is not unique, return error
            if (existingCategory) {
              reject({
                message: 'That title is already in use.',
              });
              return;
            }

            // If category url is unique, create category
            const category = new Category({
              ...body,
              url: String(body.url).toLowerCase(),
            });

            category.save((err2, item) => {
              if (err2) {
                reject(err2);
                return;
              }
              resolve(item.toJSON());
            });
          },
        );
      } catch (e) {
        reject(e);
      }
    });
  }
  
  /**
   * @description Update category
   * @param {Object} obj
   * @param {id} id
   */
   async updateCategory(userId, id, payload) {
    try {
      if (!payload) return;
      const category = await this.getCategoryById(id);
      if(userId.toString() !== category.employer.toString()) {
        reject({
          message: 'Unauthorized',
        });
      }

      const body = filteredBody(payload, constants.WHITELIST.category.create);
      body.updatedAt = Date.now();
      const updatePromise = new Promise(async (resolve, reject) => {
        const query = { _id: id };
        await Category.findOneAndUpdate(query, body, { new: false }, (err, result) => {
          if (err) reject(err);
          return resolve(result);
        });
      });
      const result = await updatePromise;
      if (result) {
        const item = await this.getCategoryById(id);
        return item;
      }
      return undefined;
    } catch (e) {
      throw e;
    }
  }
  
  /**
   * @description Delete category
   * @param {userId} user id
   * @param {id} id
   */
   async deleteCategory(userId, id) {
    try {
      const category = await this.getCategoryById(id);
      if (!category) throw Error('Category not found');

      const updatePromise = new Promise(async (resolve, reject) => {
        const query = { _id: id };
        await Category.findOneAndDelete(query, (err, result) => {
          if (err) reject(err);
          return resolve(result);
        });
      });
      const result = await updatePromise;
      if (result) return true;
      return undefined;
    } catch (e) {
      throw e;
    }
  }
}

const categoryService = new CategoryService();
module.exports = categoryService;
