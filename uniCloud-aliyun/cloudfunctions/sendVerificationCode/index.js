'use strict';

const nodemailer = require('nodemailer');

exports.main = async (event, context) => {
  const { email } = event;

  if (!email) {
    return {
      code: 400,
      message: '邮箱不能为空',
    };
  }

  // 生成6位随机验证码
  const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

  // 邮件发送配置
  const transporter = nodemailer.createTransport({
    host: 'smtp.qq.com', // SMTP服务器，例如: smtp.qq.com
    port: 465, // SMTP端口，通常为465
    secure: true, // true表示使用TLS加密
    auth: {
      user: '2772694115@qq.com', // 发送者邮箱地址
      pass: 'mjervrtrnxnmddfj', // 邮箱授权码
    },
  });

  const mailOptions = {
    from: '"Team to Do" <2772694115@qq.com>', // 发件人信息
    to: email, // 接收者
    subject: '验证码邮件', // 邮件主题
	html: `
	  <h2>您好！</h2>
	  <p>感谢您使用 <strong>Team to Do</strong>。您的验证码是：<strong>${verificationCode}</strong></p>
	  <p>请在注册时填写此验证码。</p>
	  <p>祝您使用愉快！</p>
	`,  // 邮件正文
  };

  try {
    // 发送邮件
    await transporter.sendMail(mailOptions);

    // 返回成功结果和验证码（仅开发阶段返回验证码）
    return {
      code: 200,
      message: '验证码发送成功',
      verificationCode,
    };
  } catch (error) {
    console.error('发送邮件失败:', error); // 这里输出错误信息
    return {
      code: 500,
      message: '验证码发送失败，请稍后重试',
    };
  }
};
