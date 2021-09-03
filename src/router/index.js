/* eslint-disable no-unused-vars */
import Menu1 from "../pages/menu1.vue"
import Menu2 from "../pages/menu2.vue"
import Menu3 from "../pages/menu3.vue"
import Menu4 from "../pages/menu4.vue"
import NotFound from "../pages/notfound.vue"
import myrouter from "./myrouter"

const routes = [
  {
    path: "/",
    redirect: "/menu1"
  },
  {
    path: "/menu1",
    component: Menu1,
  },
  {
    path: "/menu2",
    component: Menu2,
  },
  {
    path: "/menu3",
    component: Menu3
  },
  {
    path: "/menu4",
    component: Menu4
  },
  {
    path: "*",
    component: NotFound
  }
]

const router = new myrouter({
  routes
})

export default router