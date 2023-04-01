
//import bcrypt  bcrypt from 'node:bcrypt';


export default async function FETCH(data) {
  try {
    console.log('data', data)

    let isFormData = /FormData/.test(data.toString())

    let data0 = isFormData ? formData2Json(data) : data

    if (!data0.action && !data0.url) {
      return null
    }
    //console.log('______________')

    let { url, headers, param0, method, cache, param } = await actions[
      data0.action ? data0.action
        : data0.method ? data0.method
          : 'GET'

    ](data0)

    headers = {
      Authorization: "Bearer " + sessionStorage.getItem('access_token'),
      ...headers
    }
    console.log(headers)
    method = method ? method : 'GET'
    cache = cache ? { cache } : null

    //console.log('res')

    let res = await fetch(url, {
      headers,
      ...cache,
      method,
      body: param
    })


    // if (res.data.status !== 1 && res.data.status !== 200) {

    //       Message.error(res.data.msg || '请求错误')
    //       return Promise.reject(rejection)
    //     }
    //     return Promise.resolve(res.data)
    //   },
    //   error => {

    //     return Promise.reject(error)
    //   }


    if (/登陆/.test(data0.action)) {
      //console.log(res, param0)
      res = [res, param0]
    }



    return res;


  } catch (e) {
    throw e

  }
}


const actions = {
  GET: (data) => {
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
    return { url: '/q/comm/', headers, ...data, 'Cache-Control': 'public, max-age=31536000' }
  },
  登陆2: (data) => {
    const { userId, password, action } = data

    data = { 'sysUserVo.userName': userId, 'sysUserVo.userPassword': password, action }

    return {
      url: '/jc/login.action',
      method: 'POST',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      param: converToUrl(data),
      param0: data
    }
  },
  登陆: async (data) => {

    const saltOrRounds = 10;
    const { userId, password, action } = data


    const data0 = { 'sysUserVo.userName': userId, 'sysUserVo.userPassword': password, action }

    //console.log(await bcrypt.hash(data.password, saltOrRounds));


    return {
      url: "/q/auth/login",

      method: 'POST',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      param: JSON.stringify(data),
      param0: data0
    }
  }
}

export function post(URL, PARAMS) {
  var temp_form = document.createElement("form");
  temp_form.action = URL;
  temp_form.target = "_self";
  temp_form.method = "post";
  temp_form.style.display = "none";
  for (var x in PARAMS) {
    var opt = document.createElement("textarea");
    opt.name = x;
    opt.value = PARAMS[x];
    temp_form.appendChild(opt);
  }
  document.body.appendChild(temp_form);
  temp_form.submit();
}

const converToUrl = requestParams => {
  let params = [];
  Object.entries(requestParams).forEach(([key, value]) => {
    let param = key + '=' + value;
    params.push(param);
  });
  return params.join('&');
}


export const formData2Json = function (formData) {

  let objData = {};
  //(value, key) => objData[key] = value
  formData.forEach(function (curValue, index, arr) {
    objData[index] = curValue;
  });
  //转json字符串
  //return JSON.stringify(objData);
  //转json对象.
  return objData;
  // console.log(objDataStr)
  //return JSON.parse(objDataStr);

}



