
module.exports = function friendsPlugin(context, options) {
    return {
        name: 'docusaurus-friends-plugin',
        async loadContent() {
            return ['Yangshun', 'Sebastien', '姐', '姐eer'];;
        },
        async contentLoaded({ content, actions }) {
            const { createData, addRoute } = actions;
            // 创建 friends.json
            const friends = content
            const friendsJsonPath = await createData(
                'friends.json',
                JSON.stringify(friends),
            );
            /* setGlobalData({ friends: ['Yangshun', 'Sebastien', 'Sebastien'] }); */
            // 添加 '/friends' 路由，并确保它收到了 friends prop
            addRoute({
                path: '/friends',
                component: '@site/src/components/Friends',
                modules: {
                    // 从 prop 名称 -> JSON 文件路径
                    friends: friendsJsonPath,
                },
                exact: true,
            });

        },
        injectHtmlTags({ content }) {
            return {
                headTags: [
                    /*                     {
                                            tagName: 'link',
                                            attributes: {
                                                rel: "stylesheet",
                                                type: "text/css",
                                                href: 'http://127.0.0.1/j/css/v_3_0/theme/ui-lightness/jquery-ui-1.8.1.custom.css',
                                            },
                                        },
                                        {
                                            tagName: 'script',
                                            attributes: {
                                                type: 'text/javascript',
                                                src: 'http://127.0.0.1/j/js/v_3_0/vendor/jquery/v_1_4_2/jquery-1.4.2.min.js',
                                            },
                                        }, */

                ],
                preBodyTags: [
                    /*  {
                         tagName: 'script',
                         attributes: {
                             charset: 'utf-8',
                             src: 'https://unpkg.com/@mui/material@5.10.3/umd/material-ui.development.js',
                         },
                     }, */
                ],
                postBodyTags: [/* `<div> 这是在 body 的末尾 </div>` */],
            };
        },
        /*         getClientModules() {
                    console.log("getClientModules")
        
                    return null// require.resolve('http://127.0.0.1/j/all3.js') 
    } */
    };
}