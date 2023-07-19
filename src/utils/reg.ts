/**
 * 项目中通用的正则表达式
 */

// 账号 ( 3到12位（字母、数字、下划线） )
export const ACC_REG = /^[a-zA-Z0-9_\u4E00-\u9FA5]{3,12}$/;

// 密码
export const PWD_REG = /^[a-zA-Z0-9_]{3,12}$/;
