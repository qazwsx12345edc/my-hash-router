import Vue from 'vue'

class myrouter {

  constructor(options) {
    this.options = options
    this.routeMap = {}
    this.redirectMap = {}
    this.current = Vue.observable({
      path: '/'
    })
    this.init()
  }

  createRouteMap() {
    this.options.routes.forEach(route => {
      if (route.redirect) {
        this.redirectMap[route.path] = route.redirect
      } else {
        this.routeMap[route.path] = route.component
      }
    })
  }

  updatePath() {
    this.current.path = window.location.hash.substr(1) || '/'
  }

  initEvents() {
    window.addEventListener('hashchange', () => {
      this.updatePath.call(this)
    })
    window.addEventListener('load', () => {
      this.updatePath.call(this)
    })
  }

  initComponents(Vue) {
    const self = this
    Vue.component("my-router-view", {
      render(h) {
        let path = self.current.path
        path = self.getRealPath(path)
        const currentComponent = self.routeMap[path]
        if (currentComponent) {
          return h(currentComponent)
        }
        else {
          return h(self.routeMap["*"])
        }
      }
    })
  }

  getRealPath(path) {
    let redirectPath = this.redirectMap[path]
    if(!redirectPath) {
      window.location.hash = "#" + path
      return path
    }
    else {
      this.getRealPath(redirectPath)
    }    
  }

  push(path) {
    window.location.hash = "#" + path
  }

  init() {
    this.createRouteMap()
    this.initEvents()
    this.initComponents(Vue)
  }

}

export default myrouter