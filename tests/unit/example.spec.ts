import { mount } from '@vue/test-utils'
import GamePage from '@/views/GamePage.vue'

describe('GamePage.vue', () => {
  it('renders game vue', () => {
    const wrapper = mount(GamePage)
    expect(wrapper.text()).toMatch('Ready to create an app?')
  })
})
