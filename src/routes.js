import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout, GuestLayout} from "./layouts";


// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import HakAkses from "./views/HakAkses";
import Provinsi from "./views/Provinsi";
import Daerah from "./views/Daerah";
import Login from "./views/Login";
import Tracking from "./views/Tracking";
import ListHistory from "./views/ListHistory";
import Position from "./views/Position";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/hak-akses",
    layout: DefaultLayout,
    component: HakAkses
  },
  {
    path: "/provinsi",
    layout: DefaultLayout,
    component: Provinsi
  },
  {
    path: "/daerah",
    layout: DefaultLayout,
    component: Daerah
  },
  {
    path: "/list-history",
    layout: DefaultLayout,
    component: ListHistory
  },
  {
    path: "/login",
    layout: GuestLayout,
    component: Login
  },
  {
    path: "/tracking",
    layout: GuestLayout,
    component: Tracking
  },
  {
    path: "/position",
    layout: DefaultLayout,
    component: Position
  }
];
