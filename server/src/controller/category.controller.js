const { createResponse, createError } = require('../utils/helpers');
const CategoryService = require('../services/category.service');

class CategoryController {
  /**
   * @description create new category
   */
  async create(req, res) {
    try {
      req.body.employer = req.user._id;
      let category = await CategoryService.addNewCategory(req.body);

      if (category) {
        createResponse(res, 'ok', 'Category created successfully', category);
      } else {
        createError(res, {}, { message: 'Unable to create new category, please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }

  /**
   * @description get all categorys
   */
  async getAll(req, res) {
    try {
      let categorys = await CategoryService.getCategorys();

      if (categorys) {
        createResponse(res, 'ok', 'Category fetched successfully', categorys);
      } else {
        createError(res, {}, { message: 'Unable to fetched categorys, please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }

  /**
   * @description get a category by url
   */
  async getByUrl(req, res) {
    try {
      let category = await CategoryService.getCategoryByUrl(req.params.url);

      if (category) {
        createResponse(res, 'ok', 'Category fetched successfully', category);
      } else {
        createError(res, {}, { message: 'Unable to fetched category, please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }

  /**
   * @description update category
   */
  async update(req, res) {
    try {
      let category = await CategoryService.updateCategory(req.user._id, req.params.id, req.body );

      if (category) {
        createResponse(res, 'ok', 'Category updated successfully', category);
      } else {
        createError(res, {}, { message: 'Unable to update category, please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }
  
  /**
   * @description update category
   */
  async delete(req, res) {
    try {
      let category = await CategoryService.deleteCategory(req.user._id, req.params.id);

      if (category) {
        createResponse(res, 'ok', 'Category deleted successfully', category);
      } else {
        createError(res, {}, { message: 'Unable to delete category, please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }
}

const categoryController = new CategoryController();
module.exports = categoryController;
