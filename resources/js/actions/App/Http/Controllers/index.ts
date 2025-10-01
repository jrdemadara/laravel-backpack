import Admin from './Admin'
import HomeController from './HomeController'

const Controllers = {
    Admin: Object.assign(Admin, Admin),
    HomeController: Object.assign(HomeController, HomeController),
}

export default Controllers