import headerAfter from './headerAfter'
import dashboard from './dashboard'
export default () => {
  return {
    name: 'WfTestPlugin',
    dashboard: dashboard,
    translation: {
      'en': {
        greeting: 'Hello, world!',
        dashboard: 'Here comes dashboard.'
      },
      'zh-CN': {
        greeting: '你好，世界！',
        dashboard: '这里是操作面板。'
      }
    },
    components: {
      'header.after': [headerAfter]
    },
    hooks: {}
  }
}
