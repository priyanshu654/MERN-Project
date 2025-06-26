//initial

// const {webhook} = require("svix");
// const User = require("../models/userModals");
// require("dotenv").config();

// //api controller function to manage clerk user with databse
// //http://localhost:5000/api/user/webhooks

// const clerkWebhooks = async (req, res) => {
//   try {
//     const whook = new webhook(process.env.CLERK_WEBHOOK_SECRET);

//     await whook.verify(JSON.stringify(req.body), {
//       "svix-id": req.headers["svix-id"],
//       "svix-timestamp": req.headers["svix-timestamp"],
//       "svix-signature": req.headers["svix-signature"],
//     });

//     const { data, type } = req.body;

//     console.log("dta aaya",data);
    

//     switch (type) {
//       case "user.created": {
//         const payload = {
//           clerkId: data.id,
//           email: data.email_addresses[0].email_address,
//           firstName: data.first_name,
//           lastName: data.last_name,
//           photo: data.image_url,
//         };

//         await User.create(payload);

//         res.json({});

//         break;
//       }

//       case "user.updated": {
//         const payload = {
//           email: data.email_addresses[0].email_address,
//           firstName: data.first_name,
//           lastName: data.last_name,
//           photo: data.image_url,
//         };

//         await User.findOneAndUpdate({clerkId:data.id},payload,{new:true});
//         res.json({})

//         break;
//       }

//       case "user.delete":{
//         await User.findOneAndDelete({clerkId:data.id})

//         res.json({})
//       }

//       default:
//         break;
//     }
//   } catch (error) {
//     console.log(error.message);
//     res.json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// module.exports=clerkWebhooks;



// postman

// const { Webhook } = require("svix"); // ✅ Correct way
// const User = require("../models/userModals");
// require("dotenv").config();

// const clerkWebhooks = async (req, res) => {
//   try {
//     const payloadString = req.body.toString("utf8");

//     const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET); // ✅ Use Webhook class

//     // const evt = wh.verify(payloadString, {
//     //   "svix-id": req.headers["svix-id"],
//     //   "svix-timestamp": req.headers["svix-timestamp"],
//     //   "svix-signature": req.headers["svix-signature"],
//     // });

//     const { data, type } = JSON.parse(payloadString);

//     console.log("data aaya", data);

//     switch (type) {
//       case "user.created": {
//         const payload = {
//           clerkId: data.id,
//           email: data.email_addresses[0].email_address,
//           firstName: data.first_name,
//           lastName: data.last_name,
//           photo: data.image_url,
//         };

//         await User.create(payload);
//         res.json({});
//         break;
//       }

//       case "user.updated": {
//         const payload = {
//           email: data.email_addresses[0].email_address,
//           firstName: data.first_name,
//           lastName: data.last_name,
//           photo: data.image_url,
//         };

//         await User.findOneAndUpdate({ clerkId: data.id }, payload, { new: true });
//         res.json({});
//         break;
//       }

//       case "user.deleted": {
//         await User.findOneAndDelete({ clerkId: data.id });
//         res.json({});
//         break;
//       }

//       default:
//         res.status(400).json({ message: "Unhandled webhook event" });
//         break;
//     }
//   } catch (error) {
//     console.error(error.message);
//     res.json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// module.exports = clerkWebhooks;


//final

const { Webhook } = require("svix");
const User = require("../models/userModals");
require("dotenv").config();

const clerkWebhooks = async (req, res) => {
  try {
    console.log("🔔 Clerk webhook received");

    const payloadString = req.body.toString("utf8");
    console.log("📦 Raw Payload:", payloadString);

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const evt = wh.verify(payloadString, {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = evt;

    console.log("📨 Event type:", type);

    switch (type) {
      case "user.created": {
        const payload = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        };

        console.log("📝 Creating user:", payload);

        await User.create(payload);
        console.log("✅ User created in DB");

        res.status(200).json({});
        break;
      }

      case "user.deleted": {
        await User.findOneAndDelete({ clerkId: data.id });
        console.log("❌ User deleted");

        res.status(200).json({});
        break;
      }

      default:
        console.log("⚠️ Unhandled event:", type);
        res.status(400).json({ message: "Unhandled webhook type" });
        break;
    }
  } catch (error) {
    console.error("❌ Webhook error:", error.message);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = clerkWebhooks;
