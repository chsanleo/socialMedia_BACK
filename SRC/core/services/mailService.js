const express = require("express");
const emailProperties = require('../../config/mailConfig');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');//setup nodemailer

const transporter = nodemailer.createTransport({
    host: emailProperties.host,
    port: emailProperties.port,
    auth: {
      user: emailProperties.user,
      pass: emailProperties.pass
    }
  });

const MailService = {
    emailCredentials(emailTo, password) {
        let message = '<p>email ' + emailTo + ' </p><br /><p>email ' + password + ' </p>';

        const mailOptions = {
            from: 'noreply@socialMedia.com',
            to: emailTo,
            subject: ' Credentials socialMedia',
            html: message
        };

        //delivery
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }

};

module.exports = MailService;