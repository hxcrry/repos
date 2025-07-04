const { Router } = require("express")
const usersController = require("../controllers/usersController")
const usersRouter = Router()

usersRouter.get("/", usersController.usersListGet)
usersRouter.get("/create", usersController.usersCreateGet)
usersRouter.post("/create", usersController.usersCreatePost)

usersRouter.get("/searchUser", usersController.usersSearchGet)
usersRouter.get("/:firstName/:lastName/foundUser", usersController.usersFoundGet)
 
usersRouter.get("/:id/update", usersController.usersUpdateGet);
usersRouter.post("/:id/update", usersController.usersUpdatePost);

usersRouter.post("/:id/delete", usersController.usersDeletePost);


module.exports = usersRouter