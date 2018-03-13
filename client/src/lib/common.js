let util = {
  /**
  * 数据类型判断
  * @param  data 判断的数据
  * @param {string} type 判断的类型
  */
  is: (data, type) => {
    if(typeof(type) != 'string') {
      console.log('%cwarning，type不是string类型','color:#ff9900');
      type = type.toString();
    }
    if(Object.prototype.toString.call(data).indexOf(type) != -1) {
      return true;
    } else {
      return false;
    }
  }
}
export default util;
