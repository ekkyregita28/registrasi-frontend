import { EventEmitter } from "events";

import Dispatcher from "./dispatcher";
import Constants from "./constants";
import getSidebarNavItems from "../data/sidebar-nav-items";
import getSidebarNavItemsSuperadmin from "../data/sidebar-nav-items-superadmin";
import getSidebarNavItemsAdminDaerah from "../data/sidebar-nav-items-admin-daerah";

let _store = {
  menuVisible: false,
  navItems: getSidebarNavItems(),
  navItemsSuperadmin: getSidebarNavItemsSuperadmin(),
  navItemsAdminDaerah: getSidebarNavItemsAdminDaerah(),
};

class Store extends EventEmitter {
  constructor() {
    super();

    this.registerToActions = this.registerToActions.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);

    Dispatcher.register(this.registerToActions.bind(this));
  }

  registerToActions({ actionType, payload }) {
    switch (actionType) {
      case Constants.TOGGLE_SIDEBAR:
        this.toggleSidebar();
        break;
      default:
    }
  }

  toggleSidebar() {
    _store.menuVisible = !_store.menuVisible;
    this.emit(Constants.CHANGE);
  }

  getMenuState() {
    return _store.menuVisible;
  }

  getSidebarItems() {
    return _store.navItems;
  }

  getSidebarItemsSuperadmin() {
    return _store.navItemsSuperadmin;
  }

  getSidebarItemsAdminDaerah() {
    return _store.navItemsAdminDaerah;
  }

  addChangeListener(callback) {
    this.on(Constants.CHANGE, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE, callback);
  }
}

export default new Store();
