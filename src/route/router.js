import React from "react";

import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import SearchView from "../pages/SearchView";
import Logo from "../components/logo";

export const router = [
  {key: 1, title: "Ara", component: SearchView, options: {}},
  {
    key: 2,
    title: "Arama Detay",
    component: Home,
    options: {},
  },
  {
    key: 3,
    title: "Anasayfa",
    component: Home,
    options: {},
  },
  {
    key: 4,
    title: "Ürün Detay",
    component: ProductDetail,
    options: {},
  },
  {key: 5, title: "Bilgi", component: Home, options: {}},
];

export const tabBarRouter = [
  {
    id: 1,
    title: "Home",
    component: Home,
    options: {},
  },

  {
    id: 2,
    title: "Search",
    component: SearchView,
    options: {},
  },

  {
    id: 3,
    title: "Info",
    component: Home,
    options: {},
  },
];
