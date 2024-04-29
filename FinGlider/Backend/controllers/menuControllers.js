const Menu = require("../models/menuModel");
const { createError } = require("../middleware/error");

module.exports.create_menu = async (req, res, next) => {
  try {
    const { MenuList } = req.body;

    const menu = new Menu({ MenuList });
    const savedMenu = await menu.save();

    res
      .status(201)
      .json({ message: "Menu created successfully", menu: savedMenu });
  } catch (error) {
    console.error(error);
    next(createError(500, "Menu not created"));
  }
};

module.exports.get_all_menu = async (req, res, next) => {
  try {
    const menus = await Menu.find({});
    if (menus) {
      res.status(200).json({ menus });
    } else {
      res.status(400).json({ message: "menu not found" });
    }
  } catch (error) {
    console.log(error);
    next(createError(500, "cannot get menu"));
  }
};

module.exports.get_one_menu = async (req, res, next) => {
  try {
    const { id } = req.params;
    const menu = await Menu.findById(id);
    if (menu) {
      res.status(200).json({ menu });
    } else {
      next(createError(400, "Not valid Id"));
    }
  } catch (error) {
    console.log(error);
    next(createError(500, "cannot get menu"));
  }
};

module.exports.update_menu = async (req, res, next) => {
  const { id } = req.params;

  try {
    const updatedMenu = await Menu.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (updatedMenu) {
      res.status(200).json(updatedMenu);
    } else {
      next(createError(404, "No menu found with the provided ID"));
    }
  } catch (error) {
    console.error(error);
    next(createError(500, "Cannot update menu"));
  }
};

module.exports.delete_menu = async (req, res, next) => {
  const { id } = req.params;
  try {
    const menu = await Menu.findByIdAndDelete(id);
    if (menu) {
      res.status(200).json({ message: "Deleted Sucessfully" });
    } else {
      next(createError(500, "no menu found with id"));
    }
  } catch (error) {
    next(createError(500, "cannot delete menu"));
  }
};
