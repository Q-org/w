
module.exports = function friendsPlugin(context, options) {
    return {
        name: 'docusaurus-dbtools-plugin',
        async contentLoaded({ content, actions }) {
            const { createData, addRoute } = actions;
            // 创建 dbtools.json
            const dbtools = ['Yangshun', 'Sebastien', '姐', ''];
            const dbtoolsJsonPath = await createData(
                'dbtools.json',
                JSON.stringify(dbtools),
            );
            /* setGlobalData({ dbtools: ['Yangshun', 'Sebastien', 'Sebastien'] }); */
            // 添加 '/dbtools' 路由，并确保它收到了 dbtools prop
            addRoute({
                path: '/dbtools',
                component: '@site/src/pages/test/dbtools',
                modules: {
                    // 从 prop 名称 -> JSON 文件路径
                    dbtools: dbtoolsJsonPath,
                },
                exact: true,
            });

        },
        injectHtmlTags({ content }) {
            console.log('注入')
            return {
                headTags: [
                    /*                     {
                                            tagName: 'link',
                                            attributes: {
                                                rel: "stylesheet",
                                                type: "text/css",
                                                href: 'http://127.0.0.1/j/css/v_3_0/theme/ui-lightness/jquery-ui-1.8.1.custom.css',
                                            },
                                        }, */
                    {
                        tagName: 'script',
                        attributes: {
                            type: 'text/javascript',
                            src: 'http://127.0.0.1/j/js/v_3_0/vendor/jquery/v_1_4_2/jquery-1.4.2.min.js',
                        },
                    },

                ],
                preBodyTags: [

                ],
                postBodyTags: [/* `<div> 这是在 body 的末尾 </div>` */],
            };
        },
        async getDefaultCodeTranslationMessages() {
            //  在这里返回默认主题翻译
            console.log('在这里返回默认主题翻译')
        },

    };
}