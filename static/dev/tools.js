var t;
(() => {
  "use strict";
  var __webpack_modules__ = {
      506: (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        function ownKeys(e, r) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            r &&
              (o = o.filter(function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable;
              })),
              t.push.apply(t, o);
          }
          return t;
        }
        function _objectSpread(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2
              ? ownKeys(Object(t), !0).forEach(function (r) {
                  _defineProperty(e, r, t[r]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : ownKeys(Object(t)).forEach(function (r) {
                  Object.defineProperty(
                    e,
                    r,
                    Object.getOwnPropertyDescriptor(t, r),
                  );
                });
          }
          return e;
        }
        function _defineProperty(obj, key, value) {
          return (
            (key = _toPropertyKey(key)) in obj
              ? Object.defineProperty(obj, key, {
                  value,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (obj[key] = value),
            obj
          );
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return "symbol" == typeof key ? key : String(key);
        }
        function _toPrimitive(input, hint) {
          if ("object" != typeof input || null === input) return input;
          var prim = input[Symbol.toPrimitive];
          if (void 0 !== prim) {
            var res = prim.call(input, hint || "default");
            if ("object" != typeof res) return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === hint ? String : Number)(input);
        }
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            OPT: () => OPT,
            _fetch: () => _fetch,
            executeMethod: () => executeMethod,
            methods: () => methods,
          });
        var HREF = "/netinnet_product/dojsp?jsp=productlist.jsp",
          OPT = {
            headers: { "upgrade-insecure-requests": "1" },
            referrer: "",
            referrerPolicy: "strict-origin-when-cross-origin",
            body: null,
            method: "GET",
            mode: "cors",
            credentials: "omit",
          };
        async function _fetch(href = HREF, opt = OPT) {
          opt = _objectSpread(_objectSpread({}, OPT), opt);
          try {
            const web = await fetch(href, opt);
            return await web.text();
          } catch (error) {
            return console.error(error), "";
          }
        }
        const methods = {
          产品列表: () => {
            $.post(
              "/netinnet_product/do?action=api/mlogin&start=getProductList",
              function (data) {
                let obj = eval("(" + data + ")"),
                  htmlstr = "";
                $.each(obj.data.list, function (p1, p2) {
                  htmlstr +=
                    "<div class='proItem'><p class='subject'>" +
                    p2.tcan_name +
                    "</p><a href='do?action=login&productId=" +
                    p2.tpl_id +
                    "'>进入产品</a></div>";
                }),
                  $(".proMenu").html(htmlstr);
              },
            );
          },
          登陆: async (productId = "1C436C2EC0A82CC100000008582121") => {
            _fetch(`/netinnet_product/do?action=${productId}`, {
              headers: {
                accept:
                  "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "accept-language": "zh-CN,zh;q=0.9",
                "cache-control": "max-age=0",
                "content-type": "application/x-www-form-urlencoded",
                "upgrade-insecure-requests": "1",
              },
              referrer:
                "/netinnet_product/do?action=login&productId=${productId}",
              referrerPolicy: "strict-origin-when-cross-origin",
              body: "action=login&start=check&userid=netinnet&Password=123456&CheckCode=DAAC&role=teacher",
              method: "POST",
              mode: "cors",
              credentials: "include",
            });
          },
        };
        function executeMethod(methodName) {
          return (props) => {
            if (methods.hasOwnProperty(methodName)) {
              console.log(`执行 ${methodName} 方法`);
              try {
                methods[methodName](props);
              } catch (err) {
                console.error(
                  `执行 ${methodName} 方法时发生错误：${err?.message}`,
                ),
                  "SyntaxError" === err.name
                    ? console.log("请检查您的代码是否有语法错误")
                    : "TypeError" === err.name
                    ? console.log("请检查您的参数是否有类型错误")
                    : "NetworkError" === err.name
                    ? console.log("请检查您的网络连接是否正常")
                    : console.log("请尝试重新执行或联系技术支持");
              } finally {
                console.log("完成 ${methodName} 方法的执行");
              }
            } else console.error(`未定义的方法：${methodName}`);
          };
        }
      },
    },
    __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (void 0 !== cachedModule) return cachedModule.exports;
    var module = (__webpack_module_cache__[moduleId] = { exports: {} });
    return (
      __webpack_modules__[moduleId](
        module,
        module.exports,
        __webpack_require__,
      ),
      module.exports
    );
  }
  (__webpack_require__.d = (exports, definition) => {
    for (var key in definition)
      __webpack_require__.o(definition, key) &&
        !__webpack_require__.o(exports, key) &&
        Object.defineProperty(exports, key, {
          enumerable: !0,
          get: definition[key],
        });
  }),
    (__webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop)),
    (__webpack_require__.r = (exports) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(exports, "__esModule", { value: !0 });
    });
  var __webpack_exports__ = {};
  (() => {
    function zQuery(s) {
      if (!s || "string" != typeof s) return s;
      let d = document.querySelectorAll(s);
      return (
        0 === d.length &&
          /^\w+$/g.test(s) &&
          ((d = document.querySelectorAll("#" + s)),
          0 === d.length &&
            (d = document.querySelectorAll('[name*="' + s + '"]'))),
        0 === d.length ? null : 1 === d.length ? d[0] : d
      );
    }
    __webpack_require__.r(__webpack_exports__),
      __webpack_require__.d(__webpack_exports__, {
        _fetch: () => method._fetch,
        executeMethod: () => method.executeMethod,
        zQuery: () => zQuery,
        加载: () => 加载,
      });
    var method = __webpack_require__(506);
    Date.now().toString().split("").reverse().join("");
    function 加载(path = "https://qio/dev/tools.js") {
      var oldScript = document.querySelector('script[src^="https://qio/'),
        newScript = document.createElement("script");
      (newScript.src = `https://qio/dev/tools.js?t=${Date.now()
        .toString()
        .split("")
        .reverse()
        .join("")}`),
        oldScript
          ? (oldScript.parentNode.insertBefore(newScript, oldScript),
            oldScript.parentNode.removeChild(oldScript))
          : document.body.appendChild(newScript);
    }
    !(async function 替换网址并获取网页内容() {
      try {
        let 原始网址元素 = zQuery("[href*='netinnet.cn']");
        原始网址元素 &&
          原始网址元素.href &&
          (原始网址元素.href = 原始网址元素?.href?.replace(
            /\/{2}[^/]+/,
            "qio",
          ));
        let 新网页字符串 = await (0, method._fetch)();
        (新网页字符串 = 新网页字符串.replace(
          /(?<=\/{2})dx.tk.netinnet.cn[^/]*(?=\/)/,
          "qio",
        )),
          (document.documentElement.innerHTML = 新网页字符串),
          (原始网址元素 = zQuery("[href*='netinnet.cn']")),
          原始网址元素 &&
            原始网址元素.href &&
            (原始网址元素.href = 原始网址元素?.href?.replace(
              /\/{2}[^/]+/,
              "qio",
            )),
          (0, method.executeMethod)("产品列表")();
      } catch (error) {
        console.error(error), alert("抱歉，发生了一些错误，请稍后再试。");
      } finally {
        console.log("函数执行完毕。");
      }
    })();
  })(),
    (t = __webpack_exports__);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHMuanMiLCJtYXBwaW5ncyI6InEvQ0FDQSxJQUFJQSxLQUFPLDhDQUNBQyxJQUFNLENBQ2JDLFFBQVMsQ0FDTCw0QkFBNkIsS0FFakNDLFNBQVUsR0FDVkMsZUFBZ0Isa0NBQ2hCQyxLQUFNLEtBQ05DLE9BQVEsTUFDUkMsS0FBTSxPQUNOQyxZQUFhLFFBT1ZDLGVBQWVDLE9BQU9DLEtBQWVYLEtBQU1ZLElBQWNYLEtBRTVEVyxJQUFHQyxjQUFBQSxjQUFBLEdBQ0laLEtBQ0FXLEtBRVAsSUFFSSxNQUFNRSxVQUFzQkMsTUFBTUosS0FBTUMsS0FJeEMsYUFGMkJFLElBQUlFLE1BR25DLENBQUUsTUFBT0MsT0FHTCxPQURBQyxRQUFRRCxNQUFNQSxPQUNQLEVBQ1gsQ0FDSixDQUVPLE1BQU1FLFFBQVUsQ0FFbkJDLEtBQU1BLEtBQ0ZDLEVBQUVDLEtBQUssK0RBQStELFNBQVVDLE1BQzVFLElBQUlDLElBQU1DLEtBQUssSUFBTUYsS0FBTyxLQUN4QkcsUUFBVSxHQUNkTCxFQUFFTSxLQUFLSCxJQUFJRCxLQUFLSyxNQUFNLFNBQVVDLEdBQUlDLElBQ2hDSixTQUNJLDJDQUVBSSxHQUFHQyxVQUZILDBDQUtBRCxHQUFHRSxPQUNILGtCQUNSLElBQ0FYLEVBQUUsWUFBWVksS0FBS1AsUUFDdkIsR0FBQyxFQUdMUSxHQUFJekIsTUFBTzBCLFVBQVksb0NBQ25CekIsT0FBUSwrQkFBOEJ5QixZQUFhLENBQy9DakMsUUFBUyxDQUNMLE9BQ0ksMElBQ0osa0JBQW1CLGlCQUNuQixnQkFBaUIsWUFDakIsZUFBZ0Isb0NBQ2hCLDRCQUE2QixLQUVqQ0MsU0FBVSwyREFDVkMsZUFBZ0Isa0NBQ2hCQyxLQUFNLHVGQUNOQyxPQUFRLE9BQ1JDLEtBQU0sT0FDTkMsWUFBYSxXQUNoQixHQUtGLFNBQVM0QixjQUFjQyxZQUMxQixPQUFRQyxRQUVKLEdBQUluQixRQUFRb0IsZUFBZUYsWUFBYSxDQUVwQ25CLFFBQVFzQixJQUFLLE1BQUtILGlCQUVsQixJQUdRbEIsUUFBUWtCLFlBQVlDLE1BQzVCLENBQUUsTUFBT0csS0FFTHZCLFFBQVFELE1BQU8sTUFBS29CLHNCQUFzQkksS0FBS0MsV0FDOUIsZ0JBQWJELElBQUlFLEtBQ0p6QixRQUFRc0IsSUFBSSxrQkFDUSxjQUFiQyxJQUFJRSxLQUNYekIsUUFBUXNCLElBQUksa0JBQ1EsaUJBQWJDLElBQUlFLEtBQ1h6QixRQUFRc0IsSUFBSSxpQkFFWnRCLFFBQVFzQixJQUFJLGlCQUVwQixDQUFDLFFBRUd0QixRQUFRc0IsSUFBSSx5QkFDaEIsQ0FDSixNQUVJdEIsUUFBUUQsTUFBTyxVQUFTb0IsYUFDNUIsQ0FFUixDLEdDOUdJTyx5QkFBMkIsQ0FBQyxFQUdoQyxTQUFTQyxvQkFBb0JDLFVBRTVCLElBQUlDLGFBQWVILHlCQUF5QkUsVUFDNUMsUUFBcUJFLElBQWpCRCxhQUNILE9BQU9BLGFBQWFFLFFBR3JCLElBQUlDLE9BQVNOLHlCQUF5QkUsVUFBWSxDQUdqREcsUUFBUyxDQUFDLEdBT1gsT0FIQUUsb0JBQW9CTCxVQUFVSSxPQUFRQSxPQUFPRCxRQUFTSixxQkFHL0NLLE9BQU9ELE9BQ2YsQ0NyQkFKLG9CQUFvQk8sRUFBSSxDQUFDSCxRQUFTSSxjQUNqQyxJQUFJLElBQUlDLE9BQU9ELFdBQ1hSLG9CQUFvQlUsRUFBRUYsV0FBWUMsT0FBU1Qsb0JBQW9CVSxFQUFFTixRQUFTSyxNQUM1RUUsT0FBT0MsZUFBZVIsUUFBU0ssSUFBSyxDQUFFSSxZQUFZLEVBQU1DLElBQUtOLFdBQVdDLE1BRTFFLEVDTkRULG9CQUFvQlUsRUFBSSxDQUFDL0IsSUFBS29DLE9BQVVKLE9BQU9LLFVBQVV0QixlQUFldUIsS0FBS3RDLElBQUtvQyxNQ0NsRmYsb0JBQW9Ca0IsRUFBS2QsVUFDSCxvQkFBWGUsUUFBMEJBLE9BQU9DLGFBQzFDVCxPQUFPQyxlQUFlUixRQUFTZSxPQUFPQyxZQUFhLENBQUVDLE1BQU8sV0FFN0RWLE9BQU9DLGVBQWVSLFFBQVMsYUFBYyxDQUFFaUIsT0FBTyxHQUFPLEUsaUNDTHZELFNBQVNDLE9BQU9DLEdBQ25CLElBQUtBLEdBQWtCLGlCQUFOQSxFQUNiLE9BQU9BLEVBRVgsSUFBSWhCLEVBQUlpQixTQUFTQyxpQkFBaUJGLEdBT2xDLE9BTmlCLElBQWJoQixFQUFFbUIsUUFBZ0IsU0FBU0MsS0FBS0osS0FDaENoQixFQUFJaUIsU0FBU0MsaUJBQWlCLElBQU1GLEdBQ25CLElBQWJoQixFQUFFbUIsU0FDRm5CLEVBQUlpQixTQUFTQyxpQkFBaUIsV0FBYUYsRUFBSSxRQUduQyxJQUFiaEIsRUFBRW1CLE9BQWUsS0FBb0IsSUFBYm5CLEVBQUVtQixPQUFlbkIsRUFBRSxHQUFLQSxDQUMzRCxDLHdOQ1BTcUIsS0FBS0MsTUFBTUMsV0FBV0MsTUFBTSxJQUFJQyxVQUFVQyxLQUFLLElBRWpELFNBQVNDLEdBQUdDLEtBQU8sNEJBRXRCLElBQUlDLFVBQVlaLFNBQVNhLGNBQWMsNkJBRW5DQyxVQUFZZCxTQUFTZSxjQUFjLFVBRXZDRCxVQUFVRSxJQUFPLDhCQUE2QlosS0FBS0MsTUFDOUNDLFdBQ0FDLE1BQU0sSUFDTkMsVUFDQUMsS0FBSyxNQUVWRyxXQUNPQSxVQUFVSyxXQUFXQyxhQUFhSixVQUFXRixXQUM5Q0EsVUFBVUssV0FBV0UsWUFBWVAsWUFDakNaLFNBQVNoRSxLQUFLb0YsWUFBWU4sVUFDcEMsRUFFQTFFLGVBQWVpRixjQUNYLElBQ0ksSUFBSUMsT0FBU3hCLE9BQU8seUJBQ2hCd0IsUUFBVUEsT0FBT2hGLE9BQ2pCZ0YsT0FBT2hGLEtBQU9nRixRQUFRaEYsTUFBTWlGLFFBQVEsYUFBYyxRQUd0RCxJQUFJQyxhQUFlbkYsRUFBQUEsT0FBQUEsVUFDbkJtRixPQUFTQSxPQUFPRCxRQUFRLHlDQUEwQyxPQUVsRXZCLFNBQVN5QixnQkFBZ0JDLFVBQVlGLE9BQ3JDRixPQUFTeEIsT0FBTyx5QkFDWndCLFFBQVVBLE9BQU9oRixPQUNqQmdGLE9BQU9oRixLQUFPZ0YsUUFBUWhGLE1BQU1pRixRQUFRLGFBQWMsU0FFdER4RCxFQUFBQSxPQUFBQSxlQUFjLE9BQWRBLEVBQ0osQ0FBRSxNQUFPbkIsT0FDTEMsUUFBUUQsTUFBTUEsT0FDZCtFLE1BQU0sb0JBQ1YsQ0FBQyxRQUNHOUUsUUFBUXNCLElBQUksVUFDaEIsQ0FDSixDQUNBa0QsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3QvLi9zcmMvbWV0aG9kLnRzIiwid2VicGFjazovL3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90Ly4vc3JjL2FsbDMudHMiLCJ3ZWJwYWNrOi8vdC8uL3NyYy90b29scy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtZXRob2QuanNcclxudmFyIEhSRUYgPSAnL25ldGlubmV0X3Byb2R1Y3QvZG9qc3A/anNwPXByb2R1Y3RsaXN0LmpzcCc7XHJcbmV4cG9ydCB2YXIgT1BUID0ge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAgICd1cGdyYWRlLWluc2VjdXJlLXJlcXVlc3RzJzogJzEnLFxyXG4gICAgfSxcclxuICAgIHJlZmVycmVyOiAnJyxcclxuICAgIHJlZmVycmVyUG9saWN5OiAnc3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbicsXHJcbiAgICBib2R5OiBudWxsLFxyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIG1vZGU6ICdjb3JzJyxcclxuICAgIGNyZWRlbnRpYWxzOiAnb21pdCcsXHJcbn07XHJcblxyXG4vLyDlrprkuYnkuIDkuKrlvILmraXlh73mlbDvvIznlKjmnaXlj5HpgIEgSFRUUCDor7fmsYLlubbov5Tlm57lk43lupTmlofmnKxcclxuLy8gaHJlZjog6K+35rGC55qEIFVSTCDlnLDlnYDvvIzpu5jorqTkuLogSFJFRiDluLjph49cclxuLy8gb3B0OiDor7fmsYLnmoTpgInpobnlr7nosaHvvIzpu5jorqTkuLogT1BUIOW4uOmHj1xyXG4vLyDov5Tlm57lgLw6IOS4gOS4quWtl+espuS4su+8jOihqOekuuWTjeW6lOaWh+acrFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gX2ZldGNoKGhyZWY6IHN0cmluZyA9IEhSRUYsIG9wdDogb2JqZWN0ID0gT1BUKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIC8vIOWQiOW5tum7mOiupOmAiemhueWSjOiHquWumuS5iemAiemhuVxyXG4gICAgb3B0ID0ge1xyXG4gICAgICAgIC4uLk9QVCxcclxuICAgICAgICAuLi5vcHQsXHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyDkvb/nlKggZmV0Y2gg5pa55rOV5Y+R6YCB6K+35rGC77yM5bm2562J5b6F5ZON5bqUXHJcbiAgICAgICAgY29uc3Qgd2ViOiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKGhyZWYsIG9wdCk7XHJcbiAgICAgICAgLy8g5L2/55SoIHRleHQg5pa55rOV6I635Y+W5ZON5bqU5paH5pys77yM5bm2562J5b6F57uT5p6cXHJcbiAgICAgICAgY29uc3QgdGV4dDogc3RyaW5nID0gYXdhaXQgd2ViLnRleHQoKTtcclxuICAgICAgICAvLyDov5Tlm57lk43lupTmlofmnKxcclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8g5aaC5p6c5Y+R55Sf5byC5bi477yM5omT5Y2w6ZSZ6K+v5L+h5oGv77yM5bm26L+U5Zue56m65a2X56ym5LiyXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG59XHJcbi8vIOWumuS5ieS4gOS4qiBtZXRob2RzIOWvueixoe+8jOWtmOWCqOS4jeWQjOeahOaWueazlVxyXG5leHBvcnQgY29uc3QgbWV0aG9kcyA9IHtcclxuICAgIC8vIOWumuS5ieS4gOS4quS6p+WTgeWIl+ihqOaWueazlVxyXG4gICAg5Lqn5ZOB5YiX6KGoOiAoKSA9PiB7XHJcbiAgICAgICAgJC5wb3N0KCcvbmV0aW5uZXRfcHJvZHVjdC9kbz9hY3Rpb249YXBpL21sb2dpbiZzdGFydD1nZXRQcm9kdWN0TGlzdCcsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGxldCBvYmogPSBldmFsKCcoJyArIGRhdGEgKyAnKScpO1xyXG4gICAgICAgICAgICBsZXQgaHRtbHN0ciA9ICcnO1xyXG4gICAgICAgICAgICAkLmVhY2gob2JqLmRhdGEubGlzdCwgZnVuY3Rpb24gKHAxLCBwMikge1xyXG4gICAgICAgICAgICAgICAgaHRtbHN0ciArPVxyXG4gICAgICAgICAgICAgICAgICAgIFwiPGRpdiBjbGFzcz0ncHJvSXRlbSc+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPHAgY2xhc3M9J3N1YmplY3QnPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBwMi50Y2FuX25hbWUgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8L3A+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8YSBocmVmPSdkbz9hY3Rpb249bG9naW4mcHJvZHVjdElkPVwiICtcclxuICAgICAgICAgICAgICAgICAgICBwMi50cGxfaWQgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiJz7ov5vlhaXkuqflk4E8L2E+PC9kaXY+XCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKCcucHJvTWVudScpLmh0bWwoaHRtbHN0cik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgLy8g5a6a5LmJ5LiA5Liq55m76ZmG5pa55rOVXHJcbiAgICDnmbvpmYY6IGFzeW5jIChwcm9kdWN0SWQgPSAnMUM0MzZDMkVDMEE4MkNDMTAwMDAwMDA4NTgyMTIxJykgPT4ge1xyXG4gICAgICAgIF9mZXRjaChgL25ldGlubmV0X3Byb2R1Y3QvZG8/YWN0aW9uPSR7cHJvZHVjdElkfWAsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ2FjY2VwdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgJ3RleHQvaHRtbCxhcHBsaWNhdGlvbi94aHRtbCt4bWwsYXBwbGljYXRpb24veG1sO3E9MC45LGltYWdlL2F2aWYsaW1hZ2Uvd2VicCxpbWFnZS9hcG5nLCovKjtxPTAuOCxhcHBsaWNhdGlvbi9zaWduZWQtZXhjaGFuZ2U7dj1iMztxPTAuNycsXHJcbiAgICAgICAgICAgICAgICAnYWNjZXB0LWxhbmd1YWdlJzogJ3poLUNOLHpoO3E9MC45JyxcclxuICAgICAgICAgICAgICAgICdjYWNoZS1jb250cm9sJzogJ21heC1hZ2U9MCcsXHJcbiAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgICAgICAndXBncmFkZS1pbnNlY3VyZS1yZXF1ZXN0cyc6ICcxJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVmZXJyZXI6ICcvbmV0aW5uZXRfcHJvZHVjdC9kbz9hY3Rpb249bG9naW4mcHJvZHVjdElkPSR7cHJvZHVjdElkfScsXHJcbiAgICAgICAgICAgIHJlZmVycmVyUG9saWN5OiAnc3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbicsXHJcbiAgICAgICAgICAgIGJvZHk6ICdhY3Rpb249bG9naW4mc3RhcnQ9Y2hlY2smdXNlcmlkPW5ldGlubmV0JlBhc3N3b3JkPTEyMzQ1NiZDaGVja0NvZGU9REFBQyZyb2xlPXRlYWNoZXInLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxufTtcclxuXHJcbi8vIOWumuS5ieS4gOS4quaJp+ihjOaWueazleeahOWHveaVsO+8jOaOpeaUtuS4gOS4quaWueazleWQjeS9nOS4uuWPguaVsFxyXG5leHBvcnQgZnVuY3Rpb24gZXhlY3V0ZU1ldGhvZChtZXRob2ROYW1lKSB7XHJcbiAgICByZXR1cm4gKHByb3BzPykgPT4ge1xyXG4gICAgICAgIC8vIOajgOafpSBtZXRob2RzIOWvueixoeS4reaYr+WQpuWtmOWcqOivpeaWueazleWQjVxyXG4gICAgICAgIGlmIChtZXRob2RzLmhhc093blByb3BlcnR5KG1ldGhvZE5hbWUpKSB7XHJcbiAgICAgICAgICAgIC8vIOWtmOWcqOivpeaWueazleWQje+8jOaJk+WNsOaJp+ihjOS/oeaBr1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg5omn6KGMICR7bWV0aG9kTmFtZX0g5pa55rOVYCk7XHJcbiAgICAgICAgICAgIC8vIOS9v+eUqCB0cnkuLi5jYXRjaC4uLmZpbmFsbHkg6K+t5Y+l5p2l5o2V6I635ZKM5aSE55CG5byC5bi4XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6LCD55So6K+l5pa55rOV77yM5bm25Lyg5YWlIHByb3BzIOWPguaVsFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHNbbWV0aG9kTmFtZV0ocHJvcHMpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcclxuICAgICAgICAgICAgICAgIC8vIOWPkeeUn+W8guW4uO+8jOaJk+WNsOmUmeivr+S/oeaBr++8jOW5tuagueaNruW8guW4uOexu+Wei+e7meWHuuaPkOekuuaIluino+WGs+aWueahiFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihg5omn6KGMICR7bWV0aG9kTmFtZX0g5pa55rOV5pe25Y+R55Sf6ZSZ6K+v77yaJHtlcnI/Lm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyLm5hbWUgPT09ICdTeW50YXhFcnJvcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6K+35qOA5p+l5oKo55qE5Luj56CB5piv5ZCm5pyJ6K+t5rOV6ZSZ6K+vJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVyci5uYW1lID09PSAnVHlwZUVycm9yJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfor7fmo4Dmn6XmgqjnmoTlj4LmlbDmmK/lkKbmnInnsbvlnovplJnor68nKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyLm5hbWUgPT09ICdOZXR3b3JrRXJyb3InKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+ivt+ajgOafpeaCqOeahOe9kee7nOi/nuaOpeaYr+WQpuato+W4uCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6K+35bCd6K+V6YeN5paw5omn6KGM5oiW6IGU57O75oqA5pyv5pSv5oyBJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICAvLyDml6DorrrmmK/lkKblj5HnlJ/lvILluLjvvIzpg73miafooYzkuIDkupvlv4XopoHnmoTmk43kvZxcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflrozmiJAgJHttZXRob2ROYW1lfSDmlrnms5XnmoTmiafooYwnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOS4jeWtmOWcqOivpeaWueazleWQje+8jOaJk+WNsOmUmeivr+S/oeaBr1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGDmnKrlrprkuYnnmoTmlrnms5XvvJoke21ldGhvZE5hbWV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuLy8g5L2/55So5omn6KGM5pa55rOV55qE5Ye95pWw6LCD55So5LiN5ZCM55qE5pa55rOVXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIHpRdWVyeShzKSB7XHJcbiAgICBpZiAoIXMgfHwgdHlwZW9mIHMgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgcmV0dXJuIHM7XHJcbiAgICB9XHJcbiAgICBsZXQgZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocyk7XHJcbiAgICBpZiAoZC5sZW5ndGggPT09IDAgJiYgL15cXHcrJC9nLnRlc3QocykpIHtcclxuICAgICAgICBkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnIycgKyBzKTtcclxuICAgICAgICBpZiAoZC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lKj1cIicgKyBzICsgJ1wiXScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBkLmxlbmd0aCA9PT0gMCA/IG51bGwgOiBkLmxlbmd0aCA9PT0gMSA/IGRbMF0gOiBkO1xyXG59XHJcbi8vIOWumuS5ieS4gOS4quWHveaVsO+8jOWQjeS4uiByZXZlcnNlRGF0ZVxyXG5leHBvcnQgZnVuY3Rpb24gcmV2ZXJzZURhdGUoaW5wdXREYXRlPzogc3RyaW5nIHwgbnVtYmVyIHwgRGF0ZSB8IHVuZGVmaW5lZCB8IG51bGwpOiBzdHJpbmcge1xyXG4gICAgLy8g5aaC5p6c6L6T5YWl5Y+C5pWw5pivIHVuZGVmaW5lZCDmiJYgbnVsbO+8jOWwseS9v+eUqCBEYXRlLm5vdygpIOiOt+WPluW9k+WJjeaXtumXtOaIs1xyXG4gICAgaWYgKGlucHV0RGF0ZSA9PT0gdW5kZWZpbmVkIHx8IGlucHV0RGF0ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIGlucHV0RGF0ZSA9IERhdGUubm93KCk7XHJcbiAgICB9XHJcbiAgICAvLyDlpoLmnpzovpPlhaXlj4LmlbDmmK/lrZfnrKbkuLLmiJbmlbDlrZfvvIzlsLHkvb/nlKggbmV3IERhdGUoKSDlsIblhbbovazmjaLkuLogRGF0ZSDlr7nosaFcclxuICAgIGlmICh0eXBlb2YgaW5wdXREYXRlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgaW5wdXREYXRlID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgIGlucHV0RGF0ZSA9IG5ldyBEYXRlKGlucHV0RGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5bCGIGlucHV0RGF0ZSDovazmjaLkuLrlrZfnrKbkuLLvvIzlubbkvb/nlKggc3BsaXQg5pa55rOV5bCG5YW25YiG5Ymy5Li65a2X56ym5pWw57uEXHJcbiAgICBjb25zdCBkYXRlU3RyaW5nID0gaW5wdXREYXRlLmdldFRpbWUoKS50b1N0cmluZygpO1xyXG4gICAgY29uc3QgcmV2ZXJzZWRTdHJpbmc6IHN0cmluZ1tdID0gZGF0ZVN0cmluZy5zcGxpdCgnJyk7XHJcbiAgICAvLyDkvb/nlKggcmV2ZXJzZSDmlrnms5XlsIblrZfnrKbmlbDnu4Tlj43ovazvvIzlubbkvb/nlKggam9pbiDmlrnms5XlsIblhbbmi7zmjqXkuLrlrZfnrKbkuLJcclxuICAgIGNvbnN0IHJldmVyc2VkU3RyaW5nSm9pbmVkOiBzdHJpbmcgPSByZXZlcnNlZFN0cmluZy5yZXZlcnNlKCkuam9pbignJyk7XHJcblxyXG4gICAgLy8g6L+U5Zue5Y+N6L2s5ZCO55qE5a2X56ym5LiyXHJcbiAgICByZXR1cm4gcmV2ZXJzZWRTdHJpbmdKb2luZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlU3RyKHN0cj86IGFueSk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0ciA9IHN0ci50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xyXG59XHJcbiIsImltcG9ydCB7IHpRdWVyeSwgcmV2ZXJzZURhdGUgfSBmcm9tICcuL2FsbDMudHMnO1xyXG5pbXBvcnQgeyBleGVjdXRlTWV0aG9kLCBfZmV0Y2ggfSBmcm9tICcuL21ldGhvZC50cyc7XHJcblxyXG5leHBvcnQgeyB6UXVlcnksIGV4ZWN1dGVNZXRob2QsIF9mZXRjaCB9O1xyXG5cclxudmFyIElEID0gRGF0ZS5ub3coKS50b1N0cmluZygpLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24g5Yqg6L29KHBhdGggPSAnaHR0cHM6Ly9xaW8vZGV2L3Rvb2xzLmpzJykge1xyXG4gICAgLy8g6I635Y+W5Y6f5aeL55qEIHNjcmlwdCDlhYPntKBcclxuICAgIHZhciBvbGRTY3JpcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbc3JjXj1cImh0dHBzOi8vcWlvLycpO1xyXG4gICAgLy8g5Yib5bu65LiA5Liq5paw55qEIHNjcmlwdCDlhYPntKBcclxuICAgIHZhciBuZXdTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgIC8vIOiuvue9ruWFtiBzcmMg5bGe5oCn5Li6IGpzIOaWh+S7tueahOi3r+W+hO+8jOW5tua3u+WKoOS4gOS4quaXtumXtOaIs+WPguaVsFxyXG4gICAgbmV3U2NyaXB0LnNyYyA9IGBodHRwczovL3Fpby9kZXYvdG9vbHMuanM/dD0ke0RhdGUubm93KClcclxuICAgICAgICAudG9TdHJpbmcoKVxyXG4gICAgICAgIC5zcGxpdCgnJylcclxuICAgICAgICAucmV2ZXJzZSgpXHJcbiAgICAgICAgLmpvaW4oJycpfWA7XHJcbiAgICAvLyDmoLnmja4gb2xkU2NyaXB0IOWFg+e0oOaYr+WQpuWtmOWcqOadpemAieaLqeS4jeWQjOeahOaPkuWFpeaWueazlVxyXG4gICAgb2xkU2NyaXB0XHJcbiAgICAgICAgPyAob2xkU2NyaXB0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld1NjcmlwdCwgb2xkU2NyaXB0KSxcclxuICAgICAgICAgIG9sZFNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG9sZFNjcmlwdCkpXHJcbiAgICAgICAgOiBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5ld1NjcmlwdCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIOabv+aNoue9keWdgOW5tuiOt+WPlue9kemhteWGheWuuSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IOWOn+Wni+e9keWdgOWFg+e0oCA9IHpRdWVyeShcIltocmVmKj0nbmV0aW5uZXQuY24nXVwiKTtcclxuICAgICAgICBpZiAo5Y6f5aeL572R5Z2A5YWD57SgICYmIOWOn+Wni+e9keWdgOWFg+e0oC5ocmVmKSB7XHJcbiAgICAgICAgICAgIOWOn+Wni+e9keWdgOWFg+e0oC5ocmVmID0g5Y6f5aeL572R5Z2A5YWD57SgPy5ocmVmPy5yZXBsYWNlKC9cXC97Mn1bXi9dKy8sICdxaW8nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCDmlrDnvZHpobXlrZfnrKbkuLIgPSBhd2FpdCBfZmV0Y2goKTtcclxuICAgICAgICDmlrDnvZHpobXlrZfnrKbkuLIgPSDmlrDnvZHpobXlrZfnrKbkuLIucmVwbGFjZSgvKD88PVxcL3syfSlkeC50ay5uZXRpbm5ldC5jblteL10qKD89XFwvKS8sICdxaW8nKTtcclxuICAgICAgICAvLyDmlrDnvZHpobXlrZfnrKbkuLIgPSDmlrDnvZHpobXlrZfnrKbkuLIucmVwbGFjZSgv6LSi5Lya5LqR5pWZ5a2m5bmz5Y+wLywgJ3Fpb+i0ouS8muS6keaVmeWtpuW5s+WPsCcpO1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5pbm5lckhUTUwgPSDmlrDnvZHpobXlrZfnrKbkuLI7XHJcbiAgICAgICAg5Y6f5aeL572R5Z2A5YWD57SgID0gelF1ZXJ5KFwiW2hyZWYqPSduZXRpbm5ldC5jbiddXCIpO1xyXG4gICAgICAgIGlmICjljp/lp4vnvZHlnYDlhYPntKAgJiYg5Y6f5aeL572R5Z2A5YWD57SgLmhyZWYpIHtcclxuICAgICAgICAgICAg5Y6f5aeL572R5Z2A5YWD57SgLmhyZWYgPSDljp/lp4vnvZHlnYDlhYPntKA/LmhyZWY/LnJlcGxhY2UoL1xcL3syfVteL10rLywgJ3FpbycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleGVjdXRlTWV0aG9kKCfkuqflk4HliJfooagnKSgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICBhbGVydCgn5oqx5q2J77yM5Y+R55Sf5LqG5LiA5Lqb6ZSZ6K+v77yM6K+356iN5ZCO5YaN6K+V44CCJyk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCflh73mlbDmiafooYzlrozmr5XjgIInKTtcclxuICAgIH1cclxufVxyXG7mm7/mjaLnvZHlnYDlubbojrflj5bnvZHpobXlhoXlrrkoKTtcclxuIl0sIm5hbWVzIjpbIkhSRUYiLCJPUFQiLCJoZWFkZXJzIiwicmVmZXJyZXIiLCJyZWZlcnJlclBvbGljeSIsImJvZHkiLCJtZXRob2QiLCJtb2RlIiwiY3JlZGVudGlhbHMiLCJhc3luYyIsIl9mZXRjaCIsImhyZWYiLCJvcHQiLCJfb2JqZWN0U3ByZWFkIiwid2ViIiwiZmV0Y2giLCJ0ZXh0IiwiZXJyb3IiLCJjb25zb2xlIiwibWV0aG9kcyIsIuS6p+WTgeWIl+ihqCIsIiQiLCJwb3N0IiwiZGF0YSIsIm9iaiIsImV2YWwiLCJodG1sc3RyIiwiZWFjaCIsImxpc3QiLCJwMSIsInAyIiwidGNhbl9uYW1lIiwidHBsX2lkIiwiaHRtbCIsIueZu+mZhiIsInByb2R1Y3RJZCIsImV4ZWN1dGVNZXRob2QiLCJtZXRob2ROYW1lIiwicHJvcHMiLCJoYXNPd25Qcm9wZXJ0eSIsImxvZyIsImVyciIsIm1lc3NhZ2UiLCJuYW1lIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJkIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJwcm9wIiwicHJvdG90eXBlIiwiY2FsbCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwielF1ZXJ5IiwicyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsInRlc3QiLCJEYXRlIiwibm93IiwidG9TdHJpbmciLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwi5Yqg6L29IiwicGF0aCIsIm9sZFNjcmlwdCIsInF1ZXJ5U2VsZWN0b3IiLCJuZXdTY3JpcHQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsInJlbW92ZUNoaWxkIiwiYXBwZW5kQ2hpbGQiLCLmm7/mjaLnvZHlnYDlubbojrflj5bnvZHpobXlhoXlrrkiLCLljp/lp4vnvZHlnYDlhYPntKAiLCJyZXBsYWNlIiwi5paw572R6aG15a2X56ym5LiyIiwiZG9jdW1lbnRFbGVtZW50IiwiaW5uZXJIVE1MIiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9
