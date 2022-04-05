module.exports = {
	title: '秘密107', // 标题
	description: 'Just playing around', // 描述


	head: [ // 注入到当前页面的 HTML <head> 中的标签
	['link', { rel: 'icon', href: '/img/log.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
	['link', { rel: 'manifest', href: '/img/log.jpg' }],
	['link', { rel: 'apple-touch-icon', href: '/img/log.jpg' }],
  ],
  serviceWorker: true, // 是否开启 PWA

	theme: 'antdocs',
// 导航栏log配置
	themeConfig: {
		logo:'/img/log.jpg',
		nav: [
			{ text: 'Home', link: '/' },
			{ text: '引导', link: '/guide/' },
			{ text: '谷歌地址', link: 'https://google.com', target:'_blank' },
		  ],
		  sidebar: {
            // 根目录文件夹 - 模块
            '/guide/': [{
                title: '引导文件夹', // 必要的，模块名称
                sidebarDepth: 1,
                children: [
                    '/guide/guide1', // 自动取文件的一级标题为导航标题
                    '/guide/guide2', 
                ]
            },]
        }
	  },
}