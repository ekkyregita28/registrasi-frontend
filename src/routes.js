import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout, GuestLayout, SuperadminLayout } from "./layouts";


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
import DashboardAdminNasional from "./views/DashboardAdminNasional";
import VerifikasiRegistrasi from "./views/VerifikasiRegistrasi";
import Verifikasi from "./views/Verifikasi";
import Verifikasi2 from "./views/Verifikasi2";
import VerifikasiUpdate from "./views/VerifikasiUpdate";
import VerifikasiPenonaktifan from "./views/VerifikasiPenonaktifan";
import AllMember from "./views/AllMember";
import AllAdmin from "./views/AllAdmin";
import FormAddAdmin from "./views/FormAddAdmin";
import FormAddMember from "./views/FormAddMember";
import UpdateAdmin from "./views/UpdateAdmin";
import ProfileAdmin from "./views/ProfileAdmin";
import ProfileMember from "./views/ProfileMember";
import ProfileUserAdmin from "./views/ProfileUserAdmin";
import ProfileUserMember from "./views/ProfileUserMember";
import DataMember from "./views/DataMember";
import EditMember from "./views/FormEditMember";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/home" />
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
    layout: SuperadminLayout,
    component: Provinsi
  },
  {
    path: "/daerah",
    layout: SuperadminLayout,
    component: Daerah
  },
  {
    path: "/list-history",
    layout: GuestLayout,
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
    layout: SuperadminLayout,
    component: Position
  },
  {
    path: "/home",
    layout: DefaultLayout,
    component: DashboardAdminNasional
  },
  {
    path: "/verifRegistrasi",
    layout: DefaultLayout,
    component: VerifikasiRegistrasi
  },
  {
    path: "/verifikasi/:id",
    layout: DefaultLayout,
    component: Verifikasi
  },
  {
    path: "/verifikasi-next/:id",
    layout: DefaultLayout,
    component: Verifikasi2
  },
  {
    path: "/verifUpdate",
    layout: DefaultLayout,
    component: VerifikasiUpdate
  },
  {
    path: "/verifPenonaktifan",
    layout: DefaultLayout,
    component: VerifikasiPenonaktifan
  },
  {
    path: "/allMembers",
    layout: DefaultLayout,
    component: AllMember
  },
  {
    path: "/allAdmin",
    layout: SuperadminLayout,
    component: AllAdmin
  },
  {
    path: "/addAdmin",
    layout: DefaultLayout,
    component: FormAddAdmin
  },
  {
    path: "/addMember",
    layout: DefaultLayout,
    component: FormAddMember
  },
  {
    path: "/updateAdmin",
    layout: DefaultLayout,
    component: UpdateAdmin
  },
  {
    path: "/profile-user-admin",
    layout: DefaultLayout,
    component: ProfileUserAdmin
  },
  {
    path: "/profile-user-member",
    layout: DefaultLayout,
    component: ProfileUserMember
  },
  {
    path: "/data-member/:id",
    layout: DefaultLayout,
    component: DataMember
  },
  {
    path: "/edit-member/:id",
    layout: DefaultLayout,
    component: EditMember
  }
];
