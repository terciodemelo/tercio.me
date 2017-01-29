import Vue from 'vue'
import App from 'src/App'

describe('App.vue', function () {
  before(() => {
    this.vm = new Vue({
      el: document.createElement('div'),
      render: h => h(App)
    })
  })

  it('should have a #info-bar', () => {
    expect(this.vm.$el.querySelector('#info-bar'))
      .to.not.equal(null)
  })
})
