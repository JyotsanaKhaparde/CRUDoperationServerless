
// //const nodemailer = require('nodemailer');
// const AWS = require("aws-sdk");
// /*
//     Here we are configuring our SMTP Server details.
//     STMP is mail server which is responsible for sending and recieving email.
// */
// //exports.sendEMailFunction = (url) => {
// // console.log("8---inside sendEmailFunction--");
// exports.sendEMailFunction = function (event, context) {
//     AWS.config.update({ region: "us-west-2" });
//     console.log('events in send email function are : ', event);
//     // if (!event.email.match(/^[^@]+@[^@]+$/)) {
//     //     console.log('Not sending: invalid email address', event);
//     //     context.done(null, "Failed");
//     //     return;
//     // }

//     //         const name = event.name.substr(0, 40).replace(/[^\w\s]/g, '');

//     //         const htmlBody = `
//     //     <!DOCTYPE html>
//     //     <html>
//     //       <head>
//     //       </head>
//     //       <body>
//     //         <p>Hi ${name},</p>
//     //         <p>...</p>
//     //       </body>
//     //     </html>
//     //   `;

//     //         const textBody = `
//     //     Hi ${name},
//     //     ...
//     //   `;

//     // Create sendEmail params
//     // const parseParam = JSON.parse(event.body);
//     // console.log("userEmail after parse :",parseParam.userEmail);

//     const params = {
//         Destination: {
//             ToAddresses: 'shwetabochare11@gmail.com', // [parseParam.userEmail]
//         },
//         Message: {
//             Body: {
//                 Text: "token+url"
//             },
//             Subject: {
//                 Charset: "UTF-8",
//                 Data: "Thanks for registering..."
//             }
//         },
//         Source: "jyotsanakhaparde0597@gmail.com"
//     };

//     // Create the promise and SES service object
//     const sendPromise = new AWS.SES({ apiVersion: "2010-12-01" })
//         .sendEmail(params)
//         .promise();

//     // Handle promise's fulfilled/rejected states
//     sendPromise
//         .then(data => {
//             console.log(data.MessageId);
//             context.done(null, "Success");
//         })
//         .catch(err => {
//             console.error(err, err.stack);
//             context.done(null, "Failed");
//         });
// };
// //}


//     // const transporter = nodemailer.createTransport({
//     //     service: 'gmail',
//     //     auth: {
//     //         user: "jyotsanakhaparde0597@gmail.com",//process.env.GMAIL_USER,
//     //         pass: "AP0144##",
//     //     },
//     // });
//     // const mailOptions = {
//     //     from: 'jyotsanakhaparde0597@gmail.com', // sender address
//     //     to: 'shwetabochare11@gmail.com', // list of receivers
//     //     subject: 'Subject of your email', // Subject line
//     //     text: url
//     // };
//     // /** Sends an email using the preselected transport object */
//     // //  transporter.sendMail(mailOptions, function (err, info) {
//     // //     //send error
//     // //     if (err)
//     // //         console.log(err)
//     // //     else
//     // //         //send message information
//     // //         console.log("28---sendingEmail.js---BE: ", info);
//     // // });
//     //  transporter.sendMail(mailOptions, function (err, info) {
//     //     console.log("33---inside sendEmail--");
//     //     return new Promise(function (resolve, reject) {
//     //         console.log("35---inside promise--");
//     //         if (err) {
//     //             console.log(err);
//     //             reject(err);
//     //         }
//     //         else {
//     //             console.log("sending Email : ", info);
//     //             resolve(info);
//     //         }
//     //     })
//     // })







