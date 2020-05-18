function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// 国内手机号校验
export var ChinaMobileValidator = function ChinaMobileValidator(rule, value) {
  if (value && value.match(/^1\d{10}$/)) {
    return Promise.resolve();
  } else {
    return Promise.reject('请输入合法的手机号码');
  }
}; // 手机号、电话号码校验

export var TelephoneValidator = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(rule, value) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(value.match(/^1\d{10}$/) || value.match(/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/))) {
              _context.next = 3;
              break;
            }

            _context.next = 4;
            break;

          case 3:
            throw new Error('请输入合法的手机号或电话号码');

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function TelephoneValidator(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var City = {
  11: "北京",
  12: "天津",
  13: "河北",
  14: "山西",
  15: "内蒙古",
  21: "辽宁",
  22: "吉林",
  23: "黑龙江 ",
  31: "上海",
  32: "江苏",
  33: "浙江",
  34: "安徽",
  35: "福建",
  36: "江西",
  37: "山东",
  41: "河南",
  42: "湖北 ",
  43: "湖南",
  44: "广东",
  45: "广西",
  46: "海南",
  50: "重庆",
  51: "四川",
  52: "贵州",
  53: "云南",
  54: "西藏",
  61: "陕西",
  62: "甘肃",
  63: "青海",
  64: "宁夏",
  65: "新疆",
  71: "台湾",
  81: "香港",
  82: "澳门",
  83: "台湾",
  91: "国外"
}; // 15位校验规则：6位地址编码+6位出生日期+3位顺序号
// 18位校验规则：6位地址编码+8位出生日期+3位顺序号+1位校验位

var IdentityCodeRegExp = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)(-[1-9]{1})?$/i; // 校验位规则     公式:∑(ai×Wi)(mod 11)
//   i----表示号码字符从由至左包括校验码在内的位置序号； 
//   ai----表示第i位置上的号码字符值； 
//   Wi----示第i位置上的加权因子，其数值依据公式Wi=2^(n-1）(mod 11)计算得出。

var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; // 加权因子

var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]; // 校验位

export var IdCardValidator = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(rule, code) {
    var sum, last;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(!code || !IdentityCodeRegExp.test(code))) {
              _context2.next = 2;
              break;
            }

            throw new Error("身份证号格式错误");

          case 2:
            if (City[code.substr(0, 2)]) {
              _context2.next = 4;
              break;
            }

            throw new Error("身份证号中地址编码错误");

          case 4:
            if (!(code.length >= 18)) {
              _context2.next = 10;
              break;
            }

            sum = 0;
            code.substr(0, 17).split('').forEach(function (ai, i) {
              var wi = factor[i]; // @ts-ignore

              sum += ai * wi;
            });
            last = parity[sum % 11];

            if (!(last != code[17])) {
              _context2.next = 10;
              break;
            }

            throw new Error("校验位错误");

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function IdCardValidator(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();